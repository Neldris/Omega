/*use strict*/
import React, {
    Component
} from 'react';
import GenericLoginModel from '../../util/GenericLoginScreen';
import LoginScreen from './LoginScreen';
import {
    connect
} from 'react-redux';

import {
    AsyncStorage,
    ActivityIndicator,
} from 'react-native';

import NewUserRegisterScreen from "./NewUserRegisterScreen";
import MainScreen from "./MainScreen";
import PinCodeScreen from "./PinCodeScreen";

import {
    userPassAuthCheck,
    userLoginAction,
    globalAuthCollector,
    startUp,
    userUsername,
    userPassword,
    isNewReg,
    userPincode,
} from '../../actions/login_action';
import UserModel from '../../models/UserModel';

export class LandingScreen extends Component {
    constructor() {
        super();
        this.userModel = new UserModel();
    }

    componentWillMount() {
        this.props.startUp();
    }

    /***
     *
     * @returns {XML}
     */
    render() {
        const {
            username,
            password,
            isRegistered,
            isLoading,
            isNewReg,
            isPincodeVerified,
            data
        } = this.props.loginState;

        if (!username === undefined) {
            console.log('inside render: ' + username);
        }

        if (data) {
            console.log('-------------------------' + data);
            console.log(data.data)
        }

        if (isLoading) {
            return ( < GenericLoginModel model = { < ActivityIndicator size = "large"
                    color = "#f45" />
                }
                />);
            }
            else {

                /***
                 * -if isRegistered and isPincodeVerified
                 *      Show MainScreen
                 *
                 * - else if isRegistered and not isPincodeVerified
                 *      Show PinCodeScree
                 * - else
                 *     -if isNewReg
                 *       Show  NewUserRegisterScreen
                 *     -else
                 *        Show LoginScreen
                 */
                if (isRegistered && isPincodeVerified) {

                    return <MainScreen /> ;

                } else if (isRegistered && !isPincodeVerified) {

                    return <PinCodeScreen
                    managePincode = {
                        (pin) => this.props.userPincode(pin)
                    }
                    />;

                } else {
                    if (isNewReg) {

                        return <NewUserRegisterScreen /> ;

                    } else {

                        return <LoginScreen
                        uname = {
                            (val) => this.userModel.setUsername(val)
                        }
                        pass = {
                            (val) => this.userModel.setPassword(val)
                        }
                        funcContinue = {
                            () => this.props.userLoginAction(this.userModel)
                        }
                        funcNewRegister = {
                            () => this.props.isNewReg(true)
                        }
                        funcResetPassword = {
                            () => alert('Password Reset')
                        }
                        />;
                    }
                }
            }

        }
    }

    const mapStateToProps = (state) => ({
        loginState: state.userLoginReducer,
    });

    const mapActionToProps = {
        userPassAuthCheck,
        userLoginAction,
        globalAuthCollector,
        startUp,
        userUsername,
        userPassword,
        isNewReg,
        userPincode,
    }

    export default connect(mapStateToProps, mapActionToProps)(LandingScreen);