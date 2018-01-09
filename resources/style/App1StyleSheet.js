/*use strict*/
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
    header:{
    backgroundColor:'#f45',
    height:40,
    padding:20,
    borderBottomColor:'#eee',
    },

    /** ------------------------LandingModel ---------------------- */
    /** Landing Coantainer */
    lan_m_container:{
      flex: 1,
      backgroundColor: '#d3f',
      alignContent:'center',
      alignItems: 'center',
    },

    /** Landing Image cover */
    lan_m_loader_con:{
     flex:1,
     height:null,
     width: null,
     resizeMode: 'cover',
     alignSelf: 'stretch',
    },
    lan_m_operator:{
        zIndex:10,
        flex:1,
        paddingLeft:50,
        paddingRight:50,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:'stretch',
    },


    /** Keyboard View to wrap username,passord,button, register inputs*/
    /** LoginModel Stylesheet*/

    /** Login wrapper container*/
    log_m_container:{
      alignSelf: 'stretch',
      flexDirection: 'column',
    },
    /** Landing Password */
    log_m_username:{
      padding: 20,
      alignSelf: 'stretch',
      backgroundColor:'rgba(255, 255, 255, 0.5)',
      marginBottom:10,
      fontSize: 20,
    },
    /** Landing Password */
    log_m_password:{
        padding: 20,
        alignSelf: 'stretch',
        backgroundColor:'rgba(255, 255, 255, 0.5)',
        marginBottom:30,
        fontSize: 20,
    },
    /** Login Button*/
    log_m_btn:{
        padding:15,
        alignSelf:'stretch',
        backgroundColor:'green',
        justifyContent: 'center',
        alignItems: 'center',
    },

    /** Login btn text*/
    log_m_btn_text:{
      color:'#fff',
      fontSize:20,
    },
    /** Login Reset view*/
    log_m_reset_con:{
        marginBottom: 50,
        marginTop: 10,
        alignItems: 'flex-end',
    },

    log_m_reset_text:{
        borderLeftWidth:5,
        borderRightWidth:5,
        borderColor:'green',
        paddingLeft: 10,
        paddingRight: 10,
        color: 'green',
    },

    /** Login Register view*/
    log_m_reg_con:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    log_m_reg_text:{
        borderLeftWidth:5,
        borderRightWidth:5,
        borderColor:'green',
        paddingLeft: 10,
        paddingRight: 10,
    },


});

export default styles;