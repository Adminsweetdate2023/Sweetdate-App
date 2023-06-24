import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Photo221 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.photo2}>
      <Image
        style={styles.photo2Child}
        contentFit="cover"
        source={require("../assets/rectangle-1.png")}
      />
      <Text style={styles.letsAddA}>Let’s add a photo</Text>
      <Image
        style={[styles.photo2Item, styles.photo2ItemPosition]}
        contentFit="cover"
        source={require("../assets/group-291.png")}
      />
      <View style={styles.button2Parent}>
        <View style={[styles.button2, styles.childPosition1]}>
          <View style={[styles.button1, styles.childPosition]}>
            <View style={[styles.button1Child, styles.childPosition]} />
            <Text style={styles.continue}>Done</Text>
          </View>
        </View>
        <Text style={styles.skipThisStep}>Skip this step</Text>
      </View>
      <View style={[styles.rectangleParent, styles.childPosition]}>
        <View style={[styles.groupChild, styles.childPosition]} />
        <Pressable
          style={styles.groupPosition1}
          onPress={() => navigation.navigate("Photo3")}
        >
          <View style={[styles.groupItem, styles.groupPosition1]} />
          <View style={[styles.rectangleContainer, styles.rectanglePosition]}>
            <View style={styles.groupPosition} />
            <Text style={[styles.chooseAnOption, styles.cameraTypo]}>
              Choose an option
            </Text>
          </View>
          <View style={[styles.groupView, styles.rectanglePosition]}>
            <View style={styles.groupPosition} />
            <Text style={[styles.camera, styles.cameraTypo]}>Camera</Text>
            <Image
              style={[styles.phcameraLightIcon, styles.photo2ItemPosition]}
              contentFit="cover"
              source={require("../assets/phcameralight.png")}
            />
          </View>
          <View style={[styles.rectangleParent1, styles.rectanglePosition]}>
            <View style={[styles.groupChild1, styles.groupPosition]} />
            <Text style={[styles.camera, styles.cameraTypo]}>Gallery</Text>
            <Image
              style={[styles.phcameraLightIcon, styles.photo2ItemPosition]}
              contentFit="cover"
              source={require("../assets/solargallerybold.png")}
            />
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  photo2ItemPosition: {
    maxWidth: "100%",
    left: "7.78%",
    position: "absolute",
    overflow: "hidden",
  },
  childPosition1: {
    left: "0%",
    right: "0%",
  },
  childPosition: {
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  groupPosition1: {
    height: 135,
    bottom: 0,
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  rectanglePosition: {
    height: 45,
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  cameraTypo: {
    color: Color.gray_100,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.fontsSemiboldLabel13S_size,
    textAlign: "left",
    position: "absolute",
  },
  groupPosition: {
    borderTopWidth: 1,
    borderColor: "rgba(20, 5, 30, 0.5)",
    borderStyle: "solid",
    height: 45,
    bottom: 0,
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
    backgroundColor: Color.white,
  },
  photo2Child: {
    marginLeft: -20,
    top: 58,
    width: 40,
    height: 43,
    left: "50%",
    position: "absolute",
  },
  letsAddA: {
    top: 121,
    fontSize: FontSize.size_9xl,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    left: "7.78%",
    position: "absolute",
  },
  photo2Item: {
    width: "22.22%",
    top: 174,
    right: "70%",
    height: 84,
  },
  button1Child: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.brown,
    left: "0%",
    right: "0%",
  },
  continue: {
    marginLeft: -17,
    top: "27.03%",
    fontSize: FontSize.size_sm,
    color: Color.white,
    textAlign: "center",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    left: "50%",
    position: "absolute",
  },
  button1: {
    right: "-0.94%",
    left: "0.94%",
  },
  button2: {
    bottom: 31,
    height: 37,
    position: "absolute",
    width: "100%",
    right: "0%",
  },
  skipThisStep: {
    left: "38.44%",
    fontSize: FontSize.fontsRegularCaption12_size,
    color: Color.gray_500,
    bottom: 0,
    textAlign: "center",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    position: "absolute",
  },
  button2Parent: {
    width: "88.89%",
    right: "5.56%",
    bottom: 75,
    left: "5.56%",
    height: 68,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.black,
    opacity: 0.5,
    left: "0%",
    right: "0%",
  },
  groupItem: {
    backgroundColor: Color.gray_100,
  },
  chooseAnOption: {
    bottom: 13,
    left: "7.78%",
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.fontsSemiboldLabel13S_size,
  },
  rectangleContainer: {
    bottom: 90,
  },
  camera: {
    bottom: 15,
    left: "20.83%",
  },
  phcameraLightIcon: {
    width: "6.67%",
    right: "85.56%",
    bottom: 10,
    height: 24,
  },
  groupView: {
    bottom: 45,
  },
  groupChild1: {
    borderBottomWidth: 1,
  },
  rectangleParent1: {
    bottom: 1,
  },
  rectangleParent: {
    left: "0%",
    right: "0%",
  },
  photo2: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.white,
    width: "100%",
  },
});

export default Photo221;
