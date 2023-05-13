import React from "react";
import { StyleSheet, View, Text } from "react-native";

// Import navigator
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import icons and colors
import {
  Feather,
  Ionicons,
  Entypo,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";
import colors from "./assets/colors/__color";

// import screen
import OnboardingScreen from "./screens/OnboardingScreens";
import Register from "./screens/Register";
import Login from "./screens/Login";
import HomeScreen from "./screens/HomeScreen";
import Shop from "./screens/Shop";
import Chat from "./screens/Chat";
import Profile from "./screens/Profile";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Home() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.menubarContainer,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconPosition}>
              <Entypo
                name="home"
                size={27}
                color={focused ? colors.brownfull : "white"}
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
            <View style={styles.iconPosition}>
              <MaterialCommunityIcons
                name="shopping"
                size={26}
                color={focused ? colors.brownfull : "white"}
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
            <View style={styles.iconPosition}>
              <Ionicons
                name="chatbubbles"
                size={26}
                color={focused ? colors.brownfull : "white"}
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
            <View style={styles.iconPosition}>
              <FontAwesome
                name="user"
                size={26}
                color={focused ? colors.brownfull : "white"}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="Onboarding"
          component={OnboardingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={Home}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;

const styles = StyleSheet.create({
  menubarContainer: {
    backgroundColor: colors.brown,
    position: "absolute",
    marginHorizontal: 10,
    bottom: 10,
    borderRadius: 10,
    height: 60,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowOffset: {
      width: 10,
      height: 10,
    },

    iconPosition: {
      position: "absolute",
      top: 18,
    },
  },
});
