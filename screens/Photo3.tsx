import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Photo3 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.photo3}>
      <Text style={[styles.letsAddA, styles.letsAddATypo]}>
        Let’s add a photo
      </Text>
      <Image
        style={styles.photo3Child}
        contentFit="cover"
        source={require("../assets/group-29.png")}
      />
      <Pressable
        style={[styles.button2Wrapper, styles.button2Layout]}
        onPress={() =>
          navigation.navigate("BottomTabsRoot", { screen: "Photo287" })
        }
      >
        <View style={[styles.button2, styles.button2Position]}>
          <View style={[styles.button1, styles.button1Position]}>
            <View style={[styles.button1Child, styles.button1Position]} />
            <Text style={[styles.continue, styles.letsAddATypo]}>Done</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  letsAddATypo: {
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    position: "absolute",
  },
  button2Layout: {
    height: 37,
    position: "absolute",
  },
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
  letsAddA: {
    top: 121,
    fontSize: FontSize.size_9xl,
    color: Color.black,
    textAlign: "left",
    left: "7.78%",
  },
  photo3Child: {
    width: "22.22%",
    top: 174,
    right: "70%",
    maxWidth: "100%",
    height: 80,
    left: "7.78%",
    position: "absolute",
    overflow: "hidden",
  },
  button1Child: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.brown,
    left: "0%",
    right: "0%",
  },
  continue: {
    marginLeft: -17,
    top: "27.03%",
    left: "50%",
    fontSize: FontSize.size_sm,
    color: Color.white,
    textAlign: "center",
  },
  button1: {
    right: "-0.94%",
    left: "0.94%",
  },
  button2: {
    bottom: 0,
    height: 37,
    position: "absolute",
    width: "100%",
    left: "0%",
    right: "0%",
  },
  button2Wrapper: {
    width: "88.89%",
    right: "5.56%",
    bottom: 106,
    left: "5.56%",
  },
  photo3: {
    backgroundColor: Color.white,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default Photo3;
