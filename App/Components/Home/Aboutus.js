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
    Dimensions,
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
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default class Aboutus extends Component {
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

    onPressEnroll = () => {
        this.props.navigation.navigate("Enroll")
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

                    <View style={styles.bottomView}>
                        <View style={styles.topButton}>
                            <TouchableOpacity
                                onPress={() => {
                                    this.props.navigation.goBack()
                                }}>
                                <AntDesign
                                    name={'arrowleft'}
                                    color={'#fff'}
                                    size={responsiveWidth(7)}
                                    style={styles.iconBack}
                                />
                            </TouchableOpacity>
                            <View style={{ flexDirection: 'row', marginHorizontal: responsiveWidth(18) }}>
                                <Image
                                    source={require('../../Assets/Icons/AboutUs.png')}
                                    style={styles.logoTeam}></Image>
                                <Text style={{ textAlign: 'center', color: 'white', fontSize: 20, alignSelf: 'center', marginLeft: 5 }}>About Us </Text>
                            </View>
                        </View>

                    </View>

                    <Image
                        source={require('../../Assets/others/about-girlpic.png')}
                        style={styles.logoUser}>
                    </Image>
                    <View style={{ flexDirection: 'row', marginHorizontal: responsiveWidth(5) }}>
                        <Image
                            source={require('../../Assets/Logo/Assessment.png')}
                            style={styles.logoTeam}></Image>
                        <Text style={{ textAlign: 'center', color: '#9FCF3C', fontSize: 25, alignSelf: 'center', marginLeft: 5, fontWeight: "bold" }}>WE EMPOWER </Text>
                    </View>

                    <View style={styles.description}>

                        <Text style={{ marginHorizontal: 40, marginVertical: -20, fontWeight: 'bold' }}>Patients to take their health and vitality into their own hands. We empower
                        ongoing discussions and conversations about your health with top tier
                        doctors and providers. We take away traditional impediments and empower
a true doctor patient relationship for modern times.</Text>


                    </View>

                    <View style={{ marginVertical: 40 }}>
                        <Image
                            source={require('../../Assets/others/about-boypic.png')}
                            style={styles.logoUser}>
                        </Image>
                        <View style={{ flexDirection: 'row', marginHorizontal: responsiveWidth(5) }}>
                            <Image
                                source={require('../../Assets/Logo/Assessment.png')}
                                style={styles.logoTeam}></Image>
                            <Text style={{ textAlign: 'center', color: '#9FCF3C', fontSize: 25, alignSelf: 'center', marginLeft: 5, fontWeight: "bold" }}>Our Values </Text>
                        </View>

                        <View style={styles.description}>

                            <Text style={{ marginHorizontal: 40, marginVertical: -20, fontWeight: 'bold' }}>We value a healthy life, a simpler life, a joyful life. We value being able to truly make our patients lives healthier and simpler. We value the small steps and big achievements in your health and your life. Our values are rooted in the hippocratic oath and the lost art of a traditional doctor patient relationship.</Text>


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
        backgroundColor: 'white',
    },
    topView: {
        flexDirection: 'row',
        backgroundColor: '#142F60',
        height: responsiveHeight(17),
        borderRadius: responsiveWidth(3),
    },
    header: {
        flexDirection: 'row',
        marginLeft: responsiveWidth(3),
        borderRadius: responsiveWidth(2),
        alignItems: 'center'
    },
    logo: {
        width: responsiveWidth(60),
        height: responsiveHeight(14),
        resizeMode: 'contain',
        marginLeft: responsiveWidth(10),
        marginTop: responsiveWidth(7),
        padding: responsiveWidth(4),

    },
    icon: {
        //  marginTop: responsiveWidth(10),
    },
    logoTeam: {
        width: responsiveWidth(12),
        height: responsiveHeight(12),
        resizeMode: 'contain',
        alignSelf: 'center',
    },

    logoUser: {
        width: '100%',
        borderRadius: responsiveWidth(1),
    },

    iconBack: {
        padding: 13,
    },
    buttonView: {
        flex: 1,

        marginVertical: 40,

    },
    bottomView: {
        //backgroundColor: '#ededf5',
        marginHorizontal: 16,
        marginBottom: 8,
    },
    topButton: {
        width: '100%',
        backgroundColor: '#9FCF3C',
        height: responsiveHeight(8),
        borderRadius: responsiveWidth(3),
        elevation: 10,
        flexDirection: "row",
    },

    imagebottomview: {
        width: '100%',
        height: responsiveHeight(18),
        elevation: 6,
        backgroundColor: '#ededf5',
        borderBottomLeftRadius: responsiveWidth(5),
        borderBottomRightRadius: responsiveWidth(5),
        marginBottom: 8,
    },
    description: {
        //marginBottom:responsiveWidth(15),
    },
});
