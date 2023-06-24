import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const IPhone13ProMax235 = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.iphone13ProMax235}
      onPress={() => navigation.navigate("IPhone13ProMax234")}
    >
      <Image
        style={[styles.icbaselineMicOffIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/icbaselinemicoff.png")}
      />
      <View
        style={[styles.iphone13ProMax235Child, styles.requestSentPosition]}
      />
      <View style={styles.iphone13ProMax235Item} />
      <Image
        style={styles.iphone13ProMax235Inner}
        contentFit="cover"
        source={require("../assets/group-51765.png")}
      />
      <View style={styles.requestSentWrapper}>
        <Text style={[styles.requestSent, styles.requestSentPosition]}>
          Request Sent
        </Text>
      </View>
      <View style={styles.groupParent}>
        <Image
          style={[styles.groupChild, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/group-5199.png")}
        />
        <View style={[styles.groupContainer, styles.groupLayout]}>
          <Image
            style={[styles.groupContainer, styles.groupLayout]}
            contentFit="cover"
            source={require("../assets/group-4936.png")}
          />
          <Image
            style={[styles.fluentchat24FilledIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/fluentchat24filled.png")}
          />
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  requestSentPosition: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  groupLayout: {
    width: 40,
    bottom: 0,
    height: 40,
    position: "absolute",
  },
  icbaselineMicOffIcon: {
    top: 449,
    left: 175,
  },
  iphone13ProMax235Child: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.gray_400,
    width: 428,
    height: 143,
    left: 0,
  },
  iphone13ProMax235Item: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: Color.white,
    position: "absolute",
    width: "100%",
  },
  iphone13ProMax235Inner: {
    width: "87.52%",
    top: 120,
    right: "6.37%",
    left: "6.11%",
    maxWidth: "100%",
    height: 129,
    position: "absolute",
    overflow: "hidden",
  },
  requestSent: {
    fontSize: FontSize.fontsBoldHeading16B_size,
    fontWeight: "700",
    fontFamily: FontFamily.quicksandBold,
    color: Color.black,
    textAlign: "center",
    left: 0,
  },
  requestSentWrapper: {
    marginTop: -9.58,
    marginLeft: -52,
    top: "50%",
    left: "50%",
    width: 104,
    height: 20,
    position: "absolute",
  },
  groupChild: {
    left: 50,
  },
  groupContainer: {
    left: 0,
  },
  fluentchat24FilledIcon: {
    bottom: 8,
    left: 8,
  },
  groupParent: {
    bottom: 24,
    left: 17,
    width: 90,
    height: 40,
    position: "absolute",
  },
  iphone13ProMax235: {
    flex: 1,
    height: 800,
    opacity: 0.7,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone13ProMax235;
