/*use strict*/
import React, {Component} from 'react';
import GenericLoginModel from '../../util/GenericLoginScreen';
import LoginScreen from './LoginScreen';
import  {connect} from 'react-redux';
import {
        ActivityIndicator,
        } from 'react-native';


import {userAuthCheck} from '../../actions/login_action';


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
        this.props.userAuthCheck();


    }

    componentDidMount() {
        this.initAuthentication();
    }

    /**
     *  authLogin
     * @param username
     * @param password
     */
    authenticationCheck() {

    }

    /**
     * Void initAuthentication to initialise
     * Logins
     */
    async initAuthentication() {
        try {
                console.log('Loading -->>: '+ this.props.isLoading);
                if(this.props.isLoading) {
                    if (!this.props.loginState.data.password) {
                        this.props.navigation.navigate('LoginScreen');
                    } else {
                        this.props.navigation.navigate('PinCodeScreen');
                    }
                }
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        console.log('Loading render: '+ this.props.isLoading);
        if(this.props.isLoading) {
            return <GenericLoginModel
                model={<ActivityIndicator size="large" color="#f45"/>}/>
        }
        return <LoginScreen/>;
    }
}

const mapStateToProps = (state) => ({
    loginState: state.userLoginReducer,
    isLoading: state.isLoading,
});

const mapActionToProps ={
    userAuthCheck,
}

export default connect(mapStateToProps,mapActionToProps)(LandingScreen);