/**
 * Created by richard on 10/01/18.
 */
import {combineReducers} from 'redux';
import {userLoginReducer} from './loginReducer';
import {initialNavigationStateReducer} from './NavigationReducer';

export default combineReducers({
    userLoginReducer,
    mainNav: initialNavigationStateReducer,
});

