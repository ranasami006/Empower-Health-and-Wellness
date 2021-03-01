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
export default class Question5 extends Component {

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
            await AsyncStorage.setItem('Question5', value)
           //console.log("OKOIII",value)
           this.props.navigation.navigate("Question6")
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
                <Text style={styles.textbutton}>What is motivating you to take this step?</Text>
             </View>
               
              <View style={{flex:0,flexDirection:'column',marginVertical:-70,}}>
                <View style={[styles.buttonView1,{marginVertical: 10,}]}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={()=>this.onPress("1")}
                    >
                        <Text style={styles.textbutton1}>Upcomming event like a vacation or a wedding</Text>
                    </TouchableOpacity>         
                </View>
                <View style={[styles.buttonView1,{marginVertical: 10,}]}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={()=>this.onPress("3")}

                    >
                        <Text style={styles.textbutton1}>I want to get healthier</Text>
                    </TouchableOpacity>         
                </View>
                 <View style={[styles.buttonView1,{marginVertical: 10,}]}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={()=>this.onPress("2")}
                        >
                        <Text style={styles.textbutton1}>I am tired of my body image</Text>
                    </TouchableOpacity>         
                </View>
                <View style={[styles.buttonView1,{marginVertical: 10,}]}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={()=>this.onPress("1")}
                        >
                        <Text style={styles.textbutton1}>I am simply not happy</Text>
                    </TouchableOpacity>         
                </View>
                <View style={[styles.buttonView1,{marginVertical: 10,}]}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={()=>this.onPress("3")}
                        >
                        <Text style={styles.textbutton1}>I am getting older and its time for change</Text>
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
        //alignItems: "center",
        justifyContent: 'center',
        padding: 10,
        borderRadius: 7,
        width: 340,
        height: 55,
        fontSize:20,
        textAlign: 'center',
        backgroundColor: "#143060"
   
    },
    textbutton1: {
        color:'white',
        fontSize: 17,
        //textAlign: 'center',
        padding:8,
    },
    textbutton: {
        color:'#9fcf3c',
        fontSize: 25,
        textAlign: 'center',
    },
    textbuttonView:{
    marginVertical:70, 
    justifyContent:'center',
    width:330,
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





