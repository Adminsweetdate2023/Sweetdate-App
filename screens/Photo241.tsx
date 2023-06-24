import * as React from "react";
import { StyleSheet, View, Text, Pressable, ScrollView } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Photo241 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.photo2}>
      <View style={[styles.rectangleParent, styles.groupChildPosition]}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <Text style={styles.myGifts}>My gifts</Text>
        <Pressable
          style={styles.vector}
          onPress={() => navigation.navigate("Photo243")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/vector1.png")}
          />
        </Pressable>
      </View>
      <Text style={[styles.allGifts, styles.giftsPosition]}>All gifts</Text>
      <Text style={[styles.pendingGifts, styles.giftsPosition]}>
        Pending gifts
      </Text>
      <Text style={[styles.youDontHave, styles.giftsPosition]}>
        You don’t have any pending gifts
      </Text>
      <ScrollView
        style={styles.frameParent}
        horizontal
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.frameScrollViewContent}
      >
        <View style={styles.ringCase1Wrapper}>
          <Image
            style={styles.ringCase1}
            contentFit="cover"
            source={require("../assets/ring-case-1.png")}
          />
        </View>
        <View style={styles.sun1Wrapper}>
          <Image
            style={styles.ringCase1}
            contentFit="cover"
            source={require("../assets/sun-1.png")}
          />
        </View>
        <View style={styles.sun1Wrapper}>
          <Image
            style={styles.ringCase1}
            contentFit="cover"
            source={require("../assets/mg-1.png")}
          />
        </View>
        <View style={styles.sun1Wrapper}>
          <Image
            style={styles.ringCase1}
            contentFit="cover"
            source={require("../assets/ice-cream-1.png")}
          />
        </View>
        <View style={styles.sun1Wrapper}>
          <Image
            style={styles.ringCase1}
            contentFit="cover"
            source={require("../assets/heart-chocolate-2.png")}
          />
        </View>
        <View style={styles.sun1Wrapper}>
          <Image
            style={styles.ringCase1}
            contentFit="cover"
            source={require("../assets/heart-chain-1.png")}
          />
        </View>
        <View style={styles.sun1Wrapper}>
          <Image
            style={styles.ringCase1}
            contentFit="cover"
            source={require("../assets/castle-1.png")}
          />
        </View>
        <View style={styles.sun1Wrapper}>
          <Image
            style={styles.ringCase1}
            contentFit="cover"
            source={require("../assets/burj-1.png")}
          />
        </View>
        <View style={styles.sun1Wrapper}>
          <Image
            style={styles.ringCase1}
            contentFit="cover"
            source={require("../assets/bed-1.png")}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  frameScrollViewContent: {
    flexDirection: "row",
  },
  groupChildPosition: {
    height: 43,
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  giftsPosition: {
    textAlign: "left",
    left: 30,
    position: "absolute",
  },
  groupChild: {
    top: 0,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    backgroundColor: Color.white,
  },
  myGifts: {
    top: 14,
    left: "43.61%",
    fontFamily: FontFamily.quicksandBold,
    textAlign: "center",
    color: Color.black,
    fontWeight: "700",
    fontSize: FontSize.fontsRegularCaption12_size,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  vector: {
    left: 29,
    top: 16,
    width: 9,
    height: 13,
    position: "absolute",
  },
  rectangleParent: {
    top: 20,
  },
  allGifts: {
    top: 86,
    fontFamily: FontFamily.robotoBold,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.black,
    fontWeight: "700",
  },
  pendingGifts: {
    top: 182,
    fontFamily: FontFamily.robotoBold,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.black,
    fontWeight: "700",
  },
  youDontHave: {
    top: 209,
    fontFamily: FontFamily.robotoRegular,
    color: Color.gray_600,
    textAlign: "left",
    fontSize: FontSize.fontsRegularCaption12_size,
  },
  ringCase1: {
    width: 60,
    height: 60,
  },
  ringCase1Wrapper: {
    alignItems: "center",
  },
  sun1Wrapper: {
    marginLeft: 18,
    alignItems: "center",
  },
  frameParent: {
    top: 112,
    left: 30,
    position: "absolute",
    width: "100%",
  },
  photo2: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Photo241;
