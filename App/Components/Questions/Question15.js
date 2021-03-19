import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, SafeAreaView, Image, ImageBackground, TouchableOpacity, ScrollView, TextInput, FlatList, Alert } from 'react-native';
import { responsiveWidth, responsiveHeight, responsiveFontSize } from 'react-native-responsive-dimensions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Header, Avatar, colors } from 'react-native-elements';
import Constants from 'expo-constants';
import { Entypo,MaterialCommunityIcons } from '@expo/vector-icons';

export default class Question14 extends Component {

    state = {

        q1: '',
        q2: '',
        q3: '',
        q4: '',
        q5: '',
        q6: '',
        //q1:'',
    };

    async componentDidMount() {

    }
    async CheckValidateFn() {
        if (this.state.q1 != '' && this.state.q2 != '' && this.state.q3 != '' && this.state.q4 != '' && this.state.q5 != '' && this.state.q6 != '') {
            this.setState({ ErrorMessege: '' })
            return 0
        }
        else { 
            this.setState({ ErrorMessege: 'please select answers of all questions' })
            return 1;
        }

    }
    async ValidationFn() {
        this.setState({ loader: true });
        let TempCheck = await this.CheckValidateFn();

        switch (TempCheck) {
            case 0:
                this.calculateValues();
                break;
            case 1:
                this.setState({ loader: false });
                // alert(this.state.ErrorMessege);
                break;
            default:
                break;
        }

    }
    async calculateValues() {
        try {
            let Question1 = await AsyncStorage.getItem('Question1')
            let BMI = await AsyncStorage.getItem('BMI')
            let pounds = await AsyncStorage.getItem('pounds')
            let feet = await AsyncStorage.getItem('feet')
            let inches = await AsyncStorage.getItem('inches')
            let goalWeight = await AsyncStorage.getItem('goalWeight')
            let gender = await AsyncStorage.getItem('gender')
            let genderVal = await AsyncStorage.getItem('genderVal')
            let age = await AsyncStorage.getItem('age')
            let name = await AsyncStorage.getItem('name')
            let Question5 = await AsyncStorage.getItem('Question5')
            let Question6 = await AsyncStorage.getItem('Question6')
            let Question7 = await AsyncStorage.getItem('Question7')
            let Question8 = await AsyncStorage.getItem('Question8')
            let Question9 = await AsyncStorage.getItem('Question9')
            let Question10 = await AsyncStorage.getItem('Question10')
            let Question11 = await AsyncStorage.getItem('Question11')
            let Question12 = await AsyncStorage.getItem('Question12')
            let Question13 = await AsyncStorage.getItem('Question13')
            let Question14 = await AsyncStorage.getItem('Question14')

            let points=parseInt(Question1) + parseInt(genderVal) + parseInt(age)
            + parseInt(Question5)  + parseInt(Question6) + parseInt(Question7)
             + parseInt(Question9)
            + parseInt(Question11) 
           
            points=points-parseInt(this.state.q2)
            points=points-parseInt(this.state.q4)
            points=points-parseInt(this.state.q5)
            await AsyncStorage.setItem('points', points.toString())
            this.props.navigation.navigate("Question16")
  

          } catch(e) {
            // error reading value
          }
    }

    onPressQ1 = async (value) => {
        try {

            if (value === '1') {
                this.state.q1_1 ? this.setState({ q1_1: false }) :
                    this.setState({ q1: value, q1_1: true, q1_2: false, q1_3: false, q1_4: false, q1_5: false })
            }
            else if (value === '2') {
                this.state.q1_2 ? this.setState({ q1_2: false }) :
                    this.setState({ q1: value, q1_1: false, q1_2: true, q1_3: false, q1_4: false, q1_5: false })
            }
            else if (value === '3') {
                this.state.q1_3 ? this.setState({ q1_3: false }) :
                    this.setState({ q1: value, q1_1: false, q1_2: false, q1_3: true, q1_4: false, q1_5: false })
            }
            else if (value === '4') {
                this.state.q1_4 ? this.setState({ q1_4: false }) :
                    this.setState({ q1: value, q1_1: false, q1_2: false, q1_3: false, q1_4: true, q1_5: false })
            }
            else {
                this.state.q1_5 ? this.setState({ q1_5: false }) :
                    this.setState({ q1: value, q1_1: false, q1_2: false, q1_3: false, q1_4: false, q1_5: true })
            }
            //await AsyncStorage.setItem('', value)
            //this.props.navigation.navigate("Question16")

        } catch (e) {
            // saving error
        }
    };
    onPressQ2 = async (value) => {
        try {

            if (value === '1') {
                this.state.q2_1 ? this.setState({ q2_1: false }) :
                    this.setState({ q2: value, q2_1: true, q2_2: false, q2_3: false, q2_4: false, q2_5: false })
            }
            else if (value === '2') {
                this.state.q2_2 ? this.setState({ q2_2: false }) :
                    this.setState({ q2: value, q2_1: false, q2_2: true, q2_3: false, q2_4: false, q2_5: false })
            }
            else if (value === '3') {
                this.state.q2_3 ? this.setState({ q2_3: false }) :
                    this.setState({ q2: value, q2_1: false, q2_2: false, q2_3: true, q2_4: false, q2_5: false })
            }
            else if (value === '4') {
                this.state.q2_4 ? this.setState({ q2_4: false }) :
                    this.setState({ q2: value, q2_1: false, q2_2: false, q2_3: false, q2_4: true, q2_5: false })
            }
            else {
                this.state.q2_5 ? this.setState({ q2_5: false }) :
                    this.setState({ q2: value, q2_1: false, q2_2: false, q2_3: false, q2_4: false, q2_5: true })
            }
            //await AsyncStorage.setItem('', value)
            //this.props.navigation.navigate("Question16")

        } catch (e) {
            // saving error
        }
    };
    onPressQ3 = async (value) => {
        try {

            if (value === '1') {
                this.state.q3_1 ? this.setState({ q3_1: false }) :
                    this.setState({ q3: value, q3_1: true, q3_2: false, q3_3: false, q3_4: false, q3_5: false })
            }
            else if (value === '2') {
                this.state.q3_2 ? this.setState({ q3_2: false }) :
                    this.setState({ q3: value, q3_1: false, q3_2: true, q3_3: false, q3_4: false, q3_5: false })
            } else if (value === '3') {
                this.state.q3_3 ? this.setState({ q3_3: false }) :
                    this.setState({ q3: value, q3_1: false, q3_2: false, q3_3: true, q3_4: false, q3_5: false })
            } else if (value === '4') {
                this.state.q3_4 ? this.setState({ q3_4: false }) :
                    this.setState({ q3: value, q3_1: false, q3_2: false, q3_3: false, q3_4: true, q3_5: false })
            } else {
                this.state.q3_5 ? this.setState({ q3_5: false }) :
                    this.setState({ q3: value, q3_1: false, q3_2: false, q3_3: false, q3_4: false, q3_5: true })
            }  //await AsyncStorage.setItem('', value)
            //this.props.navigation.navigate("Question16")

        } catch (e) {
            // saving error
        }
    };
    onPressQ4 = async (value) => {
        try {

            if (value === '1') {
                this.state.q4_1 ? this.setState({ q4_1: false }) :
                    this.setState({ q4: value, q4_1: true, q4_2: false, q4_3: false, q4_4: false, q4_5: false })
            }
            else if (value === '2') {
                this.state.q4_2 ? this.setState({ q4_2: false }) :
                    this.setState({ q4: value, q4_1: false, q4_2: true, q4_3: false, q4_4: false, q4_5: false })
            } else if (value === '3') {
                this.state.q4_3 ? this.setState({ q4_3: false }) :
                    this.setState({ q4: value, q4_1: false, q4_2: false, q4_3: true, q4_4: false, q4_5: false })
            } else if (value === '4') {
                this.state.q4_4 ? this.setState({ q4_4: false }) :
                    this.setState({ q4: value, q4_1: false, q4_2: false, q4_3: false, q4_4: true, q4_5: false })
            } else {
                this.state.q4_5 ? this.setState({ q4_5: false }) :
                    this.setState({ q4: value, q4_1: false, q4_2: false, q4_3: false, q4_4: false, q4_5: true })
            }  //await AsyncStorage.setItem('', value)
            //this.props.navigation.navigate("Question16")

        } catch (e) {
            // saving error
        }
    };
    onPressQ5 = async (value) => {
        try {

            if (value === '1') {
                this.state.q5_1 ? this.setState({ q5_1: false }) :
                    this.setState({ q5: value, q5_1: true, q5_2: false, q5_3: false, q5_4: false, q5_5: false })
            }
            else if (value === '2') {
                this.state.q5_2 ? this.setState({ q5_2: false }) :
                    this.setState({ q5: value, q5_1: false, q5_2: true, q5_3: false, q5_4: false, q5_5: false })
            } else if (value === '3') {
                this.state.q5_3 ? this.setState({ q5_3: false }) :
                    this.setState({ q5: value, q5_1: false, q5_2: false, q5_3: true, q5_4: false, q5_5: false })
            } else if (value === '4') {
                this.state.q5_4 ? this.setState({ q5_4: false }) :
                    this.setState({ q5: value, q5_1: false, q5_2: false, q5_3: false, q5_4: true, q5_5: false })
            } else {
                this.state.q5_5 ? this.setState({ q5_5: false }) :
                    this.setState({ q5: value, q5_1: false, q5_2: false, q5_3: false, q5_4: false, q5_5: true })
            }  //await AsyncStorage.setItem('', value)
            //this.props.navigation.navigate("Question16")

        } catch (e) {
            // saving error
        }
    };
    onPressQ6 = async (value) => {
        try {

            if (value === '1') {
                this.state.q6_1 ? this.setState({ q6_1: false }) :
                    this.setState({ q6: value, q6_1: true, q6_2: false, q6_3: false, q6_4: false, q6_5: false })
            }
            else if (value === '2') {
                this.state.q6_2 ? this.setState({ q6_2: false }) :
                    this.setState({ q6: value, q6_1: false, q6_2: true, q6_3: false, q6_4: false, q6_5: false })
            } else if (value === '3') {
                this.state.q6_3 ? this.setState({ q6_3: false }) :
                    this.setState({ q6: value, q6_1: false, q6_2: false, q6_3: true, q6_4: false, q6_5: false })
            } else if (value === '4') {
                this.state.q6_4 ? this.setState({ q6_4: false }) :
                    this.setState({ q6: value, q6_1: false, q6_2: false, q6_3: false, q6_4: true, q6_5: false })
            } else {
                this.state.q6_5 ? this.setState({ q6_5: false }) :
                    this.setState({ q6: value, q6_1: false, q6_2: false, q6_3: false, q6_4: false, q6_5: true })
            }  //await AsyncStorage.setItem('', value)
            //this.props.navigation.navigate("Question16")

        } catch (e) {
            // saving error
        }
    };

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
                        <Text style={styles.textbutton}>Rate how well you can relate to the following statements.</Text>
                        <Text style={styles.textbutton1}> (1=I can’t relate at all, 5=Yup, that’s me)</Text>
                    </View>

                    <View style={styles.buttonView}>

                        <View style={styles.buttonView1}>

                            <View
                                style={styles.button}
                            >
                                <Text style={styles.textbutton2}>I know what I should be doing to lose weight, 
                                but I can’t fit it into my life.</Text>
                            </View>

                            <View style={styles.options}>
                                {this.state.q1_1 ?

                                    <TouchableOpacity onPress={(text) => this.onPressQ1("1")} style={styles.optioncheck1}>
                                        <Text style={styles.optionchecktext}>1</Text>
                                    </TouchableOpacity>
                                    :
                                    <TouchableOpacity onPress={(text) => this.onPressQ1("1")} style={styles.optioncheck}>
                                        <Text style={styles.optionchecktext}>1</Text>
                                    </TouchableOpacity>
                                }
                                {this.state.q1_2 ?
                                    <TouchableOpacity onPress={() => this.onPressQ1("2")} style={styles.optioncheck1}>
                                        <Text style={styles.optionchecktext}>2</Text>
                                    </TouchableOpacity>
                                    :
                                    <TouchableOpacity onPress={() => this.onPressQ1("2")} style={styles.optioncheck}>
                                        <Text style={styles.optionchecktext}>2</Text>
                                    </TouchableOpacity>
                                }
                                {this.state.q1_3 ?
                                    <TouchableOpacity onPress={() => this.onPressQ1("3")} style={styles.optioncheck1}>
                                        <Text style={styles.optionchecktext}>3</Text>
                                    </TouchableOpacity>
                                    : <TouchableOpacity onPress={() => this.onPressQ1("3")} style={styles.optioncheck}>
                                        <Text style={styles.optionchecktext}>3</Text>
                                    </TouchableOpacity>
                                }
                                {this.state.q1_4 ?
                                    <TouchableOpacity onPress={() => this.onPressQ1("4")} style={styles.optioncheck1}>
                                        <Text style={styles.optionchecktext}>4</Text>
                                    </TouchableOpacity>
                                    :
                                    <TouchableOpacity onPress={() => this.onPressQ1("4")} style={styles.optioncheck}>
                                        <Text style={styles.optionchecktext}>4</Text>
                                    </TouchableOpacity>
                                }
                                {this.state.q1_5 ?
                                    <TouchableOpacity onPress={() => this.onPressQ1("5")} style={styles.optioncheck1}>
                                        <Text style={styles.optionchecktext}>5</Text>
                                    </TouchableOpacity>

                                    :
                                    <TouchableOpacity onPress={() => this.onPressQ1("5")} style={styles.optioncheck}>
                                        <Text style={styles.optionchecktext}>5</Text>
                                    </TouchableOpacity>
                                }
                            </View>




                        </View>

                        <View style={[styles.buttonView1, { marginVertical: 0 }]}>

                            <View
                                style={styles.button}
                            >
                                <Text style={styles.textbutton2}>I know what I should be doing to lose weight, but I hate the gym and exercising.</Text>
                            </View>

                            <View style={styles.options}>
                                {this.state.q2_1 ?

                                    <TouchableOpacity onPress={(text) => this.onPressQ2("1")} style={styles.optioncheck1}>
                                        <Text style={styles.optionchecktext}>1</Text>
                                    </TouchableOpacity>
                                    :
                                    <TouchableOpacity onPress={(text) => this.onPressQ2("1")} style={styles.optioncheck}>
                                        <Text style={styles.optionchecktext}>1</Text>
                                    </TouchableOpacity>
                                }
                                {this.state.q2_2 ?
                                    <TouchableOpacity onPress={() => this.onPressQ2("2")} style={styles.optioncheck1}>
                                        <Text style={styles.optionchecktext}>2</Text>
                                    </TouchableOpacity>
                                    :
                                    <TouchableOpacity onPress={() => this.onPressQ2("2")} style={styles.optioncheck}>
                                        <Text style={styles.optionchecktext}>2</Text>
                                    </TouchableOpacity>
                                }
                                {this.state.q2_3 ?
                                    <TouchableOpacity onPress={() => this.onPressQ2("3")} style={styles.optioncheck1}>
                                        <Text style={styles.optionchecktext}>3</Text>
                                    </TouchableOpacity>
                                    : <TouchableOpacity onPress={() => this.onPressQ2("3")} style={styles.optioncheck}>
                                        <Text style={styles.optionchecktext}>3</Text>
                                    </TouchableOpacity>
                                }
                                {this.state.q2_4 ?
                                    <TouchableOpacity onPress={() => this.onPressQ2("4")} style={styles.optioncheck1}>
                                        <Text style={styles.optionchecktext}>4</Text>
                                    </TouchableOpacity>
                                    :
                                    <TouchableOpacity onPress={() => this.onPressQ2("4")} style={styles.optioncheck}>
                                        <Text style={styles.optionchecktext}>4</Text>
                                    </TouchableOpacity>
                                }
                                {this.state.q2_5 ?
                                    <TouchableOpacity onPress={() => this.onPressQ2("5")} style={styles.optioncheck1}>
                                        <Text style={styles.optionchecktext}>5</Text>
                                    </TouchableOpacity>

                                    :
                                    <TouchableOpacity onPress={() => this.onPressQ2("5")} style={styles.optioncheck}>
                                        <Text style={styles.optionchecktext}>5</Text>
                                    </TouchableOpacity>
                                }
                            </View>

                        </View>

                        <View style={[styles.buttonView1, { marginVertical: 0 }]}>

                            <View
                                style={styles.button}
                            >
                                <Text style={styles.textbutton2}>I know what I should be doing to lose weight, and have tried my best, but I can’t ever achieve my goal.</Text>
                            </View>

                            <View style={styles.options}>
                                {this.state.q3_1 ?

                                    <TouchableOpacity onPress={(text) => this.onPressQ3("1")} style={styles.optioncheck1}>
                                        <Text style={styles.optionchecktext}>1</Text>
                                    </TouchableOpacity>
                                    :
                                    <TouchableOpacity onPress={(text) => this.onPressQ3("1")} style={styles.optioncheck}>
                                        <Text style={styles.optionchecktext}>1</Text>
                                    </TouchableOpacity>
                                }
                                {this.state.q3_2 ?
                                    <TouchableOpacity onPress={() => this.onPressQ3("2")} style={styles.optioncheck1}>
                                        <Text style={styles.optionchecktext}>2</Text>
                                    </TouchableOpacity>
                                    :
                                    <TouchableOpacity onPress={() => this.onPressQ3("2")} style={styles.optioncheck}>
                                        <Text style={styles.optionchecktext}>2</Text>
                                    </TouchableOpacity>
                                }
                                {this.state.q3_3 ?
                                    <TouchableOpacity onPress={() => this.onPressQ3("3")} style={styles.optioncheck1}>
                                        <Text style={styles.optionchecktext}>3</Text>
                                    </TouchableOpacity>
                                    : <TouchableOpacity onPress={() => this.onPressQ3("3")} style={styles.optioncheck}>
                                        <Text style={styles.optionchecktext}>3</Text>
                                    </TouchableOpacity>
                                }
                                {this.state.q3_4 ?
                                    <TouchableOpacity onPress={() => this.onPressQ3("4")} style={styles.optioncheck1}>
                                        <Text style={styles.optionchecktext}>4</Text>
                                    </TouchableOpacity>
                                    :
                                    <TouchableOpacity onPress={() => this.onPressQ3("4")} style={styles.optioncheck}>
                                        <Text style={styles.optionchecktext}>4</Text>
                                    </TouchableOpacity>
                                }
                                {this.state.q3_5 ?
                                    <TouchableOpacity onPress={() => this.onPressQ3("5")} style={styles.optioncheck1}>
                                        <Text style={styles.optionchecktext}>5</Text>
                                    </TouchableOpacity>

                                    :
                                    <TouchableOpacity onPress={() => this.onPressQ3("5")} style={styles.optioncheck}>
                                        <Text style={styles.optionchecktext}>5</Text>
                                    </TouchableOpacity>
                                }
                            </View>

                        </View>

                        <View style={[styles.buttonView1, { marginVertical: 0 }]}>

                            <View
                                style={styles.button}
                            >
                                <Text style={styles.textbutton2}>I am a fad dieter.</Text>
                            </View>

                            <View style={styles.options}>
                                {this.state.q4_1 ?

                                    <TouchableOpacity onPress={(text) => this.onPressQ4("1")} style={styles.optioncheck1}>
                                        <Text style={styles.optionchecktext}>1</Text>
                                    </TouchableOpacity>
                                    :
                                    <TouchableOpacity onPress={(text) => this.onPressQ4("1")} style={styles.optioncheck}>
                                        <Text style={styles.optionchecktext}>1</Text>
                                    </TouchableOpacity>
                                }
                                {this.state.q4_2 ?
                                    <TouchableOpacity onPress={() => this.onPressQ4("2")} style={styles.optioncheck1}>
                                        <Text style={styles.optionchecktext}>2</Text>
                                    </TouchableOpacity>
                                    :
                                    <TouchableOpacity onPress={() => this.onPressQ4("2")} style={styles.optioncheck}>
                                        <Text style={styles.optionchecktext}>2</Text>
                                    </TouchableOpacity>
                                }
                                {this.state.q4_3 ?
                                    <TouchableOpacity onPress={() => this.onPressQ4("3")} style={styles.optioncheck1}>
                                        <Text style={styles.optionchecktext}>3</Text>
                                    </TouchableOpacity>
                                    : <TouchableOpacity onPress={() => this.onPressQ4("3")} style={styles.optioncheck}>
                                        <Text style={styles.optionchecktext}>3</Text>
                                    </TouchableOpacity>
                                }
                                {this.state.q4_4 ?
                                    <TouchableOpacity onPress={() => this.onPressQ4("4")} style={styles.optioncheck1}>
                                        <Text style={styles.optionchecktext}>4</Text>
                                    </TouchableOpacity>
                                    :
                                    <TouchableOpacity onPress={() => this.onPressQ4("4")} style={styles.optioncheck}>
                                        <Text style={styles.optionchecktext}>4</Text>
                                    </TouchableOpacity>
                                }
                                {this.state.q4_5 ?
                                    <TouchableOpacity onPress={() => this.onPressQ4("5")} style={styles.optioncheck1}>
                                        <Text style={styles.optionchecktext}>5</Text>
                                    </TouchableOpacity>

                                    :
                                    <TouchableOpacity onPress={() => this.onPressQ4("5")} style={styles.optioncheck}>
                                        <Text style={styles.optionchecktext}>5</Text>
                                    </TouchableOpacity>
                                }
                            </View>

                        </View>

                        <View style={[styles.buttonView1, { marginVertical: 0 }]}>

                            <View
                                style={styles.button}
                            >
                                <Text style={styles.textbutton2}>I give up easily.</Text>
                            </View>

                            <View style={styles.options}>
                                {this.state.q5_1 ?

                                    <TouchableOpacity onPress={(text) => this.onPressQ5("1")} style={styles.optioncheck1}>
                                        <Text style={styles.optionchecktext}>1</Text>
                                    </TouchableOpacity>
                                    :
                                    <TouchableOpacity onPress={(text) => this.onPressQ5("1")} style={styles.optioncheck}>
                                        <Text style={styles.optionchecktext}>1</Text>
                                    </TouchableOpacity>
                                }
                                {this.state.q5_2 ?
                                    <TouchableOpacity onPress={() => this.onPressQ5("2")} style={styles.optioncheck1}>
                                        <Text style={styles.optionchecktext}>2</Text>
                                    </TouchableOpacity>
                                    :
                                    <TouchableOpacity onPress={() => this.onPressQ5("2")} style={styles.optioncheck}>
                                        <Text style={styles.optionchecktext}>2</Text>
                                    </TouchableOpacity>
                                }
                                {this.state.q5_3 ?
                                    <TouchableOpacity onPress={() => this.onPressQ5("3")} style={styles.optioncheck1}>
                                        <Text style={styles.optionchecktext}>3</Text>
                                    </TouchableOpacity>
                                    : <TouchableOpacity onPress={() => this.onPressQ5("3")} style={styles.optioncheck}>
                                        <Text style={styles.optionchecktext}>3</Text>
                                    </TouchableOpacity>
                                }
                                {this.state.q5_4 ?
                                    <TouchableOpacity onPress={() => this.onPressQ5("4")} style={styles.optioncheck1}>
                                        <Text style={styles.optionchecktext}>4</Text>
                                    </TouchableOpacity>
                                    :
                                    <TouchableOpacity onPress={() => this.onPressQ5("4")} style={styles.optioncheck}>
                                        <Text style={styles.optionchecktext}>4</Text>
                                    </TouchableOpacity>
                                }
                                {this.state.q5_5 ?
                                    <TouchableOpacity onPress={() => this.onPressQ5("5")} style={styles.optioncheck1}>
                                        <Text style={styles.optionchecktext}>5</Text>
                                    </TouchableOpacity>

                                    :
                                    <TouchableOpacity onPress={() => this.onPressQ5("5")} style={styles.optioncheck}>
                                        <Text style={styles.optionchecktext}>5</Text>
                                    </TouchableOpacity>
                                }
                            </View>

                        </View>

                        <View style={[styles.buttonView1, { marginVertical: 0 }]}>

                            <View
                                style={styles.button}
                            >
                                <Text style={styles.textbutton2}>

                                My weight and body image have affected my ability to socialize and engage with family and friends. 
                                </Text>
                            </View>

                            <View style={[styles.options, { marginBottom: 30, }]}>


                                {this.state.q6_1 ?

                                    <TouchableOpacity onPress={(text) => this.onPressQ6("1")} style={styles.optioncheck1}>
                                        <Text style={styles.optionchecktext}>1</Text>
                                    </TouchableOpacity>
                                    :
                                    <TouchableOpacity onPress={(text) => this.onPressQ6("1")} style={styles.optioncheck}>
                                        <Text style={styles.optionchecktext}>1</Text>
                                    </TouchableOpacity>
                                }
                                {this.state.q6_2 ?
                                    <TouchableOpacity onPress={() => this.onPressQ6("2")} style={styles.optioncheck1}>
                                        <Text style={styles.optionchecktext}>2</Text>
                                    </TouchableOpacity>
                                    :
                                    <TouchableOpacity onPress={() => this.onPressQ6("2")} style={styles.optioncheck}>
                                        <Text style={styles.optionchecktext}>2</Text>
                                    </TouchableOpacity>
                                }
                                {this.state.q6_3 ?
                                    <TouchableOpacity onPress={() => this.onPressQ6("3")} style={styles.optioncheck1}>
                                        <Text style={styles.optionchecktext}>3</Text>
                                    </TouchableOpacity>
                                    : <TouchableOpacity onPress={() => this.onPressQ6("3")} style={styles.optioncheck}>
                                        <Text style={styles.optionchecktext}>3</Text>
                                    </TouchableOpacity>
                                }
                                {this.state.q6_4 ?
                                    <TouchableOpacity onPress={() => this.onPressQ6("4")} style={styles.optioncheck1}>
                                        <Text style={styles.optionchecktext}>4</Text>
                                    </TouchableOpacity>
                                    :
                                    <TouchableOpacity onPress={() => this.onPressQ6("4")} style={styles.optioncheck}>
                                        <Text style={styles.optionchecktext}>4</Text>
                                    </TouchableOpacity>
                                }
                                {this.state.q6_5 ?
                                    <TouchableOpacity onPress={() => this.onPressQ6("5")} style={styles.optioncheck1}>
                                        <Text style={styles.optionchecktext}>5</Text>
                                    </TouchableOpacity>

                                    :
                                    <TouchableOpacity onPress={() => this.onPressQ6("5")} style={styles.optioncheck}>
                                        <Text style={styles.optionchecktext}>5</Text>
                                    </TouchableOpacity>
                                }



                            </View>
                        </View>
                        <Text style={{ marginHorizontal:15, color: 'red', fontSize: 15, }}>{this.state.ErrorMessege}</Text>
                        <View style={[styles.logo, { alignSelf: 'flex-end', marginRight: 20 }]}>
                            <TouchableOpacity
                                style={[styles.optioncheck, { backgroundColor: "#143060" }]}
                                onPress={() => this.ValidationFn()}

                            >
                                <Text style={[styles.optionchecktext, { color: 'white' }]}>Next</Text>
                            </TouchableOpacity>
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
    options: {
        flexDirection: "row",
        flex: 1,
        alignSelf: "flex-end",
        padding: 7,
        marginRight: 15,
        justifyContent: "flex-end",

    },
    optionchecktext: {
        color: 'white',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 17,
        textAlign: 'right',
    },
    optioncheck: {
        alignSelf: "flex-start",
        justifyContent: 'center',
        backgroundColor: "#9FCF3C",
        width: 60,
        height: 30,
        margin: 2,
        padding: 7,
        borderRadius: 7,
    },
    optioncheck1: {
        alignSelf: "flex-start",
        justifyContent: 'center',
        backgroundColor: "#143060",
        width: 60,
        height: 30,
        margin: 2,
        padding: 7,
        borderRadius: 7,
    },
    textbuttonView: {
        marginVertical: 20,
        // justifyContent: 'center',
        // alignContent: 'center',
        // alignItems: 'center',
    },
    button: {
        justifyContent: 'center',
        padding: 10,
        borderRadius: 7,
        width: 370,
        height: 70,
        fontSize: 20,
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
    textbutton2: {
        color: 'white',
        fontSize: 14,
        //textAlign: 'center',
        padding: 8,
    },
    buttonView: {
        flex: 1,
        marginVertical: -20,
    },
    buttonView1: {
        // flexDirection: 'row',
        alignItems: "center",
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





