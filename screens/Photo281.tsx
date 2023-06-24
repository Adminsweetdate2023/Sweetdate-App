import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const Photo281 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.photo2}>
      <View style={[styles.rectangleParent, styles.groupChildPosition]}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <Text
          style={[styles.helpFeedback, styles.helpFeedbackTypo]}
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
      <View style={styles.groupParent}>
        <Pressable
          style={[styles.rectangleGroup, styles.groupPosition]}
          onPress={() => navigation.navigate("Photo280")}
        >
          <View style={[styles.groupItem, styles.groupPosition]} />
          <Text style={[styles.feedback, styles.feedbackTypo]}>Feedback</Text>
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector4.png")}
          />
        </Pressable>
        <View style={[styles.rectangleContainer, styles.groupPosition]}>
          <View style={[styles.groupItem, styles.groupPosition]} />
          <Text style={[styles.feedback, styles.feedbackTypo]}>
            Privacy Policy
          </Text>
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector4.png")}
          />
        </View>
        <View style={[styles.groupView, styles.groupPosition]}>
          <View style={[styles.groupItem, styles.groupPosition]} />
          <Text style={[styles.feedback, styles.feedbackTypo]}>
            Terms of Service
          </Text>
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector4.png")}
          />
        </View>
        <View style={[styles.rectangleParent1, styles.groupPosition]}>
          <View style={[styles.groupItem, styles.groupPosition]} />
          <Text style={[styles.feedback, styles.feedbackTypo]}>
            Delete account
          </Text>
        </View>
      </View>
      <View style={styles.groupChild2Position}>
        <View style={[styles.groupChild2, styles.groupChild2Position]} />
        <View style={[styles.rectangleParent3, styles.groupChild3Position]}>
          <View style={[styles.groupChild3, styles.groupChild3Position]} />
          <Text style={[styles.deleteAccount1, styles.noPosition]}>
            Delete account
          </Text>
          <Text style={[styles.areYouSure, styles.noPosition]}>
            Are you sure?
          </Text>
          <Pressable
            style={[styles.no, styles.noPosition]}
            onPress={() => navigation.navigate("Photo282")}
          >
            <Text style={[styles.no1, styles.no1Typo]}>No</Text>
          </Pressable>
          <Pressable
            style={[styles.yes, styles.noPosition]}
            onPress={() => navigation.navigate("Splash")}
          >
            <Text style={[styles.yes1, styles.no1Typo]}>Yes</Text>
          </Pressable>
        </View>
      </View>
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
  helpFeedbackTypo: {
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    color: Color.black,
  },
  groupPosition: {
    height: 50,
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  feedbackTypo: {
    fontFamily: FontFamily.quicksandMedium,
    fontWeight: "500",
    textAlign: "left",
  },
  groupChild2Position: {
    bottom: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  groupChild3Position: {
    height: 121,
    top: "50%",
    position: "absolute",
  },
  noPosition: {
    top: "50%",
    position: "absolute",
  },
  no1Typo: {
    color: Color.brown,
    marginTop: 27.5,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
  },
  groupChild: {
    backgroundColor: Color.white,
    top: 0,
  },
  helpFeedback: {
    marginLeft: -49,
    top: 14,
    left: "50%",
    textAlign: "center",
    color: Color.black,
    fontSize: FontSize.fontsRegularCaption12_size,
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
  },
  groupItem: {
    borderStyle: "solid",
    borderColor: "#d9d9d9",
    borderWidth: 1,
    backgroundColor: Color.white,
    top: 0,
  },
  feedback: {
    top: 16,
    left: "7.8%",
    color: Color.gray_300,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  vectorIcon: {
    top: 18,
    right: 27,
    width: 8,
    height: 13,
    position: "absolute",
  },
  rectangleGroup: {
    top: 0,
  },
  rectangleContainer: {
    top: 50,
  },
  groupView: {
    top: 100,
  },
  rectangleParent1: {
    top: 150,
  },
  groupParent: {
    width: "99.72%",
    top: 80,
    right: "0.28%",
    height: 200,
    left: "0%",
    position: "absolute",
  },
  groupChild2: {
    backgroundColor: Color.gray_600,
  },
  groupChild3: {
    marginTop: -60.5,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.white,
    left: "0%",
    right: "0%",
    height: 121,
    width: "100%",
  },
  deleteAccount1: {
    marginTop: -44.5,
    left: "6.25%",
    textAlign: "left",
    fontSize: FontSize.size_sm,
    color: Color.black,
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
  },
  areYouSure: {
    marginTop: -11.5,
    left: "6.91%",
    textAlign: "left",
    fontFamily: FontFamily.quicksandMedium,
    fontWeight: "500",
    color: Color.black,
    fontSize: FontSize.fontsRegularCaption12_size,
  },
  no1: {
    textAlign: "center",
  },
  no: {
    left: "71.05%",
  },
  yes1: {
    textAlign: "left",
  },
  yes: {
    left: "85.53%",
  },
  rectangleParent3: {
    marginTop: -66,
    width: "84.44%",
    right: "7.78%",
    left: "7.78%",
  },
  photo2: {
    backgroundColor: Color.whitesmoke_100,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default Photo281;
