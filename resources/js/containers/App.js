import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import axios from 'axios';
import Nav from '../components/Navbar';
import Home from './Home';
import Login from './Login';
import Welcome from './Welcome';
import Register from './Register';

const history = createBrowserHistory();

const App = () => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [name, setName] = useState('');
    const [nameError, setNameError] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    useEffect(() => {
        // get initial data from server if any is required
    }, [])

    const onNameChange = e => {
        setName(e.target.value);
    };
    const onEmailChange = e => {
        setEmail(e.target.value);
    };
    const onPasswordChange = e => {
        setPassword(e.target.value);
    };
    const onPassWordConfirmationChange = e => {
        setPasswordConfirmation(e.target.value);
    };
    const onLoginClick = () => {
        if (email && password) {
            axios({
                method: 'post',
                url: '/api/auth/login',
                data: {
                    email: email,
                    password: password
                }
            })
                .then(res => {
                    if (res.data && res.data.errors) {
                        res.data.errors.password && setPasswordError(res.data.errors.password);
                        res.data.errors.email && setEmailError(res.data.errors.email);
                    }
                    if (res.status === 200 && res.data && res.data.token) {
                        // successfully logged in
                        setToken(res.data.token);
                        setUser(res.data.user);
                        return history.push('/home', { user, token });
                    }
                })
                .catch(e => console.error(e.message));
        }
    };
    const onRegisterClick = () => {
        if (name && email && password && passwordConfirmation) {
            axios({
                method: 'post',
                url: '/api/auth/register',
                data: {
                    name: name,
                    email: email,
                    password: password,
                    password_confirmation: passwordConfirmation,
                }
            })
                .then(res => {
                    if (res.data && res.data.errors) {
                        res.data.errors.name && setNameError(res.data.errors.name);
                        res.data.errors.email && setEmailError(res.data.errors.email);
                        res.data.errors.password && setPasswordError(res.data.errors.password);
                    }
                    if (res.status === 200 && res.data && res.data.token) {
                        // successfully logged in
                        setToken(res.data.token);
                        setUser(res.data.user);
                        return history.push('/home', { user, token });
                    }
                })
                .catch(e => console.error(e.message));
        }
    };
    const logout = () => {
        axios({
            method: 'post',
            url: '/api/auth/logout',
            data: {},
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
            .then(res => {
                console.log(res);
                return history.push('/login');
            })
            .catch(e => console.error(e.message));
    };
    return (
        <Router history={history}>
            <div className="container">
                <Nav token={token} logout={logout} />

                <Switch>
                    <Route exact path="/">
                        <Welcome />
                    </Route>

                    {token && (
                        <Route path="/home">
                            <Home user={user} token={token} />
                        </Route>
                    )}

                    {!token && (
                        <>
                            <Route path="/login">
                                <Login
                                    email={email}
                                    emailError={emailError}
                                    onEmailChange={onEmailChange}
                                    password={password}
                                    passwordError={passwordError}
                                    onPasswordChange={onPasswordChange}
                                    onLoginClick={onLoginClick}
                                />
                            </Route>
                            <Route path="/register">
                                <Register
                                    name={name}
                                    nameError={nameError}
                                    onNameChange={onNameChange}
                                    email={email}
                                    emailError={emailError}
                                    onEmailChange={onEmailChange}
                                    password={password}
                                    passwordError={passwordError}
                                    onPasswordChange={onPasswordChange}
                                    passwordConfirmation={passwordConfirmation}
                                    onPasswordConfirmationChange={onPassWordConfirmationChange}
                                    onRegisterClick={onRegisterClick}
                                />
                            </Route>
                        </>
                    )}
                </Switch>
            </div>
        </Router>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
