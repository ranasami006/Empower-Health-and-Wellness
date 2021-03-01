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

export default class QEnd2 extends Component {

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



    render() {
        return (
            <View
                style={styles.container}>
                <StatusBar backgroundColor="white" barStyle="light-content" translucent />
            <View style={styles.textbuttonView}>
                <Text style={styles.textbutton}>For a 
                <Text style={{color:'#9FCF3C'}}>{" Male"}</Text> in thier 
                <Text style={{color:'#9FCF3C'}}>{" 40's"}</Text> with your background and current body type we estimate it will take <Text style={{color:'#9FCF3C'}}>{" 6 months"} </Text>to achive your goal</Text>
                <Image source={require('../../Assets/Logo/Assessment.png')} style={styles.image}></Image>

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
        justifyContent:'center',
        alignItems:'center',
        //alignSelf:'center', 

    },
   
    textbutton: {
        color:'#142F60',
        fontSize: 40,
        textAlign: 'center',
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',  
       
    },
    textbuttonView:{
   justifyContent:'center',
    width:350,
    alignItems:'center',
    alignSelf:'center',  
    padding:10, 
    },
    image: {
        width: responsiveWidth(15),
        height: responsiveHeight(8),
        alignSelf: 'center',
        justifyContent:"center",
        alignContent:'center',
        marginVertical:40,
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





