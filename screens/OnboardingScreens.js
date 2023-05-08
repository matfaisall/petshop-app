// // import { StatusBar } from "expo-status-bar";
// import React, { useState } from "react";
// import {
//   SafeAreaView,
//   Text,
//   Image,
//   View,
//   Dimensions,
//   FlatList,
//   StatusBar,
//   TouchableOpacity,
// } from "react-native";

// const { width, height } = Dimensions.get("window");

// const slides = [
//   {
//     id: "1",
//     image: require("../assets/images/onboarding1.png"),
//     title: "Temukan Peliharaanmu",
//     subtitle:
//       "disini kami menyediakan berbagai hewan yang siap untuk Anda adopsi",
//   },
//   {
//     id: "2",
//     image: require("../assets/images/onboarding2.png"),
//     title: "Bingung cari Peliharaan?",
//     subtitle: "Kenapa harus bingung?, Pilih yang kau suka dan bawa dia pulang ",
//   },
//   {
//     id: "3",
//     image: require("../assets/images/onboarding3.png"),
//     title: "Loremp Impsum dolars amet",
//     subtitle:
//       "Contrary to popular belief, Lorem Ipsum is not simply random text.",
//   },
// ];

// const Slide = ({ item }) => {
//   return (
//     <View className="items-center mt-[50]">
//       <Image
//         source={item?.image}
//         style={{ height: "75%", width, resizeMode: "contain" }}
//         className="h-[100%] w-[100%]"
//       />
//       <Text className="text-[#fff] text-2xl font-bold mt-[14] text-center">
//         {item?.title}
//       </Text>
//       <Text className="text-[#fff] font-light mt-[14] text-md max-w-[70%] text-center leading-6 align-middle">
//         {item?.subtitle}
//       </Text>
//     </View>
//   );
// };

// const OnboardingScreens = ({ navigaton }) => {
//   const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

//   const Footer = () => {
//     return (
//       <View style={{ height: height * 0.25 }} className="px-20 justify-between">
//         {/* Indicator Container */}
//         <View className="flex-row justify-center mt-5">
//           {/* Render indicator */}
//           {slides.map((_, index) => (
//             <View
//               key={index}
//               className="h-[2.5] w-3 bg-gray-300 mx-1 rounded-sm"
//               style={
//                 currentSlideIndex == index && {
//                   backgroundColor: "#FFFFFF",
//                   width: 25,
//                 }
//               }
//             />
//           ))}
//         </View>
//       </View>
//     );
//   };

//   return (
//     <SafeAreaView className="flex-1 bg-[#282534]">
//       <StatusBar backgroundColor="#282534" />
//       <FlatList
//         data={slides}
//         contentContainerStyle={{ height: height * 0.75 }}
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         renderItem={({ item }) => <Slide item={item} />}
//       />
//       <Footer />
//     </SafeAreaView>
//   );
// };

// export default OnboardingScreens;

import React from "react";
import {
  SafeAreaView,
  Image,
  StyleSheet,
  FlatList,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { StackActions } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const COLORS = { primary: "#282534", white: "#fff" };

const slides = [
  {
    id: "1",
    image: require("../assets/images/onboarding1.png"),
    title: "Best Digital Solution",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: "2",
    image: require("../assets/images/onboarding2.png"),
    title: "Achieve Your Goals",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: "3",
    image: require("../assets/images/onboarding3.png"),
    title: "Increase Your Value",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const Slide = ({ item }) => {
  return (
    <View style={{ alignItems: "center" }}>
      <Image
        source={item?.image}
        style={{ height: "75%", width, resizeMode: "contain" }}
      />
      <View>
        <Text style={styles.title}>{item?.title}</Text>
        <Text style={styles.subtitle}>{item?.subtitle}</Text>
      </View>
    </View>
  );
};

const OnboardingScreen = ({ navigation }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = React.useRef();
  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({ offset });
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const skip = () => {
    const lastSlideIndex = slides.length - 1;
    const offset = lastSlideIndex * width;
    ref?.current.scrollToOffset({ offset });
    setCurrentSlideIndex(lastSlideIndex);
  };

  const Footer = () => {
    return (
      <View
        style={{
          height: height * 0.25,
          justifyContent: "space-between",
          paddingHorizontal: 20,
        }}
      >
        {/* Indicator container */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          {/* Render indicator */}
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex == index && {
                  backgroundColor: COLORS.white,
                  width: 25,
                },
              ]}
            />
          ))}
        </View>

        {/* Render buttons */}
        <View style={{ marginBottom: 20 }}>
          {currentSlideIndex == slides.length - 1 ? (
            <View style={{ height: 50 }}>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.replace("Register")}
              >
                <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                  GET STARTED
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={[
                  styles.btn,
                  {
                    borderColor: COLORS.white,
                    borderWidth: 1,
                    backgroundColor: "transparent",
                  },
                ]}
                onPress={skip}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 15,
                    color: COLORS.white,
                  }}
                >
                  SKIP
                </Text>
              </TouchableOpacity>
              <View style={{ width: 15 }} />
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={goToNextSlide}
                style={styles.btn}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 15,
                  }}
                >
                  NEXT
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <StatusBar backgroundColor={COLORS.primary} />
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        contentContainerStyle={{ height: height * 0.75 }}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={slides}
        pagingEnabled
        renderItem={({ item }) => <Slide item={item} />}
      />
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    color: COLORS.white,
    fontSize: 13,
    marginTop: 10,
    maxWidth: "70%",
    textAlign: "center",
    lineHeight: 23,
  },
  title: {
    color: COLORS.white,
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  indicator: {
    height: 2.5,
    width: 10,
    backgroundColor: "grey",
    marginHorizontal: 3,
    borderRadius: 2,
  },
  btn: {
    flex: 1,
    height: 50,
    borderRadius: 5,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default OnboardingScreen;
