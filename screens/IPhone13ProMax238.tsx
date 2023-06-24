import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const IPhone13ProMax238 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone13ProMax238}>
      <View style={styles.iphone13ProMax238Child} />
      <View style={styles.iphone13ProMax238Item} />
      <Image
        style={styles.iphone13ProMax238Inner}
        contentFit="cover"
        source={require("../assets/group-51763.png")}
      />
      <View style={[styles.groupParent, styles.parentLayout]}>
        <View style={[styles.ellipseParent, styles.groupItemLayout]}>
          <Image
            style={styles.groupChild}
            contentFit="cover"
            source={require("../assets/ellipse-292.png")}
          />
          <Text style={[styles.mia19, styles.textFlexBox]}>MIA,19</Text>
          <View style={[styles.groupItem, styles.textPosition]} />
          <Image
            style={styles.groupInner}
            contentFit="cover"
            source={require("../assets/group-1662.png")}
          />
        </View>
        <View style={styles.parent}>
          <Text style={[styles.text, styles.textPosition]}>150</Text>
          <Image
            style={[styles.ellipseIcon, styles.groupChildLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-74.png")}
          />
          <Image
            style={[styles.groupChild1, styles.groupChildLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-751.png")}
          />
          <Image
            style={[styles.groupChild2, styles.groupChildLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-763.png")}
          />
          <Image
            style={[styles.groupChild3, styles.groupChildLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-773.png")}
          />
        </View>
      </View>
      <Pressable
        style={styles.rectanglePosition}
        onPress={() => navigation.navigate("IPhone13ProMax234")}
      >
        <View style={[styles.rectangleView, styles.rectanglePosition]} />
        <Image
          style={[styles.groupIcon, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/group-4925.png")}
        />
        <Text style={[styles.share, styles.flipTypo]}>Share</Text>
        <Text style={[styles.flip, styles.flipTypo]}>Flip</Text>
        <Image
          style={[styles.groupChild4, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/group-49271.png")}
        />
        <Pressable
          style={styles.groupContainer}
          onPress={() => navigation.navigate("IPhone13ProMax239")}
        >
          <Pressable
            style={styles.wrapper}
            onPress={() => navigation.navigate("IPhone13ProMax239")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/group-49291.png")}
            />
          </Pressable>
          <Pressable
            style={styles.gift}
            onPress={() => navigation.navigate("IPhone13ProMax239")}
          >
            <Text style={[styles.gift1, styles.flipTypo]}>Gift</Text>
          </Pressable>
        </Pressable>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  parentLayout: {
    height: 37,
    position: "absolute",
  },
  groupItemLayout: {
    width: 127,
    left: 0,
  },
  textFlexBox: {
    textAlign: "left",
    color: Color.black,
  },
  textPosition: {
    top: 7,
    position: "absolute",
  },
  groupChildLayout: {
    width: "17.35%",
    height: 26,
    maxWidth: "100%",
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  rectanglePosition: {
    height: 202,
    bottom: 0,
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  groupLayout: {
    width: "13.06%",
    height: 47,
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  flipTypo: {
    textAlign: "center",
    fontFamily: FontFamily.quicksandMedium,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.fontsBoldHeading16B_size,
    color: Color.black,
  },
  iphone13ProMax238Child: {
    backgroundColor: Color.gray_400,
    width: 428,
    height: 143,
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
    position: "absolute",
  },
  iphone13ProMax238Item: {
    height: "100.38%",
    top: "0%",
    bottom: "-0.37%",
    backgroundColor: Color.white,
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  iphone13ProMax238Inner: {
    width: "87.52%",
    top: 150,
    right: "6.37%",
    left: "6.11%",
    height: 129,
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupChild: {
    top: 9,
    left: 3,
    width: 23,
    height: 25,
    position: "absolute",
  },
  mia19: {
    top: 12,
    left: 33,
    fontSize: FontSize.size_sm,
    fontWeight: "700",
    fontFamily: FontFamily.quicksandBold,
    position: "absolute",
  },
  groupItem: {
    borderColor: "#0fa958",
    borderWidth: 2,
    height: 30,
    borderStyle: "solid",
    width: 127,
    left: 0,
    borderRadius: Border.br_3xs,
  },
  groupInner: {
    left: 109,
    width: 14,
    height: 16,
    top: 0,
    position: "absolute",
  },
  ellipseParent: {
    height: 37,
    position: "absolute",
    top: 0,
  },
  text: {
    left: "85.32%",
    fontSize: FontSize.fontsRegularCaption12_size,
    fontWeight: "900",
    fontFamily: FontFamily.nunitoBlack,
    textAlign: "left",
    color: Color.black,
  },
  ellipseIcon: {
    right: "82.65%",
    left: "0%",
  },
  groupChild1: {
    right: "61.28%",
    left: "21.37%",
  },
  groupChild2: {
    right: "39.92%",
    left: "42.73%",
  },
  groupChild3: {
    right: "18.57%",
    left: "64.08%",
  },
  parent: {
    width: "47.15%",
    top: 8,
    left: "52.85%",
    height: 26,
    right: "0%",
    position: "absolute",
  },
  groupParent: {
    top: 20,
    left: 22,
    width: 318,
  },
  rectangleView: {
    borderTopLeftRadius: Border.br_xl,
    borderTopRightRadius: Border.br_xl,
    borderColor: "#9d1720",
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.white,
  },
  groupIcon: {
    right: "80.87%",
    bottom: 130,
    left: "6.07%",
    height: 47,
  },
  share: {
    bottom: 93,
    left: "5.43%",
    position: "absolute",
  },
  flip: {
    bottom: 92,
    left: "27.25%",
    position: "absolute",
  },
  groupChild4: {
    right: "61.71%",
    bottom: 129,
    left: "25.23%",
    height: 47,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    width: 47,
    height: 47,
  },
  gift1: {
    display: "flex",
    justifyContent: "center",
    width: 72,
    alignItems: "center",
  },
  gift: {
    marginTop: 13,
  },
  groupContainer: {
    top: 25,
    left: 149,
    alignItems: "center",
    position: "absolute",
  },
  iphone13ProMax238: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone13ProMax238;
