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
 *  userLogin
 * @param username
 * @param password
 * @returns {function(*)}
 */
export function userLoginAction(username,password) {
    return (dispatch) =>{
        let data ={username:username,password:password};
       dispatch({type:LAC.USER_LOGIN, data});
    }
}


export function loginNavigationAction(screen:string){
             return(dispatch)=>{
                 dispatch({type:'LOG_NAV',screen});
             }
}

export function bling(hammer:boolean){

    return(dispatch)=>{
        setInterval(()=>{
            if(hammer) {
                dispatch({type: 'TM', hammer: hammer});
                hammer = !hammer;
            }else{
                dispatch({type: 'TM', hammer: hammer});
                hammer = !hammer;
            }
        },1000);
    }
}