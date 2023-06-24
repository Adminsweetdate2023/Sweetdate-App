import React, { useState } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import {
  RadioGroup as RNKRadioGroup,
  Radio as RNKRadio,
} from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const IPhone13ProMax236 = () => {
  const [groupRadioselectedIndex, setGroupRadioselectedIndex] = useState(0);
  const navigation = useNavigation();

  return (
    <View style={styles.iphone13ProMax236}>
      <Image
        style={styles.icbaselineMicOffIcon}
        contentFit="cover"
        source={require("../assets/icbaselinemicoff.png")}
      />
      <View style={styles.iphone13ProMax236Child} />
      <View style={[styles.iphone13ProMax236Item, styles.groupChildPosition]} />
      <Image
        style={[styles.iphone13ProMax236Inner, styles.groupItemLayout]}
        contentFit="cover"
        source={require("../assets/group-51764.png")}
      />
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={[styles.report, styles.reportTypo]}>Report</Text>
        <Pressable
          style={styles.button2}
          onPress={() => navigation.navigate("Photo286")}
        >
          <View style={[styles.button1, styles.button1Position]}>
            <View style={styles.button1Child} />
            <Text style={[styles.continue, styles.reportTypo]}>Continue</Text>
          </View>
        </Pressable>
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
          style={[styles.groupItem, styles.groupItemLayout]}
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
    backgroundColor: Color.white,
    left: "0%",
    right: "0%",
  },
  groupItemLayout: {
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupChildLayout: {
    height: 436,
    bottom: 0,
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
  button1Position: {
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  icbaselineMicOffIcon: {
    top: 449,
    left: 175,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  iphone13ProMax236Child: {
    top: 0,
    left: 0,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.gray_400,
    width: 428,
    height: 143,
    position: "absolute",
  },
  iphone13ProMax236Item: {
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  iphone13ProMax236Inner: {
    width: "87.52%",
    top: 120,
    right: "6.37%",
    left: "6.11%",
    height: 129,
    opacity: 0.7,
  },
  groupChild: {
    borderTopLeftRadius: Border.br_xl,
    borderTopRightRadius: Border.br_xl,
    backgroundColor: Color.white,
    left: "0%",
    right: "0%",
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
    position: "absolute",
    width: "100%",
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
  groupItem: {
    width: "25.56%",
    right: "36.94%",
    bottom: 282,
    left: "37.5%",
    height: 136,
  },
  rectangleParent: {
    right: "0.56%",
    left: "-0.56%",
  },
  iphone13ProMax236: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone13ProMax236;
