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
} from '../../actions/login_action';

export class LandingScreen extends Component {

    /**
     * The Basic Control Structure that serve as a dispatch to a screen
     * Basicaly, We check to see if User object is set,
     * Check for pincode then react accordingly
     * */
    componentWillMount() {
        this.props.startUp();
    }

    funcContinue = (usr) => {
        this.props.userPassAuthCheck(
            usr.uname,
            usr.pass
        );

        console.log('results: >>[' + JSON.stringify(usr));
    };

    managePincode = (pin) => {
        let p = this.state.pincode + pin;
        this.setSate({ pincode: p });
    };

    /***
     *
     * @returns {XML}
     */
    render() {

        if (!this.props.loginState.username === undefined) {
            console.log('inside render: ' + this.props.loginState.username);
        }

        console.log('Pincode dump: ' + JSON.stringify(this.props.loginState.username));

        if (this.props.loginState.isLoading) {
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
            if (this.props.loginState.isRegistered &&
                this.props.loginState.isPincodeVerified) {

                return <MainScreen />;

            } else if (this.props.loginState.isRegistered &&
                !this.props.loginState.isPincodeVerified) {

                return <PinCodeScreen
                    managePincode={(pin) => this.managePincode(pin)}
                />;

            } else {
                if (this.props.loginState.isNewReg) {

                    return <NewUserRegisterScreen />;

                } else {

                    return <LoginScreen
                        uname={(val) => this.props.userUsername(val)}
                        pass={(val) => this.props.userPassword( val)}
                        funcContinue={() => this.props.userPassAuthCheck(this.props.loginState.username, 
                                                                         this.props.loginState.password)}
                        funcNewRegister={() => alert('New register')}
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
}

export default connect(mapStateToProps, mapActionToProps)(LandingScreen);