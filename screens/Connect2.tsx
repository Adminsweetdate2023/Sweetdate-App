import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Connect2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.connect2}>
      <Pressable
        style={[styles.connect2Inner, styles.groupChildPosition]}
        onPress={() => navigation.navigate("Live1")}
      >
        <Image
          style={[styles.groupChild, styles.groupChildPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-501.png")}
        />
      </Pressable>
      <View
        style={[
          styles.fluenthourglassHalf24RegulParent,
          styles.fluenthourglassPosition,
        ]}
      >
        <Image
          style={[
            styles.fluenthourglassHalf24RegulIcon,
            styles.fluenthourglassPosition,
          ]}
          contentFit="cover"
          source={require("../assets/fluenthourglasshalf24regular.png")}
        />
        <Text style={[styles.connecting, styles.fluenthourglassPosition]}>
          Connecting...
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  fluenthourglassPosition: {
    left: "50%",
    position: "absolute",
  },
  groupChild: {
    width: "100.28%",
    left: "-0.28%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  connect2Inner: {
    width: "99.72%",
    left: "0.28%",
  },
  fluenthourglassHalf24RegulIcon: {
    marginLeft: -34.5,
    top: 0,
    width: 70,
    height: 125,
    overflow: "hidden",
  },
  connecting: {
    marginLeft: -49.5,
    top: 127,
    fontSize: FontSize.fontsBoldHeading16B_size,
    fontWeight: "700",
    fontFamily: FontFamily.quicksandBold,
    color: Color.black,
    textAlign: "center",
  },
  fluenthourglassHalf24RegulParent: {
    marginTop: -51,
    marginLeft: -48,
    top: "50%",
    width: 97,
    height: 147,
  },
  connect2: {
    backgroundColor: Color.whitesmoke_200,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default Connect2;
