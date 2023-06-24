import React, { useState } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { Toggle as RNKToggle } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const Photo219 = () => {
  const [ionswitchchecked, setIonswitchchecked] = useState(undefined);
  const navigation = useNavigation();

  return (
    <View style={styles.photo2}>
      <View style={[styles.photo2Child, styles.groupPosition1]} />
      <Text style={styles.preferences}>Preferences</Text>
      <Pressable
        style={styles.vector}
        onPress={() =>
          navigation.navigate("BottomTabsRoot", { screen: "Photo220" })
        }
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
      </Pressable>
      <View style={[styles.rectangleParent, styles.groupParentLayout]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <Text style={styles.blurEffect}>Blur effect</Text>
        <RNKToggle
          style={styles.ionswitch}
          status="danger"
          checked={ionswitchchecked}
          onChange={() => setIonswitchchecked(!ionswitchchecked)}
        />
      </View>
      <View style={[styles.groupParent, styles.parentPosition]}>
        <Pressable
          style={styles.groupPosition}
          onPress={() => navigation.navigate("Photo276")}
        >
          <View style={[styles.groupChild, styles.groupPosition]} />
          <Text style={styles.blurEffect}>Notifications</Text>
          <Image
            style={[styles.vectorIcon, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/vector4.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.rectangleContainer, styles.groupParentLayout]}
          onPress={() => navigation.navigate("Photo279")}
        >
          <View style={[styles.groupChild, styles.groupPosition]} />
          <Text style={styles.blurEffect}>Blocked users</Text>
          <Image
            style={[styles.vectorIcon, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/vector4.png")}
          />
        </Pressable>
        <View style={[styles.groupView, styles.groupParentLayout]}>
          <View style={[styles.groupChild, styles.groupPosition]} />
          <Text style={styles.blurEffect}>Share with friends</Text>
          <Image
            style={[styles.vectorIcon, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/vector4.png")}
          />
        </View>
        <Pressable
          style={[styles.groupPressable, styles.groupParentLayout]}
          onPress={() => navigation.navigate("Photo282")}
        >
          <View style={[styles.groupChild, styles.groupPosition]} />
          <Text style={styles.blurEffect}>{`Help & Feedback`}</Text>
          <Image
            style={[styles.vectorIcon, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/vector4.png")}
          />
        </Pressable>
      </View>
      <Pressable
        style={[styles.rectangleParent1, styles.groupParentLayout]}
        onPress={() => navigation.navigate("Photo218")}
      >
        <View style={[styles.groupChild, styles.groupPosition]} />
        <Text style={styles.blurEffect}>Email verification</Text>
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector4.png")}
        />
      </Pressable>
      <View style={[styles.rectangleParent2, styles.groupParentLayout]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <Text style={styles.blurEffect}>Cancel subscription</Text>
        <Image
          style={[styles.vectorIcon5, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector4.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupPosition1: {
    left: "0%",
    right: "0%",
    width: "100%",
  },
  groupParentLayout: {
    height: 50,
    position: "absolute",
  },
  groupPosition: {
    top: 0,
    height: 50,
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  parentPosition: {
    right: "0.28%",
    width: "99.72%",
    left: "0%",
  },
  vectorIconLayout: {
    width: 8,
    top: 18,
    height: 13,
    position: "absolute",
  },
  photo2Child: {
    top: 20,
    height: 43,
    backgroundColor: Color.white,
    position: "absolute",
  },
  preferences: {
    marginLeft: -35,
    top: 34,
    left: "50%",
    fontSize: FontSize.fontsRegularCaption12_size,
    fontWeight: "700",
    fontFamily: FontFamily.quicksandBold,
    color: Color.black,
    textAlign: "center",
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  vector: {
    left: 29,
    top: 36,
    width: 9,
    height: 13,
    position: "absolute",
  },
  groupChild: {
    borderStyle: "solid",
    borderColor: "#d9d9d9",
    borderWidth: 1,
    backgroundColor: Color.white,
  },
  blurEffect: {
    top: 16,
    left: "7.8%",
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    fontFamily: FontFamily.quicksandMedium,
    color: Color.gray_300,
    textAlign: "left",
    position: "absolute",
  },
  ionswitch: {
    top: 7,
    width: 71,
    height: 35,
    right: 27,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleParent: {
    top: 71,
    right: "0.28%",
    width: "99.72%",
    left: "0%",
  },
  vectorIcon: {
    right: 27,
  },
  rectangleContainer: {
    top: 50,
    left: "0%",
    right: "0%",
    width: "100%",
  },
  groupView: {
    top: 100,
    left: "0%",
    right: "0%",
    width: "100%",
  },
  groupPressable: {
    top: 150,
    left: "0%",
    right: "0%",
    width: "100%",
  },
  groupParent: {
    top: 149,
    height: 200,
    position: "absolute",
  },
  rectangleParent1: {
    top: 377,
    right: "0.28%",
    width: "99.72%",
    left: "0%",
  },
  vectorIcon5: {
    right: 28,
  },
  rectangleParent2: {
    top: 455,
    left: "0.28%",
    width: "99.72%",
    height: 50,
    right: "0%",
  },
  photo2: {
    backgroundColor: Color.whitesmoke_100,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default Photo219;
