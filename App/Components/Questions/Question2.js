import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, SafeAreaView, Image, ImageBackground, TouchableOpacity, ScrollView, TextInput, FlatList, Alert } from 'react-native';
import { responsiveWidth, responsiveHeight, responsiveFontSize } from 'react-native-responsive-dimensions';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { Header, Avatar, colors } from 'react-native-elements';
import Constants from 'expo-constants';
import { Entypo,MaterialCommunityIcons } from '@expo/vector-icons';
export default class Question2 extends Component {

    state = {

       goalWeight:0,
    };


    async componentDidMount() {

    }

    async CheckValidateFn() {
        if(this.state.goalWeight != 0 || this.state.goalWeight != ''){
           return 0;
        }
        else{
            this.setState({ErrorMessege:'Goal weight value cannot be empty'})
            return 1;
        }

    }

    async ValidationFn() {
        this.setState({ loader: true });
        
        let TempCheck = await this.CheckValidateFn();
        
        switch (TempCheck) {
          case 0:
            this.goalWeightStorage();
            break;
          case 1:
            this.setState({ loader: false });
           // alert(this.state.ErrorMessege);
            break;
          default:
            break;
        }

    }
    async goalWeightStorage(){
      
        try {
            await AsyncStorage.setItem('goalWeight', this.state.goalWeight)
           
            this.props.navigation.navigate("Question3")
          } catch (e) {
            // saving error
          }
        
    }

    render() {
        return (
            <View
                style={styles.container}>
                <StatusBar backgroundColor="white" barStyle="light-content" translucent />
                <Header
              backgroundColor={'white'}
              leftComponent={
                <TouchableOpacity style={{
                  alignContent: 'flex-start',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start'
                }}
                onPress={() => {
                  this.props.navigation.goBack();
              }}
                >
                  <Entypo name="arrow-long-left" size={40} color="black" />
                </TouchableOpacity>
              }
             
              rightComponent={
                <TouchableOpacity style={{
                  alignContent: 'flex-start',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start'
                }}
                onPress={() => {
                  this.props.navigation.navigate("Home");
              }}
                >
                  <MaterialCommunityIcons name="home-assistant" size={40} color="black" />
                </TouchableOpacity>
              }
              statusBarProps={{ barStyle: 'light-content', translucent: true, backgroundColor: '#757575' }}
              containerStyle={{ borderBottomColor: '#85106a', borderBottomWidth: 0, color: 'red' }}
              style={{ backgroundColor: 'red', elevation: 5 }}
            />
        <ScrollView>
            <View style={styles.textbuttonView}>
                <Text style={styles.textbutton}>What is your goal weight?</Text>
             </View>
             <Text style={{textAlign:'center',color:'red',fontSize:15,}}>{this.state.ErrorMessege}</Text>
              
                <View style={styles.buttonView1}> 
                <TextInput
                        style={[styles.button,{width:200}]}
                        keyboardType="numeric"
                        placeholder={'Input here'}
                        placeholderTextColor={'black'}
                        value={this.state.goalWeight}
                        onChangeText={(text) => { this.setState({ goalWeight: text }) }}
            
                      
                />
                    
                    
                  
                    <TouchableOpacity
                        style={[styles.button,{  backgroundColor: "#143060",width:130,height:60}]}
                        onPress={() => this.ValidationFn()}
                        >
                        <Text style={[styles.textbutton,{color:'white',fontSize:20}]}>Next</Text>
                    </TouchableOpacity>
                   
                        
                </View>

              
                </ScrollView>
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
       alignItems: "center",
        justifyContent: 'center',
        //padding: 10,
        borderRadius: 7,
        width: 150,
        height: 70,
        marginTop: 50,
        borderWidth: 1,
        borderColor: "#9fcf3c",
        fontSize:20,
        textAlign: 'center',

    },
    textbutton: {
        color:'#9fcf3c',
        fontSize: responsiveFontSize(4),
        textAlign: 'center',
    },
    textbuttonView:{
    marginVertical:60,    
    },

    buttonView: {
        flex: 1,
        flexDirection: 'row',
        alignSelf:'center',
        // marginVertical: -100,
       // marginHorizontal: 40,

    },
    buttonView1: {
        flex: 150,
     alignItems: "center",
      

    },
    image: {
        width: responsiveWidth(70),
        height: responsiveHeight(17),
        marginVertical: 50,
        alignSelf: 'center',
    },
    image1: {
        width: responsiveWidth(80),
        height: responsiveHeight(15),
        //alignSelf: 'center',

    },

    logo: {
         alignSelf:'center',
         //marginTop:50,
          //top:10,
         bottom:0,
         //marginVertical:100,
        position:'absolute',
        } 
});





