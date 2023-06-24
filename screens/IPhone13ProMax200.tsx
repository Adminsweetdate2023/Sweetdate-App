import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import {
  RadioGroup as RNKRadioGroup,
  Radio as RNKRadio,
} from "@ui-kitten/components";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const IPhone13ProMax200 = () => {
  const [groupRadioselectedIndex, setGroupRadioselectedIndex] = useState(0);

  return (
    <View style={styles.iphone13ProMax200}>
      <View
        style={[styles.iphone13ProMax200Child, styles.groupChildPosition]}
      />
      <View style={[styles.iphone13ProMax200Item, styles.button1Position]} />
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <Image
          style={[styles.groupChild, styles.groupIconLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-2221.png")}
        />
        <Image
          style={[styles.groupItem, styles.groupPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-2232.png")}
        />
        <Image
          style={[styles.groupInner, styles.groupPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-2242.png")}
        />
        <View style={[styles.rectangleGroup, styles.groupPosition]}>
          <View style={[styles.rectangleView, styles.groupPosition]} />
          <Image
            style={[styles.materialSymbolschairIcon, styles.groupIconLayout]}
            contentFit="cover"
            source={require("../assets/materialsymbolschair1.png")}
          />
        </View>
      </View>
      <View style={styles.groupChild1Position}>
        <View style={[styles.groupChild1, styles.groupChild1Position]} />
        <Text style={[styles.report, styles.reportTypo]}>Report</Text>
        <View style={styles.button2}>
          <View style={[styles.button1, styles.button1Position]}>
            <View style={[styles.button1Child, styles.button1Position]} />
            <Text style={[styles.continue, styles.reportTypo]}>Continue</Text>
          </View>
        </View>
        <RNKRadioGroup
          style={styles.parent}
          selectedIndex={groupRadioselectedIndex}
          onChange={setGroupRadioselectedIndex}
        >
          <RNKRadio status="danger">
            {() => (
              <Text style={styles.groupRadioText}> Nothing bothered me</Text>
            )}
          </RNKRadio>
          <RNKRadio status="danger">
            {() => <Text style={styles.groupRadioText}> Nudity</Text>}
          </RNKRadio>
          <RNKRadio status="danger">
            {() => <Text style={styles.groupRadioText}> Harassment</Text>}
          </RNKRadio>
          <RNKRadio status="danger">
            {() => <Text style={styles.groupRadioText}> Underage</Text>}
          </RNKRadio>
          <RNKRadio status="danger">
            {() => <Text style={styles.groupRadioText}> False gender</Text>}
          </RNKRadio>
        </RNKRadioGroup>
        <Image
          style={[styles.rectangleIcon, styles.groupIconLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-531.png")}
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
  groupChildPosition: {
    top: 0,
    borderRadius: Border.br_3xs,
  },
  button1Position: {
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  groupChildLayout: {
    height: 415,
    position: "absolute",
  },
  groupIconLayout: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupPosition: {
    height: 132,
    right: "0%",
    position: "absolute",
  },
  groupChild1Position: {
    height: 436,
    bottom: 0,
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  reportTypo: {
    textAlign: "center",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  iphone13ProMax200Child: {
    left: 0,
    backgroundColor: Color.gray_400,
    width: 428,
    height: 143,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  iphone13ProMax200Item: {
    backgroundColor: Color.white,
    left: "0%",
    right: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  groupChild: {
    width: "67.72%",
    right: "32.28%",
    height: 415,
    position: "absolute",
    left: "0%",
    borderRadius: Border.br_3xs,
    top: 0,
  },
  groupItem: {
    left: "68.25%",
    width: "31.75%",
    height: 132,
    maxWidth: "100%",
    overflow: "hidden",
    borderRadius: Border.br_3xs,
    top: 0,
  },
  groupInner: {
    top: 142,
    left: "68.25%",
    width: "31.75%",
    height: 132,
    maxWidth: "100%",
    overflow: "hidden",
    borderRadius: Border.br_3xs,
  },
  rectangleView: {
    borderStyle: "solid",
    borderColor: "#9d1720",
    borderWidth: 1,
    backgroundColor: Color.white,
    left: "0%",
    borderRadius: Border.br_3xs,
    top: 0,
    height: 132,
    width: "100%",
  },
  materialSymbolschairIcon: {
    width: "20%",
    top: 54,
    right: "40%",
    left: "40%",
    height: 24,
    position: "absolute",
  },
  rectangleGroup: {
    top: 283,
    left: "68.25%",
    width: "31.75%",
    height: 132,
  },
  rectangleParent: {
    width: "88.32%",
    top: 150,
    right: "5.61%",
    left: "6.07%",
    opacity: 0.7,
  },
  groupChild1: {
    borderTopLeftRadius: Border.br_xl,
    borderTopRightRadius: Border.br_xl,
    backgroundColor: Color.white,
  },
  report: {
    bottom: 252,
    left: "44.17%",
    color: Color.black,
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
    left: "50%",
    color: Color.white,
  },
  button1: {
    right: "-0.94%",
    left: "0.94%",
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  button2: {
    width: "88.89%",
    right: "5.56%",
    bottom: 8,
    left: "5.56%",
    height: 37,
    position: "absolute",
  },
  parent: {
    width: "48.33%",
    right: "43.89%",
    bottom: 62,
    left: "7.78%",
    height: 169,
    position: "absolute",
  },
  rectangleIcon: {
    width: "25.56%",
    right: "36.94%",
    bottom: 282,
    left: "37.5%",
    height: 136,
    position: "absolute",
  },
  iphone13ProMax200: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone13ProMax200;
