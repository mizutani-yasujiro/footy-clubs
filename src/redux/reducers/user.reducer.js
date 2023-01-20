import { userConstants } from '../constants';

export function user(state = {info: {}, profile: {}}, action) {
  switch (action.type) {
    case userConstants.USER_INFO_REQUEST:
      return {
        info: {}, profile: {}
      };
    case userConstants.USER_INFO_SUCCESS:
      return {
        info: action.user.info, profile: action.user.profile
      };
    case userConstants.USER_INFO_FAILURE:
      return {};
    case userConstants.UPDATE_PROFILE_REQUEST:
      return {
        info: {}, profile: {}
      };
    case userConstants.UPDATE_PROFILE_SUCCESS:
      return {
        info: action.profile.info, profile: action.profile.profile
      };
    case userConstants.UPDATE_PROFILE_FAILURE:
      return {};
    default:
      return state
  }
}