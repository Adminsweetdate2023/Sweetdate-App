import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const IPhone13ProMax31 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone13ProMax31}>
      <View style={styles.iphone13ProMax31Child} />
      <View style={[styles.iphone13ProMax31Item, styles.rectangleViewBg]} />
      <Pressable
        style={[styles.rectangleParent, styles.groupChildLayout1]}
        onPress={() => navigation.navigate("Photo210")}
      >
        <Image
          style={[styles.groupChild, styles.groupLayout2]}
          contentFit="cover"
          source={require("../assets/rectangle-222.png")}
        />
        <Image
          style={[styles.groupItem, styles.groupPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-223.png")}
        />
        <Image
          style={[styles.groupInner, styles.groupPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-224.png")}
        />
        <View style={[styles.rectangleGroup, styles.groupPosition]}>
          <View style={[styles.rectangleView, styles.groupChild1Border]} />
          <Image
            style={styles.materialSymbolschairIcon}
            contentFit="cover"
            source={require("../assets/materialsymbolschair.png")}
          />
        </View>
      </Pressable>
      <View style={[styles.ellipseParent, styles.groupChild1Layout]}>
        <Image
          style={styles.ellipseIcon}
          contentFit="cover"
          source={require("../assets/ellipse-291.png")}
        />
        <Text style={[styles.teeman32, styles.textFlexBox]}>Teeman,32</Text>
        <View style={[styles.groupChild1, styles.groupChild1Layout]} />
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
            style={[
              styles.fluentchat24FilledIcon,
              styles.fluentchat24FilledIconLayout,
            ]}
            contentFit="cover"
            source={require("../assets/fluentchat24filled.png")}
          />
        </View>
      </View>
      <View style={styles.parent}>
        <Text style={[styles.text, styles.textFlexBox]}>150</Text>
        <Image
          style={[styles.groupChild3, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-74.png")}
        />
        <Image
          style={[styles.groupChild4, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-75.png")}
        />
        <Image
          style={[styles.groupChild5, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-76.png")}
        />
        <Image
          style={[styles.groupChild6, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-77.png")}
        />
        <Pressable
          style={[
            styles.materialSymbolscancelRounde,
            styles.fluentchat24FilledIconLayout,
          ]}
          onPress={() => navigation.navigate("LiveMultiguest")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/materialsymbolscancelrounded.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleViewBg: {
    backgroundColor: Color.white,
    left: "0%",
    width: "100%",
  },
  groupChildLayout1: {
    height: 415,
    position: "absolute",
  },
  groupLayout2: {
    maxWidth: "100%",
    borderRadius: Border.br_3xs,
    overflow: "hidden",
  },
  groupPosition: {
    height: 132,
    right: "0%",
    position: "absolute",
  },
  groupChild1Border: {
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    top: 0,
  },
  groupChild1Layout: {
    height: 30,
    width: 127,
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  groupLayout: {
    width: 40,
    bottom: 0,
    height: 40,
    position: "absolute",
  },
  fluentchat24FilledIconLayout: {
    width: 24,
    height: 24,
    position: "absolute",
  },
  groupChildLayout: {
    width: "14.44%",
    height: 26,
    maxWidth: "100%",
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  iphone13ProMax31Child: {
    backgroundColor: Color.gray_400,
    width: 428,
    height: 143,
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
    position: "absolute",
  },
  iphone13ProMax31Item: {
    top: "0%",
    bottom: "0%",
    right: "0%",
    backgroundColor: Color.white,
    height: "100%",
    position: "absolute",
  },
  groupChild: {
    width: "67.72%",
    right: "32.28%",
    height: 415,
    position: "absolute",
    left: "0%",
    top: 0,
    maxWidth: "100%",
  },
  groupItem: {
    left: "68.25%",
    width: "31.75%",
    height: 132,
    maxWidth: "100%",
    borderRadius: Border.br_3xs,
    overflow: "hidden",
    top: 0,
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
    borderColor: "#9d1720",
    borderWidth: 1,
    height: 132,
    right: "0%",
    position: "absolute",
    backgroundColor: Color.white,
    left: "0%",
    width: "100%",
  },
  materialSymbolschairIcon: {
    width: "20%",
    top: 54,
    right: "40%",
    left: "40%",
    height: 24,
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  rectangleGroup: {
    top: 283,
    left: "68.25%",
    width: "31.75%",
    height: 132,
  },
  rectangleParent: {
    width: "88.32%",
    top: 196,
    right: "5.57%",
    left: "6.11%",
  },
  ellipseIcon: {
    top: 2,
    left: 3,
    width: 23,
    height: 25,
    position: "absolute",
  },
  teeman32: {
    top: 5,
    left: 33,
    fontSize: FontSize.size_sm,
    fontWeight: "700",
    fontFamily: FontFamily.quicksandBold,
  },
  groupChild1: {
    borderColor: "#0fa958",
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    top: 0,
    left: 0,
  },
  ellipseParent: {
    top: 27,
    left: 22,
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
    overflow: "hidden",
  },
  groupParent: {
    bottom: 24,
    left: 13,
    width: 90,
    height: 40,
    position: "absolute",
  },
  text: {
    top: 7,
    left: "71.03%",
    fontSize: FontSize.fontsRegularCaption12_size,
    fontWeight: "900",
    fontFamily: FontFamily.nunitoBlack,
  },
  groupChild3: {
    right: "85.56%",
    left: "0%",
  },
  groupChild4: {
    right: "67.96%",
    left: "17.59%",
  },
  groupChild5: {
    right: "50.19%",
    left: "35.37%",
  },
  groupChild6: {
    right: "32.41%",
    left: "53.15%",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  materialSymbolscancelRounde: {
    left: 156,
    top: 1,
  },
  parent: {
    width: "50%",
    top: 29,
    right: "5%",
    left: "45%",
    height: 26,
    position: "absolute",
  },
  iphone13ProMax31: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone13ProMax31;
