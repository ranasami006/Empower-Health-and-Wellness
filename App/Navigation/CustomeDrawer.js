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
  AsyncStorage,
  Alert,
} from 'react-native';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
export default class CustomDrawer extends Component {
  state = {
    email: '',
  };

  async componentDidMount() {

  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView showsHorizontalScrollIndicator={false}>
          <StatusBar
            backgroundColor="#9FCF3C"
            barStyle="light-content"
            translucent
          />


          <View style={styles.profileView}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.closeDrawer();
              }}>
              <AntDesign
                name={'arrowleft'}
                color={'#fff'}
                size={responsiveWidth(6)}
                style={styles.iconBack}
              />
            </TouchableOpacity>
            <View style={{ flexDirection: 'row',justifyContent:'flex-end',alignContent:"flex-end",alignItems:'flex-end' }}>


              <Image
                style={styles.image}
                source={require('../Assets/Logo/LOGO-MAIN-4-1200x253.png')}></Image>
            </View>
          </View>
          <View style={styles.bottomContainer}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('');
              }}
              style={styles.tab}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.icon}>
                <Image
                style={[styles.imageDrawer,{marginLeft:11}]}
                source={require('../Assets/Icons/iconWhite.png')}></Image>
                </View>
                <Text style={[styles.text1, { marginLeft: responsiveWidth(5) }]}>
                  Start Assessment
              </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('MyCards');
              }}
              style={styles.tab}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.icon}>
                <Image
                style={styles.imageDrawer}
                source={require('../Assets/Icons/EnrollIcon.png')}></Image>
                </View>
                <Text style={[styles.text1, { marginLeft: responsiveWidth(5) }]}>
                  Enroll
              </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('MyCards');
              }}
              style={styles.tab}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.icon}>
                <Image
                style={styles.imageDrawer}
                source={require('../Assets/Icons/team.png')}></Image>
                </View>
                <Text style={[styles.text1, { marginLeft: responsiveWidth(5) }]}>
                  Our Team
              </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('MyCards');
              }}
              style={styles.tab}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.icon}>
                <Image
                style={styles.imageDrawer}
                source={require('../Assets/Icons/AboutUs.png')}></Image>
                </View>
                <Text style={[styles.text1, { marginLeft: responsiveWidth(5) }]}>
                  About us
              </Text>
              </View>
            </TouchableOpacity>
          </View>


        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#9FCF3C",
  },
  profileView: {
    flexDirection: 'row',
    width: '100%',
    //alignSelf: 'center',
    alignItems: 'center',
    //justifyContent: "center",
    marginTop: responsiveWidth(5),
    //borderColor: 'grey',
    backgroundColor: '#25435f',
    height: responsiveHeight(15),
    borderBottomLeftRadius: responsiveWidth(2),
    borderBottomRightRadius: responsiveWidth(2),
  },
  image: {
    height: responsiveHeight(5.5),
    width: responsiveHeight(26.2),
    marginHorizontal:responsiveWidth(3),
    top: 5
  },

  imageDrawer: {
    height: responsiveHeight(7),
    width: responsiveHeight(7),
    marginHorizontal:responsiveWidth(7),
  },
  bottomContainer: {
    width: '90%',
    alignSelf: 'center',
    marginTop: responsiveWidth(2),
    marginLeft: responsiveWidth(5),
  },
  text: {
    fontSize: responsiveFontSize(1.3),
    fontFamily: 'bold',
    marginLeft: responsiveWidth(4),
  },
  text1: {
    fontSize: responsiveFontSize(2.5),
    fontFamily: 'bold',
    color: '#142F60',
    textAlign:'center',
  },
  tab: {
    flexDirection: 'row',
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: responsiveWidth(5),
    borderBottomWidth:1,
    borderColor:'#94B457',
    padding:15,
  },
  icon: {
    height: responsiveHeight(5),
    width: responsiveHeight(5),
    borderRadius: responsiveHeight(6),
    //backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText:
  {
    fontSize: responsiveFontSize(1.8),
    color: 'grey',
    fontWeight: 'bold'
  },
  button1:
  {
    height: responsiveHeight(7),
    width: responsiveWidth(43),
    borderRadius: responsiveWidth(2),
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: responsiveWidth(5),
    backgroundColor: '#4f95e0'

  },
  iconBack: {
    padding: 13,
},
});
