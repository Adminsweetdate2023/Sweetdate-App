import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const IPhone13ProMax209 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone13ProMax209}>
      <View style={styles.iphone13ProMax209Child} />
      <View style={styles.iphone13ProMax209Item} />
      <View style={[styles.rectangleParent, styles.groupChildLayout2]}>
        <Image
          style={[styles.groupChild, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-2222.png")}
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
          <View style={[styles.rectangleView, styles.groupChild6Border]} />
          <Image
            style={[styles.materialSymbolschairIcon, styles.groupLayout]}
            contentFit="cover"
            source={require("../assets/materialsymbolschair1.png")}
          />
        </View>
      </View>
      <View style={[styles.groupParent, styles.parentLayout]}>
        <View style={[styles.ellipseParent, styles.groupChild1Layout]}>
          <Image
            style={styles.ellipseIcon}
            contentFit="cover"
            source={require("../assets/ellipse-294.png")}
          />
          <Text style={[styles.lia22, styles.textFlexBox]}>LIA,22</Text>
          <View style={[styles.groupChild1, styles.textPosition]} />
          <Image
            style={styles.groupIcon}
            contentFit="cover"
            source={require("../assets/group-1662.png")}
          />
        </View>
        <View style={styles.parent}>
          <Text style={[styles.text, styles.textPosition]}>150</Text>
          <Image
            style={[styles.groupChild2, styles.groupChildLayout1]}
            contentFit="cover"
            source={require("../assets/ellipse-74.png")}
          />
          <Image
            style={[styles.groupChild3, styles.groupChildLayout1]}
            contentFit="cover"
            source={require("../assets/ellipse-751.png")}
          />
          <Image
            style={[styles.groupChild4, styles.groupChildLayout1]}
            contentFit="cover"
            source={require("../assets/ellipse-763.png")}
          />
          <Image
            style={[styles.groupChild5, styles.groupChildLayout1]}
            contentFit="cover"
            source={require("../assets/ellipse-773.png")}
          />
        </View>
      </View>
      <Pressable
        style={styles.groupChild6Position}
        onPress={() => navigation.navigate("IPhone13ProMax206")}
      >
        <View style={[styles.groupChild6, styles.groupChild6Position]} />
        <Image
          style={[styles.groupChild7, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/group-4925.png")}
        />
        <Text style={[styles.share, styles.flipTypo]}>Share</Text>
        <Text style={[styles.flip, styles.flipTypo]}>Flip</Text>
        <Image
          style={[styles.groupChild8, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/group-49271.png")}
        />
        <Pressable
          style={styles.groupContainer}
          onPress={() => navigation.navigate("IPhone13ProMax198")}
        >
          <Pressable
            style={styles.wrapper}
            onPress={() => navigation.navigate("IPhone13ProMax198")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/group-49291.png")}
            />
          </Pressable>
          <Pressable
            style={styles.gift}
            onPress={() => navigation.navigate("IPhone13ProMax198")}
          >
            <Text style={[styles.gift1, styles.flipTypo]}>Gift</Text>
          </Pressable>
        </Pressable>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout2: {
    height: 415,
    position: "absolute",
  },
  groupLayout: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupPosition: {
    height: 132,
    right: "0%",
    position: "absolute",
  },
  groupChild6Border: {
    borderWidth: 1,
    borderColor: "#9d1720",
    borderStyle: "solid",
    backgroundColor: Color.white,
  },
  parentLayout: {
    height: 37,
    position: "absolute",
  },
  groupChild1Layout: {
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
  groupChildLayout1: {
    width: "17.35%",
    height: 26,
    maxWidth: "100%",
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  groupChild6Position: {
    height: 202,
    bottom: 0,
    right: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  groupChildLayout: {
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
  iphone13ProMax209Child: {
    backgroundColor: Color.gray_400,
    width: 428,
    height: 143,
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
    position: "absolute",
  },
  iphone13ProMax209Item: {
    right: 0,
    backgroundColor: Color.white,
    left: 0,
    top: 0,
    position: "absolute",
    height: 800,
  },
  groupChild: {
    width: "67.65%",
    right: "32.35%",
    left: "0%",
    height: 415,
    position: "absolute",
    borderRadius: Border.br_3xs,
    top: 0,
  },
  groupItem: {
    left: "68.24%",
    width: "31.76%",
    height: 132,
    right: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    borderRadius: Border.br_3xs,
    top: 0,
  },
  groupInner: {
    top: 142,
    left: "68.24%",
    width: "31.76%",
    height: 132,
    right: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    borderRadius: Border.br_3xs,
  },
  rectangleView: {
    height: 132,
    right: "0%",
    position: "absolute",
    borderColor: "#9d1720",
    left: "0%",
    borderRadius: Border.br_3xs,
    top: 0,
    width: "100%",
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
    left: "68.24%",
    width: "31.76%",
    height: 132,
    right: "0%",
  },
  rectangleParent: {
    width: "88.28%",
    top: 150,
    right: "5.61%",
    left: "6.11%",
  },
  ellipseIcon: {
    top: 9,
    left: 3,
    width: 23,
    height: 25,
    position: "absolute",
  },
  lia22: {
    top: 12,
    left: 33,
    fontSize: FontSize.size_sm,
    fontWeight: "700",
    fontFamily: FontFamily.quicksandBold,
    position: "absolute",
  },
  groupChild1: {
    borderColor: "#0fa958",
    borderWidth: 2,
    height: 30,
    width: 127,
    left: 0,
    borderStyle: "solid",
    top: 7,
    borderRadius: Border.br_3xs,
  },
  groupIcon: {
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
  groupChild2: {
    right: "82.65%",
    left: "0%",
  },
  groupChild3: {
    right: "61.28%",
    left: "21.37%",
  },
  groupChild4: {
    right: "39.92%",
    left: "42.73%",
  },
  groupChild5: {
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
  groupChild6: {
    borderTopLeftRadius: Border.br_xl,
    borderTopRightRadius: Border.br_xl,
    borderWidth: 1,
    borderColor: "#9d1720",
    borderStyle: "solid",
    backgroundColor: Color.white,
  },
  groupChild7: {
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
  groupChild8: {
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
  iphone13ProMax209: {
    flex: 1,
    overflow: "hidden",
    height: 800,
    width: "100%",
  },
});

export default IPhone13ProMax209;
