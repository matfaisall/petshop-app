import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { Ionicons, Entypo } from "@expo/vector-icons";

import AppTextInput from "../components/AppTextInput";

const COLORS = { primary: "#282534", white: "#fff" };

const Register = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <StatusBar backgroundColor={COLORS.primary} />
      <View style={{ padding: 20 }}>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontSize: 30,
              color: COLORS.white,
              fontWeight: "bold",
              marginVertical: 30,
            }}
          >
            Buat Akun
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: COLORS.white,
              textAlign: "center",
              maxWidth: "80%",
            }}
          >
            There are many variations of passages of Lorem Ipsum available.
          </Text>
          <View style={{ marginVertical: 30 }}>
            <AppTextInput placeholder="Email" />
            <AppTextInput placeholder="Password" secureTextEntry={true} />
            <AppTextInput
              placeholder="Confirm Password"
              secureTextEntry={true}
            />
          </View>
          <TouchableOpacity
            style={{
              padding: 14,
              backgroundColor: "#B05E27",
              borderRadius: 10,
              width: "100%",
            }}
          >
            <Text
              style={{
                color: COLORS.white,
                textAlign: "center",
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              marginVertical: 30,
            }}
          >
            <Text style={{ color: COLORS.white, fontSize: 14 }}>
              Sudah mempunyai akun?{" "}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={{ color: "#B05E27", fontSize: 14 }}> Login</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                flex: 1,
                backgroundColor: COLORS.white,
                height: 1,
                alignSelf: "center",
              }}
            ></View>
            <Text style={{ paddingHorizontal: 20, color: COLORS.white }}>
              Atau Lanjutkan
            </Text>
            <View
              style={{
                flex: 1,
                backgroundColor: COLORS.white,
                height: 1,
                alignSelf: "center",
              }}
            ></View>
          </View>
          <View
            style={{
              marginTop: 30,
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              style={{
                padding: 10,
                backgroundColor: "#fff",
                borderRadius: 10,
                marginHorizontal: 10,
              }}
            >
              <View style={{ flexDirection: "row", justifyContent: "center" }}>
                <Ionicons name="logo-google" size={20} color="red" />
                <Text style={{ marginLeft: 5, fontSize: 14 }}>Google</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                padding: 10,
                backgroundColor: "#fff",
                borderRadius: 10,
                marginHorizontal: 10,
              }}
            >
              <View style={{ flexDirection: "row", justifyContent: "center" }}>
                <Entypo name="facebook" size={20} color="blue" />
                <Text style={{ marginLeft: 5, fontSize: 14 }}>Facebook</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({});
