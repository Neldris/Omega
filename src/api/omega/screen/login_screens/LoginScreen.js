/*use strict*/
import React, { Component } from 'react';
import styles from '../../../../../resources/style/App1StyleSheet'
import GenericLoginModel from '../../util/GenericLoginScreen';
import {AsyncStorage} from 'react-native';
import  {connect} from 'react-redux';

import {
    TextInput,
    TouchableOpacity,
    Text,
    View,
} from 'react-native';


export class  LoginScreenComponent extends Component<{}> {

    constructor(props){
        super(props);
        this.state ={
            username:'',
            password:'',
            pinCode:'',
        }
    }

    /**
     * Method to invoke on Continue click
     */
     loginIntent=()=>{
        //Set the params for Navigation
        var params = {
            'username':this.state.username,
            'password': this.state.password,
            'pinCode': this.state.pinCode, };
        AsyncStorage.setItem('USER',this.state.username);
        console.log(this.state.username+' -----');
        this.props.navigation.navigate('LandingScreen',{
                                                        'username':this.state.username,
                                                        'password': this.state.password,
                                                        'pinCode': this.state.pinCode,
                                                      });
    }

    /***
     *  Main Login Render Logic with views
     * @returns {XML}
     */
    render() {
        return (
            <GenericLoginModel
              model={
                  <View style={styles.log_m_container}>
                      <TextInput
                          underlineColorAndroid={'transparent'}
                          style={styles.log_m_username}
                          placeholder={'username'}
                          defaultValue={this.state.username}
                          onChangeText={(value)=>this.setState({username:value})}
                      />
                      <TextInput
                          underlineColorAndroid={'transparent'}
                          style={styles.log_m_password}
                          placeholder={'password'}
                          secureTextEntry={true}
                          defaultValue={this.state.password}
                          onChangeText={(value)=>this.setState({password:value})}
                      />

                      <TouchableOpacity
                          style= {styles.log_m_btn}
                          onPress ={this.loginIntent}  >
                          <Text style={styles.log_m_btn_text}> Continue</Text>
                      </TouchableOpacity>

                      <TouchableOpacity style={styles.log_m_reset_con}>
                          <Text style={styles.log_m_reset_text}>Reset password</Text>
                      </TouchableOpacity>

                      <TouchableOpacity style={styles.log_m_reg_con}>
                          <Text style={styles.log_m_reg_text}>Register a new account</Text>
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
     loginState: state,
 });

/**
 * Dispatch action controller
 * @type {{}}
 */
const mapDispatchToProps = {

}

export default LoginScreen = connect(mapStateToProps,mapDispatchToProps)(LoginScreenComponent);
