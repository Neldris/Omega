/**
 * Created by richard on 04/01/18.
 */
import React, { Component } from 'react';
import GenericLoginScreen from '../../util/GenericLoginScreen';
import {
    TextInput,
    TouchableOpacity,
    Text,
    View,
} from 'react-native';
export default class NewUserRegisterScreen extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <GenericLoginScreen
                model ={
                    <Text> New Register</Text>
                }
            />
        );
    }
}
