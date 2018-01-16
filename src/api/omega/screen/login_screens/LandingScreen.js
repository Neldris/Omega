/*use strict*/
import React, {Component} from 'react';
import GenericLoginModel from '../../util/GenericLoginScreen';
import LoginScreen from './LoginScreen';
import  {connect} from 'react-redux';
import {
    ActivityIndicator,
    AsyncStorage
} from 'react-native';


export class LandingScreen extends Component<{}> {

    constructor(props) {
        super(props);
    }

    /**
     * The Basic Control Structure that serve as a dispatch to a screen
     * Basicaly, We check to see if User object is set,
     * Check for pincode then react accordingly
     * */
    componentWillMount() {
        this.initAuthentication();
    }

    componentDidMount() {

    }

    /**
     *  authLogin
     * @param username
     * @param password
     */
    authLogin(username, password) {

    }

    /**
     * Void initChech to initialise
     * Logins
     */
    async initAuthentication() {
        try {

            let asn = AsyncStorage.getItem('USER');

            if (!this.props.loginState.data.password) {
                this.props.navigation.navigate('LoginScreen');
            } else {
                this.props.navigation.navigate('PinCodeScreen');
            }

        } catch (error) {
            console.log(error);
        }
    }

    render() {

        return <GenericLoginModel
            model={<ActivityIndicator size="large" color="#f45"/>}/>

    }
}

const mapStateToProps = (state) => ({
    loginState: state.userLoginReducer,
});

export default connect(mapStateToProps)(LandingScreen);