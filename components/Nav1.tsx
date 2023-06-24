import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, View } from "react-native";
import { Image } from "expo-image";

type Nav1Type = {
  style?: StyleProp<ViewStyle>;
};

const Nav1 = ({ style }: Nav1Type) => {
  return (
    <View style={[styles.nav1, style]}>
      <Image
        style={styles.groupIcon}
        contentFit="cover"
        source={require("../assets/group1.png")}
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

export default Nav1;
