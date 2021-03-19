
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, SafeAreaView, StatusBar, Image, ImageBackground, TouchableOpacity, ScrollView, AsyncStorage } from 'react-native';
import { responsiveWidth, responsiveHeight, responsiveFontSize } from 'react-native-responsive-dimensions';
export default class StartScreen extends Component {
    static navigationOptions = {
        drawerLockMode: 'locked-closed',
    }
    state = {
        idxActive: 0
    };

    async componentDidMount() {
        // let data = await AsyncStorage.getItem("Token");
        // setTimeout(() => {
        //     if (data) {
        //         this.props.navigation.navigate('Tab');
        //     }

        // }, 500);

    }


    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="#142F60"
                    barStyle="light-content" translucent />

                <View style={styles.textContainer}>
                    <Text style={styles.text}>Get{" "}Started{" "}Now </Text>
                </View>
                <TouchableOpacity
                 onPress={()=>this.props.navigation.navigate('Question')}
                 style={styles.imageContainer}>
                    <Image source={require('../../Assets/Logo/Assessment.png')} style={styles.image}></Image>

                </TouchableOpacity>


            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#102e5e',
    },
    textContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,


    },
    text:
    {
        fontSize: responsiveFontSize(4.5),
        alignSelf: 'center',
        fontWeight: 'bold',
        color: 'white',
        marginBottom:170,
        marginLeft:10,

    },
    imageContainer: {
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center',
    },
    image:
    {
        width: responsiveWidth(30),
        height: responsiveHeight(20),
        //  marginTop: responsiveWidth(10),
        marginBottom: responsiveWidth(20),
        alignSelf: 'center',
        position: "relative",
        bottom: 0,
    },

});





