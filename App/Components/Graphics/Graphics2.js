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

export default class Question17 extends Component {

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
        this.props.navigation.navigate("Question18")
    };

    render() {
        return (
            <View
                style={styles.container}>
                <StatusBar backgroundColor="white" barStyle="light-content" translucent />
            <View style={styles.textbuttonView}>
                <Text style={styles.textbutton}>Whew, almost there. Give us a moment, while you wait can we suggest a snack?  </Text>
             </View>
             <TouchableOpacity style={{marginVertical:-50}}
             onPress={this.onPress}
             >               
                <Image source={require('../../Assets/others/apple.png')} style={styles.image}></Image> 
            </TouchableOpacity>
             
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
        width: 335,
        height: 60,
        fontSize:20,
        textAlign: 'center',
        backgroundColor: "#143060"
   
    },
    textbutton1: {
        color:'white',
        fontSize: 18,
        //textAlign: 'center',
        padding:8,
    },
    textbutton: {
        color:'#9fcf3c',
        fontSize: 23,
        textAlign: 'center',
    },
    textbuttonView:{
    marginVertical:70, 
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
        width: responsiveWidth(100),
        height: responsiveHeight(45),
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





