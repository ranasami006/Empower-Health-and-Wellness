import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, SafeAreaView, Image, ImageBackground, TouchableOpacity, ScrollView, TextInput, FlatList, Alert } from 'react-native';
import { responsiveWidth, responsiveHeight, responsiveFontSize } from 'react-native-responsive-dimensions';
import { Header, Avatar, colors } from 'react-native-elements';
import Constants from 'expo-constants';
import { Entypo,MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default class Question22 extends Component {

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
            
            await AsyncStorage.setItem('Question22', value)
           //console.log("OKOIII",value)
           this.props.navigation.navigate("Question23")
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
                <Text style={styles.textbutton}>We customize the plan for you. What pace would you prefer? </Text>
             </View>
               
              <View style={{marginVertical:30,}}>
                <View style={[styles.buttonView1,{marginVertical: 30,}]}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={()=>this.onPress("3")}
                    >
                        <Text style={styles.textbutton1}>As fast as possible.</Text>
                    </TouchableOpacity>         
                </View>
                <View style={[styles.buttonView1,{marginVertical: 30,}]}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={()=>this.onPress("2")} >
                        <Text style={styles.textbutton1}>
                        Slow and steady wins the race.
                        </Text>
                    </TouchableOpacity>         
                </View>
                
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
    button: {
        justifyContent: 'center',
        padding: 10,
        borderRadius: 7,
        width: 200,
        height: 80,
        fontSize:20,
        textAlign: 'center',
        backgroundColor: "#143060"
   
    },
    textbutton1: {
        color:'white',
        fontSize: 18,
        padding:8,
        alignSelf:"center",
    },
    textbutton: {
        color:'#9fcf3c',
        fontSize: 23,
        textAlign: 'center',
    },
    textbuttonView:{
    marginVertical:0, 
    justifyContent:'center',
    width:350,
    alignItems:'center',
    alignSelf:'center',  
    padding:10, 
    },

    buttonView: {
        flex: 1,
        flexDirection: 'row',
        //marginVertical: -100,
        marginHorizontal: 40,
    },
    buttonView1: {
    alignItems: "center",  
    //marginVertical: -70,
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





