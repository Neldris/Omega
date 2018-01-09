/**
 * Created by richard on 04/01/18.
 */
import React, { Component } from 'react';
import GenericLoginModel from '../../util/GenericLoginModel';
import {
    TextInput,
    TouchableOpacity,
    Text,
    View,
} from 'react-native';
export default class NewUserRegisterModel extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <GenericLoginModel
                model ={
                    <Text> New Register</Text>
                }
            />
        );
    }
}
