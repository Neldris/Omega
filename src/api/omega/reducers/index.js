/**
 * Created by richard on 10/01/18.
 */
import {combineReducers} from 'redux';
import {userLoginReducer,hamm} from './loginReducer';
import {initialNavigationStateReducer} from './LoginNavigationReducer';

export default combineReducers({
    userLoginReducer,
    hamm,
    initialNavigationStateReducer,
});

