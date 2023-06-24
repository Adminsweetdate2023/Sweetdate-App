import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Photo218 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.photo2}>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <Text
          style={[styles.helpFeedback, styles.continueFlexBox]}
        >{`Help & Feedback`}</Text>
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
        source={require("../assets/group-123.png")}
      />
      <Text style={[styles.verifyYourEmail, styles.yourTypo]}>
        Verify your email to get the latest offers and campaigns
      </Text>
      <Pressable
        style={styles.button2}
        onPress={() => navigation.navigate("Photo219")}
      >
        <View style={[styles.button1, styles.button1Position]}>
          <View style={[styles.button1Child, styles.button1Position]} />
          <Text style={[styles.continue, styles.yourTypo]}>Verify now</Text>
        </View>
      </Pressable>
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Text style={[styles.enterYourEmail, styles.yourTypo]}>
          Enter your email
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 43,
    position: "absolute",
  },
  groupPosition: {
    backgroundColor: Color.white,
    top: 0,
    left: "0%",
    right: "0%",
    width: "100%",
  },
  continueFlexBox: {
    textAlign: "center",
    left: "50%",
  },
  yourTypo: {
    fontSize: FontSize.size_sm,
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
    height: 38,
    position: "absolute",
  },
  groupChild: {
    height: 43,
    position: "absolute",
  },
  helpFeedback: {
    marginLeft: -49,
    top: 14,
    fontSize: FontSize.fontsRegularCaption12_size,
    color: Color.black,
    textAlign: "center",
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    position: "absolute",
  },
  icon: {
    maxWidth: "100%",
    maxHeight: "100%",
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  vector: {
    left: "8.02%",
    top: "36.92%",
    right: "89.48%",
    bottom: "32.78%",
    width: "2.5%",
    height: "30.3%",
    position: "absolute",
  },
  rectangleParent: {
    top: 20,
    left: "0%",
    right: "0%",
    width: "100%",
    height: 43,
  },
  photo2Child: {
    marginLeft: -75,
    top: 70,
    width: 150,
    height: 150,
    left: "50%",
    position: "absolute",
  },
  verifyYourEmail: {
    marginLeft: -151,
    top: 227,
    fontWeight: "500",
    fontFamily: FontFamily.quicksandMedium,
    width: 302,
    textAlign: "center",
    left: "50%",
    color: Color.black,
  },
  button1Child: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.brown,
    left: "0%",
    right: "0%",
  },
  continue: {
    marginLeft: -34,
    top: "27.03%",
    fontFamily: FontFamily.robotoBold,
    color: Color.white,
    textAlign: "center",
    left: "50%",
    fontWeight: "700",
    fontSize: FontSize.size_sm,
  },
  button1: {
    right: "-0.94%",
    left: "0.94%",
  },
  button2: {
    width: "88.89%",
    top: 357,
    left: "5.56%",
    height: 37,
    right: "5.56%",
    position: "absolute",
  },
  groupItem: {
    borderRadius: Border.br_xl,
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.5)",
    borderWidth: 1,
    backgroundColor: Color.white,
    top: 0,
    left: "0%",
    right: "0%",
    width: "100%",
  },
  enterYourEmail: {
    top: 10,
    left: "9.78%",
    color: Color.gray_600,
    textAlign: "left",
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
  },
  rectangleGroup: {
    width: "88.06%",
    top: 294,
    left: "6.39%",
    right: "5.56%",
  },
  photo2: {
    backgroundColor: Color.whitesmoke_100,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default Photo218;
