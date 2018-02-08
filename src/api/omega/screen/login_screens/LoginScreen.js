/*use strict*/
import React, {Component} from 'react';
import styles from '../../../../../resources/style/App1StyleSheet'
import GenericLoginModel from '../../util/GenericLoginScreen';
import  {connect} from 'react-redux';


import {
    userLoginAction,
    userPassword,
    userUsername,
} from '../../actions/login_action/';

import {
    TextInput,
    TouchableOpacity,
    Text,
    View,
    AsyncStorage,
} from 'react-native';

import PropTypes from "prop-types";


export class LoginScreen extends Component<{}> {

    constructor(props) {
        super(props);
    }

    /**
     * Method to invoke on User Login
     */
    userLogin = () => {
        //this.props.userLoginAction('richard', 'ewrwer');
        //AsyncStorage.setItem('USER','richard');
       // this.props.navigation.navigate('LandingScreen');
    }

    componentDidMount(){ this.userLogin();}
    /***
     *  Main Login Render Logic with views
     * @returns {XML}
     */
    render() {

        return (
            <GenericLoginModel
                topView={<View>
                            <Text style={styles.lan_m_pageTxt}>
                                LOGIN
                            </Text>
                        </View>}
                model={
                    <View style={styles.log_m_container}>
                        <TextInput
                            underlineColorAndroid={'transparent'}
                            style={styles.log_m_username}
                            placeholder={'username'}
                            defaultValue={this.props.loginState.username}
                            onChangeText={this.props.uname}
                        />
                        <TextInput
                            underlineColorAndroid={'transparent'}
                            style={styles.log_m_password}
                            placeholder={'password'}
                            secureTextEntry={true}
                            defaultValue={this.props.loginState.password}
                            onChangeText={this.props.pass}
                        />

                        <TouchableOpacity
                            style={styles.log_m_btn}
                            onPress={this.props.funcContinue}>
                            <Text style={styles.log_m_btn_text}> Continue</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.log_m_reset_con}
                                          onPress={this.props.funcResetPassword}>
                            <Text style={styles.log_m_reset_text}>Reset password</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.log_m_reg_con}
                                          onPress={this.props.funcNewRegister}>
                            <Text style={styles.log_m_reg_text}>Register a new
                                account</Text>
                        </TouchableOpacity>
                    </View>
                }
            />
        );
    }
}

/***
 *
 * @type {
 * {funcUsername: (*),
 * funcPassword: (*),
 * funcContinue: (*),
 * funResetPassword: (*),
 * funcNewRegister: (*)}
 * }
 */
LoginScreen.propTypes ={
    funcContinue: PropTypes.func.isRequired,
    funcResetPassword: PropTypes.func.isRequired,
    funcNewRegister:PropTypes.func.isRequired,
};

/***
 * The state controller
 * @param state
 */
const mapStateToProps = (state) => ({
    loginState: state.userLoginReducer,
});

/**
 * Dispatch action controller
 * @type {{}}
 */
const mapDispatchToProps = {
    userLoginAction,
    userUsername,
    userPassword,
}

/***
 * The Connect for the LoginScreen
 */
export default  connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
