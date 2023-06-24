import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const LiveAudiolive = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.liveAudiolive}>
      <View style={[styles.liveAudioliveChild, styles.childPosition]} />
      <Image
        style={[styles.liveAudioliveItem, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/group-4969.png")}
      />
      <View style={styles.searchScreen}>
        <Pressable
          style={[styles.multiGuestLive, styles.livePosition]}
          onPress={() => navigation.navigate("LiveMultiguest")}
        >
          <Text style={[styles.multiGuestLive1, styles.liveTypo]}>
            Multi-guest live
          </Text>
        </Pressable>
        <Text style={styles.audioLive}>Audio Live</Text>
        <Pressable
          style={[styles.live, styles.livePosition]}
          onPress={() =>
            navigation.navigate("BottomTabsRoot", { screen: "Live" })
          }
        >
          <Text style={[styles.multiGuestLive1, styles.liveTypo]}>Live</Text>
        </Pressable>
      </View>
      <Pressable
        style={[styles.rectangleParent, styles.groupChildLayout]}
        onPress={() => navigation.navigate("IPhone13ProMax32")}
      >
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={[styles.goLive, styles.liveTypo]}>Go LIVE</Text>
      </Pressable>
      <View style={styles.groupPosition}>
        <View style={[styles.groupItem, styles.groupPosition]} />
        <Pressable
          style={styles.wrapper}
          onPress={() => navigation.navigate("Photo217")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-1941.png")}
          />
        </Pressable>
        <Text style={[styles.addALittle, styles.addALittleClr]}>
          Add a little to chat
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  childPosition: {
    left: "0%",
    right: "0%",
    width: "100%",
  },
  iconLayout: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  livePosition: {
    top: 9,
    position: "absolute",
  },
  liveTypo: {
    textAlign: "center",
    fontFamily: FontFamily.quicksandMedium,
    fontWeight: "500",
    lineHeight: 24,
  },
  groupChildLayout: {
    height: 57,
    position: "absolute",
  },
  groupPosition: {
    height: 143,
    top: 0,
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  addALittleClr: {
    color: Color.black,
    fontSize: FontSize.fontsRegularCaption12_size,
  },
  liveAudioliveChild: {
    top: "0%",
    bottom: "0%",
    backgroundColor: Color.white,
    height: "100%",
    position: "absolute",
  },
  liveAudioliveItem: {
    width: "87.52%",
    top: 150,
    right: "5.01%",
    left: "7.48%",
    height: 129,
    position: "absolute",
  },
  multiGuestLive1: {
    color: Color.black,
    fontSize: FontSize.fontsRegularCaption12_size,
  },
  multiGuestLive: {
    left: "5.7%",
  },
  audioLive: {
    left: "74.24%",
    color: Color.crimson_200,
    textAlign: "right",
    fontFamily: FontFamily.quicksandMedium,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.fontsRegularCaption12_size,
    top: 9,
    position: "absolute",
  },
  live: {
    left: "48.98%",
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
    backgroundColor: Color.white,
    position: "absolute",
  },
  groupChild: {
    bottom: 0,
    backgroundColor: Color.brown,
    borderRadius: Border.br_11xl,
    left: "0%",
    right: "0%",
    width: "100%",
  },
  goLive: {
    bottom: 16,
    left: "35.95%",
    fontSize: FontSize.fontsBoldHeading16B_size,
    color: Color.white,
    position: "absolute",
  },
  rectangleParent: {
    width: "58.18%",
    right: "20.99%",
    bottom: 158,
    left: "20.83%",
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
    fontWeight: "900",
    fontFamily: FontFamily.nunitoBlack,
    textAlign: "left",
    position: "absolute",
  },
  liveAudiolive: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default LiveAudiolive;
