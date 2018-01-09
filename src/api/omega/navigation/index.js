/**
 * Created by richard on 02/01/18.
 */

import {StackNavigator} from 'react-navigation';
import LandingModel from '../screen/login_screens/LandingModel';
import LoginModel from '../screen/login_screens/LoginModel';
import MainModel from '../screen/login_screens/MainModel';
import PinCodeModel from '../screen/login_screens/PinCodeModel';
import NewUserRegisterModel from '../screen/login_screens/NewUserRegisterModel';

export const ApplicationNavigation = StackNavigator(
    {
        LandingModel: {screen: LandingModel},
        LoginModel: {screen: LoginModel},
        MainModel: {screen: MainModel},
        PinCodeModel: {screen: PinCodeModel},
        NewUserRegisterModel :{screen: NewUserRegisterModel},

    },
    {
        navigationOptions:{
            header: false,
        }
    }
);
