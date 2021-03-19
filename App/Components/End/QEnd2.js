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
    onPress = () => {
        this.props.navigation.navigate("Enroll")
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
        let Eage = await AsyncStorage.getItem('Eage')

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

        let pointsFinal = parseInt(points) + parseInt(Question16) + parseInt(Question17)
            + parseInt(Question18) + parseInt(Question19) + parseInt(Question20)
            + parseInt(Question19)
            + parseInt(Question21) + parseInt(Question22) + parseInt(Question23)

        if (pointsFinal >= 23 && pointsFinal <= 30) {
            pointsFinal = pointsFinal + 5
        }
        else if (pointsFinal >= 31 && pointsFinal <= 35) {
            pointsFinal = pointsFinal + 4
        }
        else if (pointsFinal >= 36 && pointsFinal <= 40) {
            pointsFinal = pointsFinal + 3
        }
        else if (pointsFinal >= 41 && pointsFinal <= 45) {
            pointsFinal = pointsFinal + 1
        }
        else {
            pointsFinal = pointsFinal + 0
        }

        pointsFinal = pointsFinal + parseInt(BMI)

        let weeks
        if (pointsFinal >= 1 && pointsFinal <= 25) {
            weeks = 2 * (parseInt(pounds) - parseInt(goalWeight))

        }
        else if (pointsFinal >= 25 && pointsFinal <= 52) {
            weeks = (parseInt(pounds) - parseInt(goalWeight)) / 0.75

        }
        else {
            weeks = (parseInt(pounds) / parseInt(goalWeight)) / 0.9
        }

        let months = weeks / 4.34524
        await this.setState({
            gender: gender,
            Eage: Eage,
            months: months.toFixed(2),
        })

    }



    render() {
        return (
            <View
                style={styles.container}>
                <StatusBar backgroundColor="white" barStyle="light-content" translucent />
                <View style={styles.textbuttonView}>
                    <Text style={styles.textbutton}>For a
                <Text style={{ color: '#9FCF3C' }}>{" "}{this.state.gender}</Text> in thier
                <Text style={{ color: '#9FCF3C' }}>{" "}{this.state.Eage}{" 's"}</Text> with your background and current body type, we estimate it takes <Text style={{ color: '#9FCF3C' }}>{this.state.months}{"  months"} </Text>To achieve your goal.</Text>
                    <TouchableOpacity
                        onPress={this.onPress}
                    >
                        <Image source={require('../../Assets/Logo/Assessment.png')} style={styles.image}></Image>
                    </TouchableOpacity>
                </View>

                <View style={styles.logo}
                    onPress={this.onPress}
                >
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
        justifyContent: 'center',
        alignItems: 'center',
        //alignSelf:'center', 

    },

    textbutton: {
        color: '#142F60',
        fontSize: 40,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',

    },
    textbuttonView: {
        justifyContent: 'center',
        width: 350,
        alignItems: 'center',
        alignSelf: 'center',
        padding: 10,
    },
    image: {
        width: responsiveWidth(15),
        height: responsiveHeight(8),
        alignSelf: 'center',
        justifyContent: "center",
        alignContent: 'center',
        marginVertical: 40,
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





