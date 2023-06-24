import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const Photo282 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.photo2, styles.iconLayout]}>
      <View style={[styles.rectangleParent, styles.groupChildPosition]}>
        <View style={[styles.groupChild, styles.groupBg]} />
        <Text style={styles.helpFeedback}>{`Help & Feedback`}</Text>
        <Pressable
          style={styles.vector}
          onPress={() => navigation.navigate("Photo219")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector1.png")}
          />
        </Pressable>
      </View>
      <View style={styles.groupParent}>
        <Pressable
          style={[styles.rectangleGroup, styles.groupPosition]}
          onPress={() => navigation.navigate("Photo280")}
        >
          <View style={[styles.groupItem, styles.groupPosition]} />
          <Text style={styles.feedback}>Feedback</Text>
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector4.png")}
          />
        </Pressable>
        <View style={[styles.rectangleContainer, styles.groupPosition]}>
          <View style={[styles.groupItem, styles.groupPosition]} />
          <Text style={styles.feedback}>Privacy Policy</Text>
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector4.png")}
          />
        </View>
        <View style={[styles.groupView, styles.groupPosition]}>
          <View style={[styles.groupItem, styles.groupPosition]} />
          <Text style={styles.feedback}>Terms of Service</Text>
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector4.png")}
          />
        </View>
        <Pressable
          style={[styles.groupPressable, styles.groupPosition]}
          onPress={() => navigation.navigate("Photo281")}
        >
          <View style={[styles.groupItem, styles.groupPosition]} />
          <Text style={styles.feedback}>Delete account</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  groupChildPosition: {
    height: 43,
    right: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  groupBg: {
    backgroundColor: Color.white,
    top: 0,
  },
  groupPosition: {
    height: 50,
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  groupChild: {
    height: 43,
    right: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  helpFeedback: {
    marginLeft: -49,
    top: 14,
    left: "50%",
    fontSize: FontSize.fontsRegularCaption12_size,
    fontWeight: "700",
    fontFamily: FontFamily.quicksandBold,
    color: Color.black,
    textAlign: "center",
    position: "absolute",
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  vector: {
    left: "8.02%",
    top: "36.92%",
    right: "89.48%",
    bottom: "32.78%",
    width: "2.5%",
    height: "30.3%",
    position: "absolute",
  },
  rectangleParent: {
    top: 20,
  },
  groupItem: {
    borderStyle: "solid",
    borderColor: "#d9d9d9",
    borderWidth: 1,
    backgroundColor: Color.white,
    top: 0,
  },
  feedback: {
    top: 16,
    left: "7.8%",
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    fontFamily: FontFamily.quicksandMedium,
    color: Color.gray_300,
    textAlign: "left",
    position: "absolute",
  },
  vectorIcon: {
    top: 18,
    right: 27,
    width: 8,
    height: 13,
    position: "absolute",
  },
  rectangleGroup: {
    top: 0,
    height: 50,
  },
  rectangleContainer: {
    top: 50,
  },
  groupView: {
    top: 100,
  },
  groupPressable: {
    top: 150,
  },
  groupParent: {
    width: "99.72%",
    top: 80,
    right: "0.28%",
    height: 200,
    left: "0%",
    position: "absolute",
  },
  photo2: {
    backgroundColor: Color.whitesmoke_100,
    flex: 1,
    height: 800,
  },
});

export default Photo282;
