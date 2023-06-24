import * as React from "react";
import { Text, StyleSheet, View, TextInput, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const Name2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.name}>
      <Text style={styles.username}>Username</Text>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.childPosition]} />
        <TextInput
          style={[styles.name1, styles.name1Typo]}
          placeholder="Name"
          keyboardType="default"
          placeholderTextColor="rgba(0, 0, 0, 0.5)"
        />
      </View>
      <Pressable
        style={styles.button2}
        onPress={() => navigation.navigate("LoginWithPhone")}
      >
        <View style={[styles.button1, styles.button1Position]}>
          <View style={[styles.button1Child, styles.button1Position]} />
          <Text style={[styles.continue, styles.name1Typo]}>Continue</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 40,
    position: "absolute",
  },
  childPosition: {
    borderRadius: Border.br_11xl,
    left: "0%",
    right: "0%",
  },
  name1Typo: {
    fontSize: FontSize.size_sm,
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
  username: {
    top: 121,
    fontSize: FontSize.size_9xl,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    left: "7.78%",
    position: "absolute",
  },
  groupChild: {
    top: 0,
    backgroundColor: "rgba(217, 217, 217, 0)",
    borderStyle: "solid",
    borderColor: "#9d1720",
    borderWidth: 1,
    height: 40,
    position: "absolute",
    width: "100%",
  },
  name1: {
    top: 12,
    left: 20,
  },
  rectangleParent: {
    width: "84.72%",
    top: 174,
    right: "7.5%",
    left: "7.78%",
    height: 40,
  },
  button1Child: {
    backgroundColor: Color.brown,
    borderRadius: Border.br_11xl,
    left: "0%",
    right: "0%",
  },
  continue: {
    marginLeft: -29,
    top: "27.03%",
    left: "50%",
    color: Color.white,
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
  name: {
    backgroundColor: Color.white,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default Name2;
