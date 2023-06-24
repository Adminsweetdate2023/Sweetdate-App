import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const IPhone13ProMax244 = () => {
  return (
    <View style={styles.iphone13ProMax244}>
      <View
        style={[styles.iphone13ProMax244Child, styles.searchScreenPosition]}
      />
      <View style={styles.iphone13ProMax244Item} />
      <View style={[styles.searchScreenWrapper, styles.searchLayout]}>
        <View style={[styles.searchScreen, styles.searchLayout]}>
          <Image
            style={[
              styles.icbaselineEmojiEmotionsIcon,
              styles.typeInHerePosition,
            ]}
            contentFit="cover"
            source={require("../assets/icbaselineemojiemotions.png")}
          />
          <Text style={[styles.typeInHere, styles.sentFlexBox]}>
            Type in here
          </Text>
        </View>
      </View>
      <Image
        style={styles.iphone13ProMax244Inner}
        contentFit="cover"
        source={require("../assets/group-51762.png")}
      />
      <View style={styles.coin4Parent}>
        <Image
          style={styles.coin4Icon}
          contentFit="cover"
          source={require("../assets/coin-41.png")}
        />
        <Text style={[styles.sent, styles.sentFlexBox]}>SENT</Text>
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
  typeInHerePosition: {
    top: 13,
    position: "absolute",
  },
  sentFlexBox: {
    textAlign: "center",
    color: Color.black,
  },
  iphone13ProMax244Child: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.gray_400,
    width: 428,
    height: 143,
    position: "absolute",
  },
  iphone13ProMax244Item: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: Color.white,
    position: "absolute",
    width: "100%",
  },
  icbaselineEmojiEmotionsIcon: {
    left: 9,
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  typeInHere: {
    left: 61,
    fontSize: FontSize.fontsRegularCaption12_size,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: FontFamily.quicksandMedium,
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
  iphone13ProMax244Inner: {
    width: "87.52%",
    top: 150,
    right: "6.37%",
    left: "6.11%",
    maxWidth: "100%",
    height: 129,
    position: "absolute",
    overflow: "hidden",
  },
  coin4Icon: {
    width: 100,
    height: 100,
  },
  sent: {
    fontSize: FontSize.fontsBoldHeadingH220B_size,
    fontWeight: "700",
    fontFamily: FontFamily.quicksandBold,
    marginTop: 2,
  },
  coin4Parent: {
    marginLeft: -50,
    top: 336,
    left: "50%",
    alignItems: "center",
    position: "absolute",
  },
  iphone13ProMax244: {
    flex: 1,
    height: 800,
    opacity: 0.7,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone13ProMax244;
