import React from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { StatusBar } from "expo-status-bar";

import colors from "../assets/colors/__color";

import { Entypo, FontAwesome, Ionicons } from "@expo/vector-icons";
// import icons menu
import grooming from "../assets/menu-icons/pet-grooming.png";
import pethealth from "../assets/menu-icons/pet-health.png";
import safekeeping from "../assets/menu-icons/safekeeping.png";
import vitamin from "../assets/menu-icons/vitamin.png";
import food from "../assets/menu-icons/food.png";
import accessories from "../assets/menu-icons/accessories.png";

// Carousel dan data
import { dummyData } from "../data/Data";
import Carousel from "../components/Carousel";

// import Linear Gradient
import { LinearGradient } from "expo-linear-gradient";

const { width, height } = Dimensions.get("window");

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={colors.brown} barStyle="light-content" />

      {/* Menu Start */}
      <View>
        <View style={styles.headerBox}>
          {/* container card e-wallet */}
          {/* <LinearGradient
            colors={["rgba(0,0,0,0.8)", "transparent"]}
          > */}
          {/* Search bar */}
          <TextInput placeholder="Search" style={styles.searchHaeder} />
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
          {/* </LinearGradient> */}
        </View>
        {/* header end */}
        <View style={styles.containerMenu}>
          <TouchableOpacity style={styles.cardMenu}>
            <Image source={grooming} style={{ width: 50, height: 50 }} />
            <Text style={{ marginTop: 4, color: colors.brownfull }}>
              Grooming
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cardMenu}>
            <Image source={pethealth} style={{ width: 50, height: 50 }} />
            <Text style={{ marginTop: 4, color: colors.brownfull }}>
              Dokter Hewan
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cardMenu}>
            <Image source={safekeeping} style={{ width: 50, height: 50 }} />
            <Text style={{ marginTop: 4, color: colors.brownfull }}>
              Penitipan
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerMenu}>
          <TouchableOpacity style={styles.cardMenu}>
            <Image source={vitamin} style={{ width: 50, height: 50 }} />
            <Text style={{ marginTop: 4, color: colors.brownfull }}>
              Vitamin
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cardMenu}>
            <Image source={food} style={{ width: 50, height: 50 }} />
            <Text style={{ marginTop: 4, color: colors.brownfull }}>
              Makanan
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cardMenu}>
            <Image source={accessories} style={{ width: 50, height: 50 }} />
            <Text style={{ marginTop: 4, color: colors.brownfull }}>
              Aksesoris
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* Menu End */}

      <View style={{ marginHorizontal: 16, marginVertical: 14 }}>
        <View>
          <Text
            style={{
              color: colors.brownfull,
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Rekomendasi Pilihan
          </Text>
        </View>
      </View>
      <Carousel data={dummyData} />
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

  // styling menu start
  containerMenu: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    marginHorizontal: 16,
    gap: 16,
  },

  cardMenu: {
    flex: 1,
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: colors.brown,
    borderRadius: 8,
  },
});

export default HomeScreen;
