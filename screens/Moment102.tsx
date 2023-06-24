import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Moment102 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.moment102}>
      <Image
        style={styles.magnusAnderssonKazgxinzxmoUIcon}
        contentFit="cover"
        source={require("../assets/magnusanderssonkazgxinzxmounsplash-1.png")}
      />
      <Pressable
        style={styles.close}
        onPress={() => navigation.navigate("Photo265")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/close.png")}
        />
      </Pressable>
      <View style={styles.groupParent}>
        <View style={styles.rectangleParent}>
          <View style={[styles.groupChild, styles.groupPosition]} />
          <View style={[styles.groupItem, styles.groupPosition]} />
        </View>
        <Image
          style={styles.groupInner}
          contentFit="cover"
          source={require("../assets/ellipse-7.png")}
        />
        <Text style={[styles.you, styles.youTypo]}>You</Text>
        <Text style={[styles.minutesAgo, styles.youTypo]}>2 minutes ago</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupPosition: {
    borderRadius: Border.br_81xl,
    height: 2,
    bottom: 0,
    left: "0%",
    position: "absolute",
  },
  youTypo: {
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.quicksandRegular,
    fontSize: FontSize.fontsRegularCaption12_size,
    position: "absolute",
  },
  magnusAnderssonKazgxinzxmoUIcon: {
    top: "0%",
    bottom: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
    left: "0%",
    right: "0%",
    height: "100%",
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  close: {
    top: 26,
    right: 9,
    width: 24,
    height: 24,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.gray,
    right: "0%",
    width: "100%",
    borderRadius: Border.br_81xl,
  },
  groupItem: {
    width: "35.88%",
    right: "64.12%",
    backgroundColor: Color.white,
  },
  rectangleParent: {
    height: 2,
    bottom: 0,
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  groupInner: {
    top: -6,
    left: -10,
    width: 43,
    height: 44,
    position: "absolute",
  },
  you: {
    top: 0,
    left: 31,
  },
  minutesAgo: {
    top: 15,
    left: 32,
  },
  groupParent: {
    width: "95%",
    bottom: 71,
    left: "5%",
    height: 48,
    right: "0%",
    position: "absolute",
  },
  moment102: {
    backgroundColor: Color.black,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default Moment102;
