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
export default class Question14 extends Component {

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


    async componentDidMount() {

    }

    onPress = async (value) => {
        try {
            
            await AsyncStorage.setItem('Question15M1', value)
           //console.log("OKOIII",value)
           this.props.navigation.navigate("Question16")
  
          } catch (e) {
            // saving error
          }
      };

    render() {
        return (
            <View
                style={styles.container}>
                <StatusBar backgroundColor="white" barStyle="light-content" translucent />
            <ScrollView>
                <View style={styles.textbuttonView}>
                    <Text style={styles.textbutton}>Rate how well you can relate to the following statements.</Text>
                    <Text style={styles.textbutton1}>(1= i can't relate it all, 5=yup,thats me)</Text>
                </View>

                <View style={styles.buttonView}>
               
                <View style={styles.buttonView1}>
                    
                    <View
                        style={styles.button}
                    >
                        <Text style={styles.textbutton2}>I know what i should be doing to loose weight, but i can't fit it into my life</Text>
                    </View>  
                    
                    <View style={styles.options}>
                            
                            <TouchableOpacity  onPress={()=>this.onPress("1")} style={styles.optioncheck}> 
                                <Text style={styles.optionchecktext}>1</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={()=>this.onPress("1")} style={styles.optioncheck}> 
                                <Text style={styles.optionchecktext}>2</Text>
                            </TouchableOpacity>
                            <TouchableOpacity  onPress={()=>this.onPress("1")} style={styles.optioncheck}> 
                                <Text style={styles.optionchecktext}>3</Text>
                            </TouchableOpacity>
                            <TouchableOpacity  onPress={()=>this.onPress("1")} style={styles.optioncheck}> 
                                <Text style={styles.optionchecktext}>4</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>this.onPress("1")} style={styles.optioncheck}> 
                                <Text style={styles.optionchecktext}>5</Text>
                            </TouchableOpacity>

                    </View>

                    
                    

                </View>
                
                <View style={[styles.buttonView1,{marginVertical:0}]}>
                    
                    <View
                        style={styles.button}
                    >
                        <Text style={styles.textbutton2}>I know what i should be doing to loose weight, but i hate the gym and exercise</Text>
                    </View>  
                    
                    <View style={styles.options}>
                            
                            <TouchableOpacity  onPress={()=>this.onPress("1")} style={styles.optioncheck}> 
                                <Text style={styles.optionchecktext}>1</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={()=>this.onPress("1")} style={styles.optioncheck}> 
                                <Text style={styles.optionchecktext}>2</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>this.onPress("1")} style={styles.optioncheck}> 
                                <Text style={styles.optionchecktext}>3</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>this.onPress("1")} style={styles.optioncheck}> 
                                <Text style={styles.optionchecktext}>4</Text>
                            </TouchableOpacity>
                            <TouchableOpacity  onPress={()=>this.onPress("1")} style={styles.optioncheck}> 
                                <Text style={styles.optionchecktext}>5</Text>
                            </TouchableOpacity>

                    </View> 
                </View>

                <View style={[styles.buttonView1,{marginVertical:0}]}>
                    
                    <View
                        style={styles.button}
                    >
                        <Text style={styles.textbutton2}>I know what i should be doing to loose weight,and have tried my best,but i can't ever achive my goal</Text>
                    </View>  
                    
                    <View style={styles.options}>
                            
                            <TouchableOpacity onPress={()=>this.onPress("1")} style={styles.optioncheck}> 
                                <Text style={styles.optionchecktext}>1</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={()=>this.onPress("1")} style={styles.optioncheck}> 
                                <Text style={styles.optionchecktext}>2</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>this.onPress("1")} style={styles.optioncheck}> 
                                <Text style={styles.optionchecktext}>3</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>this.onPress("1")} style={styles.optioncheck}> 
                                <Text style={styles.optionchecktext}>4</Text>
                            </TouchableOpacity>
                            <TouchableOpacity  onPress={()=>this.onPress("1")} style={styles.optioncheck}> 
                                <Text style={styles.optionchecktext}>5</Text>
                            </TouchableOpacity>

                    </View> 
                </View>

                <View style={[styles.buttonView1,{marginVertical:0}]}>
                    
                    <View
                        style={styles.button}
                    >
                        <Text style={styles.textbutton2}>I am a fad dieter</Text>
                    </View>  
                    
                    <View style={styles.options}>
                            
                            <TouchableOpacity onPress={()=>this.onPress("1")} style={styles.optioncheck}> 
                                <Text style={styles.optionchecktext}>1</Text>
                            </TouchableOpacity>

                            <TouchableOpacity  onPress={()=>this.onPress("1")} style={styles.optioncheck}> 
                                <Text style={styles.optionchecktext}>2</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>this.onPress("1")}  style={styles.optioncheck}> 
                                <Text style={styles.optionchecktext}>3</Text>
                            </TouchableOpacity>
                            <TouchableOpacity  onPress={()=>this.onPress("1")} style={styles.optioncheck}> 
                                <Text style={styles.optionchecktext}>4</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>this.onPress("1")} style={styles.optioncheck}> 
                                <Text style={styles.optionchecktext}>5</Text>
                            </TouchableOpacity>

                    </View> 
                </View>

                <View style={[styles.buttonView1,{marginVertical:0}]}>
                    
                    <View
                        style={styles.button}
                    >
                        <Text style={styles.textbutton2}>i gave up easy</Text>
                    </View>  
                    
                    <View style={styles.options}>
                            
                            <TouchableOpacity onPress={()=>this.onPress("1")} style={styles.optioncheck}> 
                                <Text style={styles.optionchecktext}>1</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={()=>this.onPress("1")} style={styles.optioncheck}> 
                                <Text style={styles.optionchecktext}>2</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>this.onPress("1")} style={styles.optioncheck}> 
                                <Text style={styles.optionchecktext}>3</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>this.onPress("1")} style={styles.optioncheck}> 
                                <Text style={styles.optionchecktext}>4</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>this.onPress("1")} style={styles.optioncheck}> 
                                <Text style={styles.optionchecktext}>5</Text>
                            </TouchableOpacity>

                    </View> 
                </View>

                <View style={[styles.buttonView1,{marginVertical:0}]}>
                    
                    <View
                        style={styles.button}
                    >
                        <Text style={styles.textbutton2}>My weight and body image has affected my ability to sociallize and engage with family and friends and work, i am sick of it</Text>
                    </View>  
                    
                    <View style={[styles.options,{marginBottom:30,}]}>
                            
                            <TouchableOpacity  onPress={()=>this.onPress("1")} style={styles.optioncheck}> 
                                <Text  style={styles.optionchecktext}>1</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={()=>this.onPress("1")} style={styles.optioncheck}> 
                                <Text style={styles.optionchecktext}>2</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>this.onPress("1")} style={styles.optioncheck}> 
                                <Text style={styles.optionchecktext}>3</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>this.onPress("1")} style={styles.optioncheck}> 
                                <Text style={styles.optionchecktext}>4</Text>
                            </TouchableOpacity>
                            <TouchableOpacity  onPress={()=>this.onPress("1")} style={styles.optioncheck}> 
                                <Text style={styles.optionchecktext}>5</Text>
                            </TouchableOpacity>

                    </View> 
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
    options:{
    flexDirection:"row",
    flex: 1,
    alignSelf:"flex-end",
    padding:7,
    marginRight:15,
    justifyContent: "flex-end",
    
    },
    optionchecktext:{
        color:'white',
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        fontSize:17,
        textAlign: 'right',
    },
    optioncheck:{
        alignSelf:"flex-start",
        justifyContent:'center',
        backgroundColor:"#9FCF3C",
        width:60,
        height:30,
        margin:2,
        padding:7,
        borderRadius:7,
    },
    textbuttonView: {
        marginVertical: 40,
        // justifyContent: 'center',
        // alignContent: 'center',
        // alignItems: 'center',
    },
    button: {
        justifyContent: 'center',
        padding: 10,
        borderRadius: 7,
        width: 370,
        height: 50,
        fontSize:20,
        textAlign: 'center',
        backgroundColor: "#143060"
    },
    
    buttonOther: {
        alignItems: "center",
        justifyContent: 'center',
        padding: 10,
        borderRadius: 7,
        width: 170,
        height: 60,
        borderWidth: 1,
        fontSize: 20,
        textAlign: 'center',
       // backgroundColor: "#143060",
    },
    textbutton: {
        color: '#9fcf3c',
        fontSize: 30,
        textAlign: 'center',
    },
    textbutton1: {
        color: '#9fcf3c',
        fontSize: 17,
        textAlign: 'center',
    },
    textbutton2:{
    color:'white',
    fontSize: 14,
    //textAlign: 'center',
    padding:8,
},
    buttonView: {
        flex: 1,
        marginVertical:-20,
    },
    buttonView1: {
        // flexDirection: 'row',
        alignItems:"center",
        // justifyContent:'center',
        // padding:5,
    },
    image1: {
        width: responsiveWidth(80),
        height: responsiveHeight(15),
        alignSelf: 'center',

    },

    logo: {
        justifyContent: 'center',
        alignItems: 'center',
        //position: 'absolute', //Here is the trick
       // margin: 5,
        right: 0,
        bottom: 15,
    }
});





