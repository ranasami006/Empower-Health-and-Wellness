import * as React from 'react';
import { View, StyleSheet, Button, Dimensions } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default function Splash() {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    return (
        <View style={styles.container}>
            {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={styles.video1}>
                    <Video
                        ref={video}
                        style={styles.video}
                        source={
                            require('../../Assets/Video/MuteVideo1597115283720.mp4')
                        }
                        useNativeControls
                        resizeMode="cover"
                        shouldPlay={true}
                        isLooping
                        onPlaybackStatusUpdate={status => setStatus(() => status)}
                    />
                </View>

                <View style={[styles.video1, { marginHorizontal: 10 }]}>
                    <Video
                        ref={video}
                        style={styles.video}
                        source={
                            require('../../Assets/Video/MuteVideo1597115283720.mp4')
                        }
                        useNativeControls
                        resizeMode="cover"
                        shouldPlay={true}
                        isLooping
                        onPlaybackStatusUpdate={status => setStatus(() => status)}
                    />
                </View>
            </View>
            <View style={styles.video2}>
                <Video
                    ref={video}
                    style={[styles.video, { width: '100%'}]}
                    source={
                        require('../../Assets/Video/MuteVideo1597115283720.mp4')
                    }
                    useNativeControls
                    resizeMode="cover"
                    shouldPlay={true}
                    isLooping
                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                />
            </View> */}
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: windowWidth,
        height: windowHeight,
        backgroundColor: 'white',
    },
    video: {
        //alignSelf: 'center',
        width: '96%',
        height: '100%',
    },
    video1: {
        width: windowWidth / 2,
        height: windowHeight / 1.4,
        backgroundColor: 'white'
    },
    video2: {
        width: windowWidth,
        height: windowHeight / 3.5,
        backgroundColor: 'red',
        top: 10,
    }
});