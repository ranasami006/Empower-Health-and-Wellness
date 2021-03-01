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
export default class Question12 extends Component {

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
            await AsyncStorage.setItem('Question12', value)
           //console.log("OKOIII",value)
           this.props.navigation.navigate("Question13")
  
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
                <Text style={styles.textbutton}>Do you feel like you are addicted to food?</Text>
                </View>

                <View style={styles.buttonView}>
                
                
                <TouchableOpacity      
                    style={styles.button}
                    onPress={()=>this.onPress("Yes")}
                >
                    <Text style={styles.textbutton1}> Yes</Text>
        
                </TouchableOpacity>

                <TouchableOpacity      
                    style={[styles.button, { marginLeft: 40 }]}
                    onPress={()=>this.onPress("No")}
                >
                    <Text style={styles.textbutton1}> No</Text>
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
        borderWidth: 1,
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
        flex: 1,
        flexDirection: 'row',
       alignSelf:'center',

    },
    buttonView1: {
        flex: 150,
     alignItems: "center",
        justifyContent: 'center',
        marginVertical: -50,

    },
    image: {
        width: responsiveWidth(70),
        height: responsiveHeight(17),
        marginVertical: 50,
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





