import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Photo26 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.photo2}>
      <View style={[styles.rectangleParent, styles.groupChildPosition]}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <Text style={styles.messages}>Messages</Text>
        <Image
          style={[styles.materialSymbolseditOutlineIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/materialsymbolseditoutline.png")}
        />
      </View>
      <Pressable
        style={[styles.wrapper, styles.wrapperLayout]}
        onPress={() => navigation.navigate("Photo25")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/ellipse-41.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.alexa30Parent, styles.parentLayout]}
        onPress={() => navigation.navigate("Photo25")}
      >
        <Text style={styles.alexa30}>Alexa, 30</Text>
        <Text style={[styles.iAmGood, styles.hTypo]}>I am good thanks..</Text>
        <Text style={[styles.h, styles.hTypo]}>15h</Text>
      </Pressable>
      <Pressable
        style={[styles.flirtstream25Parent, styles.parentLayout]}
        onPress={() => navigation.navigate("Photo25")}
      >
        <Text style={styles.alexa30}>Flirt.Stream, 25</Text>
        <Text style={[styles.iAmGood, styles.hTypo]}>Welcome Teeman!</Text>
        <Text style={[styles.h, styles.hTypo]}>15h</Text>
      </Pressable>
      <Pressable
        style={[styles.ellipseParent, styles.wrapperLayout]}
        onPress={() => navigation.navigate("Photo25")}
      >
        <Image
          style={[styles.groupItem, styles.wrapperLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-421.png")}
        />
        <Image
          style={styles.originalOnTransparent1}
          contentFit="cover"
          source={require("../assets/original-on-transparent-1.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    height: 44,
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  iconLayout: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  wrapperLayout: {
    height: 52,
    width: 52,
    position: "absolute",
  },
  parentLayout: {
    height: 43,
    width: 110,
    left: 98,
    position: "absolute",
  },
  hTypo: {
    color: Color.gray_600,
    fontFamily: FontFamily.quicksandMedium,
    fontWeight: "500",
    fontSize: FontSize.size_3xs,
    top: 30,
    textAlign: "left",
    position: "absolute",
  },
  groupChild: {
    top: 0,
    backgroundColor: Color.white,
  },
  messages: {
    marginLeft: -33,
    top: 7,
    left: "50%",
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  materialSymbolseditOutlineIcon: {
    top: 4,
    left: 20,
    position: "absolute",
  },
  rectangleParent: {
    top: 20,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    top: 88,
    left: 26,
    width: 52,
  },
  alexa30: {
    textAlign: "left",
    left: 0,
    color: Color.black,
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    fontSize: FontSize.size_sm,
    top: 0,
    position: "absolute",
  },
  iAmGood: {
    left: 0,
  },
  h: {
    left: 94,
  },
  alexa30Parent: {
    top: 92,
  },
  flirtstream25Parent: {
    top: 161,
  },
  groupItem: {
    left: 0,
    top: 0,
  },
  originalOnTransparent1: {
    top: 8,
    left: 7,
    width: 38,
    height: 36,
    position: "absolute",
  },
  ellipseParent: {
    top: 157,
    left: 26,
    width: 52,
  },
  photo2: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Photo26;
