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
import { Video, AVPlaybackStatus } from 'expo-av';
export default class GraphicWeight extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoadingComplete: false,
            status:''
        };

        
    }



    async componentDidMount() {
        
    }

   

    render() {
        const video = React.useRef(null);
       // const [status, setStatus] = React.useState({});
        return (
            <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={styles.video1}>
                    <Video
                        ref={video}
                        style={styles.video}
                        source={
                            require('../../Assets/Videos/Splashvideo1.mp4')
                        }
                        useNativeControls
                        resizeMode="cover"
                        shouldPlay={true}
                        isLooping
                        onPlaybackStatusUpdate={(text) => { this.setState({ status: text }) }}
                    />
                </View>

                <View style={[styles.video1, { marginHorizontal: 10 }]}>
                    <Video
                        ref={video}
                        style={styles.video}
                        source={
                            require('../../Assets/Videos/Splashvideo2.mp4')
                       
                        }
                        useNativeControls
                        resizeMode="cover"
                        shouldPlay={true}
                        isLooping
                        onPlaybackStatusUpdate={(text) => { this.setState({ status: text }) }}
                    />
                </View>
            </View>
            <View style={styles.video2}>
            <Video
                        ref={video}
                        style={styles.video}
                        source={
                            require('../../Assets/Videos/splash3.mp4')
                        }
                        useNativeControls
                        resizeMode="cover"
                        shouldPlay={true}
                        isLooping
                        onPlaybackStatusUpdate={(text) => { this.setState({ status: text }) }}
                    />
            
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





