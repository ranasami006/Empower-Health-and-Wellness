import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, SafeAreaView, Image, ImageBackground, TouchableOpacity, ScrollView, TextInput, FlatList, Alert } from 'react-native';
import { responsiveWidth, responsiveHeight, responsiveFontSize } from 'react-native-responsive-dimensions';
import { Header, Avatar, colors } from 'react-native-elements';
import Constants from 'expo-constants';
import { Entypo,MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default class Question19 extends Component {

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
            
            await AsyncStorage.setItem('Question19', value)
           //console.log("OKOIII",value)
           this.props.navigation.navigate("Question20")
                  
  
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
                    <Text style={styles.textbutton}>What is your snack trigger?</Text>
                </View>

                <View style={styles.buttonView}>
                    <View style={styles.buttonView1}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={()=>this.onPress("1")}
                        >
                            <Text style={styles.textbutton1}> Being Around Food</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.button, { marginLeft: 20 }]}
                            onPress={()=>this.onPress("0")}
                        >
                            <Text style={styles.textbutton1}>Boredom </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.buttonView1}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={()=>this.onPress("3")}
                        >
                            <Text style={styles.textbutton1}> Hunger</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.button, { marginLeft: 20 }]}
                            onPress={()=>this.onPress("1")}
                        >
                            <Text style={styles.textbutton1}> Other People Snacking</Text>
                        </TouchableOpacity>
                        
                    </View>

                    <View style={styles.buttonView1}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={()=>this.onPress("0")}
                        >
                            <Text style={styles.textbutton1}>Stress and Anxiety</Text>
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
    textbuttonView: {
        marginVertical: 0,
        justifyContent:'center',
    width:350,
    alignItems:'center',
    alignSelf:'center',  
    padding:10, 
    },
    button: {
        alignItems: "center",
        justifyContent: 'center',
        padding: 10,
        borderRadius: 7,
        width: 170,
        height: 70,
        borderWidth: 1,
        fontSize: 20,
        textAlign: 'center',
        backgroundColor: "#143060",
    },
    
    buttonOther: {
        alignItems: "center",
        justifyContent: 'center',
        padding: 10,
        borderRadius: 7,
        width: 170,
        height: 70,
        borderWidth: 1,
        fontSize: 20,
        textAlign: 'center',
       // backgroundColor: "#143060",
    },
    textbutton: {
        color: '#9fcf3c',
        fontSize: 30,
        textAlign: 'center',
    },
    textbutton1: {
        color: 'white',
        fontSize: 17,
        textAlign: 'center',
    },

    buttonView: {
        flex: 1,
        
    marginVertical: 80,

    },
    buttonView1: {
        flexDirection: 'row',
        alignItems:"center",
        justifyContent:'center',
        padding:10,
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
