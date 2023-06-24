import React, { useState } from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Birthday = () => {
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
    <View style={styles.birthday}>
      <Text style={[styles.whensYourBirthday, styles.youMustBeTypo]}>
        When’s your birthday?
      </Text>
      <Pressable
        style={styles.button2}
        onPress={() => navigation.navigate("Name")}
      >
        <View style={[styles.button1, styles.button1Position]}>
          <View style={[styles.button1Child, styles.button1Position]} />
          <Text style={styles.continue}>Continue</Text>
        </View>
      </Pressable>
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
      <Text style={[styles.youMustBe, styles.youMustBeTypo]}>
        You must be at least 18 to use Flirt.Stream
      </Text>
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
  youMustBeTypo: {
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    position: "absolute",
  },
  button1Position: {
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  framePosition: {
    top: 0,
    width: "31.38%",
    height: 26,
    position: "absolute",
  },
  whensYourBirthday: {
    top: 121,
    left: "7.78%",
    fontSize: FontSize.size_9xl,
  },
  button1Child: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.brown,
    left: "0%",
    right: "0%",
  },
  continue: {
    marginLeft: -29,
    top: "27.03%",
    left: "50%",
    fontSize: FontSize.size_sm,
    color: Color.white,
    textAlign: "center",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    position: "absolute",
  },
  button1: {
    right: "-0.94%",
    left: "0.94%",
  },
  button2: {
    width: "88.89%",
    right: "5.56%",
    bottom: 67,
    left: "5.56%",
    height: 37,
    position: "absolute",
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
    top: 226,
    right: "18.06%",
    left: "15.56%",
    height: 26,
    position: "absolute",
  },
  youMustBe: {
    top: 305,
    left: 84,
    fontSize: FontSize.size_3xs,
  },
  birthday: {
    backgroundColor: Color.white,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default Birthday;
