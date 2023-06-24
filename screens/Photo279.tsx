import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const Photo279 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.photo2}>
      <View style={[styles.rectangleParent, styles.groupChildPosition]}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <Text style={styles.blockedUser}>Blocked user</Text>
        <Pressable
          style={styles.vector}
          onPress={() => navigation.navigate("Photo219")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/vector1.png")}
          />
        </Pressable>
      </View>
      <Image
        style={styles.photo2Child}
        contentFit="cover"
        source={require("../assets/ellipse-422.png")}
      />
      <Text style={[styles.alexa, styles.alexaTypo]}>Alexa</Text>
      <Text style={[styles.colombia, styles.alexaTypo]}>COLOMBIA</Text>
      <Pressable
        style={[styles.rectangleGroup, styles.groupLayout]}
        onPress={() => navigation.navigate("Photo278")}
      >
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Text style={[styles.unblock, styles.alexaTypo]}>Unblock</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    height: 43,
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  alexaTypo: {
    textAlign: "left",
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    position: "absolute",
  },
  groupLayout: {
    height: 31,
    width: 74,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.white,
    top: 0,
  },
  blockedUser: {
    top: 14,
    left: "39.72%",
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    fontSize: FontSize.fontsRegularCaption12_size,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  vector: {
    left: 29,
    top: 16,
    width: 9,
    height: 13,
    position: "absolute",
  },
  rectangleParent: {
    top: 20,
  },
  photo2Child: {
    top: 81,
    left: 23,
    width: 60,
    height: 60,
    position: "absolute",
  },
  alexa: {
    top: 89,
    fontSize: FontSize.size_sm,
    left: 98,
    textAlign: "left",
    color: Color.black,
  },
  colombia: {
    top: 118,
    color: Color.gray_600,
    left: 98,
    textAlign: "left",
    fontSize: FontSize.fontsRegularCaption12_size,
  },
  groupItem: {
    right: 0,
    borderRadius: Border.br_xl,
    backgroundColor: Color.gainsboro_100,
    top: 0,
  },
  unblock: {
    top: 8,
    right: 13,
    color: Color.black,
    fontSize: FontSize.fontsRegularCaption12_size,
  },
  rectangleGroup: {
    top: 95,
    right: 23,
  },
  photo2: {
    backgroundColor: Color.whitesmoke_100,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default Photo279;
