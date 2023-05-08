import { FontDisplay } from "expo-font";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TextInputProps,
} from "react-native";

const COLORS = { primary: "#282534", white: "#fff" };

const AppTextInput = ({ ...otherProps }) => {
  const [focused, setFocused] = useState(false);

  return (
    <TextInput
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      placeholderTextColor={COLORS.primary}
      style={[
        {
          fontSize: 14,
          padding: 10,
          minWidth: "100%",
          backgroundColor: "white",
          borderRadius: 10,
          marginVertical: 10,
        },
        focused && {
          borderWidth: 2,
          borderColor: "#F79540",
          shadowOffset: { width: 4, height: 10 },
          shadowColor: "#F79540",
          shadowOpacity: 0.2,
          shadowRadius: 10,
        },
      ]}
      {...otherProps}
    />
  );
};

const styles = StyleSheet.create({});

export default AppTextInput;
