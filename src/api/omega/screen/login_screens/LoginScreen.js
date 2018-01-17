/*use strict*/
import React, {Component} from 'react';
import styles from '../../../../../resources/style/App1StyleSheet'
import GenericLoginModel from '../../util/GenericLoginScreen';
import  {connect} from 'react-redux';
import {
    userLoginAction,
} from '../../actions/login_action/';

import {
    TextInput,
    TouchableOpacity,
    Text,
    View,
    AsyncStorage,
} from 'react-native';


export class LoginScreen extends Component<{}> {

    constructor(props) {
        super(props);
    }

    /**
     * Method to invoke on User Login
     */
    userLogin = () => {
        this.props.userLoginAction('richard', 'ewrwer');
        AsyncStorage.setItem('USER','richard');
        this.props.navigation.navigate('LandingScreen');
    }

    /***
     *  Main Login Render Logic with views
     * @returns {XML}
     */
    render() {
        console.log(this.props);
        console.log('password: ' + this.props.loginState.isLoading);

        return (
            <GenericLoginModel
                model={
                    <View style={styles.log_m_container}>
                        <TextInput
                            underlineColorAndroid={'transparent'}
                            style={styles.log_m_username}
                            placeholder={'username'}
                            defaultValue={JSON.stringify(this.props.loginState.data)}
                            onChangeText={(value) =>alert(value)}
                        />
                        <TextInput
                            underlineColorAndroid={'transparent'}
                            style={styles.log_m_password}
                            placeholder={'password'}
                            secureTextEntry={true}
                            defaultValue={JSON.stringify(this.props.loginState.data)}
                            onChangeText={(value) => alert(value)}
                        />

                        <TouchableOpacity
                            style={styles.log_m_btn}
                            onPress={this.userLogin}>
                            <Text style={styles.log_m_btn_text}> Continue</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.log_m_reset_con} >
                            <Text style={styles.log_m_reset_text}>Reset password</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.log_m_reg_con}
                                          onPress={() => this.userLogin}>
                            <Text style={styles.log_m_reg_text}>Register a new
                                account {JSON.stringify(this.props.loginState.data)}</Text>
                        </TouchableOpacity>
                    </View>
                }
            />
        );
    }
}

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
}

/***
 * The Connect for the LoginScreen
 */
export default  connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
