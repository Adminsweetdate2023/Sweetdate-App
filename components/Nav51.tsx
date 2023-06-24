import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, View } from "react-native";
import { Image } from "expo-image";

type Nav51Type = {
  style?: StyleProp<ViewStyle>;
};

const Nav51 = ({ style }: Nav51Type) => {
  return (
    <View style={[styles.nav5, style]}>
      <Image
        style={styles.epchatDotRoundIcon}
        contentFit="cover"
        source={require("../assets/epchatdotround1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  epchatDotRoundIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  nav5: {
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Nav51;
