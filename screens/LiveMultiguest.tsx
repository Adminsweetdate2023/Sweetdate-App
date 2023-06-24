import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const LiveMultiguest = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.liveMultiguest, styles.nav1ParentBg]}>
      <Image
        style={[styles.liveMultiguestChild, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/group-4956.png")}
      />
      <View style={styles.searchScreen}>
        <Text style={[styles.multiGuestLive, styles.liveTypo]}>
          Multi-guest live
        </Text>
        <Pressable
          style={[styles.live, styles.livePosition]}
          onPress={() =>
            navigation.navigate("BottomTabsRoot", { screen: "Live" })
          }
        >
          <Text style={styles.live1}>Live</Text>
        </Pressable>
        <Pressable
          style={[styles.audioLive, styles.livePosition]}
          onPress={() => navigation.navigate("LiveAudiolive")}
        >
          <Text style={[styles.audioLive1, styles.audioLive1FlexBox]}>
            Audio Live
          </Text>
        </Pressable>
      </View>
      <Pressable
        style={styles.rectangleParent}
        onPress={() => navigation.navigate("IPhone13ProMax31")}
      >
        <View style={styles.groupChild} />
        <Text style={[styles.goLive, styles.liveTypo]}>Go LIVE</Text>
      </Pressable>
      <View style={styles.groupPosition}>
        <View style={[styles.groupItem, styles.groupPosition]} />
        <Pressable
          style={styles.wrapper}
          onPress={() => navigation.navigate("Photo213")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-194.png")}
          />
        </Pressable>
        <Text style={[styles.addALittle, styles.audioLive1FlexBox]}>
          Add a little to chat
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  nav1ParentBg: {
    backgroundColor: Color.white,
    width: "100%",
  },
  iconLayout: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  liveTypo: {
    textAlign: "center",
    fontFamily: FontFamily.quicksandMedium,
    fontWeight: "500",
    lineHeight: 24,
    position: "absolute",
  },
  livePosition: {
    top: 13,
    position: "absolute",
  },
  audioLive1FlexBox: {
    textAlign: "left",
    color: Color.black,
  },
  groupPosition: {
    height: 143,
    top: 0,
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  liveMultiguestChild: {
    height: "52.25%",
    width: "88.32%",
    top: "24.5%",
    right: "5.57%",
    bottom: "23.25%",
    left: "6.11%",
    maxHeight: "100%",
    position: "absolute",
  },
  multiGuestLive: {
    left: "6.35%",
    color: Color.brown,
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    top: 13,
  },
  live1: {
    color: Color.black,
    textAlign: "center",
    fontFamily: FontFamily.quicksandMedium,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.size_3xs,
  },
  live: {
    left: "49.7%",
  },
  audioLive1: {
    fontFamily: FontFamily.quicksandMedium,
    fontWeight: "500",
    lineHeight: 24,
    textAlign: "left",
    fontSize: FontSize.size_3xs,
  },
  audioLive: {
    left: "78.62%",
  },
  searchScreen: {
    width: "88.79%",
    right: "5.66%",
    bottom: 93,
    left: "5.56%",
    borderStyle: "solid",
    borderColor: "#9d1720",
    borderWidth: 1,
    height: 50,
    borderRadius: Border.br_11xl,
    position: "absolute",
    backgroundColor: Color.white,
  },
  groupChild: {
    bottom: 0,
    backgroundColor: Color.brown,
    left: "0%",
    right: "0%",
    height: 57,
    borderRadius: Border.br_11xl,
    position: "absolute",
    width: "100%",
  },
  goLive: {
    bottom: 16,
    left: "36.29%",
    fontSize: FontSize.fontsBoldHeading16B_size,
    color: Color.white,
  },
  rectangleParent: {
    width: "58.18%",
    right: "20.99%",
    bottom: 158,
    left: "20.83%",
    height: 57,
    position: "absolute",
  },
  groupItem: {
    backgroundColor: Color.gray_600,
  },
  icon: {
    borderRadius: Border.br_8xs,
    height: "100%",
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
    position: "absolute",
  },
  liveMultiguest: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default LiveMultiguest;
