import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";

const Photo278 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.photo2}>
      <View style={[styles.rectangleParent, styles.groupChildPosition]}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <Text style={[styles.blockedUser, styles.startFlexBox]}>
          Blocked user
        </Text>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
      </View>
      <Image
        style={styles.photo2Child}
        contentFit="cover"
        source={require("../assets/ellipse-422.png")}
      />
      <Text style={[styles.alexa, styles.alexaTypo]}>Alexa</Text>
      <Text style={[styles.colombia, styles.alexaTypo]}>COLOMBIA</Text>
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Text style={[styles.unblock, styles.alexaTypo]}>Unblock</Text>
      </View>
      <View style={styles.groupInnerPosition}>
        <View style={[styles.groupInner, styles.groupInnerPosition]} />
        <View style={[styles.groupView, styles.viewPosition]}>
          <View style={[styles.rectangleView, styles.button1Position]} />
          <Pressable
            style={[styles.button1, styles.button1Position]}
            onPress={() => navigation.navigate("Photo277")}
          >
            <View style={[styles.button1Child, styles.groupInnerPosition]} />
            <Text style={[styles.start, styles.startFlexBox]}>OK</Text>
          </Pressable>
          <Text style={[styles.youveUnblockedThis, styles.startFlexBox]}>
            You’ve unblocked this user
          </Text>
          <Image
            style={styles.person1Icon}
            contentFit="cover"
            source={require("../assets/person-1.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    height: 43,
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  startFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  alexaTypo: {
    textAlign: "left",
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    position: "absolute",
  },
  groupLayout: {
    height: 31,
    width: 74,
    position: "absolute",
  },
  groupInnerPosition: {
    bottom: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  viewPosition: {
    height: 222,
    bottom: 0,
    left: "0%",
    right: "0%",
    width: "100%",
  },
  button1Position: {
    borderTopRightRadius: Border.br_xl,
    borderTopLeftRadius: Border.br_xl,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.white,
    top: 0,
  },
  blockedUser: {
    top: 14,
    left: "39.72%",
    color: Color.black,
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    textAlign: "center",
    fontSize: FontSize.fontsRegularCaption12_size,
  },
  vectorIcon: {
    top: 16,
    left: 29,
    width: 9,
    height: 13,
    position: "absolute",
  },
  rectangleParent: {
    top: 20,
  },
  photo2Child: {
    top: 81,
    left: 23,
    width: 60,
    height: 60,
    position: "absolute",
  },
  alexa: {
    top: 89,
    fontSize: FontSize.size_sm,
    left: 98,
    textAlign: "left",
    color: Color.black,
  },
  colombia: {
    top: 118,
    color: Color.gray_600,
    left: 98,
    textAlign: "left",
    fontSize: FontSize.fontsRegularCaption12_size,
  },
  groupItem: {
    right: 0,
    borderRadius: Border.br_xl,
    backgroundColor: Color.gainsboro_100,
    top: 0,
  },
  unblock: {
    top: 8,
    right: 13,
    color: Color.black,
    fontSize: FontSize.fontsRegularCaption12_size,
  },
  rectangleGroup: {
    top: 95,
    right: 23,
  },
  groupInner: {
    backgroundColor: Color.gray_600,
  },
  rectangleView: {
    height: 222,
    bottom: 0,
    left: "0%",
    right: "0%",
    width: "100%",
    backgroundColor: Color.white,
  },
  button1Child: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.crimson_100,
  },
  start: {
    top: "32.08%",
    left: "46.76%",
    fontWeight: "600",
    fontFamily: FontFamily.quicksandSemibold,
    color: Color.white,
    fontSize: FontSize.size_sm,
  },
  button1: {
    width: "93.13%",
    right: "3.54%",
    bottom: 15,
    left: "3.33%",
    height: 38,
  },
  youveUnblockedThis: {
    bottom: 69,
    left: "29.44%",
    fontWeight: "500",
    fontFamily: FontFamily.quicksandMedium,
    color: Color.black,
    fontSize: FontSize.fontsRegularCaption12_size,
  },
  person1Icon: {
    width: "22.22%",
    right: "38.89%",
    bottom: 100,
    left: "38.89%",
    maxWidth: "100%",
    height: 80,
    position: "absolute",
    overflow: "hidden",
  },
  groupView: {
    position: "absolute",
  },
  photo2: {
    backgroundColor: Color.whitesmoke_100,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default Photo278;
