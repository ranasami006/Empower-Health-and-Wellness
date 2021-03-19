import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, SafeAreaView, Image, ImageBackground, TouchableOpacity, ScrollView, TextInput, FlatList, Alert } from 'react-native';
import { responsiveWidth, responsiveHeight, responsiveFontSize } from 'react-native-responsive-dimensions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Header, Avatar, colors } from 'react-native-elements';
import Constants from 'expo-constants';
import { Entypo,MaterialCommunityIcons } from '@expo/vector-icons';
export default class Question3 extends Component {

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
            if(value==='1'){
          await AsyncStorage.setItem('gender', 'Male')
          await AsyncStorage.setItem('genderVal', '2')
            
        }
          else{
            await AsyncStorage.setItem('gender', 'Female')
            await AsyncStorage.setItem('genderVal', '1')
        
        }
         // console.log("TETS ===", await AsyncStorage.getItem('gender'))
         this.props.navigation.navigate("Question4")
        } catch (e) {
          // saving error
        }
    
      };


    render() {
        return (
            <View
                style={styles.container}>
                <StatusBar backgroundColor="white" barStyle="light-content" translucent />
                <Header
              backgroundColor={'white'}
              leftComponent={
                <TouchableOpacity style={{
                  alignContent: 'flex-start',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start'
                }}
                onPress={() => {
                  this.props.navigation.goBack();
              }}
                >
                  <Entypo name="arrow-long-left" size={40} color="black" />
                </TouchableOpacity>
              }
             
              rightComponent={
                <TouchableOpacity style={{
                  alignContent: 'flex-start',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start'
                }}
                onPress={() => {
                  this.props.navigation.navigate("Home");
              }}
                >
                  <MaterialCommunityIcons name="home-assistant" size={40} color="black" />
                </TouchableOpacity>
              }
              statusBarProps={{ barStyle: 'light-content', translucent: true, backgroundColor: '#757575' }}
              containerStyle={{ borderBottomColor: '#85106a', borderBottomWidth: 0, color: 'red' }}
              style={{ backgroundColor: 'red', elevation: 5 }}
            />
                <View style={styles.textbuttonView}>
                <Text style={styles.textbutton}>Your gender?</Text>
                </View>

                <View style={styles.buttonView}>
                
                
                <TouchableOpacity      
                    style={styles.button}
                    onPress={() => this.onPress('1')}
                >
                    <Text style={styles.textbutton1}> Male</Text>
        
                </TouchableOpacity>

                <TouchableOpacity      
                    style={[styles.button, { marginLeft: 40 }]}
                    onPress={() => this.onPress('2')}
                >
                    <Text style={styles.textbutton1}> Female</Text>
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
        marginTop: 50,
        borderWidth: 1,
        fontSize:20,
        textAlign: 'center',
        backgroundColor: "#143060",
    },
    textbutton: {
        color:'#9fcf3c',
        fontSize: responsiveFontSize(4),
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
        //marginVertical: -50,
        //marginHorizontal: 40,
        justifyContent:'center'

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





