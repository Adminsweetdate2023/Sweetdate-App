import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, View } from "react-native";
import { Image } from "expo-image";

type Nav11Type = {
  style?: StyleProp<ViewStyle>;
};

const Nav11 = ({ style }: Nav11Type) => {
  return (
    <View style={[styles.nav1, style]}>
      <Image
        style={styles.groupIcon}
        contentFit="cover"
        source={require("../assets/group.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupIcon: {
    width: 22,
    height: 22,
  },
  nav1: {
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Nav11;
