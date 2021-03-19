import React, { Component } from 'react';
import { View, StyleSheet, Button, Dimensions, Image, Text } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { TouchableOpacity } from 'react-native-gesture-handler';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
//const video = React.useRef(null);
export default class centerSplash extends Component {

    state = {

        showView: false,

    };
    _handleVideoRef = component => {
        const playbackObject = component;

    }

    async componentDidMount() {

    }

    onPress = () => {
        this.setState({
            showView: !this.state.showView,
        });
        setTimeout(() => {
            this.props.navigation.navigate("Question4Motion")
           }, 5000);
    };

    render() {

        return (
            <View style={styles.container}>
                <View style={styles.firstView}>
                    <View style={styles.imageHand}>
                        <Image style={styles.images}
                            source={require('../../Assets/Videos/Hand.png')}
                        >
                        </Image>
                    </View>
                    <View style={styles.imageIcecream}>
                        <Video
                            ref={this._handleVideoRef}
                            style={styles.images}
                            source={
                                require('../../Assets/Videos/cyclevideo_Afterage.mp4')
                            }
                            useNativeControls
                            resizeMode="cover"
                            shouldPlay={true}
                            isLooping
                        // onPlaybackStatusUpdate={status => setState({status:status}) }
                        />
                    </View>
                </View>

                <View style={styles.secondView}>
                    <View style={styles.imageIcecream}>
                        <Image style={styles.images}
                            source={require('../../Assets/Videos/icecream.png')}
                        >
                        </Image>
                    </View>

                    <View style={styles.imageIcecream}>
                        <Image style={styles.images}
                            source={require('../../Assets/Videos/women.png')}
                        >
                        </Image>
                    </View>
                </View>

                <View style={{
                    backgroundColor: 'white',
                    width: windowWidth / 1.2, height: windowHeight / 6,
                    position: 'absolute', borderRadius: responsiveHeight(1),
                    alignSelf: 'center', left: responsiveHeight(3), justifyContent: 'center', alignItems: 'center'
                }}>
                    <TouchableOpacity onPress={this.onPress}>
                        <Text style={{ fontSize: responsiveFontSize(2.7), textAlign: 'center', color: '#9fcf3c', }}>Did you know it has been shown 80 to 95% of dieters gain back the weight the have work so hard to lose? </Text>
                    </TouchableOpacity>
                </View>

                {this.state.showView ? (
                    <View style={{
                        backgroundColor: '#143060',
                        width: windowWidth / 1.5, height: windowHeight / 9,
                        position: 'absolute', alignSelf: 'center',
                        bottom: 250, left: responsiveHeight(7), justifyContent: 'center',
                        alignItems: 'center', borderRadius: responsiveHeight(1)
                    }}>
                        <Text style={{ fontSize: responsiveFontSize(4), textAlign: 'center', color: 'white', }}>OK, ready to tell us more? </Text>
                    </View>
                ) : null}
            </View>

        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: windowWidth,
        height: windowHeight,
        backgroundColor: 'white',
        flexDirection: 'row',
    },
    video: {
        backgroundColor: 'red',
        width: windowWidth / 2.1,
        height: windowHeight / 2.5,
        marginBottom: responsiveHeight(10),
    },
    images: {
        width: "95%",
        height: "95%",
    },
    imageHand: {
        width: windowWidth / 2,
        height: windowHeight / 3,
        marginTop: responsiveHeight(5),
    },
    imageIcecream: {
        width: windowWidth / 2,
        height: windowHeight / 2,
        //marginTop:responsiveHeight(5),
    },
    firstView: {
        width: windowWidth / 2,
        height: windowHeight,
        // backgroundColor:"red",
    },
    secondView: {
        width: windowWidth / 2,
        height: windowHeight - 20,
        marginTop: responsiveHeight(5),
    }
});