/**
 * Created by richard on 10/01/18.
 */
import {combineReducers} from 'redux';
import {userLoginReducer,isLoading} from './loginReducer';
import {initialNavigationStateReducer} from './NavigationReducer';

export default combineReducers({
    userLoginReducer,
    isLoading,
    mainNav: initialNavigationStateReducer,
});

