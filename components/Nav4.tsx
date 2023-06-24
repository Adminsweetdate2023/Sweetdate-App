import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, View } from "react-native";
import { Image } from "expo-image";

type Nav4Type = {
  style?: StyleProp<ViewStyle>;
};

const Nav4 = ({ style }: Nav4Type) => {
  return (
    <View style={[styles.nav4, style]}>
      <Image
        style={styles.mdisearchIcon}
        contentFit="cover"
        source={require("../assets/mdisearch.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mdisearchIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  nav4: {
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Nav4;
