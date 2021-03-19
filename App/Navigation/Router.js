
import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React , { useState, useEffect } from 'react';
import { Platform, Image, StyleSheet, Text, View, ScrollView, SafeAreaView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer'; 
import StartScreen from '../Components/Start/StartScreen'
import Question from '../Components/Questions/Question'
import Question1 from '../Components/Questions/Question1'
import Question2 from '../Components/Questions/Question2'
import Question3 from '../Components/Questions/Question3'
import Question4 from '../Components/Questions/Question4'
import Question5 from '../Components/Questions/Question5'

import Question6 from '../Components/Questions/Question6'
import Question7 from '../Components/Questions/Question7'
import Question8 from '../Components/Questions/Question8'
import Question9 from '../Components/Questions/Question9'
import Question10 from '../Components/Questions/Question10'
import Question11 from '../Components/Questions/Question11'
import Question12 from '../Components/Questions/Question12'
import Question13 from '../Components/Questions/Question13'
import Question14 from '../Components/Questions/Question14'
import Question15 from '../Components/Questions/Question15'
import Question16 from '../Components/Questions/Question16'
import Question17 from '../Components/Questions/Question17'
import Question18 from '../Components/Questions/Question18'
import Question19 from '../Components/Questions/Question19'
import Question20 from '../Components/Questions/Question20'
import Question21 from '../Components/Questions/Question21'
import Question22 from '../Components/Questions/Question22'
import Question23 from '../Components/Questions/Question23'

import Question4Motion from '../Components/Questions/Question4Motion'

import Question1Part2 from '../Components/Questions/Question1Part2'


import Graphics from '../Components/Graphics/Graphics'

import GraphicWeight from '../Components/Graphics/GraphicWeight'

import Graphics2 from '../Components/Graphics/Graphics2'
import CelebrationGraphics from '../Components/Graphics/CelebrationGraphics'

import QEnd1 from '../Components/End/QEnd1'
import QEnd2 from '../Components/End/QEnd2'
import CustomDrawer from './CustomeDrawer'

import Home from '../Components/Home/Home'
import Enroll from '../Components/Home/Enroll'
import Ourteam from '../Components/Home/Ourteam'
import Aboutus from '../Components/Home/Aboutus'
import  Splash  from "../Components/Splash/Splash";
import  centerSplash  from "../Components/Splash/centerSplash";

import { preventAutoHideAsync, hideAsync } from 'expo-splash-screen';
import { Asset } from 'expo-asset';
import  AppLoading  from 'expo-app-loading';
hideAsync().catch(console.warn);
console.disableYellowBox = true
const Drawer = createDrawerNavigator();
const MainStack = createStackNavigator();
const OverViewStack = createStackNavigator();
//const AppTabNavigator = createBottomTabNavigator();

const Main = () => {
    return (

        <MainStack.Navigator initialRouteName="Home" 
        screenOptions={{ headerShown: false, gestureEnabled: true, animationEnabled:true,}} >
            <MainStack.Screen name="Home" component={Home} />
            <MainStack.Screen name="Ourteam" component={Ourteam} />
            <MainStack.Screen name="Enroll" component={Enroll} />
            <MainStack.Screen name="Aboutus" component={Aboutus} />
            <MainStack.Screen name="Splash" component={Splash} />
            <MainStack.Screen name="centerSplash" component={centerSplash} />

            <MainStack.Screen name="StartScreen" component={StartScreen} />
            <MainStack.Screen name="Question" component={Question} />
            <MainStack.Screen name="Question1" component={Question1} />
            <MainStack.Screen name="Question2" component={Question2} />
            <MainStack.Screen name="Question1Part2" component={Question1Part2} />
            <MainStack.Screen name="Question3" component={Question3} />
            <MainStack.Screen name="Question4" component={Question4} />
            <MainStack.Screen name="Question5" component={Question5} />
            <MainStack.Screen name="Question6" component={Question6} />
            <MainStack.Screen name="Question7" component={Question7} />
            <MainStack.Screen name="Question8" component={Question8} />
            <MainStack.Screen name="Question9" component={Question9} />
            <MainStack.Screen name="Question10" component={Question10} />
            <MainStack.Screen name="Question11" component={Question11} />
            <MainStack.Screen name="Question12" component={Question12} />
            <MainStack.Screen name="Question13" component={Question13} />
            <MainStack.Screen name="Question14" component={Question14} />
            <MainStack.Screen name="Question15" component={Question15} />
            <MainStack.Screen name="Question16" component={Question16} />
            <MainStack.Screen name="Question17" component={Question17} />
            <MainStack.Screen name="Question18" component={Question18} />
            <MainStack.Screen name="Question19" component={Question19} />
            <MainStack.Screen name="Question20" component={Question20} />
            <MainStack.Screen name="Question21" component={Question21} />
            <MainStack.Screen name="Question22" component={Question22} />
            <MainStack.Screen name="Question23" component={Question23} />

            <MainStack.Screen name="Graphics" component={Graphics} />
            <MainStack.Screen name="GraphicWeight" component={GraphicWeight} />
            
            <MainStack.Screen name="Graphics2" component={Graphics2} />
            <MainStack.Screen name="CelebrationGraphics" component={CelebrationGraphics} />
            <MainStack.Screen name="QEnd1" component={QEnd1} />
            <MainStack.Screen name="QEnd2" component={QEnd2} />
            <MainStack.Screen name="Question4Motion" component={Question4Motion} />
            
        </MainStack.Navigator>
    );

}

Main.navigationOptions = ({ navigation }) => {
    let drawerLockMode = 'unlocked';
    if (navigation.state.key > 0) {
      drawerLockMode = 'locked-closed';
    }
  
    return {
      drawerLockMode,
    };
  };
  
const view = () => {
    return (

        <OverViewStack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false, gestureEnabled: false }} >
            <OverViewStack.Screen name="Home1" component={Home1} />
          </OverViewStack.Navigator>
    );

}
const card = () => {
    return (

        <OverViewStack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false, gestureEnabled: false }} >
            <OverViewStack.Screen name="Home" component={Home} />
              </OverViewStack.Navigator>
    );

}
// const Tab = () => {
//     return (
//         <AppTabNavigator.Navigator screenOptions={({ route }) => ({
//             tabBarIcon: ({ focused, color, size }) => {
//                 let iconName;
//                 if (route.name === 'OverView') {
//                     iconName = focused ? 'circle-slice-7' : 'circle-slice-7';
//                 } else if (route.name === 'Notifications') {
//                     iconName = focused ? 'bell-outline' : 'bell-outline';
//                 } else if (route.name === ' ') {
//                     iconName = focused ? 'plus-box-outline' : 'plus-box-outline';
//                     size = focused ? 40 : 40
//                 }
//                 else if (route.name === 'History') {
//                     iconName = focused ? 'history' : 'history';
//                 } else if (route.name === 'News') {
//                     iconName = focused ? 'alpha-n-box' : 'alpha-n-box';
//                 }
//                 return <MaterialCommunityIcons name={iconName} size={size} color={color} />
//             },
//             // tabBarBadge: ({ focused, color, size }) => {
//             //     if (route.name === 'OverView') {

//             //     style=
//             //     {
//             //         height:12
//             //     }
//             // }
//             // }
//         })}


//             tabBarOptions={{
//                 activeTintColor: '#25435f',
//                 inactiveTintColor: '#fff',
//                 style: {
//                     backgroundColor: '#1ab6ff',
//                     alignItems: 'center'
//                 },
//             }}
//         >
//             <AppTabNavigator.Screen name="OverView" component={view} />
//             <AppTabNavigator.Screen name="Notifications" component={Notifications} 
//             />
//             <AppTabNavigator.Screen name={' '} component={card} />
//             <AppTabNavigator.Screen name="News" component={News} />
//             <AppTabNavigator.Screen name="History" component={History} />
           
            

//         </AppTabNavigator.Navigator >


//     );
// }


//SplashScreen.hideAsync();
  export default App = () => {
    const [isLoadingSplash, setIsLoadingSplash] = useState(true);
    const init = (): void => {
      setTimeout(async () => {
        hideAsync().catch(console.warn);
        setIsLoadingSplash(false);
      }, 5000);
    };
  
    useEffect(() => {
      init();
    }, []);
  
    
   
  
    return (
        <>
      {isLoadingSplash && <Splash />}
      {!isLoadingSplash && (
        <NavigationContainer>
            {/* <Main /> */}
            <Drawer.Navigator initialRouteName="Main"
                screenOptions={{ headerShown: false, gestureEnabled: true, animationEnabled:false,gestureResponseDistance: {horizontal: 20} }} 
                edgeWidth={0}
                drawerContent={props => <CustomDrawer {...props} />}
                statusBarAnimation={'slide'}
                hideStatusBar={false}
                  drawerStyle={{
                    backgroundColor: '#fff',
                    width: responsiveWidth(70),
                    borderTopRightRadius: 5,
                }}>
                
                <Drawer.Screen name="Main" component={Main} 
                screenOptions={{ headerShown: false, gestureEnabled: true, animationEnabled:false }} 
                />
            </Drawer.Navigator>
        </NavigationContainer>
        )}
      </>
       
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


