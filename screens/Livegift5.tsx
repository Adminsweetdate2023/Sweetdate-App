import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Livegift5 = () => {
  return (
    <View style={[styles.livegift, styles.livegiftLayout]}>
      <Image
        style={[styles.livegiftChild, styles.livegiftLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-502.png")}
      />
      <View style={styles.mg1Parent}>
        <Image
          style={styles.mg1Icon}
          contentFit="cover"
          source={require("../assets/mg-11.png")}
        />
        <Text style={styles.sent}>SENT</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  livegiftLayout: {
    overflow: "hidden",
    width: "100%",
  },
  livegiftChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
    opacity: 0.5,
    position: "absolute",
  },
  mg1Icon: {
    width: 100,
    height: 100,
  },
  sent: {
    fontSize: FontSize.fontsBoldHeadingH220B_size,
    fontWeight: "700",
    fontFamily: FontFamily.quicksandBold,
    color: Color.black,
    textAlign: "center",
    marginTop: 2,
  },
  mg1Parent: {
    marginLeft: -50,
    top: 336,
    left: "50%",
    alignItems: "center",
    position: "absolute",
  },
  livegift: {
    backgroundColor: Color.whitesmoke_200,
    flex: 1,
    height: 800,
  },
});

export default Livegift5;
