/**
 * Created by richard on 10/01/18.
 */

import LAC from '../actions/login_action/login_action_constants';

/***
 * LOGIN REDUCER STATE SIGNATURE
 * @type {{data: Array, isLoading: boolean, isRegistered: boolean}}
 */
let dataState = {};

export function userLoginReducer(state = dataState, action) {
    console.log('action type: '+ action.type);
    switch (action.type) {

        case LAC.USER_LOGIN:
            state = Object.assign({}, state, {
                data: action.data,
            });
            return state;

        case LAC.USER_USERNAME:
            state = Object.assign({},state, {
                username:action.username,
            });
            return state;

        case LAC.USER_PASSWORD:
            state = Object.assign({}, state,{
                password: action.password,
            });
            return state;

        case LAC.USER_ISLOADING:
            state = Object.assign({}, state, {
                isLoading: action.isLoading,
            });
            return state;

        case LAC.USER_ISREGISTERED:
            state = Object.assign({},state,{
                isRegistered: action.isRegistered
            });
            return state;

        case LAC.USER_ISPINCODEVERFIED:
            state = Object.assign({},state,{
                isPincodeVerified: action.isPincodeVerified,
            });
            return state;

        case LAC.USER_ISNEWREG:
            state = Object.assign({},state,{
                isNewReg: action.isNewReg,
            });
            return state;

        default:
            return state;
    }
}
