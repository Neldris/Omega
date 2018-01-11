/**
 * Created by richard on 11/01/18.
 */
import {ApplicationNavigation} from '../navigation'
let initialState = ApplicationNavigation.router.getStateForAction(ApplicationNavigation.router.getActionForPathAndParams('LandingScreen'));

export function initialNavigationStateReducer(state=initialState, action){
    const nextState = ApplicationNavigation.router.getStateForAction(action,state);
    console.log(nextState);
    switch (action.type) {
        case 'LOG_NAV':
            return nextState || state;
        default:
            return state;
    }
}