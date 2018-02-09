/*use strict*/
import React, { Component } from 'react';
import GenericLoginModel from '../../util/GenericLoginScreen';
import LoginScreen from './LoginScreen';
import { connect } from 'react-redux';

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

export class LandingScreen extends Component {

    componentWillMount() {
        this.props.startUp();
    }

    /***
     *
     * @returns {XML}
     */
    render() {
           const{username,
                 password,
                 isRegistered,
                 isLoading,
                 isNewReg,
                 isPincodeVerified} = this.props.loginState;
                 
        if (username !== '') {
            console.log('inside render: ' + username);
        }

        console.log('Pincode dump: ' + JSON.stringify(this.props.loginState));

        if (isLoading) {
            return <GenericLoginModel
                model={<ActivityIndicator size="large" color="#f45" />} />;
        } else {

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

                return <MainScreen />;

            } else if (isRegistered && !isPincodeVerified) {

                return <PinCodeScreen
                    managePincode={(pin) => this.props.userPincode(pin)}
                />;

            } else {
                if (isNewReg) {

                    return <NewUserRegisterScreen />;

                } else {

                    return <LoginScreen
                        uname={(val) => this.props.userUsername(val)}
                        pass={(val) => this.props.userPassword( val)}
                        funcContinue={() => this.props.userPassAuthCheck(username,password)}
                        funcNewRegister={() => this.props.isNewReg(true)}
                        funcResetPassword={() => alert('Password Reset')}
                    />;
                }
            }
        }

    }
}

const mapStateToProps = (state) => ({
    loginState: state.userLoginReducer,
    //isLoading: state.isLoading,
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