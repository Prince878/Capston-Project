<<<<<<< HEAD
import * as React from 'react';
import Login from './components/login';
import Onboard from './components/Onboard';
import Emergency from './components/emergency';
import Register from './components/RegisterScreen';
import OnboardingScreen from './components/OnboardingScreen';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import DetailsPage from './components/manual_ambulance_booking';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/home';
import ContactUs from './components/contactUs';
import ChatScreen  from './components/ChatScreen';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RecoilRoot } from 'recoil';
import UserDetailsScreen from './components/UserDetailsScreen';
=======
import * as React from "react";
import Home from "./components/home";
import Login from "./components/login";
import Onboard from "./components/Onboard";
import { useEffect, useState } from "react";
import Emergency from "./components/emergency";
import ContactUs from "./components/contactUs";
import ChatScreen from "./components/ChatScreen";
import Register from "./components/RegisterScreen";
import { TailwindProvider } from "tailwindcss-react-native";
import OnboardingScreen from "./components/OnboardingScreen";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RecoilRoot } from "recoil";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AmbulanceBooking from "./components/AmbulanceBooking";
import ForgotScreen from "./components/ForgotScreen";
>>>>>>> dd518491bece56d6a31bb3ab9bce9cc39a58ad47

const Stack = createNativeStackNavigator();

export default function Navigation() {
  const [isFirstLaunch, setIsFirstLaunch] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem("alreadyLaunched").then((value) => {
      if (value === null) {
        AsyncStorage.setItem("alreadyLaunched", "true");
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []);

  return (
    <RecoilRoot>
<<<<<<< HEAD
    <TailwindProvider>
    <NavigationContainer>
    <Stack.Navigator initialRouteName="OnboardingScreen" >
         {!isFirstLaunch && (
        <Stack.Screen options={{ headerShown:false }} name="OnboardingScreen" component={OnboardingScreen} />) }
        <Stack.Screen options={{ headerShown:false }} name="Onboard" component={Onboard} />
        <Stack.Screen name="Emergency" component={Emergency} options={{headerShown: false}}/>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="Register" component={Register} options={{headerShown: false}}/>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Stack.Screen name='DetailsPage' component={DetailsPage} options={{headerShown: false}}/>
        <Stack.Screen name='ContactUs' component={ContactUs} options={{headerShown: false}}/>
        <Stack.Screen name='Chat' component={ChatScreen} options={{headerShown: false}}/>
        <Stack.Screen name='UserDetailsScreen' component={UserDetailsScreen} options={{ headerShown:false,}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
    </TailwindProvider>
=======
      <TailwindProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="OnboardingScreen">
            {!isFirstLaunch && (
              <Stack.Screen options={{ headerShown: false }}  name="OnboardingScreen" component={OnboardingScreen}/>
            )}
            <Stack.Screen options={{ headerShown: false }} name="Onboard" component={Onboard} />
            <Stack.Screen name="Emergency" component={Emergency} options={{ headerShown: false }}/>
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}  />
            <Stack.Screen name="Register" component={Register} options={{ headerShown: false }}/>
            <Stack.Screen name="ForgotScreen"  component={ForgotScreen}  options={{ headerShown: false }}  />
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="ContactUs" component={ContactUs} options={{ headerShown: false }} />
            <Stack.Screen name="Chat"  component={ChatScreen} options={{ headerShown: false }} />
            <Stack.Screen name="AmbulanceBooking"  component={AmbulanceBooking}  options={{ headerShown: false }}  />
          </Stack.Navigator>
        </NavigationContainer>
      </TailwindProvider>
>>>>>>> dd518491bece56d6a31bb3ab9bce9cc39a58ad47
    </RecoilRoot>
  );
}
