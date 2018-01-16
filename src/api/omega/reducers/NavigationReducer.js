/**
 * Created by richard on 11/01/18.
 */
import {ApplicationNavigation} from '../navigation'

export function initialNavigationStateReducer(state, action){
    const nextState = ApplicationNavigation.router.getStateForAction(action,state);
    return nextState || state;
}