export function authHeader() {
    // return authorization header with jwt token
    let user = JSON.parse(localStorage.getItem('user'));

    if (user) {
        return { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + user };
    } else {
        return {};
    }
}