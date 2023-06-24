import * as React from "react";
import { StyleSheet, View, Text, Pressable, TextInput } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const Photo275 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.photo2}>
      <View style={[styles.rectangleParent, styles.parentPosition]}>
        <View style={[styles.groupChild, styles.childPosition]} />
        <Text style={[styles.editYourProfile, styles.startTypo]}>
          Edit your profile
        </Text>
        <Pressable
          style={styles.vector}
          onPress={() =>
            navigation.navigate("BottomTabsRoot", { screen: "Photo220" })
          }
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector1.png")}
          />
        </Pressable>
      </View>
      <View style={styles.button1}>
        <View style={[styles.button1Child, styles.childPosition]} />
        <Text style={[styles.start, styles.startTypo]}>Add more photos</Text>
      </View>
      <View style={[styles.rectangleGroup, styles.parentPosition]}>
        <View style={styles.groupItem} />
        <Text style={[styles.basicInfo, styles.aboutMeTypo]}>Basic info</Text>
        <View style={styles.groupParent}>
          <View style={[styles.rectangleContainer, styles.childPosition]}>
            <View style={styles.groupInner} />
            <TextInput
              style={styles.writeABit}
              placeholder="Write a bit about yourself..."
              keyboardType="default"
              placeholderTextColor="rgba(0, 0, 0, 0.5)"
            />
          </View>
          <Text style={[styles.aboutMe, styles.aboutMeTypo]}>About me</Text>
        </View>
        <Pressable
          style={styles.birthdayParent}
          onPress={() => navigation.navigate("Photo272")}
        >
          <Text style={[styles.birthday, styles.nameTypo]}>Birthday</Text>
          <Text style={[styles.text, styles.textTypo]}>26.05.1996</Text>
        </Pressable>
        <Pressable
          style={[styles.nameParent, styles.parentPosition]}
          onPress={() => navigation.navigate("Photo273")}
        >
          <Text style={[styles.name, styles.nameTypo]}>Name</Text>
          <Text style={[styles.teeman, styles.textTypo]}>teeman</Text>
          <View style={[styles.lineView, styles.lineViewPosition]} />
        </Pressable>
        <Pressable
          style={[styles.genderParent, styles.parentPosition]}
          onPress={() => navigation.navigate("Photo274")}
        >
          <Text style={[styles.name, styles.nameTypo]}>Gender</Text>
          <Text style={[styles.male, styles.textTypo]}>Male</Text>
          <View style={[styles.groupChild1, styles.lineViewPosition]} />
        </Pressable>
      </View>
      <Image
        style={[styles.photo2Child, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/group-1341.png")}
      />
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
  childPosition: {
    bottom: "0%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  startTypo: {
    textAlign: "center",
    fontWeight: "700",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  aboutMeTypo: {
    textAlign: "left",
    fontSize: FontSize.size_sm,
    color: Color.black,
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    position: "absolute",
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
  lineViewPosition: {
    borderTopWidth: 1,
    left: "-0.14%",
    right: "-0.14%",
    width: "100.28%",
    borderColor: "rgba(0, 0, 0, 0.5)",
    borderStyle: "solid",
    position: "absolute",
  },
  groupChild: {
    top: "0%",
    height: "100%",
    backgroundColor: Color.white,
    bottom: "0%",
  },
  editYourProfile: {
    top: "32.56%",
    left: "36.94%",
    color: Color.black,
    textAlign: "center",
    fontFamily: FontFamily.quicksandBold,
    fontSize: FontSize.fontsRegularCaption12_size,
  },
  icon: {
    height: "100%",
    width: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
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
    height: "5.38%",
    top: "2.5%",
    bottom: "92.13%",
    left: "0%",
  },
  button1Child: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.brown,
    top: "0%",
    height: "100%",
  },
  start: {
    top: "32.08%",
    left: "34.38%",
    fontSize: FontSize.fontsSemiboldLabel13S_size,
    fontFamily: FontFamily.robotoBold,
    color: Color.white,
  },
  button1: {
    height: "5.13%",
    width: "88.89%",
    top: "28.5%",
    right: "5.28%",
    bottom: "66.38%",
    left: "5.83%",
    position: "absolute",
  },
  groupItem: {
    width: "99.72%",
    left: "0.28%",
    borderRadius: Border.br_xl,
    bottom: "0%",
    top: "0%",
    height: "100%",
    right: "0%",
    position: "absolute",
    backgroundColor: Color.white,
  },
  basicInfo: {
    top: "5.51%",
    left: "8.61%",
  },
  groupInner: {
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.5)",
    borderStyle: "solid",
    borderRadius: Border.br_xl,
    bottom: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
    backgroundColor: Color.white,
  },
  writeABit: {
    top: "12.28%",
    left: "5.3%",
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    fontSize: FontSize.fontsRegularCaption12_size,
    position: "absolute",
  },
  rectangleContainer: {
    height: "80.67%",
    top: "19.33%",
  },
  aboutMe: {
    left: "0.33%",
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
  },
  genderParent: {
    height: "7.54%",
    top: "29.86%",
    bottom: "62.61%",
    left: "0%",
  },
  rectangleGroup: {
    height: "43.13%",
    top: "35.88%",
    bottom: "21%",
    left: "0%",
  },
  photo2Child: {
    height: "17.38%",
    width: "92.5%",
    top: "9.38%",
    right: "3.33%",
    bottom: "73.25%",
    left: "4.17%",
    position: "absolute",
  },
  photo2: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Photo275;
