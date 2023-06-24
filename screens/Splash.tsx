import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color } from "../GlobalStyles";

const Splash = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.splash}
      onPress={() => navigation.navigate("StartingScreen")}
    >
      <Image
        style={styles.splashChild}
        contentFit="cover"
        source={require("../assets/rectangle-11.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  splashChild: {
    position: "absolute",
    marginLeft: -115,
    top: 311,
    left: "50%",
    width: 229,
    height: 177,
  },
  splash: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default Splash;
