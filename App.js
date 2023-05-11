import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import OnboardingScreens from "./screens/OnboardingScreens";
import Register from "./screens/Register";
import Login from "./screens/Login";

// import botton tab navigaton
import HomeScreen from "./screens/HomeScreen";
import Shop from "./screens/Shop";
import Chat from "./screens/Chat";
import Profile from "./screens/Profile";

import { Feather, Ionicons } from "@expo/vector-icons";

import colors from "./assets/colors/__color";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    // Tab Navigation
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          // show title bar
          tabBarShowLabel: false,
          // style button navigator
          tabBarStyle: {
            backgroundColor: "white",
            position: "absolute",
            marginHorizontal: 10,
            bottom: 20,
            // max haight
            borderRadius: 10,
            height: 60,
            // shadow
            shadowColor: "#000",
            shadowOpacity: 0.06,
            shadowOffset: {
              width: 10,
              height: 10,
            },
          },
        }}
      >
        <Tab.Screen
          name="Homescreen"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  // centring Tab Button...
                  position: "absolute",
                  top: 20,
                }}
              >
                <Feather
                  name="home"
                  size={26}
                  color={focused ? colors.brownfull : colors.gray}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Shop"
          component={Shop}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  // centring Tab Button...
                  position: "absolute",
                  top: 20,
                }}
              >
                <Feather
                  name="shopping-cart"
                  size={26}
                  color={focused ? colors.brownfull : colors.gray}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Chat"
          component={Chat}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  // centring Tab Button...
                  position: "absolute",
                  top: 20,
                }}
              >
                <Ionicons
                  name="chatbubbles-outline"
                  size={26}
                  color={focused ? colors.brownfull : colors.gray}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  // centring Tab Button...
                  position: "absolute",
                  top: 20,
                }}
              >
                <Feather
                  name="user"
                  size={26}
                  color={focused ? colors.brownfull : colors.gray}
                />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>

    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen
    //       name="OnboardingScreens"
    //       component={OnboardingScreens}
    //       options={{ headerShown: false }}
    //     />
    //     <Stack.Screen
    //       name="Register"
    //       component={Register}
    //       options={{ headerShown: false }}
    //     />
    //     <Stack.Screen
    //       name="Login"
    //       component={Login}
    //       options={{ headerShown: false }}
    //     />
    //     <Stack.Screen
    //       name="HomeScreen"
    //       component={HomeScreen}
    //       options={{ headerShown: false }}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default App;
