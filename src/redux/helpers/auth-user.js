import jwtDecode from 'jwt-decode';

export function authUser() {
    // return authorization header with jwt token
    let user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        return jwtDecode(user);
    } else {
        return {};
    }
}