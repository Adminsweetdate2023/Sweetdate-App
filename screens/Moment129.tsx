import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color } from "../GlobalStyles";

const Moment129 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.moment129, styles.iconLayout]}>
      <Image
        style={[styles.magnusAnderssonKazgxinzxmoUIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/magnusanderssonkazgxinzxmounsplash-11.png")}
      />
      <Pressable
        style={styles.close}
        onPress={() => navigation.navigate("Photo244")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/close.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  magnusAnderssonKazgxinzxmoUIcon: {
    height: "94.88%",
    top: "0%",
    right: "0%",
    bottom: "5.13%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
  },
  icon: {
    height: "100%",
  },
  close: {
    top: 26,
    right: 9,
    width: 24,
    height: 24,
    position: "absolute",
  },
  moment129: {
    backgroundColor: Color.black,
    flex: 1,
    height: 800,
  },
});

export default Moment129;
