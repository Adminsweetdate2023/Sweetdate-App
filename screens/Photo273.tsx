import * as React from "react";
import { StyleSheet, View, Text, Pressable, TextInput } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const Photo273 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.photo2}>
      <View style={[styles.rectangleParent, styles.parentPosition]}>
        <View style={[styles.groupChild, styles.groupChildBg]} />
        <Text style={[styles.editYourProfile, styles.name1Typo]}>
          Edit your profile
        </Text>
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
      </View>
      <View style={styles.button1}>
        <View style={[styles.button1Child, styles.button1Position]} />
        <Text style={[styles.start, styles.startTypo]}>Add more photos</Text>
      </View>
      <View style={styles.rectangleGroup}>
        <View style={styles.groupItem} />
        <Text style={[styles.basicInfo, styles.aboutMeTypo]}>Basic info</Text>
        <View style={styles.groupParent}>
          <View style={[styles.rectangleContainer, styles.groupChildPosition1]}>
            <View style={styles.groupInner} />
            <Text style={[styles.writeABit, styles.aboutMeTypo]}>
              Write a bit about yourself...
            </Text>
          </View>
          <Text style={[styles.aboutMe, styles.aboutMeTypo]}>About me</Text>
        </View>
        <View style={styles.birthdayParent}>
          <Text style={[styles.birthday, styles.nameTypo]}>Birthday</Text>
          <Text style={[styles.text, styles.textTypo]}>26.05.1996</Text>
        </View>
        <View style={[styles.nameParent, styles.parentPosition]}>
          <Text style={[styles.name, styles.nameTypo]}>Name</Text>
          <Text style={[styles.teeman, styles.textTypo]}>teeman</Text>
          <View style={[styles.lineView, styles.groupChildPosition]} />
        </View>
        <View style={[styles.genderParent, styles.parentPosition]}>
          <Text style={[styles.name, styles.nameTypo]}>Gender</Text>
          <Text style={[styles.male, styles.textTypo]}>Male</Text>
          <View style={[styles.groupChild1, styles.groupChildPosition]} />
        </View>
      </View>
      <Image
        style={[styles.photo2Child, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/group-134.png")}
      />
      <View style={[styles.photo2Item, styles.groupChildPosition1]} />
      <View style={[styles.groupView, styles.viewPosition]}>
        <View style={[styles.rectangleView, styles.viewPosition]} />
        <Pressable
          style={styles.button11}
          onPress={() => navigation.navigate("Photo275")}
        >
          <View style={[styles.button1Item, styles.button1Position]} />
          <Text style={[styles.start1, styles.startTypo]}>Done</Text>
        </Pressable>
        <Pressable
          style={styles.vector}
          onPress={() => navigation.navigate("Photo275")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/vector8.png")}
          />
        </Pressable>
        <View style={[styles.groupChild2, styles.groupChildPosition]} />
        <Text style={[styles.name1, styles.name1Typo]}>Name</Text>
        <View style={styles.rectangleParent1}>
          <View style={styles.groupInner} />
          <TextInput
            style={styles.name2}
            placeholder="Name"
            keyboardType="default"
            placeholderTextColor="rgba(0, 0, 0, 0.5)"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentPosition: {
    right: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  groupChildBg: {
    backgroundColor: Color.white,
    left: "0%",
  },
  name1Typo: {
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    position: "absolute",
  },
  vectorIconLayout: {
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  button1Position: {
    borderRadius: Border.br_11xl,
    bottom: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  startTypo: {
    color: Color.white,
    fontFamily: FontFamily.robotoBold,
    top: "32.08%",
    textAlign: "center",
    fontWeight: "700",
    position: "absolute",
  },
  aboutMeTypo: {
    textAlign: "left",
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    position: "absolute",
  },
  groupChildPosition1: {
    bottom: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  nameTypo: {
    fontSize: FontSize.size_2xs,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    top: "0%",
    position: "absolute",
  },
  textTypo: {
    textAlign: "right",
    color: Color.plum,
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    top: "0%",
    position: "absolute",
  },
  groupChildPosition: {
    borderTopWidth: 1,
    right: "-0.14%",
    borderColor: "rgba(0, 0, 0, 0.5)",
    borderStyle: "solid",
    position: "absolute",
  },
  viewPosition: {
    height: 226,
    bottom: 0,
    position: "absolute",
  },
  groupChild: {
    bottom: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
    top: "0%",
    height: "100%",
  },
  editYourProfile: {
    top: "32.56%",
    left: "36.94%",
    fontSize: FontSize.fontsRegularCaption12_size,
  },
  vectorIcon: {
    height: "30.3%",
    width: "2.5%",
    top: "36.92%",
    right: "89.48%",
    bottom: "32.78%",
    left: "8.02%",
    maxHeight: "100%",
  },
  rectangleParent: {
    height: "5.38%",
    top: "5.5%",
    bottom: "89.13%",
    left: "0%",
  },
  button1Child: {
    backgroundColor: Color.crimson_100,
  },
  start: {
    left: "34.38%",
    fontSize: FontSize.fontsSemiboldLabel13S_size,
  },
  button1: {
    height: "5.13%",
    width: "88.89%",
    top: "31.75%",
    right: "5.56%",
    bottom: "63.13%",
    left: "5.56%",
    position: "absolute",
  },
  groupItem: {
    width: "99.72%",
    borderRadius: Border.br_xl,
    left: "0.28%",
    backgroundColor: Color.white,
    bottom: "0%",
    top: "0%",
    height: "100%",
    right: "0%",
    position: "absolute",
  },
  basicInfo: {
    top: "5.51%",
    left: "8.61%",
    fontSize: FontSize.size_sm,
    color: Color.black,
    textAlign: "left",
  },
  groupInner: {
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.5)",
    borderStyle: "solid",
    borderRadius: Border.br_xl,
    backgroundColor: Color.white,
    bottom: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  writeABit: {
    top: "12.28%",
    left: "5.3%",
    color: Color.gray_600,
    fontSize: FontSize.fontsRegularCaption12_size,
  },
  rectangleContainer: {
    height: "80.67%",
    top: "19.33%",
    left: "0%",
  },
  aboutMe: {
    left: "0.33%",
    fontSize: FontSize.size_sm,
    color: Color.black,
    textAlign: "left",
    top: "0%",
  },
  groupParent: {
    height: "43.48%",
    width: "83.89%",
    top: "51.88%",
    right: "7.78%",
    bottom: "4.64%",
    left: "8.33%",
    position: "absolute",
  },
  birthday: {
    left: "0%",
  },
  text: {
    left: "81.91%",
  },
  birthdayParent: {
    height: "4.06%",
    width: "81.39%",
    top: "40.29%",
    right: "10.28%",
    bottom: "55.65%",
    left: "8.33%",
    position: "absolute",
  },
  name: {
    left: "8.33%",
  },
  teeman: {
    left: "78.06%",
  },
  lineView: {
    height: "4%",
    top: "98%",
    bottom: "-2%",
    left: "-0.14%",
    width: "100.28%",
    borderTopWidth: 1,
    right: "-0.14%",
  },
  nameParent: {
    height: "7.25%",
    top: "19.42%",
    bottom: "73.33%",
    left: "0%",
  },
  male: {
    left: "82.5%",
  },
  groupChild1: {
    height: "3.85%",
    top: "98.08%",
    bottom: "-1.92%",
    left: "-0.14%",
    width: "100.28%",
    borderTopWidth: 1,
    right: "-0.14%",
  },
  genderParent: {
    height: "7.54%",
    top: "29.86%",
    bottom: "62.61%",
    left: "0%",
  },
  rectangleGroup: {
    height: "43.13%",
    top: "39.13%",
    right: "0.28%",
    bottom: "17.75%",
    left: "-0.28%",
    position: "absolute",
    width: "100%",
  },
  photo2Child: {
    height: "17.38%",
    width: "92.5%",
    top: "12.63%",
    right: "3.61%",
    bottom: "70%",
    left: "3.89%",
    maxHeight: "100%",
  },
  photo2Item: {
    backgroundColor: Color.gray_600,
    top: "0%",
    height: "100%",
    left: "0%",
  },
  rectangleView: {
    width: "99.17%",
    right: "0.83%",
    borderTopLeftRadius: Border.br_xl,
    borderTopRightRadius: Border.br_xl,
    backgroundColor: Color.white,
    left: "0%",
  },
  button1Item: {
    backgroundColor: Color.brown,
  },
  start1: {
    left: "44.97%",
    fontSize: FontSize.size_sm,
  },
  button11: {
    height: "16.37%",
    width: "92.87%",
    top: "68.58%",
    right: "4.09%",
    bottom: "15.04%",
    left: "3.05%",
    position: "absolute",
  },
  icon: {
    maxHeight: "100%",
    height: "100%",
    width: "100%",
  },
  vector: {
    top: "6.11%",
    right: 28,
    bottom: "88.8%",
    width: 11,
    height: "5.09%",
    position: "absolute",
  },
  groupChild2: {
    height: "0.44%",
    top: "29.42%",
    bottom: "70.13%",
    left: "0.14%",
    borderTopWidth: 1,
    right: "-0.14%",
    width: "100%",
  },
  name1: {
    top: "15.49%",
    left: "44.04%",
    fontSize: FontSize.size_sm,
  },
  name2: {
    top: "26.32%",
    left: "10.46%",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    position: "absolute",
  },
  rectangleParent1: {
    height: "16.81%",
    width: "87.81%",
    top: "41.59%",
    right: "6.37%",
    bottom: "41.59%",
    left: "5.82%",
    position: "absolute",
  },
  groupView: {
    right: "-0.28%",
    left: "0.28%",
    height: 226,
    bottom: 0,
    width: "100%",
  },
  photo2: {
    backgroundColor: Color.whitesmoke_100,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default Photo273;
