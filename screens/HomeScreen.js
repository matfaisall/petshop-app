import React from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import colors from "../assets/colors/__color";

import { Entypo, FontAwesome, Ionicons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={colors.background} barStyle="dark-content" />
      <View>
        <View style={styles.headerBox}>
          {/* Search bar */}
          <TextInput placeholder="Search" style={styles.searchHaeder} />

          {/* container card e-wallet */}
          <View style={styles.paymentBox}>
            <View style={styles.paymentCard}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Entypo name="wallet" size={16} color={colors.brown} />
                <Text
                  style={{
                    marginLeft: 2,
                    fontWeight: "bold",
                    color: colors.gray,
                  }}
                >
                  Petpay
                </Text>
              </View>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  color: colors.brownfull,
                }}
              >
                Rp. 98.000
              </Text>
              <TouchableOpacity>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: "bold",
                    color: colors.brown,
                  }}
                >
                  Tab for History
                </Text>
              </TouchableOpacity>
            </View>

            {/* Button Top Up Start */}
            <TouchableOpacity
              style={{
                flex: 1,
                height: "auto",
                padding: 6,
              }}
            >
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FontAwesome
                  name="plus-square-o"
                  size={26}
                  color={colors.textwhite}
                />
                <Text
                  style={{
                    color: colors.textwhite,
                    fontWeight: "bold",
                    marginTop: 4,
                  }}
                >
                  Top Up
                </Text>
              </View>
            </TouchableOpacity>
            {/* Button Top Up End */}

            {/* Button Cash Out Start */}
            <TouchableOpacity
              style={{
                flex: 1,
                height: "auto",
                padding: 6,
              }}
            >
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Ionicons
                  name="ios-wallet-outline"
                  size={26}
                  color={colors.textwhite}
                />
                <Text
                  style={{
                    color: colors.textwhite,
                    fontWeight: "bold",
                    marginTop: 4,
                  }}
                >
                  Cash Out
                </Text>
              </View>
            </TouchableOpacity>
            {/* Button Case Out end */}
          </View>
        </View>
        {/* header end */}
        <View style={styles.containerMenu}>
          <Text>hello</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    backgroundColor: colors.background,
    width: width,
    height: height,
  },

  // styling for header
  headerBox: {
    position: "relative",
    width: "100%",
    height: height * 0.26,
    backgroundColor: colors.brown,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 6,
  },

  searchHaeder: {
    backgroundColor: colors.background,
    marginTop: 34,
    marginHorizontal: 10,
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },

  paymentBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginVertical: 14,
    columnGap: 10,
  },

  paymentCard: {
    backgroundColor: colors.background,
    flex: 2,
    height: "auto",
    borderRadius: 8,
    padding: 8,
  },
  // styling header end
  containerMenu: {
    marginTop: 20,
    marginHorizontal: 10,
  },
});

export default HomeScreen;
