import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, SafeAreaView, Image, ImageBackground, TouchableOpacity, ScrollView, TextInput, FlatList, Alert } from 'react-native';
import { responsiveWidth, responsiveHeight, responsiveFontSize } from 'react-native-responsive-dimensions';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import AsyncStorage from '@react-native-async-storage/async-storage';
export default class Question4 extends Component {

    state = {

        services:
            [
                // {
                //     title: 'Home nursing',
                //     description: '',
                //     image: ''
                // },
                // {
                //     title: 'Homecare',
                //     description: '',
                //     image: ''
                // },
                // {
                //     title: 'Drug at home',
                //     description: '',
                //     image: ''
                // }
            ]
    };


    async componentDidMount() {
        
    }

    onPress = async (value) => {
        try {
            await AsyncStorage.setItem('age', value)
           //console.log("OKOIII",value)
           this.props.navigation.navigate("Question4Motion")
          } catch (e) {
            // saving error
          }
      };

    render() {
        return (
            <View
                style={styles.container}>
                <StatusBar backgroundColor="white" barStyle="light-content" translucent />

                <View style={styles.textbuttonView}>
                <Text style={styles.textbutton}>Your age?</Text>
                </View>
                <View style={styles.buttonView}>    
                <TouchableOpacity      
                    style={styles.button}
                    onPress={()=>this.onPress("3")}
                >
                    <Text style={styles.textbutton1}> 20's</Text> 
                </TouchableOpacity>
                <TouchableOpacity      
                    style={[styles.button, { marginLeft: 40 }]}
                    onPress={()=>this.onPress("3")}
                >
                    <Text style={styles.textbutton1}> 30's</Text>
                </TouchableOpacity>     
                </View>
                
                <View style={styles.buttonView1}>    
                <TouchableOpacity      
                    style={styles.button}
                    onPress={()=>this.onPress("2")}
                >
                    <Text style={styles.textbutton1}> 40's</Text> 
                </TouchableOpacity>
                <TouchableOpacity      
                    style={[styles.button, { marginLeft: 40 }]}
                    onPress={()=>this.onPress("1")}
                >
                    <Text style={styles.textbutton1}> 50's</Text>
                </TouchableOpacity>     
                </View>

                <View style={styles.buttonView2}>    
                <TouchableOpacity      
                    style={styles.button}
                    onPress={()=>this.onPress("0")}
                >
                    <Text style={styles.textbutton1}> 60's</Text> 
                </TouchableOpacity>
                <TouchableOpacity      
                    style={[styles.button, { marginLeft: 40 }]}
                    onPress={()=>this.onPress("0")}
                >
                    <Text style={styles.textbutton1}> 70's</Text>
                </TouchableOpacity>     
                </View>

           

                <View style={styles.logo}>
                    <Image source={require('../../Assets/Logo/LogoBlue.png')} style={styles.image1}></Image>


                </View>

            </View>

        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',

    },
    textbuttonView:{
        marginVertical:100,   
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center', 
        },
    button: {
        alignItems: "center",
        justifyContent: 'center',
        padding: 10,
        borderRadius: 7,
        width: 150,
        height: 70,
       // marginTop: 50,
        //borderWidth: 1,
        fontSize:20,
        textAlign: 'center',
        backgroundColor: "#143060",
    },
    textbutton: {
        color:'#9fcf3c',
        fontSize: 35,
        textAlign: 'center',
    },
    textbutton1: {
        color:'white',
        fontSize: 20,
        textAlign: 'center',
    },

    buttonView: {
       // flex: 1,
        flexDirection: 'row',
        justifyContent:'center',
        //margin:10,
    },
    buttonView1: {
      //  flex: 1,
      margin:10,
      flexDirection: 'row',
        justifyContent:'center',
        

    },
    buttonView2: {
        //flex: 1,
      //  margin:10,
        flexDirection: 'row',
        justifyContent:'center'

    },
    image: {
        width: responsiveWidth(70),
        height: responsiveHeight(17),
        //marginVertical: 50,
        alignSelf: 'center',
    },
    image1: {
        width: responsiveWidth(80),
        height: responsiveHeight(15),
        alignSelf: 'center',

    },

    logo: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute', //Here is the trick
        margin: 5,
        right: 35,
        bottom: 0,
    }
});





