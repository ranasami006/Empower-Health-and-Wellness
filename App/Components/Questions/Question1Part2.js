import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, SafeAreaView, Image, ImageBackground, TouchableOpacity, ScrollView, TextInput, FlatList, Alert } from 'react-native';
import { responsiveWidth, responsiveHeight, responsiveFontSize } from 'react-native-responsive-dimensions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Header, Avatar, colors } from 'react-native-elements';
import Constants from 'expo-constants';
import { Entypo,MaterialCommunityIcons } from '@expo/vector-icons';
export default class Question1Part2 extends Component {

    state = {
        feet:"",
        inches:"",
        pounds:"",
        ErrorMessege:''
    };
    onChangeTextFeet = (text) => {
        const numericRegex = /^([0-9]{1,100})+$/
        if(numericRegex.test(text)) {
            this.setState({ shippingCharge: text })
        }
    }

    async componentDidMount() {
        // try {
        //     const value = await AsyncStorage.getItem('Question1')
        //     if(value !== null) {
        //       console.log("Value is  ==== ", value)
        //     }
        //   } catch(e) {
        //     // error reading value
        //   }
    }
    async CheckValidateFn() {
        if(this.state.feet != 0 || this.state.feet != ''){
            if(this.state.inches != 0 || this.state.inches != ''){
                if(this.state.pounds != 0 || this.state.pounds != ''){
                    return 0;
                }
                else{
                    this.setState({ErrorMessege:'Weight value cannot be empty'})
                    return 1;
                }   
            }
            else{
                this.setState({ErrorMessege:'Inches value cannot be empty'})
                return 1;
            }
        }
        else{
            this.setState({ErrorMessege:'Feet value cannot be empty'})
            return 1;
        }

    }

    async ValidationFn() {
        this.setState({ loader: true });
        let TempCheck = await this.CheckValidateFn();
    
        switch (TempCheck) {
          case 0:
            this.weightStorage();
            break;
          case 1:
            this.setState({ loader: false });
           // alert(this.state.ErrorMessege);
            break;
          default:
            break;
        }

    }
    async weightStorage(){
        try {
          //  BMI = (weight (lb) ÷ height2 (in)) * 703
         
            let heightInches= (12*this.state.feet) + parseInt( this.state.inches ) 
            let heightBMI=heightInches*heightInches
            let BMI= (this.state.pounds/heightBMI)*703;
           // console.log("BMIII ",BMI);
            await AsyncStorage.setItem('pounds', this.state.pounds)
            await AsyncStorage.setItem('feet', this.state.feet)
            await AsyncStorage.setItem('inches', this.state.inches)
            await AsyncStorage.setItem('BMI', BMI.toString())
            
            this.props.navigation.navigate("Question2")
          } catch (e) {
            // saving error
          }
        
    }



    render() {
        return (
            <View
                style={styles.container}>
                <StatusBar backgroundColor="white" barStyle="light-content" translucent />
                <View style={{ marginTop: 0, backgroundColor: 'grey' }}>
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
          </View>
        <ScrollView>
                <Image source={require('../../Assets/TextQuestion1part2.png')} style={styles.image}></Image>
                <Text style={{textAlign:'center',color:'red',fontSize:15,}}>{this.state.ErrorMessege}</Text>
                <View style={styles.buttonView}>
                   <TextInput
                        editable
                        style={styles.button} 
                        keyboardType="numeric"
                        placeholder={'Feet'}
                        placeholderTextColor={'black'}      
                        placeholderStyle={{ color:'white' }}
                        value={this.state.feet}
                        onChangeText={(text) => { this.setState({ feet: text }) }}          
                />

                <TextInput
                       style={[styles.button, { marginLeft: 40 }]}
                         placeholder={'Inches'}
                        placeholderTextColor={'black'}
                        keyboardType="numeric"
                        placeholderStyle={{ color:'white' }}
                        value={this.state.inches}
                        onChangeText={(text) => { this.setState({ inches: text }) }}     
                />
                   
                </View>  
                <View style={styles.buttonView1}> 
                <TextInput
                        style={[styles.button,{width:200}]}
                        keyboardType="numeric"
                        placeholder={'Pounds'}
                        placeholderTextColor={'black'}
                        
                       
                        value={this.state.pounds}
                        onChangeText={(text) => { this.setState({ pounds: text }) }}
            
                      
                />
                            
                    <TouchableOpacity
                        style={[styles.button,{  backgroundColor: "#143060",width:130,height:60}]}
                        onPress={() => this.ValidationFn()}
           
                    >
                        <Text style={[styles.textbutton,{color:'white'}]}>Next</Text>
                    </TouchableOpacity>
                   <View style={{margin:10}}>
                        <Text style={[styles.textbutton,{color:'#9fcf3c',fontSize: 25,}]}>(Accuracy matters!)</Text>
                    </View>
                    <View style={styles.logo}>
                    <Image source={require('../../Assets/Logo/LogoBlue.png')} style={styles.image1}></Image>
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
    button: {
        alignItems: "center",
        justifyContent: 'center',
        padding: 10,
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
        //color:'white',
        fontSize: 20,
        textAlign: 'center',
        //fontWeight: "bold"
        //margin:50,
    },

    buttonView: {
        flex: 1,
        flexDirection: 'row',
        alignSelf:'center',

    },
    buttonView1: {
        flex: 150,
       
        alignItems: "center",
       
    },
    image: {
        width: responsiveWidth(79),
        height: responsiveHeight(15),
      //  marginVertical: 50,
        alignSelf: 'center',
    },
    image1: {
        width: responsiveWidth(80),
        height: responsiveHeight(15),
        //marginVertical:-10,
        //alignSelf: 'center',

    },

    logo: {
       alignSelf:'center',
      //  position: 'absolute', //Here is the trick
        bottom: 0,
       // top:0,
    }
});





