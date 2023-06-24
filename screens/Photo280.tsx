import * as React from "react";
import { StyleSheet, View, TextInput, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Photo280 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.photo2, styles.childLayout]}>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.childPosition]} />
        <TextInput
          style={[styles.writeYourFeedback, styles.feedbackTypo]}
          placeholder="Write your feedback..."
          keyboardType="default"
          multiline
          placeholderTextColor="rgba(0, 0, 0, 0.5)"
        />
      </View>
      <Pressable
        style={styles.button2}
        onPress={() => navigation.navigate("Photo282")}
      >
        <View style={[styles.button1, styles.button1Position]}>
          <View style={[styles.button1Child, styles.button1Position]} />
          <Text style={[styles.continue, styles.continueTypo]}>Send</Text>
        </View>
      </Pressable>
      <View style={[styles.photo2Child, styles.childPosition]} />
      <Text style={[styles.feedback, styles.continueTypo]}>Feedback</Text>
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("Photo282")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  childLayout: {
    width: "100%",
    backgroundColor: Color.white,
  },
  groupChildLayout: {
    height: 145,
    position: "absolute",
  },
  childPosition: {
    left: "0%",
    right: "0%",
  },
  feedbackTypo: {
    fontSize: FontSize.fontsRegularCaption12_size,
    fontFamily: FontFamily.quicksandBold,
  },
  button1Position: {
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  continueTypo: {
    textAlign: "center",
    fontWeight: "700",
    position: "absolute",
  },
  groupChild: {
    top: 0,
    borderRadius: Border.br_xl,
    height: 145,
    position: "absolute",
    width: "100%",
    backgroundColor: Color.white,
  },
  writeYourFeedback: {
    top: 19,
    left: "5.3%",
    fontWeight: "700",
    fontFamily: FontFamily.quicksandBold,
    position: "absolute",
  },
  rectangleParent: {
    width: "83.89%",
    top: 110,
    right: "7.78%",
    left: "8.33%",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  button1Child: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.crimson_100,
    left: "0%",
    right: "0%",
  },
  continue: {
    marginLeft: -17,
    top: "27.03%",
    left: "50%",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.robotoBold,
    color: Color.white,
  },
  button1: {
    right: "-0.94%",
    left: "0.94%",
  },
  button2: {
    width: "88.89%",
    top: 270,
    right: "5.56%",
    left: "5.56%",
    height: 37,
    position: "absolute",
  },
  photo2Child: {
    top: 20,
    height: 43,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
    width: "100%",
    backgroundColor: Color.white,
  },
  feedback: {
    top: 34,
    left: "42.22%",
    color: Color.black,
    fontSize: FontSize.fontsRegularCaption12_size,
    fontFamily: FontFamily.quicksandBold,
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
  photo2: {
    flex: 1,
    height: 800,
    overflow: "hidden",
  },
});

export default Photo280;
