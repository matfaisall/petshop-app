import React from "react";
import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

const HomeScreen = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-red-500 text-md font-bold mt-2">
        Halaman HomeScreen
      </Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default HomeScreen;
