import Cookie from 'js-cookie';

export const loginSuccessful = (user, token) => {
    Cookie.set('auth', { user, token });
}

export const logoutSuccessful = () => {
    Cookie.remove('auth');
}

export const getLoginCookie = () => {
    const cookie = Cookie.get('auth');
    if (cookie) {
        return JSON.parse(Cookie.get('auth'));
    }
    return cookie;
}
