import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const IPhone13ProMax207 = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.iphone13ProMax207}
      onPress={() => navigation.navigate("IPhone13ProMax206")}
    >
      <View style={styles.iphone13ProMax207Child} />
      <View style={[styles.iphone13ProMax207Item, styles.rectangleViewBg]} />
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <Image
          style={[styles.groupChild, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-2221.png")}
        />
        <Image
          style={[styles.groupItem, styles.groupPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-2232.png")}
        />
        <Image
          style={[styles.groupInner, styles.groupPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-2243.png")}
        />
        <View style={[styles.rectangleGroup, styles.groupPosition]}>
          <View style={[styles.rectangleView, styles.groupPosition]} />
          <Image
            style={[styles.materialSymbolschairIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/materialsymbolschair1.png")}
          />
        </View>
      </View>
      <View style={styles.requestSentWrapper}>
        <Text style={styles.requestSent}>Request Sent</Text>
      </View>
      <View style={styles.groupParent}>
        <Image
          style={[styles.groupIcon, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/group-5199.png")}
        />
        <View style={[styles.groupContainer, styles.groupLayout]}>
          <Image
            style={[styles.groupContainer, styles.groupLayout]}
            contentFit="cover"
            source={require("../assets/group-4936.png")}
          />
          <Image
            style={[styles.fluentchat24FilledIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/fluentchat24filled.png")}
          />
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  rectangleViewBg: {
    backgroundColor: Color.white,
    left: "0%",
    width: "100%",
  },
  groupChildLayout: {
    height: 415,
    position: "absolute",
  },
  groupPosition: {
    height: 132,
    right: "0%",
    position: "absolute",
  },
  iconLayout: {
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  groupLayout: {
    width: 40,
    bottom: 0,
    height: 40,
    position: "absolute",
  },
  iphone13ProMax207Child: {
    backgroundColor: Color.gray_400,
    width: 428,
    height: 143,
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
    position: "absolute",
  },
  iphone13ProMax207Item: {
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
    maxWidth: "100%",
    left: "0%",
    height: 415,
    borderRadius: Border.br_3xs,
    top: 0,
    overflow: "hidden",
  },
  groupItem: {
    left: "68.25%",
    width: "31.75%",
    height: 132,
    maxWidth: "100%",
    borderRadius: Border.br_3xs,
    top: 0,
    overflow: "hidden",
  },
  groupInner: {
    top: 142,
    left: "68.25%",
    width: "31.75%",
    height: 132,
    maxWidth: "100%",
    borderRadius: Border.br_3xs,
    overflow: "hidden",
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
    maxWidth: "100%",
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
  requestSent: {
    fontSize: FontSize.fontsBoldHeading16B_size,
    fontWeight: "700",
    fontFamily: FontFamily.quicksandBold,
    color: Color.black,
    textAlign: "center",
    left: 0,
    top: 0,
    position: "absolute",
  },
  requestSentWrapper: {
    marginTop: -10,
    marginLeft: -52,
    top: "50%",
    left: "50%",
    width: 104,
    height: 20,
    position: "absolute",
  },
  groupIcon: {
    left: 50,
  },
  groupContainer: {
    left: 0,
  },
  fluentchat24FilledIcon: {
    bottom: 8,
    left: 8,
    width: 24,
  },
  groupParent: {
    bottom: 24,
    left: 13,
    width: 90,
    height: 40,
    position: "absolute",
  },
  iphone13ProMax207: {
    flex: 1,
    height: 800,
    opacity: 0.7,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone13ProMax207;
