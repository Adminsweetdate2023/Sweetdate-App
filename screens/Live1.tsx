import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";

const Live1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.live1}>
      <Image
        style={[styles.live1Child, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-50.png")}
      />
      <Image
        style={[styles.makigiftIcon, styles.wrapperLayout]}
        contentFit="cover"
        source={require("../assets/makigift.png")}
      />
      <View style={[styles.ellipseParent, styles.groupItemLayout]}>
        <Image
          style={styles.groupChild}
          contentFit="cover"
          source={require("../assets/ellipse-29.png")}
        />
        <Text style={[styles.evelyn25, styles.sayHiTypo]}>Evelyn,25</Text>
        <View style={[styles.groupItem, styles.groupItemBorder]} />
        <Image
          style={styles.groupInner}
          contentFit="cover"
          source={require("../assets/group-166.png")}
        />
      </View>
      <Pressable
        style={[styles.wrapper, styles.wrapperLayout]}
        onPress={() => navigation.navigate("Photo25")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/group-168.png")}
        />
      </Pressable>
      <Image
        style={styles.live1Item}
        contentFit="cover"
        source={require("../assets/group-169.png")}
      />
      <View style={[styles.rectangleParent, styles.rectangleLayout]}>
        <View style={[styles.rectangleView, styles.live1InnerLayout]} />
        <TextInput
          style={[styles.sayHi, styles.sayHiTypo]}
          placeholder="Say hi..."
          keyboardType="default"
          placeholderTextColor="#14051e"
        />
        <Image
          style={styles.groupIcon}
          contentFit="cover"
          source={require("../assets/group-171.png")}
        />
      </View>
      <Image
        style={[styles.live1Inner, styles.live1InnerLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-53.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  wrapperLayout: {
    width: 30,
    height: 30,
    position: "absolute",
  },
  groupItemLayout: {
    width: 139,
    position: "absolute",
  },
  sayHiTypo: {
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  groupItemBorder: {
    borderWidth: 2,
    borderStyle: "solid",
  },
  rectangleLayout: {
    height: 38,
    width: 279,
    left: "50%",
  },
  live1InnerLayout: {
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  live1Child: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  makigiftIcon: {
    bottom: 39,
    left: 21,
    height: 30,
    overflow: "hidden",
  },
  groupChild: {
    top: 9,
    left: 3,
    width: 25,
    height: 25,
    position: "absolute",
  },
  evelyn25: {
    top: 12,
    left: 37,
    color: Color.black,
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 66,
    height: 19,
  },
  groupItem: {
    top: 7,
    left: 0,
    borderRadius: Border.br_3xs,
    borderColor: "#0fa958",
    width: 139,
    position: "absolute",
    height: 30,
  },
  groupInner: {
    top: 0,
    left: 119,
    width: 15,
    height: 16,
    position: "absolute",
  },
  ellipseParent: {
    top: 20,
    left: 58,
    height: 37,
  },
  wrapper: {
    left: 16,
    top: 27,
    height: 30,
  },
  live1Item: {
    top: 31,
    right: 91,
    width: 21,
    height: 21,
    position: "absolute",
  },
  rectangleView: {
    marginLeft: -139.5,
    bottom: 0,
    borderColor: "#000",
    height: 38,
    width: 279,
    left: "50%",
    borderWidth: 2,
    borderStyle: "solid",
  },
  sayHi: {
    bottom: 11,
    left: 20,
  },
  groupIcon: {
    bottom: 8,
    left: 239,
    width: 24,
    height: 24,
    position: "absolute",
  },
  rectangleParent: {
    marginLeft: -120,
    bottom: 35,
    position: "absolute",
  },
  live1Inner: {
    right: 21,
    bottom: 96,
    width: 92,
    height: 136,
  },
  live1: {
    backgroundColor: Color.whitesmoke_200,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default Live1;
