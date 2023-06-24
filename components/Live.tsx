import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, View } from "react-native";
import { Image } from "expo-image";

type LiveType = {
  style?: StyleProp<ViewStyle>;
};

const Live = ({ style }: LiveType) => {
  return (
    <View style={[styles.live, style]}>
      <Image
        style={styles.fluentvideo28RegularIcon}
        contentFit="cover"
        source={require("../assets/fluentvideo28regular.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  fluentvideo28RegularIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  live: {
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Live;
