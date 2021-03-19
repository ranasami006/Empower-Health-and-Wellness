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
export default class Ourteam extends Component {
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
                                    source={require('../../Assets/Icons/team.png')}
                                    style={styles.logoTeam}></Image>
                                <Text style={{ textAlign: 'center', color: 'white', fontSize: 20, alignSelf: 'center', }}>Our Team </Text>
                            </View>
                        </View>


                        <Image
                            source={require('../../Assets/others/toddgoddis.png')}
                            style={styles.logoUser}>
                        </Image>

                       <View style={styles.imagebottomview}>
                                
                                <Text style={{fontSize:40,marginHorizontal:20,marginVertical:10,color:'#142F60',fontWeight:'bold',alignSelf:"baseline"}}>Todd Gaddis </Text>
                                <Text style={{fontSize:25,marginHorizontal:25,color:'grey',fontWeight:'bold',alignSelf:"baseline"}}>MD, CEO, Co-Founder </Text>

                    </View>         
                    <View style={styles.description}>
                                
                                <Text style={{marginHorizontal:20,marginVertical:-19,fontWeight:'bold',alignSelf:"baseline"}}>As a founding member of Empower Health and Wellness, Dr. Todd Gaddis brings a wide range of knowledge to the virtual platform. Dr. Gaddis is a graduate of Saint Christopher’s College of Medicine and completed his residency at Baton Rouge General family medicine residency program LSU and has been practicing for over 15 years.

In his 15 years of practice, Dr. Gaddis has accumulated vast experience of active practice in family medicine, hospital medicine, emergency medicine, intensive care medicine, rehab, and rapid detox, urgent care, weight loss, and surgical cosmetic medicine. He even pioneered a telehealth platform that was way before its time.

When the opportunity came to help form a strictly Telehealth practice that focuses on general wellness and vitality, he did not pass up the opportunity.

Dr. Gaddis has always safely pushed the envelope and envisions telehealth as the future. With Empower Health and Wellness, Dr. Gaddis has created the first virtual-individualized Wellness Program with the purpose of restoring balance and vitality by offering direct primary care in combination with anti-aging medicine and virtual health coaching.
</Text>
                            

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
        flexDirection:'row',
        backgroundColor: '#142F60',
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
        backgroundColor: '#ededf5',
        width: windowWidth - 30,
        height: windowHeight - 10,
        marginHorizontal: 16,
        marginBottom:8,
    },
    topButton: {
        width: '100%',
        backgroundColor: '#9FCF3C',
        height: responsiveHeight(8),
        borderRadius: responsiveWidth(3),
        elevation: 10,
        flexDirection: "row",
    },

    imagebottomview:{
        width: '100%',
        height: responsiveHeight(18),
        elevation:6,
        backgroundColor:'#ededf5',
        borderBottomLeftRadius:responsiveWidth(5),
        borderBottomRightRadius:responsiveWidth(5),
        marginBottom:8,
    },
    description:{
        //marginBottom:responsiveWidth(15),
    },
});
