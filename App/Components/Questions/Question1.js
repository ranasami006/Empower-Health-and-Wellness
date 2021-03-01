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
    fontSize: 20,
    textAlign: 'center',
    //fontWeight: "bold"
  },

  buttonView: {
    alignSelf: "center",
    justifyContent: 'center',
    marginVertical: -50,
  },
  image: {
    width: responsiveWidth(74),
    height: responsiveHeight(20),
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





