import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const Photo274 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.photo2}>
      <View style={[styles.rectangleParent, styles.parentPosition1]}>
        <View style={[styles.groupChild, styles.groupChildPosition1]} />
        <Text style={[styles.editYourProfile, styles.gender1Typo]}>
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
      <View style={[styles.rectangleGroup, styles.groupPosition]}>
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
        <View style={[styles.nameParent, styles.parentPosition1]}>
          <Text style={[styles.name, styles.nameTypo]}>Name</Text>
          <Text style={[styles.teeman, styles.textTypo]}>teeman</Text>
          <View style={[styles.lineView, styles.groupChildPosition]} />
        </View>
        <View style={[styles.genderParent, styles.parentPosition1]}>
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
        <View style={styles.button11}>
          <Pressable
            style={[styles.button1Item, styles.button1Position]}
            onPress={() => navigation.navigate("Photo275")}
          />
          <Text style={[styles.start1, styles.startTypo]}>Done</Text>
        </View>
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
        <Text style={[styles.gender1, styles.gender1Typo]}>Gender</Text>
        <View style={[styles.rectangleParent1, styles.rectangleParentLayout]}>
          <View style={[styles.groupChild3, styles.groupChildLayout]} />
          <View style={[styles.icons8Male641Parent, styles.femaleParentLayout]}>
            <Image
              style={[styles.icons8Male641, styles.femaleParentLayout]}
              contentFit="cover"
              source={require("../assets/icons8male64-1.png")}
            />
            <Text style={[styles.male1, styles.male1Typo]}>Male</Text>
          </View>
        </View>
        <View style={[styles.rectangleParent2, styles.rectangleParentLayout]}>
          <View style={[styles.groupChild4, styles.groupChildLayout]} />
          <View style={[styles.femaleParent, styles.femaleParentLayout]}>
            <Text style={[styles.female, styles.male1Typo]}>Female</Text>
            <Image
              style={[styles.icons8Female641, styles.femaleParentLayout]}
              contentFit="cover"
              source={require("../assets/icons8female64-1.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentPosition1: {
    right: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  groupChildPosition1: {
    bottom: "0%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  gender1Typo: {
    textAlign: "center",
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    color: Color.black,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
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
    fontFamily: FontFamily.robotoBold,
    top: "32.08%",
    color: Color.white,
    textAlign: "center",
    fontWeight: "700",
    position: "absolute",
  },
  groupPosition: {
    left: "-0.28%",
    right: "0.28%",
    width: "100%",
  },
  aboutMeTypo: {
    textAlign: "left",
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
  rectangleParentLayout: {
    height: 38,
    bottom: 94,
    width: "36.29%",
    position: "absolute",
  },
  groupChildLayout: {
    borderRadius: Border.br_3xs,
    height: 38,
    bottom: 0,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.5)",
    borderStyle: "solid",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  femaleParentLayout: {
    height: 30,
    position: "absolute",
  },
  male1Typo: {
    bottom: 8,
    fontFamily: FontFamily.robotoBold,
    textAlign: "center",
    fontWeight: "700",
    fontSize: FontSize.fontsRegularCaption12_size,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.white,
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
    color: Color.white,
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
    left: "0.28%",
    borderRadius: Border.br_xl,
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
  },
  aboutMe: {
    left: "0.33%",
    fontSize: FontSize.size_sm,
    color: Color.black,
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
    bottom: "17.75%",
    position: "absolute",
  },
  photo2Child: {
    height: "17.38%",
    width: "92.5%",
    top: "12.63%",
    right: "3.61%",
    bottom: "70%",
    left: "3.89%",
  },
  photo2Item: {
    backgroundColor: Color.gray_600,
    top: "0%",
    height: "100%",
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
    color: Color.white,
  },
  button11: {
    width: "92.87%",
    right: "4.09%",
    bottom: 34,
    left: "3.05%",
    height: 37,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  vector: {
    right: 28,
    bottom: 201,
    width: 11,
    height: 12,
    position: "absolute",
  },
  groupChild2: {
    bottom: 159,
    left: "0.14%",
    height: 1,
    borderTopWidth: 1,
    right: "-0.14%",
    width: "100%",
  },
  gender1: {
    width: "13.85%",
    bottom: 173,
    left: "42.66%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: FontSize.size_sm,
  },
  groupChild3: {
    backgroundColor: Color.brown,
  },
  icons8Male641: {
    width: "43.48%",
    right: "56.52%",
    height: 30,
    bottom: 0,
    maxWidth: "100%",
    left: "0%",
    overflow: "hidden",
  },
  male1: {
    width: "39.13%",
    left: "60.87%",
    color: Color.white,
  },
  icons8Male641Parent: {
    width: "52.67%",
    right: "23.66%",
    left: "23.66%",
    bottom: 4,
    height: 30,
  },
  rectangleParent1: {
    right: "56.23%",
    left: "7.48%",
  },
  groupChild4: {
    backgroundColor: Color.white,
  },
  female: {
    width: "48.78%",
    left: "51.22%",
    color: Color.black,
  },
  icons8Female641: {
    width: "36.59%",
    right: "63.41%",
    height: 30,
    bottom: 0,
    maxWidth: "100%",
    left: "0%",
    overflow: "hidden",
  },
  femaleParent: {
    width: "62.6%",
    right: "18.32%",
    left: "19.08%",
    bottom: 4,
    height: 30,
  },
  rectangleParent2: {
    right: "8.03%",
    left: "55.68%",
  },
  groupView: {
    left: "-0.28%",
    right: "0.28%",
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

export default Photo274;
