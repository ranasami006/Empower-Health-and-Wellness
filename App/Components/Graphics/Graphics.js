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

export default class Graphics extends Component {

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

    onPress = () => {
        this.props.navigation.navigate("Question4Motion")
      };

    render() {
        return (
            <TouchableOpacity 
            onPress={()=>{this.props.navigation.navigate("Question8")}}
            style={ styles.container }>
            <Image source={require('../../Assets/Screen14.png')} style={styles.backgroundImage} />
          </TouchableOpacity>

        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'stretch'
     },
    backgroundImage:{
        resizeMode:'cover' ,
        width: '100%',
        height: '100%',
        flex: 1, 
       
  }

});





