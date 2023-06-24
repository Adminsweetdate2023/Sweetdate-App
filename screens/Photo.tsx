import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Photo = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.photo}>
      <Text style={styles.letsAddA}>Let’s add a photo</Text>
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("Photo221")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/group-291.png")}
        />
      </Pressable>
      <View style={styles.button2Parent}>
        <View style={[styles.button2, styles.button2Position]}>
          <View style={[styles.button1, styles.button1Position]}>
            <View style={[styles.button1Child, styles.button1Position]} />
            <Text style={[styles.continue, styles.continueTypo]}>Done</Text>
          </View>
        </View>
        <Pressable
          style={styles.skipThisStepContainer}
          onPress={() =>
            navigation.navigate("BottomTabsRoot", { screen: "Photo287" })
          }
        >
          <Text style={[styles.skipThisStep, styles.continueTypo]}>
            Skip this step
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button2Position: {
    left: "0%",
    right: "0%",
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
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
  },
  letsAddA: {
    top: 121,
    fontSize: FontSize.size_9xl,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    left: "7.78%",
    position: "absolute",
  },
  icon: {
    maxWidth: "100%",
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  wrapper: {
    top: 174,
    right: "70%",
    width: "22.22%",
    height: 84,
    left: "7.78%",
    position: "absolute",
  },
  button1Child: {
    borderRadius: Border.br_11xl,
    backgroundColor: "rgba(233, 50, 50, 0.7)",
    left: "0%",
    right: "0%",
  },
  continue: {
    marginLeft: -17,
    top: "27.03%",
    left: "50%",
    fontSize: FontSize.size_sm,
    color: Color.white,
    position: "absolute",
  },
  button1: {
    right: "-0.94%",
    left: "0.94%",
  },
  button2: {
    bottom: 31,
    height: 37,
    position: "absolute",
    width: "100%",
    left: "0%",
    right: "0%",
  },
  skipThisStep: {
    fontSize: FontSize.fontsRegularCaption12_size,
    color: Color.black,
  },
  skipThisStepContainer: {
    left: "38.44%",
    bottom: 0,
    position: "absolute",
  },
  button2Parent: {
    width: "88.89%",
    right: "5.56%",
    bottom: 75,
    left: "5.56%",
    height: 68,
    position: "absolute",
  },
  photo: {
    backgroundColor: Color.white,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default Photo;
