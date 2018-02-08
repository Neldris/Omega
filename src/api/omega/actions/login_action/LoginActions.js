/**
 * Created by richard on 10/01/18.
 */
import LAC from './login_action_constants';
import {
    AsyncStorage
} from 'react-native';
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
export function userLoginAction(username, password) {
    return (dispatch) => {
        let data = {
            username: username,
            password: password
        };
        dispatch({
            type: LAC.USER_LOGIN,
            data
        });
    }
}

/***
 * Username input collector
 * @param username
 * @returns {function(*)}
 */
export function userUsername(username) {
    console.log('action user val: ' + username);
    return (dispatch) => {
        dispatch({
            type: LAC.USER_USERNAME,
            username: username
        });
    }
}
/***
 * Password input collector
 * @param password
 * @returns {function(*)}
 */
export function userPassword(password) {
    console.log('action pass val: ' + password);
    return (dispatch) => {
        dispatch({
            type: LAC.USER_PASSWORD,
            password: password
        });

    }
}
/***
 *  Pincode input collector
 * @param pincode
 * @returns {function(*)}
 */
export function userPincode(pincode) {
    return (dispatch) => {
        dispatch({
            type: LAC.USER_USERNAME,
            pincode
        });
    }
}


export function globalAuthCollector(username, password, pincode) {
    return (dispatch) => {

        dispatch({
            type: LAC.USER_USERNAME,
            username: username
        });
        dispatch({
            type: LAC.USER_PASSWORD,
            password: password
        });
        dispatch({
            type: LAC.USER_PIN_CODE,
            pincode: pincode
        });
    }
}

const saveMe = async (val) => {
    try {
        await AsyncStorage.setItem('login', JSON.stringify(val));
    } catch (error) {
        console.log('Save Error ' + error.val);
    }
}

/***
 * This is where username and password
 * server authentication is done.
 * @param username
 * @param password
 * @returns {function(*)}
 */
export function userPassAuthCheck(username, password) {
console.log('Inside UserPassAuthcCheck '+username+' '+password);

    return (dispatch) => {
        dispatch({
            type: LAC.USER_ISLOADING,
            isLoading: true,
            isRegistered: true
        });
        saveMe({
            username: username,
            password: password
        });
        setTimeout(() => {
            /***
             * TODO make a fetch call to the server to validate
             * the user provided credentials.
             */
            //let data = {username: username, password:password};
            dispatch({
                type: LAC.USER_USERNAME,
                username: username
            });
            dispatch({
                type: LAC.USER_PASSWORD,
                password: password
            });
            dispatch({
                type: LAC.USER_ISLOADING,
                isLoading: false
            });

        }, 2000);
    }
}

export const startUp = () => {
   
    return dispatch => {
        try{    
            AsyncStorage.getItem('login').then((value) => {
                let val = JSON.parse(value);
                dispatch(userPassAuthCheck(val.username, val.password)); 
            }); 
        }catch(error){
            console.log('====================================');
            console.log('startUp error: '+error.message);
            console.log('====================================');
        }  
    }
}