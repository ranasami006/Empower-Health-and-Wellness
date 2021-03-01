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
import * as firebase from 'firebase';
import Config from "../../Config/Config";
import AsyncStorage from '@react-native-async-storage/async-storage';
export default class Question4Motion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoadingComplete: false,
            email: "",
            name: "",
            Phone: '',
        };

        // Initialize firebase...
        if (!firebase.apps.length) {
            firebase.initializeApp(Config.FirebaseConfig);
        }
        else {
            console.log("love", firebase.apps.length)
        }
    }



    async componentDidMount() {
        // console.log("pak")
        //connectFirebase();
    }

    async CheckValidateFn() {
        this.state.email = this.state.email.replace(/\s+/g, '');

        let reg1 = /^[\w  ]{3,30}$/;
        if (reg1.test(this.state.name) === false) {
            console.log('Name is Not Correct');
            this.state.name === ''
                ? this.setState({ ErrorMessege: ' Name cannot Not be empty' })
                : this.state.firstName.length > 2
                    ? this.setState({ ErrorMessege: 'Please enter proper Name' })
                    : this.setState({
                        ErrorMessege: 'Name should be atleast 3 characters!',
                    });
            // this.setState({ email: text })
            return 1;
        }


        //EmailCheck
        let reg3 = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (reg3.test(this.state.email) === false) {
            //console.log('Email is Not Correct');
            this.state.email !== undefined && this.state.email !== ''
                ? this.setState({
                    ErrorMessege: 'Please enter valid email address',
                })
                : this.setState({ ErrorMessege: 'Email cannot be empty' });
            // this.setState({ email: text })
            return 1;
        }
        if (this.state.phone === 0 || this.state.phone === '') {
            this.setState({ ErrorMessege: 'Phone cannot be empty' });
            return 1;
        }

        return 0;
    }


    async ValidationFn() {
        this.setState({ loader: true });
        let TempCheck = await this.CheckValidateFn();

        switch (TempCheck) {
            case 0:
                this.onNextPress();
                break;
            case 1:
                this.setState({ loader: false });
                // alert(this.state.ErrorMessege);
                break;
            default:
                break;
        }

    }
    uniqueID() {
        // this.setState({indicator: true});
        function chr4() {
            return Math.random()
                .toString(16)
                .slice(-4);
        }
        return (
            chr4() +
            chr4() +
            '-' +
            chr4() +
            '-' +
            chr4() +
            '-' +
            chr4() +
            '-' +
            chr4() +
            chr4() +
            chr4()
        );
    }

    onNextPress = async () => {
        let userId = this.uniqueID();
        try {
            await AsyncStorage.setItem('userId', this.state.userId)
            await AsyncStorage.setItem('email', this.state.email)
            await AsyncStorage.setItem('name', this.state.name)
            await AsyncStorage.setItem('phone', this.state.phone)
           
          } catch (e) {
            // saving error
          } 
        
        firebase
            .database()

            .ref('users/' + userId)
            .set({
                userId: userId,
                email: this.state.email,
                name: this.state.name,
                phone: this.state.phone,
            });
        this.props.navigation.navigate("Question5")
    };

    render() {
        return (
            <View
                style={styles.container}>
                <StatusBar backgroundColor="white" barStyle="light-content" translucent />

                <View style={styles.mainView}>
                    <Text style={{ textAlign: 'center', color: 'red', fontSize: 15, }}>{this.state.ErrorMessege}</Text>

                    <View style={styles.mail}>
                        <Text style={styles.text}>Name:</Text>
                        <TextInput
                            style={styles.button}
                            value={this.state.name}
                            onChangeText={(text) => { this.setState({ name: text }) }}

                        />
                    </View>
                    <View style={styles.mail}>
                        <Text style={styles.text}>Email:</Text>
                        <TextInput
                            style={styles.button}
                            value={this.state.email}
                            onChangeText={(text) => { this.setState({ email: text }) }}


                        />
                    </View>
                    <View style={styles.mail}>
                        <Text style={[styles.text, { marginHorizontal: 4 }]}>Phone:</Text>
                        <TextInput
                            style={styles.button}
                            value={this.state.phone}
                            onChangeText={(text) => { this.setState({ phone: text }) }}
                            keyboardType="numeric"

                        />
                    </View>

                    <TouchableOpacity
                        style={styles.buttonNext}
                        onPress={() => this.ValidationFn()}
                    >
                        <Text style={[styles.textbutton, { color: 'white' }]}>Next</Text>
                    </TouchableOpacity>
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
    buttonNext: {
        alignItems: "center",
        justifyContent: 'center',
        alignSelf: 'center',
        padding: 7,
        borderRadius: 10,
        marginTop: 50,
        fontSize: 20,
        textAlign: 'center',
        backgroundColor: "#143060",
        width: 130,
        height: 65
    },
    mainView: {
        marginVertical: 150,
    },
    mail: {
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',

    },
    text: {
        color: '#143060',
        marginHorizontal: 10,
        //marginVertical:5,
        fontSize: 25,
        alignSelf: 'center',
    },
    button: {
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: 7,
        width: 250,
        height: 45,
        borderWidth: 1,
        borderColor: "#9fcf3c",
        fontSize: 18,

    },
    textbutton: {
        //color:'white',
        fontSize: 20,
        textAlign: 'center',
        //fontWeight: "bold"
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





