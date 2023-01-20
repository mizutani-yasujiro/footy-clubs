import { authHeader, authUser } from '../helpers';

export const service = {
    login,
    logout,
    register,
    updateProfile,
    fetchUser
};

function login(email, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 'email': email, 'password': password })
    };
    localStorage.setItem('user', btoa(requestOptions));
    return {"name": "David Fang", "email": "fanghuateng0621@gmail.com", "password": "developer2023"};
    // return fetch(`/users/login/`, requestOptions)
    //     .then(handleResponse)
    //     .then(user => {
    //         // store user details and jwt token in local storage to keep user logged in between page refreshes
    //         localStorage.setItem('user', JSON.stringify(user.token));

    //         return user;
    //     });
}

function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({'email': user.email, 'first_name': user.name, 'last_name': user.lastname, 'password': user.password, 'username': user.username})
    };
    return fetch(`/users/register/`, requestOptions)
        .then(handleResponse)
        .then(user => {
            return user;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function updateProfile(profile){
    const {user_id} = authUser();
    console.log(profile)
    const requestOptions = {
        method: 'POST',
        headers: authHeader(),
        body: JSON.stringify(profile)
    };
    return fetch(`/users/profile/update/${user_id}`, requestOptions)
        .then(handleResponse)
        .then(profile => {
            return profile;
        });
}

function fetchUser() {
    const {user_id} = authUser();
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`/users/info/${user_id}`, requestOptions)
        .then(handleResponse)
        .then(user => {
            return user;
        });
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                //window.location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}