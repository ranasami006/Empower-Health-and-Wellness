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

export default class Question extends Component {

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
            <TouchableOpacity
             onPress={()=>this.props.navigation.navigate("Question1")}
             style={styles.container}>
                <StatusBar backgroundColor="white" barStyle="light-content" translucent />
                <Image source={require('../../Assets/TextMainScreen.png')} style={styles.image}></Image>
                
                 <Image source={require('../../Assets/Logo/LogoBlue.png')} style={styles.image1}></Image>
                
            </TouchableOpacity>

        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: "center",
        alignContent: 'center',
    },
    container2: {
        flex: 1,
        // backgroundColor: 'white',
        // justifyContent: "center",
        // alignContent: 'center',
    },
    image: {
        width: responsiveWidth(75),
        height: responsiveHeight(40),
        marginBottom: responsiveWidth(20),
        alignSelf: 'center',
    },
    image1: {
         width: responsiveWidth(80),
         height: responsiveHeight(15),
        alignSelf: 'center',
    },
    topView:
    {
        backgroundColor: '#25435f',
        height: responsiveHeight(13),

    },
    header:
    {
        flexDirection: 'row',
        marginLeft: responsiveWidth(5),
    },
    logo:
    {
        width: responsiveWidth(38),
        height: responsiveHeight(6),
        resizeMode: 'contain',
        marginLeft: responsiveWidth(20),
        marginTop: responsiveWidth(9)
    },
    icon:
    {
        marginTop: responsiveWidth(10)
    },
    bottomContainer:
    {
        height: responsiveHeight(26),
        width: responsiveWidth(90),
        alignSelf: 'center',
        borderRadius: responsiveWidth(3),
        backgroundColor: '#fff',
        elevation: 2,
        marginTop: responsiveWidth(1)

    },

    body:
    {
        width: responsiveWidth(90),
        alignSelf: 'center',
        marginTop: responsiveWidth(5),

    },
    bodyheading:
    {
        justifyContent: 'space-between',
        flexDirection: 'row'

    },
    headerText:
    {
        fontSize: responsiveFontSize(2.2),
        fontWeight: 'bold',
        color: '#575757',
    },
    headerText1:
    {
        fontSize: responsiveFontSize(1.8),
        color: '#a2adeb'
    },
    card:
    {
        height: responsiveHeight(14),
        backgroundColor: '#fff',
        borderRadius: responsiveWidth(3),
        marginTop: responsiveWidth(3),
        elevation: 2,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: responsiveWidth(1)

    },
    cardImage:
    {
        height: responsiveHeight(10),
        borderRadius: responsiveWidth(3),
        marginLeft: responsiveWidth(3),
        width: responsiveWidth(20)

    },
    cardText:
    {
        fontSize: responsiveFontSize(2),
        fontWeight: 'bold',
    },
    cardText1:
    {
        fontSize: responsiveFontSize(1.6),
        color: 'grey',
        marginRight: responsiveWidth(2)
    },
    card1:
    {
        height: responsiveHeight(29),
        width: responsiveWidth(41),
        backgroundColor: '#fff',
        borderRadius: responsiveWidth(3),
        marginVertical: responsiveWidth(3),
        elevation: 2,
        resizeMode: 'contain',
        marginLeft: responsiveWidth(5)

    },
    cardImage1:
    {
        height: responsiveHeight(19),
        borderTopLeftRadius: responsiveWidth(3),
        borderTopRightRadius: responsiveWidth(3),
        width: '100%',
    },
    cardText2:
    {
        fontSize: responsiveFontSize(1.8),
        margin: responsiveWidth(2),
        color: '#5b5863'

    },

});





