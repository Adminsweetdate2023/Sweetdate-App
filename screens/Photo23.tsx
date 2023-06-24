import React, { useState } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import {
  RadioGroup as RNKRadioGroup,
  Radio as RNKRadio,
} from "@ui-kitten/components";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Photo23 = () => {
  const [groupRadioselectedIndex, setGroupRadioselectedIndex] = useState(0);

  return (
    <View style={styles.photo2}>
      <Image
        style={styles.mingcutesendFillIcon}
        contentFit="cover"
        source={require("../assets/mingcutesendfill.png")}
      />
      <View style={styles.groupPosition1}>
        <View style={styles.groupPosition1}>
          <View style={[styles.groupChild, styles.groupPosition1]} />
          <Text style={styles.report}>Report</Text>
          <View style={[styles.button2, styles.parentPosition]}>
            <View style={[styles.button1, styles.button1Position]}>
              <View style={[styles.button1Child, styles.button1Position]} />
              <Text style={styles.continue}>Continue</Text>
            </View>
          </View>
          <RNKRadioGroup
            style={[styles.parent, styles.parentPosition]}
            selectedIndex={groupRadioselectedIndex}
            onChange={setGroupRadioselectedIndex}
          >
            <RNKRadio status="danger">
              {() => (
                <Text style={styles.groupRadioText}>
                  {" "}
                  I don’t like this user
                </Text>
              )}
            </RNKRadio>
            <RNKRadio status="danger">
              {() => (
                <Text style={styles.groupRadioText}>
                  {" "}
                  Nudity or inappropriate content
                </Text>
              )}
            </RNKRadio>
            <RNKRadio status="danger">
              {() => <Text style={styles.groupRadioText}> Spam or fraud</Text>}
            </RNKRadio>
            <RNKRadio status="danger">
              {() => (
                <Text style={styles.groupRadioText}> Violent content</Text>
              )}
            </RNKRadio>
            <RNKRadio status="danger">
              {() => (
                <Text style={styles.groupRadioText}> Verbal harassment</Text>
              )}
            </RNKRadio>
            <RNKRadio status="danger">
              {() => <Text style={styles.groupRadioText}> Underage</Text>}
            </RNKRadio>
            <RNKRadio status="danger">
              {() => <Text style={styles.groupRadioText}> False gender</Text>}
            </RNKRadio>
          </RNKRadioGroup>
        </View>
        <View style={styles.groupItem} />
      </View>
      <View style={[styles.rectangleGroup, styles.groupPosition]}>
        <View style={[styles.groupInner, styles.groupPosition]} />
        <Image
          style={styles.ellipseIcon}
          contentFit="cover"
          source={require("../assets/ellipse-42.png")}
        />
        <Text style={styles.alexa30}>Alexa, 30</Text>
        <Image
          style={[styles.solarvideocameraRecordBoldIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/solarvideocamerarecordbold.png")}
        />
        <Image
          style={[styles.charmmenuKebabIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/charmmenukebab.png")}
        />
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupRadioText: {
    fontWeight: "700",
    fontFamily: "Roboto_bold",
    fontSize: 14,
    color: "rgba(0, 0, 0, 0.5)",
  },
  groupPosition1: {
    height: 402,
    bottom: 0,
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  parentPosition: {
    left: "5.56%",
    position: "absolute",
  },
  button1Position: {
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  groupPosition: {
    height: 44,
    width: 360,
    marginLeft: -180,
    left: "50%",
    position: "absolute",
  },
  iconPosition: {
    top: 10,
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  mingcutesendFillIcon: {
    top: 96,
    left: 24,
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  groupChild: {
    borderTopLeftRadius: Border.br_xl,
    borderTopRightRadius: Border.br_xl,
    backgroundColor: Color.white,
  },
  report: {
    bottom: 346,
    left: "44.17%",
    textAlign: "center",
    fontFamily: FontFamily.robotoBold,
    color: Color.black,
    fontWeight: "700",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  button1Child: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.crimson_100,
    left: "0%",
    right: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  continue: {
    marginLeft: -29,
    top: "27.03%",
    color: Color.white,
    left: "50%",
    textAlign: "center",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  button1: {
    right: "-0.94%",
    left: "0.94%",
  },
  button2: {
    width: "88.89%",
    right: "5.56%",
    bottom: 8,
    height: 37,
  },
  parent: {
    width: "65.83%",
    right: "28.61%",
    bottom: 73,
    height: 238,
  },
  groupItem: {
    width: "30.56%",
    right: "34.72%",
    bottom: 378,
    left: "34.72%",
    borderColor: "rgba(0, 0, 0, 0.5)",
    borderTopWidth: 2,
    height: 2,
    borderStyle: "solid",
    position: "absolute",
  },
  groupInner: {
    top: 0,
    borderColor: "#d9d9d9",
    borderBottomWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.white,
  },
  ellipseIcon: {
    top: 2,
    left: 35,
    width: 40,
    height: 40,
    position: "absolute",
  },
  alexa30: {
    top: 13,
    left: 86,
    fontFamily: FontFamily.quicksandBold,
    textAlign: "left",
    color: Color.black,
    fontWeight: "700",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  solarvideocameraRecordBoldIcon: {
    right: 54,
  },
  charmmenuKebabIcon: {
    right: 19,
  },
  vectorIcon: {
    height: "29.61%",
    width: "2.5%",
    top: "36.08%",
    right: "93.37%",
    bottom: "34.31%",
    left: "4.13%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  rectangleGroup: {
    top: 20,
  },
  photo2: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Photo23;
