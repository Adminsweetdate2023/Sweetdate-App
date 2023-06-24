import React, { useState } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import DropDownPicker from "react-native-dropdown-picker";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const Photo272 = () => {
  const [frameDropdownOpen, setFrameDropdownOpen] = useState(false);
  const [frameDropdownValue, setFrameDropdownValue] = useState("");
  const [frameDropdownItems, setFrameDropdownItems] = useState([
    { value: "Jan", label: "Jan" },
    { value: "Feb", label: "Feb" },
    { value: "Mar", label: "Mar" },
    { value: "Apr", label: "Apr" },
    { value: "May", label: "May" },
    { value: "Jun", label: "Jun" },
    { value: "Jul", label: "Jul" },
    { value: "Aug", label: "Aug" },
    { value: "Sep", label: "Sep" },
    { value: "Oct", label: "Oct" },
    { value: "Nov", label: "Nov" },
    { value: "Dec", label: "Dec" },
  ]);
  const [frameDropdown1Open, setFrameDropdown1Open] = useState(false);
  const [frameDropdown1Value, setFrameDropdown1Value] = useState("");
  const [frameDropdown1Items, setFrameDropdown1Items] = useState([
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
    { value: "7", label: "7" },
    { value: "8", label: "8" },
    { value: "9", label: "9" },
    { value: "10", label: "10" },
    { value: "11", label: "11" },
    { value: "12", label: "12" },
    { value: "13", label: "13" },
    { value: "14", label: "14" },
    { value: "15", label: "15" },
    { value: "16", label: "16" },
    { value: "17", label: "17" },
    { value: "18", label: "18" },
    { value: "19", label: "19" },
    { value: "20", label: "20" },
    { value: "21", label: "21" },
    { value: "22", label: "22" },
    { value: "23", label: "23" },
    { value: "24", label: "24" },
    { value: "25", label: "25" },
    { value: "26", label: "26" },
    { value: "27", label: "27" },
    { value: "28", label: "28" },
    { value: "29", label: "29" },
    { value: "30", label: "30" },
    { value: "31", label: "31" },
  ]);
  const [frameDropdown2Open, setFrameDropdown2Open] = useState(false);
  const [frameDropdown2Value, setFrameDropdown2Value] = useState("");
  const [frameDropdown2Items, setFrameDropdown2Items] = useState([
    { value: "1950", label: "1950" },
    { value: "1951", label: "1951" },
    { value: "1952", label: "1952" },
    { value: "1953", label: "1953" },
    { value: "1954", label: "1954" },
    { value: "1955", label: "1955" },
    { value: "1956", label: "1956" },
    { value: "1957", label: "1957" },
    { value: "1958", label: "1958" },
    { value: "1959", label: "1959" },
    { value: "1960", label: "1960" },
    { value: "1961", label: "1961" },
    { value: "1962", label: "1962" },
    { value: "1963", label: "1963" },
    { value: "1964", label: "1964" },
    { value: "1965", label: "1965" },
    { value: "1966", label: "1966" },
    { value: "1967", label: "1967" },
    { value: "1968", label: "1968" },
    { value: "1969", label: "1969" },
    { value: "1970", label: "1970" },
    { value: "1971", label: "1971" },
    { value: "1972", label: "1972" },
    { value: "1973", label: "1973" },
    { value: "1974", label: "1974" },
    { value: "1975", label: "1975" },
    { value: "1976", label: "1976" },
    { value: "1977", label: "1977" },
    { value: "1978", label: "1978" },
    { value: "1979", label: "1979" },
    { value: "1980", label: "1980" },
    { value: "1981", label: "1981" },
    { value: "1982", label: "1982" },
    { value: "1983", label: "1983" },
    { value: "1984", label: "1984" },
    { value: "1985", label: "1985" },
    { value: "1986", label: "1986" },
    { value: "1987", label: "1987" },
    { value: "1988", label: "1988" },
    { value: "1989", label: "1989" },
    { value: "1990", label: "1990" },
    { value: "1991", label: "1991" },
    { value: "1992", label: "1992" },
    { value: "1993", label: "1993" },
    { value: "1994", label: "1994" },
    { value: "1995", label: "1995" },
    { value: "1996", label: "1996" },
    { value: "1997", label: "1997" },
    { value: "1998", label: "1998" },
    { value: "1999", label: "1999" },
    { value: "2000", label: "2000" },
    { value: "2001", label: "2001" },
    { value: "2002", label: "2002" },
    { value: "2003", label: "2003" },
    { value: "2004", label: "2004" },
    { value: "2005", label: "2005" },
  ]);
  const navigation = useNavigation();

  return (
    <View style={styles.photo2}>
      <View style={[styles.rectangleParent, styles.parentPosition]}>
        <View style={styles.groupChild} />
        <Text style={[styles.editYourProfile, styles.birthday1Typo]}>
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
          <View style={[styles.rectangleContainer, styles.photo2ItemPosition]}>
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
      <View style={[styles.photo2Item, styles.photo2ItemPosition]} />
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
            source={require("../assets/vector7.png")}
          />
        </Pressable>
        <View style={[styles.groupChild2, styles.groupChildPosition]} />
        <Text style={[styles.birthday1, styles.birthday1Typo]}>Birthday</Text>
        <Text style={[styles.youMustBe, styles.aboutMeTypo]}>
          You must be at least 18 to use Flirt.Stream
        </Text>
        <View style={styles.frameParent}>
          <View style={[styles.wrapper, styles.framePosition]}>
            <DropDownPicker
              open={frameDropdownOpen}
              setOpen={setFrameDropdownOpen}
              value={frameDropdownValue}
              setValue={setFrameDropdownValue}
              placeholder="mm"
              items={frameDropdownItems}
              labelStyle={styles.frameDropdownValue}
            />
          </View>
          <View style={[styles.container, styles.framePosition]}>
            <DropDownPicker
              open={frameDropdown1Open}
              setOpen={setFrameDropdown1Open}
              value={frameDropdown1Value}
              setValue={setFrameDropdown1Value}
              placeholder="dd"
              items={frameDropdown1Items}
              labelStyle={styles.frameDropdown1Value}
            />
          </View>
          <View style={[styles.frame, styles.framePosition]}>
            <DropDownPicker
              open={frameDropdown2Open}
              setOpen={setFrameDropdown2Open}
              value={frameDropdown2Value}
              setValue={setFrameDropdown2Value}
              placeholder="yy"
              items={frameDropdown2Items}
              labelStyle={styles.frameDropdown2Value}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameDropdownValue: {
    color: "#000",
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Roboto_bold",
  },
  frameDropdown1Value: {
    color: "#000",
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Roboto_bold",
  },
  frameDropdown2Value: {
    color: "#000",
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Roboto_bold",
  },
  parentPosition: {
    width: "100%",
    left: "0%",
    right: "0%",
    position: "absolute",
  },
  birthday1Typo: {
    textAlign: "center",
    fontWeight: "700",
    color: Color.black,
    fontFamily: FontFamily.quicksandBold,
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
    color: Color.white,
    top: "32.08%",
    fontFamily: FontFamily.robotoBold,
    textAlign: "center",
    fontWeight: "700",
    position: "absolute",
  },
  groupPosition: {
    left: "-0.28%",
    width: "100%",
  },
  aboutMeTypo: {
    textAlign: "left",
    fontWeight: "700",
    position: "absolute",
  },
  photo2ItemPosition: {
    bottom: "0%",
    left: "0%",
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
    left: "-0.14%",
    right: "-0.14%",
    width: "100.28%",
    borderColor: "rgba(0, 0, 0, 0.5)",
    borderStyle: "solid",
    position: "absolute",
  },
  viewPosition: {
    height: 295,
    bottom: 0,
    right: "0.28%",
    position: "absolute",
  },
  framePosition: {
    top: 0,
    width: "31.38%",
    height: 26,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.white,
    bottom: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  editYourProfile: {
    top: "32.56%",
    left: "36.94%",
    fontSize: FontSize.fontsRegularCaption12_size,
    fontWeight: "700",
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
    right: "0%",
    position: "absolute",
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
    fontFamily: FontFamily.quicksandBold,
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
    textAlign: "left",
    fontFamily: FontFamily.quicksandBold,
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
    textAlign: "left",
    fontFamily: FontFamily.quicksandBold,
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
    right: "0%",
    position: "absolute",
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
    right: "0%",
    position: "absolute",
  },
  rectangleGroup: {
    height: "43.13%",
    top: "39.13%",
    bottom: "17.75%",
    right: "0.28%",
    left: "-0.28%",
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
    bottom: "0%",
  },
  rectangleView: {
    width: "99.44%",
    borderTopLeftRadius: Border.br_xl,
    borderTopRightRadius: Border.br_xl,
    left: "0.28%",
    height: 295,
    bottom: 0,
    backgroundColor: Color.white,
  },
  button1Item: {
    backgroundColor: Color.brown,
  },
  start1: {
    left: "44.97%",
    fontSize: FontSize.size_sm,
  },
  button11: {
    width: "93.13%",
    right: "3.82%",
    bottom: 31,
    left: "3.06%",
    height: 37,
    position: "absolute",
  },
  icon: {
    maxWidth: "100%",
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  vector: {
    left: "89.54%",
    right: "7.27%",
    bottom: 265,
    width: "3.19%",
    height: 12,
    position: "absolute",
  },
  groupChild2: {
    bottom: 234,
    height: 1,
  },
  birthday1: {
    bottom: 244,
    left: "41.94%",
    fontSize: FontSize.size_sm,
  },
  youMustBe: {
    bottom: 91,
    left: "23.33%",
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.robotoBold,
    textAlign: "left",
    color: Color.black,
  },
  wrapper: {
    right: "68.62%",
    left: "0%",
  },
  container: {
    right: "34.31%",
    left: "34.31%",
  },
  frame: {
    left: "68.62%",
    right: "0%",
  },
  frameParent: {
    width: "66.39%",
    top: 126,
    right: "16.67%",
    left: "16.94%",
    height: 26,
    position: "absolute",
  },
  groupView: {
    left: "-0.28%",
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

export default Photo272;
