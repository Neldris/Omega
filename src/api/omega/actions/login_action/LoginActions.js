/**
 * Created by richard on 10/01/18.
 */
import LAC from './login_action_constants';

/***
 * LOGIN ACTION
 * The pure functions are to be called within the LoginActionManager.js
 * Where actual async calls takes place.
 * Async calls are controlled by redux-thunk thunk.
 *
 * Please keep it clean !
 */


/***
 * userLoginAction, WHERE LOGIN HAPPENS
 * @param username
 * @param password
 * @returns {function(*)}
 */
export function userLoginAction(username: string, password: string) {
    return (dispatch) => {
        let data = {username: username, password: password};
        dispatch({type: LAC.USER_LOGIN, data});
    }
}

export function userAuthCheck(){
    return (dispatch) =>{
        dispatch({type:LAC.ISLOADING, isLoading:true});
        setTimeout(()=>{
            let data = {username: 'Richard King', password: 'password'};
            console.log('Is loading inside here');
            dispatch({type:LAC.USER_LOGIN, data:data});
            dispatch({type:LAC.ISLOADING, isLoading:false});
        },5000);
    }
}