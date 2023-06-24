import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const CommunityRules = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.communityRules}>
      <Image
        style={styles.communityRulesChild}
        contentFit="cover"
        source={require("../assets/rectangle-11.png")}
      />
      <View style={styles.connectEnjoyParent}>
        <Text
          style={[styles.connectEnjoy, styles.connectEnjoyTypo]}
        >{`Connect & Enjoy`}</Text>
        <View style={[styles.button1, styles.button1Position]}>
          <View style={[styles.button1Child, styles.button1ChildPosition]} />
          <Text style={[styles.start, styles.startTypo]}>Start</Text>
        </View>
        <Text
          style={[styles.byContinuingYouContainer, styles.connectEnjoyTypo]}
        >
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
      <View style={[styles.communityRulesItem, styles.button1ChildPosition]} />
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={[styles.communityRules1, styles.communityRules1Clr]}>
          Community Rules
        </Text>
        <Text
          style={[styles.noObjectionableContent, styles.communityRules1Clr]}
        >{`No objectionable content is allowed on our platform. Objectionable content includes, but is not limited to:
Anyone under the age of 18
Sexually explicit material
Violence
Bullying and hate speech
Any illegal activity
If you encounter any violation, please inform us by reporting the user. Violators will be banned immediately. For more detailed information, please read our Terms of Service `}</Text>
        <Pressable
          style={styles.button11}
          onPress={() => navigation.navigate("Login")}
        >
          <View style={[styles.button1Child, styles.button1ChildPosition]} />
          <Text style={[styles.start1, styles.startTypo]}>OK</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  connectEnjoyTypo: {
    textAlign: "center",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
  },
  button1Position: {
    left: "0%",
    right: "0%",
    width: "100%",
  },
  button1ChildPosition: {
    bottom: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  startTypo: {
    top: "32.08%",
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    position: "absolute",
  },
  groupChildLayout: {
    height: 374,
    position: "absolute",
  },
  communityRules1Clr: {
    color: Color.black,
    position: "absolute",
  },
  communityRulesChild: {
    width: "63.61%",
    top: 311,
    right: "18.06%",
    left: "18.33%",
    maxWidth: "100%",
    height: 177,
    position: "absolute",
    overflow: "hidden",
  },
  connectEnjoy: {
    bottom: 150,
    left: "34.06%",
    color: Color.white,
    textAlign: "center",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    position: "absolute",
    fontSize: FontSize.size_sm,
  },
  button1Child: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.brown,
  },
  start: {
    left: "44.38%",
    fontSize: FontSize.fontsBoldHeading16B_size,
  },
  button1: {
    bottom: 70,
    height: 53,
    position: "absolute",
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
    height: 43,
    color: Color.white,
    textAlign: "center",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    position: "absolute",
  },
  connectEnjoyParent: {
    width: "88.89%",
    right: "5.56%",
    bottom: 55,
    left: "5.56%",
    height: 166,
    position: "absolute",
  },
  communityRulesItem: {
    backgroundColor: Color.gray_600,
  },
  groupChild: {
    top: 0,
    borderRadius: Border.br_xl,
    left: "0%",
    right: "0%",
    width: "100%",
    backgroundColor: Color.white,
    height: 374,
  },
  communityRules1: {
    top: 46,
    left: "31.44%",
    textAlign: "center",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    color: Color.black,
    fontSize: FontSize.size_sm,
  },
  noObjectionableContent: {
    width: "93.31%",
    top: 80,
    left: "3.68%",
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
    height: 184,
    fontSize: FontSize.fontsRegularCaption12_size,
  },
  start1: {
    left: "46.52%",
    fontSize: FontSize.size_sm,
  },
  button11: {
    width: "93.65%",
    top: 291,
    right: "3.01%",
    left: "3.34%",
    height: 36,
    position: "absolute",
  },
  rectangleParent: {
    width: "83.06%",
    top: 213,
    right: "8.33%",
    left: "8.61%",
  },
  communityRules: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default CommunityRules;
