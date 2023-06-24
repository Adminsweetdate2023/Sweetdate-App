import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const IPhone13ProMax241 = () => {
  return (
    <View style={styles.iphone13ProMax241}>
      <View
        style={[styles.iphone13ProMax241Child, styles.searchScreenPosition]}
      />
      <View style={styles.iphone13ProMax241Item} />
      <View style={[styles.searchScreenWrapper, styles.searchLayout]}>
        <View style={[styles.searchScreen, styles.searchLayout]}>
          <Image
            style={styles.icbaselineEmojiEmotionsIcon}
            contentFit="cover"
            source={require("../assets/icbaselineemojiemotions.png")}
          />
          <Text style={[styles.typeInHere, styles.sentFlexBox]}>
            Type in here
          </Text>
        </View>
      </View>
      <Image
        style={styles.iphone13ProMax241Inner}
        contentFit="cover"
        source={require("../assets/group-51762.png")}
      />
      <View style={styles.sun1Parent}>
        <Image
          style={styles.sun1Icon}
          contentFit="cover"
          source={require("../assets/sun-11.png")}
        />
        <Text style={[styles.sent, styles.sentFlexBox]}>SENT</Text>
      </View>
      <View style={styles.parent}>
        <Text style={styles.text}>150</Text>
        <Image
          style={[styles.groupChild, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-74.png")}
        />
        <Image
          style={[styles.groupItem, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-751.png")}
        />
        <Image
          style={[styles.groupInner, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-763.png")}
        />
        <Image
          style={[styles.ellipseIcon, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-773.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchScreenPosition: {
    left: 0,
    top: 0,
  },
  searchLayout: {
    height: 50,
    width: 262,
    position: "absolute",
  },
  sentFlexBox: {
    textAlign: "center",
    color: Color.black,
  },
  groupLayout: {
    width: "17.35%",
    height: 26,
    maxWidth: "100%",
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  iphone13ProMax241Child: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.gray_400,
    width: 428,
    height: 143,
    position: "absolute",
  },
  iphone13ProMax241Item: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    backgroundColor: Color.white,
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  icbaselineEmojiEmotionsIcon: {
    left: 9,
    width: 24,
    height: 24,
    top: 13,
    position: "absolute",
    overflow: "hidden",
  },
  typeInHere: {
    left: 61,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: FontFamily.quicksandMedium,
    fontSize: FontSize.fontsRegularCaption12_size,
    textAlign: "center",
    top: 13,
    position: "absolute",
  },
  searchScreen: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.white,
    left: 0,
    top: 0,
  },
  searchScreenWrapper: {
    top: 858,
    left: 18,
  },
  iphone13ProMax241Inner: {
    width: "87.52%",
    top: 150,
    right: "6.37%",
    left: "6.11%",
    height: 129,
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  sun1Icon: {
    width: 100,
    height: 100,
  },
  sent: {
    fontSize: FontSize.fontsBoldHeadingH220B_size,
    fontWeight: "700",
    fontFamily: FontFamily.quicksandBold,
    marginTop: 2,
  },
  sun1Parent: {
    marginLeft: -50,
    top: 336,
    left: "50%",
    alignItems: "center",
    position: "absolute",
  },
  text: {
    top: 7,
    left: "85.32%",
    fontWeight: "900",
    fontFamily: FontFamily.nunitoBlack,
    textAlign: "left",
    color: Color.black,
    fontSize: FontSize.fontsRegularCaption12_size,
    position: "absolute",
  },
  groupChild: {
    right: "82.65%",
    left: "0%",
  },
  groupItem: {
    right: "61.28%",
    left: "21.37%",
  },
  groupInner: {
    right: "39.92%",
    left: "42.73%",
  },
  ellipseIcon: {
    right: "18.57%",
    left: "64.08%",
  },
  parent: {
    width: "41.63%",
    top: 677,
    right: "5.6%",
    left: "52.78%",
    height: 26,
    position: "absolute",
  },
  iphone13ProMax241: {
    flex: 1,
    height: 800,
    opacity: 0.7,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone13ProMax241;
