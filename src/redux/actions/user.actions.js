import { userConstants } from '../constants';
import { service } from '../services';
import { history } from '../helpers';

export const userActions = {
    login,
    register,
    logout,
    updateProfile,
    fetchUser
};

function login(email, password) {
    return dispatch => {
        dispatch(request());
        service.login(email, password)
            .then(
                user => {
                    dispatch(success(user));
                    //history.push('/');
                },
                error => {
                    dispatch(failure(error));
                }
            );
    };
    
    function request() { return { type: userConstants.LOGIN_REQUEST } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function register(user) {
    return dispatch => {
        dispatch(request());
        service.register(user)
            .then(
                user => {
                    dispatch(success(user));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error));
                }
            );
    };
    
    function request() { return { type: userConstants.REGISTER_REQUEST } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}

function updateProfile(profile) {
    return dispatch => {
        dispatch(request());
        service.updateProfile(profile)
            .then(
                profile => {
                    dispatch(success(profile));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error));
                }
            );
    };
    
    function request() { return { type: userConstants.UPDATE_PROFILE_REQUEST } }
    function success(profile) { return { type: userConstants.UPDATE_PROFILE_SUCCESS, profile } }
    function failure(error) { return { type: userConstants.UPDATE_PROFILE_FAILURE, error } }
}

function logout() {
    service.logout();
    return { type: userConstants.LOGOUT };
}

function fetchUser() {
    return dispatch => {
        dispatch(request());
        service.fetchUser()
            .then(
                user => {
                    dispatch(success(user));
                },
                error => {
                    dispatch(failure(error));
                }
            );
    };
    
    function request() { return { type: userConstants.USER_INFO_REQUEST } }
    function success(user) { return { type: userConstants.USER_INFO_SUCCESS, user } }
    function failure(error) { return { type: userConstants.USER_INFO_FAILURE, error } }
}