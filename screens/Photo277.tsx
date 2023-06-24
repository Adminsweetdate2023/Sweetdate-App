import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const Photo277 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.photo2}>
      <View style={[styles.rectangleParent, styles.groupChildPosition]}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <Text style={[styles.blockedUsers, styles.youCanSeeTypo]}>
          Blocked users
        </Text>
        <Pressable
          style={styles.vector}
          onPress={() => navigation.navigate("Photo219")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/vector1.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.vectorParent, styles.youCanSeePosition]}>
        <Image
          style={[styles.vectorIcon, styles.vectorIconPosition]}
          contentFit="cover"
          source={require("../assets/vector9.png")}
        />
        <Text style={[styles.youCanSee, styles.youCanSeePosition]}>
          You can see the people you have blocked here
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    height: 43,
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  youCanSeeTypo: {
    textAlign: "center",
    color: Color.black,
    fontSize: FontSize.fontsRegularCaption12_size,
  },
  youCanSeePosition: {
    marginLeft: -131,
    left: "50%",
    position: "absolute",
  },
  vectorIconPosition: {
    left: "50%",
    position: "absolute",
  },
  groupChild: {
    top: 0,
    backgroundColor: Color.white,
  },
  blockedUsers: {
    marginLeft: -40,
    top: 14,
    fontWeight: "700",
    fontFamily: FontFamily.quicksandBold,
    left: "50%",
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  vector: {
    left: 29,
    top: 16,
    width: 9,
    height: 13,
    position: "absolute",
  },
  rectangleParent: {
    top: 20,
  },
  vectorIcon: {
    height: "80.65%",
    marginLeft: -83,
    top: "0%",
    bottom: "19.35%",
    maxHeight: "100%",
    width: 167,
  },
  youCanSee: {
    top: "91.94%",
    fontWeight: "500",
    fontFamily: FontFamily.quicksandMedium,
    textAlign: "center",
    color: Color.black,
    fontSize: FontSize.fontsRegularCaption12_size,
  },
  vectorParent: {
    height: "23.25%",
    top: "38.38%",
    bottom: "38.38%",
    width: 262,
  },
  photo2: {
    backgroundColor: Color.whitesmoke_100,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default Photo277;
