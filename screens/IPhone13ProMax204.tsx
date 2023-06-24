import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const IPhone13ProMax204 = () => {
  return (
    <View style={styles.iphone13ProMax204}>
      <View style={[styles.iphone13ProMax204Child, styles.groupItemPosition]} />
      <View style={[styles.iphone13ProMax204Item, styles.rectangleViewBg]} />
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <Image
          style={[styles.groupChild, styles.groupLayout1]}
          contentFit="cover"
          source={require("../assets/rectangle-2221.png")}
        />
        <Image
          style={[styles.groupItem, styles.groupPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-2231.png")}
        />
        <Image
          style={[styles.groupInner, styles.groupPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-2241.png")}
        />
        <View style={[styles.rectangleGroup, styles.groupPosition]}>
          <View style={[styles.rectangleView, styles.groupPosition]} />
          <Image
            style={[styles.materialSymbolschairIcon, styles.groupLayout1]}
            contentFit="cover"
            source={require("../assets/materialsymbolschair1.png")}
          />
        </View>
      </View>
      <View style={styles.coin4Parent}>
        <Image
          style={styles.coin4Icon}
          contentFit="cover"
          source={require("../assets/coin-41.png")}
        />
        <Text style={styles.sent}>SENT</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupItemPosition: {
    top: 0,
    borderRadius: Border.br_3xs,
  },
  rectangleViewBg: {
    backgroundColor: Color.white,
    left: "0%",
    width: "100%",
  },
  groupChildLayout: {
    height: 415,
    position: "absolute",
  },
  groupLayout1: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupPosition: {
    height: 132,
    right: "0%",
    position: "absolute",
  },
  iphone13ProMax204Child: {
    left: 0,
    backgroundColor: Color.gray_400,
    width: 428,
    height: 143,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  iphone13ProMax204Item: {
    height: "100%",
    top: "0%",
    bottom: "0%",
    right: "0%",
    backgroundColor: Color.white,
    position: "absolute",
  },
  groupChild: {
    width: "67.72%",
    right: "32.28%",
    height: 415,
    position: "absolute",
    left: "0%",
    maxWidth: "100%",
    borderRadius: Border.br_3xs,
    top: 0,
  },
  groupItem: {
    left: "68.25%",
    width: "31.75%",
    height: 132,
    maxWidth: "100%",
    overflow: "hidden",
    borderRadius: Border.br_3xs,
    top: 0,
  },
  groupInner: {
    top: 142,
    left: "68.25%",
    width: "31.75%",
    height: 132,
    maxWidth: "100%",
    overflow: "hidden",
    borderRadius: Border.br_3xs,
  },
  rectangleView: {
    borderStyle: "solid",
    borderColor: "#9d1720",
    borderWidth: 1,
    backgroundColor: Color.white,
    left: "0%",
    width: "100%",
    borderRadius: Border.br_3xs,
    top: 0,
  },
  materialSymbolschairIcon: {
    width: "20%",
    top: 54,
    right: "40%",
    left: "40%",
    height: 24,
    position: "absolute",
  },
  rectangleGroup: {
    top: 283,
    left: "68.25%",
    width: "31.75%",
    height: 132,
  },
  rectangleParent: {
    width: "88.32%",
    top: 150,
    right: "5.61%",
    left: "6.07%",
  },
  coin4Icon: {
    width: 100,
    height: 100,
  },
  sent: {
    fontSize: FontSize.fontsBoldHeadingH220B_size,
    fontWeight: "700",
    fontFamily: FontFamily.quicksandBold,
    color: Color.black,
    textAlign: "center",
    marginTop: 2,
  },
  coin4Parent: {
    marginLeft: -50,
    top: 340,
    left: "50%",
    alignItems: "center",
    position: "absolute",
  },
  iphone13ProMax204: {
    flex: 1,
    height: 800,
    opacity: 0.7,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone13ProMax204;
