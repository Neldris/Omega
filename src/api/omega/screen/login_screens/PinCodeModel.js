/**
 * Created by richard on 04/01/18.
 */
import React, { Component } from 'react';
import GenericLoginModel from '../../util/GenericLoginModel';
import AsyncApp1Storage  from '../../storage/AsyncApp1Storage';
import {
    TextInput,
    TouchableOpacity,
    Text,
    View,
} from 'react-native';
export default class PinCodeModel extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <GenericLoginModel
                model ={
                    <Text> Here we go !</Text>
                }
            />
        );
    }
}
