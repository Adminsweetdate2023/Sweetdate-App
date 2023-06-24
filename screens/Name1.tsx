import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const Name1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.name}>
      <Text style={[styles.iAm, styles.iAmTypo]}>I am ...</Text>
      <Text style={[styles.lookingFor, styles.continueTypo]}>
        Looking for ...
      </Text>
      <Pressable
        style={styles.button2}
        onPress={() => navigation.navigate("Photo")}
      >
        <View style={[styles.button1, styles.button1Position]}>
          <View style={[styles.button1Child, styles.button1Position]} />
          <Text style={[styles.continue, styles.continueTypo]}>Continue</Text>
        </View>
      </Pressable>
      <View style={[styles.groupParent, styles.groupLayout]}>
        <View style={[styles.groupContainer, styles.groupPosition]}>
          <Image
            style={[styles.groupChild, styles.groupPosition]}
            contentFit="cover"
            source={require("../assets/group-8.png")}
          />
          <Text style={[styles.male, styles.maleTypo]}>Male</Text>
        </View>
        <View style={[styles.ellipseParent, styles.parentLayout]}>
          <Image
            style={[styles.groupItem, styles.groupPosition]}
            contentFit="cover"
            source={require("../assets/ellipse-2.png")}
          />
          <Text style={[styles.female, styles.femaleTypo]}>Female</Text>
        </View>
      </View>
      <View style={[styles.groupView, styles.groupLayout]}>
        <View style={[styles.groupParent1, styles.parentLayout]}>
          <Image
            style={[styles.groupItem, styles.groupPosition]}
            contentFit="cover"
            source={require("../assets/ellipse-2.png")}
          />
          <Text style={[styles.male1, styles.maleTypo]}>Male</Text>
        </View>
        <View style={[styles.femaleParent, styles.groupPosition]}>
          <Text style={[styles.female1, styles.femaleTypo]}>Female</Text>
          <Image
            style={[styles.groupChild, styles.groupPosition]}
            contentFit="cover"
            source={require("../assets/group-8.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iAmTypo: {
    textAlign: "left",
    fontSize: FontSize.size_9xl,
    left: "7.78%",
  },
  continueTypo: {
    color: Color.white,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    position: "absolute",
  },
  button1Position: {
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  groupLayout: {
    width: 170,
    left: 30,
    height: 87,
    position: "absolute",
  },
  groupPosition: {
    width: 65,
    top: 0,
    position: "absolute",
  },
  maleTypo: {
    fontSize: FontSize.size_3xs,
    left: 21,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    position: "absolute",
  },
  parentLayout: {
    height: 84,
    top: 3,
    width: 65,
    position: "absolute",
  },
  femaleTypo: {
    left: 16,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    position: "absolute",
  },
  iAm: {
    top: 121,
    color: Color.black,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    textAlign: "left",
    fontSize: FontSize.size_9xl,
    left: "7.78%",
    position: "absolute",
  },
  lookingFor: {
    top: 272,
    textAlign: "left",
    fontSize: FontSize.size_9xl,
    left: "7.78%",
    color: Color.white,
  },
  button1Child: {
    right: "0%",
    left: "0%",
    borderRadius: Border.br_11xl,
    backgroundColor: Color.brown,
  },
  continue: {
    marginLeft: -29,
    top: "27.03%",
    left: "50%",
    fontSize: FontSize.size_sm,
    textAlign: "center",
  },
  button1: {
    right: "-0.94%",
    left: "0.94%",
  },
  button2: {
    width: "88.89%",
    right: "5.56%",
    bottom: 67,
    left: "5.56%",
    height: 37,
    position: "absolute",
  },
  groupChild: {
    height: 68,
    left: 0,
  },
  male: {
    top: 75,
  },
  groupContainer: {
    left: 0,
    height: 87,
  },
  groupItem: {
    height: 65,
    left: 0,
  },
  female: {
    top: 72,
  },
  ellipseParent: {
    left: 105,
  },
  groupParent: {
    top: 173,
    height: 87,
  },
  male1: {
    top: 72,
  },
  groupParent1: {
    left: 0,
  },
  female1: {
    top: 75,
  },
  femaleParent: {
    left: 105,
    height: 87,
  },
  groupView: {
    top: 317,
    height: 87,
  },
  name: {
    backgroundColor: Color.white,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default Name1;
