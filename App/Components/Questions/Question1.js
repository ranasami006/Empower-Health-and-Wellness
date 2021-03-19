import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, SafeAreaView, Image, ImageBackground, TouchableOpacity, ScrollView, TextInput, FlatList, Alert } from 'react-native';
import { responsiveWidth, responsiveHeight, responsiveFontSize } from 'react-native-responsive-dimensions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Header, Avatar, colors } from 'react-native-elements';
import Constants from 'expo-constants';
import { Entypo,MaterialCommunityIcons } from '@expo/vector-icons';
export default class Question1 extends Component {

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
      await AsyncStorage.setItem('Question1', value)
     // console.log("TETS ===",parseInt(value))
     this.props.navigation.navigate("Question1Part2")
    } catch (e) {
      // saving error
    }

  };


  render() {
    return (
      <View
        style={styles.container}>
        <StatusBar backgroundColor="white" barStyle="light-content" translucent />
        <View style={{ marginTop: 0, backgroundColor: 'grey' }}>
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
          </View>
        <Image source={require('../../Assets/TEXTQuestion1.png')} style={styles.image}></Image>

        <View style={styles.buttonView}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.onPress('1')}
          >
            <Text style={styles.textbutton}> Lose Weight</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.onPress('2')}
          >
            <Text style={styles.textbutton}> Get healthier for good</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.onPress('3')}
          >
            <Text style={styles.textbutton}> Both</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.logo}>
          <Image source={require('../../Assets/Logo/LogoBlue.png')} style={styles.image1}></Image>


        </View>

      </View >

    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  button: {
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: "#143060",
    padding: 10,
    borderRadius: 10,
    width: 210,
    height: 70,
    marginTop: 50,
  },
  textbutton: {
    color: 'white',
    fontSize: responsiveFontSize(2.3),
    textAlign: 'center',
    //fontWeight: "bold",
  },

  buttonView: {
    alignSelf: "center",
    justifyContent: 'center',
    //marginVertical: 50,
  },
  image: {
    width: responsiveWidth(80),
    height: responsiveHeight(20),
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





