import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const IPhone13ProMax32 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone13ProMax32}>
      <Image
        style={[styles.icbaselineMicOffIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/icbaselinemicoff.png")}
      />
      <View style={[styles.iphone13ProMax32Child, styles.groupItemPosition]} />
      <View
        style={[
          styles.iphone13ProMax32Item,
          styles.iphone13ProMax32ItemPosition,
        ]}
      />
      <Image
        style={[styles.iphone13ProMax32Inner, styles.icon1Layout]}
        contentFit="cover"
        source={require("../assets/group-51761.png")}
      />
      <View style={[styles.ellipseParent, styles.groupItemLayout]}>
        <Image
          style={styles.groupChild}
          contentFit="cover"
          source={require("../assets/ellipse-291.png")}
        />
        <Text style={[styles.teeman32, styles.textFlexBox]}>Teeman,32</Text>
        <View style={[styles.groupItem, styles.groupItemLayout]} />
      </View>
      <View style={styles.groupParent}>
        <Pressable
          style={[styles.wrapper, styles.wrapperLayout]}
          onPress={() => navigation.navigate("IPhone13ProMax37")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/group-5199.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.groupContainer, styles.wrapperLayout]}
          onPress={() => navigation.navigate("IPhone13ProMax35")}
        >
          <Image
            style={[styles.groupContainer, styles.wrapperLayout]}
            contentFit="cover"
            source={require("../assets/group-4936.png")}
          />
          <Image
            style={[styles.fluentchat24FilledIcon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/fluentchat24filled.png")}
          />
        </Pressable>
      </View>
      <View style={styles.parent}>
        <Text style={[styles.text, styles.textFlexBox]}>150</Text>
        <Image
          style={[styles.ellipseIcon, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-74.png")}
        />
        <Image
          style={[styles.groupChild1, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-75.png")}
        />
        <Image
          style={[styles.groupChild2, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-76.png")}
        />
        <Image
          style={[styles.groupChild3, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-77.png")}
        />
        <Pressable
          style={[
            styles.materialSymbolscancelRounde,
            styles.iphone13ProMax32ItemPosition,
          ]}
          onPress={() => navigation.navigate("LiveAudiolive")}
        >
          <Image
            style={[styles.icon1, styles.icon1Layout]}
            contentFit="cover"
            source={require("../assets/materialsymbolscancelrounded.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  groupItemPosition: {
    borderRadius: Border.br_3xs,
    top: 0,
    left: 0,
  },
  iphone13ProMax32ItemPosition: {
    right: "0%",
    position: "absolute",
  },
  icon1Layout: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupItemLayout: {
    height: 30,
    width: 127,
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  wrapperLayout: {
    width: 40,
    bottom: 0,
    height: 40,
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
  icbaselineMicOffIcon: {
    top: 449,
    left: 175,
    height: 24,
  },
  iphone13ProMax32Child: {
    backgroundColor: Color.gray_400,
    width: 428,
    height: 143,
    position: "absolute",
  },
  iphone13ProMax32Item: {
    top: "0%",
    bottom: "0%",
    backgroundColor: Color.white,
    left: "0%",
    height: "100%",
    width: "100%",
  },
  iphone13ProMax32Inner: {
    width: "87.52%",
    top: 150,
    right: "6.37%",
    left: "6.11%",
    height: 129,
    position: "absolute",
  },
  groupChild: {
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
  groupItem: {
    borderStyle: "solid",
    borderColor: "#0fa958",
    borderWidth: 2,
    borderRadius: Border.br_3xs,
    top: 0,
    left: 0,
  },
  ellipseParent: {
    top: 27,
    left: 22,
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 50,
  },
  groupContainer: {
    left: 0,
    width: 40,
    bottom: 0,
  },
  fluentchat24FilledIcon: {
    bottom: 8,
    left: 8,
    height: 24,
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
  ellipseIcon: {
    right: "85.56%",
    left: "0%",
  },
  groupChild1: {
    right: "67.96%",
    left: "17.59%",
  },
  groupChild2: {
    right: "50.19%",
    left: "35.37%",
  },
  groupChild3: {
    right: "32.41%",
    left: "53.15%",
  },
  icon1: {
    height: "100%",
    width: "100%",
  },
  materialSymbolscancelRounde: {
    left: "86.67%",
    top: 1,
    width: "13.33%",
    height: 24,
  },
  parent: {
    width: "50%",
    top: 29,
    right: "5%",
    left: "45%",
    height: 26,
    position: "absolute",
  },
  iphone13ProMax32: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone13ProMax32;
