import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const StartingScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.startingScreen}>
      <View style={styles.connectEnjoyParent}>
        <Text
          style={[styles.connectEnjoy, styles.startTypo]}
        >{`Connect & Enjoy`}</Text>
        <Pressable
          style={[styles.button1, styles.button1Position]}
          onPress={() => navigation.navigate("CommunityRules")}
        >
          <View style={[styles.button1Child, styles.button1Position]} />
          <Text style={[styles.start, styles.startTypo]}>Start</Text>
        </Pressable>
        <Text style={[styles.byContinuingYouContainer, styles.startTypo]}>
          <Text style={styles.byContinuingYou}>
            By continuing, you agree to our
          </Text>
          <Text style={styles.text}>{` `}</Text>
          <Text style={styles.termsOfService}>
            <Text style={styles.termsOfService1}>Terms of service</Text>
            <Text style={styles.text}>{` `}</Text>
          </Text>
          <Text style={styles.byContinuingYou}>and</Text>
          <Text style={styles.text}>{` `}</Text>
          <Text style={styles.privacyPolicy}>Privacy Policy</Text>
        </Text>
      </View>
      <Image
        style={styles.startingScreenChild}
        contentFit="cover"
        source={require("../assets/rectangle-11.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  startTypo: {
    textAlign: "center",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    position: "absolute",
  },
  button1Position: {
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  connectEnjoy: {
    bottom: 150,
    left: "34.06%",
    color: Color.white,
    textAlign: "center",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: FontSize.size_sm,
  },
  button1Child: {
    height: "100%",
    top: "0%",
    bottom: "0%",
    borderRadius: Border.br_11xl,
    backgroundColor: Color.crimson_100,
  },
  start: {
    top: "32.08%",
    left: "44.38%",
    fontSize: FontSize.fontsBoldHeading16B_size,
    color: Color.white,
    textAlign: "center",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
  },
  button1: {
    bottom: 70,
    height: 53,
  },
  byContinuingYou: {
    fontSize: FontSize.fontsRegularCaption12_size,
  },
  text: {
    fontSize: FontSize.fontsBoldHeading16B_size,
  },
  termsOfService1: {
    fontSize: FontSize.size_sm,
  },
  termsOfService: {
    textDecoration: "underline",
  },
  privacyPolicy: {
    textDecoration: "underline",
    fontSize: FontSize.size_sm,
  },
  byContinuingYouContainer: {
    width: "88.13%",
    bottom: 0,
    left: "6.25%",
    color: Color.gray_100,
    height: 43,
    textAlign: "center",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
  },
  connectEnjoyParent: {
    width: "88.89%",
    right: "5.56%",
    bottom: 55,
    left: "5.56%",
    height: 166,
    position: "absolute",
  },
  startingScreenChild: {
    marginLeft: -115,
    top: 311,
    left: "50%",
    width: 229,
    height: 177,
    position: "absolute",
  },
  startingScreen: {
    backgroundColor: Color.white,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default StartingScreen;
