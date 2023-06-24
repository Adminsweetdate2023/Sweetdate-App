import React, { useState } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import {
  RadioGroup as RNKRadioGroup,
  Radio as RNKRadio,
} from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";

const Livereport1 = () => {
  const [groupRadioselectedIndex, setGroupRadioselectedIndex] = useState(0);
  const navigation = useNavigation();

  return (
    <View style={styles.livereport}>
      <Image
        style={[styles.livereportChild, styles.groupItemLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-502.png")}
      />
      <View style={styles.groupChildPosition}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <Text style={[styles.report, styles.reportTypo]}>Report</Text>
        <Pressable
          style={styles.button2}
          onPress={() =>
            navigation.navigate("BottomTabsRoot", { screen: "Photo268" })
          }
        >
          <View style={styles.button1}>
            <View style={[styles.button1Child, styles.childPosition]} />
            <Text style={[styles.continue, styles.continuePosition]}>
              Continue
            </Text>
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
        <View style={[styles.groupInner, styles.continuePosition]} />
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
  groupItemLayout: {
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupChildPosition: {
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
  },
  childPosition: {
    left: "0%",
    right: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  continuePosition: {
    left: "50%",
    position: "absolute",
  },
  livereportChild: {
    maxHeight: "100%",
    opacity: 0.5,
    left: "0%",
    right: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  groupChild: {
    borderTopLeftRadius: Border.br_xl,
    borderTopRightRadius: Border.br_xl,
    backgroundColor: Color.white,
  },
  report: {
    bottom: 252,
    left: "44.17%",
    color: Color.black,
    position: "absolute",
  },
  button1Child: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.crimson_100,
    position: "absolute",
  },
  continue: {
    marginLeft: -29,
    top: "27.03%",
    color: Color.white,
    textAlign: "center",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: FontSize.size_sm,
  },
  button1: {
    right: "-0.94%",
    left: "0.94%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
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
  groupInner: {
    marginLeft: -45,
    bottom: 426,
    borderStyle: "solid",
    borderColor: "#000",
    borderTopWidth: 2,
    width: 90,
    height: 2,
  },
  livereport: {
    backgroundColor: Color.whitesmoke_200,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default Livereport1;
