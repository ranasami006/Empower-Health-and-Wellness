import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    StatusBar,
    Image,
    ImageBackground,
    TouchableOpacity,
    ScrollView,
    TextInput,
    FlatList,
    AsyncStorage,
    Linking
} from 'react-native';
import {
    responsiveWidth,
    responsiveHeight,
    responsiveFontSize,
} from 'react-native-responsive-dimensions';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default class Enroll extends Component {
    state = {
        news: [
            // {
            //   description: '',
            //   image: '',
            // },
            // {
            //   description: '',
            //   image: '',
            // },
            // {
            //   description: '',
            //   image: '',
            // },
            // {
            //   description: '',
            //   image: '',
            // },
        ],
        services: [
            // {
            //   title: 'Home nursing',
            //   description: '',
            //   image: '',
            // },
            // {
            //   title: 'Homecare',
            //   description: '',
            //   image: '',
            // },
            // {
            //   title: 'Drug at home',
            //   description: '',
            //   image: '',
            // },
        ],
        registrations: "",
        shares: "",
    };

    async componentDidMount() {
        // let data = await AsyncStorage.getItem("Token");
        // if (data) 
        // {
        //   this.GetNewsFn();
        //   this.GetServicesFn();
        //   this.getInfo();
        // }
        // else{
        //   this.props.navigation.navigate("StartScreen")
        // }

        // // });

        // // this.focusListener = navigation.addListener('didFocus', () => {

        // // });
    }

    onPress1 = () => {
        Linking.openURL('https://empoweryourhealth.hint.com/signup/the-1-year-metabolic-reset');
    };
    onPress2 = () => {
        Linking.openURL('https://empoweryourhealth.hint.com/signup/the-monthly-metabolic-reset-weight-loss');
    };
    onPress3 = () => {
        Linking.openURL('https://empoweryourhealth.hint.com/checkout/metabolicassessment');
    };
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor="#9FCF3C"
                    barStyle="light-content"
                    translucent
                />
                <ScrollView>
                    <View style={styles.topView}>
                        <View style={styles.header}>
                            <TouchableOpacity
                                onPress={() => {
                                    this.props.navigation.openDrawer();
                                }}>
                                <Entypo
                                    name={'menu'}
                                    color={'#9FCF3C'}
                                    size={responsiveWidth(10)}
                                    style={styles.icon}
                                />
                            </TouchableOpacity>
                            <Image
                                source={require('../../Assets/Logo/LOGO-MAIN-4-1200x253.png')}
                                style={styles.logo}></Image>
                        </View>

                    </View>
                    <View style={styles.buttonView}>
                      

                        <View style={styles.buttonView1}>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={this.onPress1}
                            >
                                <Text style={{ color: 'white',fontSize:40,textAlign:'center',fontWeight:'bold' }}>1 Year Plan</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.button, { marginLeft: 20 }]}
                                onPress={this.onPress2}
                            >
                                
                                <Text style={{ color: 'white',fontSize:34,textAlign:'center',fontWeight:'bold'}}> Monthly Plan </Text>
                            </TouchableOpacity>

                        </View>

                        <View style={styles.buttonView1}>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={this.onPress3}
                            >
                              
                                <Text style={{ color: 'white',fontSize:25,textAlign:'center',fontWeight:'bold' }}> MetaBolic Assessment Only</Text>
                            </TouchableOpacity>


                        </View>

                    </View>


                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ededf5',
    },
    topView: {
        flexDirection:'row',backgroundColor: '#142F60',
        backgroundColor: '#25435f',
        height: responsiveHeight(17),
        borderRadius: responsiveWidth(3),
    },
    header: {
        flexDirection: 'row',
        marginLeft: responsiveWidth(3),
        borderRadius: responsiveWidth(2),
        alignItems:'center'
    },
    logo: {
        width: responsiveWidth(60),
        height: responsiveHeight(14),
        resizeMode: 'contain',
        marginLeft: responsiveWidth(10),
        marginTop: responsiveWidth(7),
        padding:responsiveWidth(4),

    },
    icon: {
      //  marginTop: responsiveWidth(10),
    },

    buttonView: {
        flex: 1,

        marginVertical: 100,

    },
    buttonView1: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'center',
        padding: 5,
    },
    button: {
        alignItems: "center",
        justifyContent: 'center',
        padding: 10,
        borderRadius: 7,
        width: 170,
        height: 160,
        //borderWidth: 1,
        fontSize: 20,
       // textAlign: 'center',
        backgroundColor: "#143060",
    },
    boxImage: {
        width: responsiveWidth(70),
        height: responsiveHeight(18),
        resizeMode: 'contain',
        alignSelf: 'center',
        justifyContent: 'center',
        alignContent: 'center',
    },
    boxImage1: {
        width: responsiveWidth(25),
        height: responsiveHeight(14),
        resizeMode: 'contain',
        alignSelf: 'center',
        justifyContent: 'center',
        alignContent: 'center',
    },
});
