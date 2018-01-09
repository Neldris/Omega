/*use strict*/
import React, { Component } from 'react';
import {
  Alert,
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

import styles from '../../../../resources/style/App1StyleSheet';

export default class GenericView extends Component{

  constructor(props){
    super(props);
    this.state ={v:null}
  }

  render(){
    return(
      <View style={styles.container}>
      { this.props.header }
      { this.props.menu }
      { this.props.content }
      { this.props.footer }  
      </View>
    );
  }
}
