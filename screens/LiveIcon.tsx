import * as React from "react";
import {
  StyleSheet,
  View,
  Pressable,
  Text,
  ImageBackground,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const LiveIcon = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.liveIcon}
      resizeMode="cover"
      source={require("../assets/rectangle-193.png")}
    >
      <View style={styles.groupChildPosition}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <Pressable
          style={styles.wrapper}
          onPress={() => navigation.navigate("Photo29")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/rectangle-1942.png")}
          />
        </Pressable>
        <Text style={styles.addALittle}>Add a little to chat</Text>
      </View>
      <View style={styles.searchScreen}>
        <Pressable
          style={[styles.multiGuestLive, styles.livePosition]}
          onPress={() => navigation.navigate("LiveMultiguest")}
        >
          <Text style={[styles.multiGuestLive1, styles.liveTypo]}>
            Multi-guest live
          </Text>
        </Pressable>
        <Text style={[styles.live, styles.liveTypo]}>Live</Text>
        <Pressable
          style={[styles.audioLive, styles.livePosition]}
          onPress={() => navigation.navigate("LiveAudiolive")}
        >
          <Text style={styles.audioLive1}>Audio Live</Text>
        </Pressable>
      </View>
      <Pressable
        style={[styles.rectangleGroup, styles.groupLayout]}
        onPress={() => navigation.navigate("IPhone13ProMax36")}
      >
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Text style={[styles.goLive, styles.liveTypo]}>Go LIVE</Text>
      </Pressable>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    height: 143,
    top: 0,
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  livePosition: {
    top: 13,
    position: "absolute",
  },
  liveTypo: {
    textAlign: "center",
    fontFamily: FontFamily.quicksandMedium,
    fontWeight: "500",
    lineHeight: 24,
  },
  groupLayout: {
    height: 57,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.gray_400,
  },
  icon: {
    maxWidth: "100%",
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  wrapper: {
    left: "6.54%",
    top: 23,
    right: "74.53%",
    width: "18.93%",
    height: 83,
    position: "absolute",
  },
  addALittle: {
    top: 38,
    left: "29.67%",
    fontSize: FontSize.fontsRegularCaption12_size,
    fontWeight: "900",
    fontFamily: FontFamily.nunitoBlack,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  multiGuestLive1: {
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    color: Color.black,
  },
  multiGuestLive: {
    left: "2.86%",
  },
  live: {
    left: "46.22%",
    color: Color.crimson_200,
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    top: 13,
    position: "absolute",
  },
  audioLive1: {
    fontFamily: FontFamily.quicksandMedium,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    color: Color.black,
  },
  audioLive: {
    left: "75.13%",
  },
  searchScreen: {
    width: "88.79%",
    right: "5.94%",
    bottom: 93,
    left: "5.28%",
    height: 50,
    backgroundColor: Color.white,
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  groupItem: {
    bottom: 0,
    backgroundColor: Color.brown,
    borderRadius: Border.br_11xl,
    left: "0%",
    right: "0%",
    height: 57,
    width: "100%",
  },
  goLive: {
    bottom: 16,
    left: "35.76%",
    fontSize: FontSize.fontsBoldHeading16B_size,
    color: Color.white,
    position: "absolute",
  },
  rectangleGroup: {
    width: "58.18%",
    right: "21.27%",
    bottom: 158,
    left: "20.56%",
  },
  liveIcon: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default LiveIcon;
