/**
 * Created by richard on 03/01/18.
 */
import React, {Component} from 'react';
import styles from '../../../../resources/style/App1StyleSheet';
import {
    ImageBackground,
    KeyboardAvoidingView,
    View,
    Image,
    Text,
} from 'react-native';


export default class GenericLoginScreen extends Component<{}> {

    constructor(props) {
        super(props);
    }


    render() {
        const landingImage = require('../../../../resources/static/imgs/landing.png');
        const appIcon = require('../../../../resources/static/imgs/appIcon.png');
        return (
            <ImageBackground
                source={landingImage}
                style={styles.lan_m_container}>
                <View style={styles.lan_m_topView}>

                  <View style={styles.lan_m_tv_box}>
                   <Image source={appIcon} style={styles.lan_m_tv_img}/>
                    <Text style={styles.lan_m_app_txt}>Application Name</Text>
                  </View>

                    {this.props.topView}
                </View>
                <KeyboardAvoidingView style={styles.lan_m_operator}>
                    {this.props.model}
                </KeyboardAvoidingView>

            </ImageBackground>
        );
    }
}
