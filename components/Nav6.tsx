import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, View } from "react-native";
import { Image } from "expo-image";

type Nav6Type = {
  style?: StyleProp<ViewStyle>;
};

const Nav6 = ({ style }: Nav6Type) => {
  return (
    <View style={[styles.nav6, style]}>
      <Image
        style={styles.clarityhistoryLineIcon}
        contentFit="cover"
        source={require("../assets/clarityhistoryline.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  clarityhistoryLineIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  nav6: {
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Nav6;
