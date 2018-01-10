/**
 * Created by richard on 02/01/18.
 */

import {StackNavigator} from 'react-navigation';
import LandingScreen from '../screen/login_screens/LandingScreen';
import LoginScreen from '../screen/login_screens/LoginScreen';
import MainScreen from '../screen/login_screens/MainScreen';
import PinCodeScreen from '../screen/login_screens/PinCodeScreen';
import NewUserRegisterScreen from '../screen/login_screens/NewUserRegisterScreen';

export const ApplicationNavigation = StackNavigator(
    {
        LandingScreen: {screen: LandingScreen},
        LoginScreen: {screen: LoginScreen},
        MainScreen: {screen: MainScreen},
        PinCodeScreen: {screen: PinCodeScreen},
        NewUserRegisterScreen :{screen: NewUserRegisterScreen},

    },
    {
        navigationOptions:{
            header: false,
        }
    }
);
