/**
 * Created by richard on 03/01/18.
 */
import React, { Component } from 'react';
import styles from '../../../../resources/style/App1StyleSheet';
import {
    ImageBackground,
    KeyboardAvoidingView,
    View,
} from 'react-native';

const landingImage = require('../../../../resources/static/imgs/landing.png');

export default class GenericLoginModel extends Component<{}> {

    constructor(props){
        super(props);
    }


    render() {
        return (
            <ImageBackground
                source={landingImage}
                style={styles.lan_m_container}>

                <KeyboardAvoidingView style={styles.lan_m_operator}>
                    {this.props.model}
                </KeyboardAvoidingView>

            </ImageBackground>
        );
    }
}
