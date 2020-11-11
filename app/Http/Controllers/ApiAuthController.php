<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class ApiAuthController extends Controller
{
    public function register(Request $request)
    {
        // validate
        $validator = Validator::make($request->all(), [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ]);

        // return errors if any
        if ($validator->errors()->isNotEmpty()) {
            return response()->json([
                'errors' => $validator->errors(),
            ]);
        }

        // create a new user
        $user = User::create([
            'name' => $validator->validated()['name'],
            'email' => $validator->validated()['email'],
            'password' => Hash::make($validator->validated()['password']),
        ]);

        // create token
        $token = $user->createToken('auth');

        // return token and user
        return response()->json([
            'user' => $user,
            'token' => $token->plainTextToken,
        ]);
    }

    public function login(Request $request)
    {
        // validate
        $validator = Validator::make($request->all(), [
            'email' => ['required', 'string', 'email', 'max:255', 'exists:users'],
            'password' => ['required', 'string', 'min:8'],
        ]);

        // return errors if any
        if ($validator->errors()->isNotEmpty()) {
            return response()->json([
                'errors' => $validator->errors(),
            ]);
        }
        $email = $validator->validated()['email'];
        $password = $validator->validated()['password'];

        $user = User::where(['email' => $email])->first();

        if (Hash::check($password, $user->password)) {
            // create token
            $token = $user->createToken('auth');
            return response()->json([
                'user' => $user,
                'token' => $token->plainTextToken,
            ]);
        }

        // Return incorrect password if they dont match
        return response()->json([
            'errors' => [
                'password' => ['Incorrect password']
            ],
        ]);
    }

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();
        return response()->json([
           'message' => 'Success',
        ]);
    }
}
