/**
 * Created by richard on 04/01/18.
 */
import React, {Component} from 'react';
import GenericLoginScreen from '../../util/GenericLoginScreen';
import styles from '../../../../../resources/style/App1StyleSheet';

import {
    TextInput,
    TouchableOpacity,
    Text,
    View,
} from 'react-native';
export default class PinCodeScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <GenericLoginScreen
                topView={
                    <View>
                        <Text style={styles.lan_m_app_txt}>
                            Pin Code
                        </Text>
                    </View>
                }
                model={
                    <View>

                        <View style={{flexDirection: 'row',}}>
                            <TextInput onChangeText={this.props.managePincode}
                                       secureTextEntry={true}
                                       keyboardType={'numeric'}
                                       underlineColorAndroid={'transparent'}
                                       style={styles.log_m_pin_pincode}/>

                            <TextInput onChangeText={this.props.managePincode}
                                       secureTextEntry={true}
                                       keyboardType={'numeric'}
                                       underlineColorAndroid={'transparent'}
                                       style={styles.log_m_pin_pincode}/>

                            <TextInput onChangeText={this.props.managePincode}
                                       secureTextEntry={true}
                                       keyboardType={'numeric'}
                                       underlineColorAndroid={'transparent'}
                                       style={styles.log_m_pin_pincode}/>

                            <TextInput onChangeText={this.props.managePincode}
                                       secureTextEntry={true}
                                       keyboardType={'numeric'}
                                       underlineColorAndroid={'transparent'}
                                       style={styles.log_m_pin_pincode}/>
                        </View>
                    </View>
                }
            />
        );
    }
}
