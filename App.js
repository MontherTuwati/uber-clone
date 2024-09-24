import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeWindStyleSheet } from "nativewind";
import React from 'react';
import { Image, Text, View } from 'react-native';
import { BookmarkIcon, HomeIcon, Squares2X2Icon, UserIcon } from 'react-native-heroicons/solid';
import { Provider } from 'react-redux';
import AccountScreen from './screens/AccountScreen';
import ActivityScreen from './screens/ActivityScreen';
import EatsScreen from "./screens/EatsScreen";
import HomeScreen from "./screens/HomeScreen";
import ServicesScreen from './screens/ServicesScreen';
import { store } from './store';

const TopTab = createMaterialTopTabNavigator();
const BottomTab = createBottomTabNavigator();

const CustomTabButton = ({ label, imageSource, color, onPress }) => {
  return (
    <View
      onPress={onPress}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 50,
      }}
    >
      <Image
        source={imageSource}
        style={{ width: 40, height: 40}}
        resizeMode="contain"
      />
      <Text style={{ marginLeft: 5, color, fontSize: 20, fontWeight: 'bold' }}>{label}</Text>
    </View>
  );
};

// Define the Top Tabs
const HomeTabs = () => {
    return (
        <TopTab.Navigator
        screenOptions={({ route }) => ({
          tabBarShowIcon: true,
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
          tabBarIndicatorStyle: {
            backgroundColor: 'black',
            height: 4,
          },
          tabBarStyle: { backgroundColor: 'white' },
          swipeEnabled: false,
          tabBarLabel: ({ color }) => {
            let imageSource;
  
            if (route.name === 'Rides') {
              imageSource = require('./assets/icons/UberX.png');
            } else if (route.name === 'Eats') {
              imageSource = require('./assets/icons/FoodBowl.png');
            }
  
            return (
              <CustomTabButton label={route.name} imageSource={imageSource} color={color} />
            );
          }
      })}
        >
            <TopTab.Screen name="Rides" component={HomeScreen} />
            <TopTab.Screen name="Eats" component={EatsScreen} />
        </TopTab.Navigator>
    );
};

// Define the Bottom Tabs
const BottomTabs = () => {
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          // Define icons for each bottom tab
          if (route.name === 'Home') {
            return <HomeIcon color={color} size={size} />;
          } else if (route.name === 'Services') {
            return <Squares2X2Icon color={color} size={size} />;
          } else if (route.name === 'Activity') {
            return <BookmarkIcon color={color} size={size} />;
          } else if (route.name === 'Account') {
            return <UserIcon color={color} size={size} />;
          }
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: 'white',
          height: 70,
          paddingBottom: 10,
          paddingTop: 10,
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
      })}
    >
      <BottomTab.Screen name="Home" component={HomeTabs} options={{ headerShown: false }}/>
      <BottomTab.Screen name="Services" component={ServicesScreen} />
      <BottomTab.Screen name="Activity" component={ActivityScreen} />
      <BottomTab.Screen name="Account" component={AccountScreen} />
    </BottomTab.Navigator>
  );
};

const Stack = createNativeStackNavigator();

NativeWindStyleSheet.setOutput({
  default: "native",
});


export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen name="Root" component={BottomTabs} options={{ headerShown: false }} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}