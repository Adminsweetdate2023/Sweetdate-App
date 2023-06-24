import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Livegift11 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.livegift}>
      <Pressable
        style={[styles.wrapper, styles.iconLayout]}
        onPress={() => navigation.navigate("Livegift13")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-502.png")}
        />
      </Pressable>
      <View style={styles.coin4Parent}>
        <Image
          style={styles.coin4Icon}
          contentFit="cover"
          source={require("../assets/coin-41.png")}
        />
        <Text style={styles.sent}>SENT</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  icon: {
    maxWidth: "100%",
    maxHeight: "100%",
    opacity: 0.5,
    overflow: "hidden",
  },
  wrapper: {
    left: "0%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    position: "absolute",
  },
  coin4Icon: {
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
  coin4Parent: {
    marginLeft: -50,
    top: 358,
    left: "50%",
    alignItems: "center",
    position: "absolute",
  },
  livegift: {
    backgroundColor: Color.whitesmoke_200,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default Livegift11;
