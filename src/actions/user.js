// @flow
/**
 * @module Actions/User
 * @desc User Actions
 */
import { createActions } from 'redux-actions';

import { ActionTypes } from 'constants/index';

export const { userLogin: login, userLogout: logOut } = createActions({
  [ActionTypes.USER_LOGIN]: ({ email, password }) => ({ email, password }),
  [ActionTypes.USER_LOGOUT]: () => ({}),
});
