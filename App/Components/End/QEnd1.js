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
export default class QEnd1 extends Component {

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
        let BMI = await AsyncStorage.getItem('BMI')
        let pounds = await AsyncStorage.getItem('pounds')
        let feet = await AsyncStorage.getItem('feet')
        let inches = await AsyncStorage.getItem('inches')
        let goalWeight = await AsyncStorage.getItem('goalWeight')
        let gender = await AsyncStorage.getItem('gender')
        let genderVal = await AsyncStorage.getItem('genderVal')
        let age = await AsyncStorage.getItem('age')
        let name = await AsyncStorage.getItem('name')
        let Question23 = await AsyncStorage.getItem('Question23')
        let Question22 = await AsyncStorage.getItem('Question22')
        let Question21 = await AsyncStorage.getItem('Question21')
        let Question20 = await AsyncStorage.getItem('Question20')
        let Question19 = await AsyncStorage.getItem('Question19')
        let Question18 = await AsyncStorage.getItem('Question18')
        let Question17 = await AsyncStorage.getItem('Question17')
        let Question16 = await AsyncStorage.getItem('Question16')
        let points = await AsyncStorage.getItem('points')

        let pointsFinal=parseInt(points) + parseInt(Question16) + parseInt(Question17)
        + parseInt(Question18)  + parseInt(Question19) + parseInt(Question20)
         + parseInt(Question19)
        + parseInt(Question21) + parseInt(Question22) + parseInt(Question23) 
     
        if(pointsFinal>=23 &&pointsFinal<=30){
            pointsFinal=pointsFinal+5
        }
        else if(pointsFinal>=31 &&pointsFinal<=35){
            pointsFinal=pointsFinal+4
        }
        else if(pointsFinal>=36 &&pointsFinal<=40){
            pointsFinal=pointsFinal+3
        }
        else if(pointsFinal>=41 &&pointsFinal<=45){
            pointsFinal=pointsFinal+1
        }
        else {
            pointsFinal=pointsFinal+0
        }

        pointsFinal=pointsFinal+ parseInt(BMI)
       
       if(pointsFinal>=1 && pointsFinal<=25){
            2*(parseInt(pounds)- parseInt(goalWeight) )
       }    
       else if(pointsFinal>=25 && pointsFinal<=52){
        (parseInt(pounds)- parseInt(goalWeight) ) / 0.75
    } 
    else if(pointsFinal>=52 && pointsFinal<=77){
        (parseInt(pounds)/parseInt(goalWeight) ) / 0.9
    } 
    }
    onPress = () => {
        this.props.navigation.navigate("QEnd2")
    };


    render() {
        return (
            <View
                style={styles.container}>
                <StatusBar backgroundColor="white" barStyle="light-content" translucent />
            <TouchableOpacity style={styles.textbuttonView}
              onPress={this.onPress}
            >
                <Text style={styles.textbutton}>Are you ready to achieve your goals?</Text>
             </TouchableOpacity>
               
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
        color:'#9fcf3c',
        fontSize: 60,
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

    
});





