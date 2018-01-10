/**
 * Created by richard on 10/01/18.
 */

import LAC from '../actions/login_action/login_action_constants';

/***
 * LOGIN REDUCER STATE SIGNATURE
 * @type {{data: Array, isLoading: boolean, isRegistered: boolean}}
 */
let dataState = {data:[],isLoading:true,isRegistered:false};

export function userLoginReducer(state= dataState, action) {
    switch (action.type){

        case LAC.USER_LOGIN:
            state = Object.assign({},{data:action.data, isLoading:false, isRegistered:true});
            return state;
        default:
            return state;
    }
}