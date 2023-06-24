import * as React from "react";
import { StyleSheet, View, Text, Pressable, TextInput } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const Otp = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.otp}>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Name1")}
      >
        <View style={[styles.button1, styles.bgPosition]}>
          <View style={[styles.btnBg, styles.bgPosition]} />
          <Text style={[styles.signUploginWith, styles.textinputTypo]}>
            Done
          </Text>
        </View>
      </Pressable>
      <View style={[styles.otp1, styles.otp1Position]}>
        <View style={[styles.group8347, styles.groupPosition]}>
          <TextInput
            style={[styles.textinput, styles.otp1Position]}
            placeholder="-"
            keyboardType="number-pad"
            placeholderTextColor="#1f1f1f"
            maxLength={1}
          />
          <View style={[styles.border, styles.groupPosition]} />
        </View>
        <View style={[styles.group8348, styles.groupPosition]}>
          <TextInput
            style={[styles.textinput, styles.otp1Position]}
            placeholder="-"
            keyboardType="number-pad"
            placeholderTextColor="#1f1f1f"
            maxLength={1}
          />
          <View style={[styles.border, styles.groupPosition]} />
        </View>
        <View style={[styles.group8349, styles.groupPosition]}>
          <TextInput
            style={[styles.textinput, styles.otp1Position]}
            placeholder="-"
            keyboardType="number-pad"
            placeholderTextColor="#1f1f1f"
            maxLength={1}
          />
          <View style={[styles.border, styles.groupPosition]} />
        </View>
        <View style={[styles.group8350, styles.groupPosition]}>
          <TextInput
            style={[styles.textinput, styles.otp1Position]}
            placeholder="-"
            keyboardType="number-pad"
            placeholderTextColor="#1f1f1f"
            maxLength={1}
          />
          <View style={[styles.border, styles.groupPosition]} />
        </View>
      </View>
      <Text style={[styles.text, styles.textFlexBox]}>00:58</Text>
      <View style={[styles.header, styles.bgPosition1]}>
        <View style={[styles.bg, styles.bgPosition]} />
        <View style={styles.iconsParent}>
          <Pressable
            style={styles.icons}
            onPress={() => navigation.navigate("LoginWithPhone1")}
          >
            <View style={[styles.button1, styles.bgPosition]}>
              <View style={[styles.button1, styles.bgPosition]} />
              <Image
                style={[styles.arrowLeftIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/arrowleft.png")}
              />
            </View>
          </Pressable>
          <Text style={[styles.phoneNumber, styles.textFlexBox]}>OTP</Text>
        </View>
        <View style={styles.statusBar}>
          <View style={[styles.button1, styles.bgPosition]} />
          <View style={styles.battery}>
            <View style={[styles.border4, styles.border4Bg]} />
            <Image
              style={[styles.capIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/cap.png")}
            />
            <View style={[styles.capacity, styles.border4Bg]} />
          </View>
          <Image
            style={styles.wifiIcon}
            contentFit="cover"
            source={require("../assets/wifi.png")}
          />
          <Image
            style={styles.cellularConnectionIcon}
            contentFit="cover"
            source={require("../assets/cellular-connection.png")}
          />
          <Text style={[styles.text1, styles.textFlexBox]}>4:21</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bgPosition: {
    bottom: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
  },
  textinputTypo: {
    fontFamily: FontFamily.fontsBoldHeading16B,
    fontWeight: "700",
  },
  otp1Position: {
    left: "50%",
    position: "absolute",
  },
  groupPosition: {
    width: 60,
    left: "50%",
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "left",
    color: Color.dark,
  },
  bgPosition1: {
    width: "100%",
    right: "0%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  border4Bg: {
    backgroundColor: Color.dark,
    position: "absolute",
  },
  btnBg: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.firebrick,
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  signUploginWith: {
    marginTop: -11,
    left: "43.72%",
    color: Color.white,
    textAlign: "center",
    lineHeight: 22,
    fontSize: FontSize.fontsBoldHeading16B_size,
    top: "50%",
    position: "absolute",
  },
  button1: {
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  button: {
    width: "86.67%",
    top: 241,
    right: "6.4%",
    left: "6.93%",
    height: 48,
    position: "absolute",
  },
  textinput: {
    marginLeft: -5,
    fontSize: FontSize.fontsBoldHeadingH220B_size,
    top: 0,
    fontFamily: FontFamily.fontsBoldHeading16B,
    fontWeight: "700",
  },
  border: {
    marginLeft: -30,
    top: 41,
    backgroundColor: Color.border,
    height: 1,
  },
  group8347: {
    top: 0,
    height: 42,
    marginLeft: -162,
  },
  group8348: {
    marginLeft: -74,
    top: 0,
    height: 42,
  },
  group8349: {
    marginLeft: 14,
    top: 0,
    height: 42,
  },
  group8350: {
    marginLeft: 102,
    top: 0,
    height: 42,
  },
  otp1: {
    top: 159,
    width: 324,
    height: 42,
    marginLeft: -162,
  },
  text: {
    top: 312,
    left: "44%",
    fontFamily: FontFamily.fontsSemiboldLabel13S,
    fontWeight: "500",
    color: Color.dark,
    position: "absolute",
    lineHeight: 22,
    fontSize: FontSize.fontsBoldHeading16B_size,
  },
  bg: {
    backgroundColor: Color.crimson_200,
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  arrowLeftIcon: {
    height: "70%",
    width: "80%",
    top: "15%",
    right: "10%",
    bottom: "15%",
    left: "10%",
  },
  icons: {
    width: 20,
    height: 20,
  },
  phoneNumber: {
    marginLeft: 16,
    fontFamily: FontFamily.fontsBoldHeading16B,
    fontWeight: "700",
    lineHeight: 22,
    fontSize: FontSize.fontsBoldHeading16B_size,
  },
  iconsParent: {
    top: 58,
    left: 16,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  border4: {
    width: "90.43%",
    right: "9.57%",
    borderRadius: 3,
    opacity: 0.35,
    left: "0%",
    bottom: "0%",
    height: "100%",
    top: "0%",
  },
  capIcon: {
    height: "35.3%",
    width: "5.46%",
    top: "32.36%",
    bottom: "32.35%",
    left: "94.54%",
    opacity: 0.4,
    right: "0%",
  },
  capacity: {
    height: "64.7%",
    width: "73.99%",
    top: "17.65%",
    right: "17.79%",
    bottom: "17.65%",
    left: "8.22%",
    borderRadius: 1,
  },
  battery: {
    height: "25.76%",
    width: "6.49%",
    top: "39.39%",
    right: "3.91%",
    bottom: "34.85%",
    left: "89.6%",
    position: "absolute",
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  cellularConnectionIcon: {
    width: 16,
    height: 11,
  },
  text1: {
    marginTop: -8,
    left: "8.27%",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.quicksand,
    fontWeight: "500",
    color: Color.dark,
    position: "absolute",
    top: "50%",
  },
  statusBar: {
    height: "46.81%",
    bottom: "53.19%",
    display: "none",
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  header: {
    top: -30,
    height: 94,
    left: "0%",
    right: "0%",
    position: "absolute",
  },
  otp: {
    backgroundColor: Color.white,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default Otp;
