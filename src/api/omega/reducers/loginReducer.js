/**
 * Created by richard on 10/01/18.
 */

import LAC from '../actions/login_action/login_action_constants';

/***
 * LOGIN REDUCER STATE SIGNATURE
 * @type {{data: Array, isLoading: boolean, isRegistered: boolean}}
 */
let dataState = {data: {}, isRegistered: false};

export function userLoginReducer(state = dataState, action) {
    switch (action.type) {

        case LAC.USER_LOGIN:
            state = Object.assign({}, state, {
                data: action.data,
                isRegistered: action.isRegistered
            });
            return state;
        case LAC.ISLOADING:
            state = Object.assign({}, state, {
                data: action.data,
                isRegistered: action.isRegistered
            });
            return state;
        default:
            return state;
    }
}

export function isLoading(state=false, action){
    switch (action.type){
        case LAC.ISLOADING:
            return action.isLoading;
        default:
            return state;
    }
}