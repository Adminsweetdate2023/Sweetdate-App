import * as React from "react";
import { StyleSheet, View, Text, Pressable, TextInput } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const LoginWithPhone2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.loginWithPhone}>
      <Pressable
        style={styles.button}
        onPress={() =>
          navigation.navigate("BottomTabsRoot", { screen: "Photo287" })
        }
      >
        <View style={[styles.button1, styles.borderPosition]}>
          <View style={[styles.btnBg, styles.borderPosition]} />
          <Text style={[styles.signUploginWith, styles.phoneNumber1Typo]}>
            Login
          </Text>
        </View>
      </Pressable>
      <View style={[styles.country, styles.fieldLayout]}>
        <View style={[styles.field, styles.fieldLayout]}>
          <TextInput
            style={styles.india}
            placeholder="Username"
            keyboardType="default"
            placeholderTextColor="#1f1f1f"
          />
          <View style={[styles.border, styles.borderPosition]} />
          <Text style={[styles.country1, styles.countryTypo]}>USERNAME</Text>
        </View>
      </View>
      <View style={[styles.phoneNumber, styles.fieldLayout]}>
        <View style={[styles.field, styles.fieldLayout]}>
          <TextInput
            style={styles.india}
            placeholder="Enter password"
            keyboardType="default"
            secureTextEntry
            placeholderTextColor="#1f1f1f"
          />
          <View style={[styles.border, styles.borderPosition]} />
          <Text style={styles.countryTypo}>PASSWORD</Text>
        </View>
        <Image
          style={styles.icConfirmIcon}
          contentFit="cover"
          source={require("../assets/ic-confirm.png")}
        />
      </View>
      <View style={[styles.header, styles.bgPosition1]}>
        <View style={[styles.bg, styles.borderPosition]} />
        <View style={styles.iconsParent}>
          <Pressable
            style={styles.icons}
            onPress={() => navigation.navigate("Login")}
          >
            <View style={[styles.button1, styles.borderPosition]}>
              <View style={[styles.button1, styles.borderPosition]} />
              <Image
                style={[styles.arrowLeftIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/arrowleft.png")}
              />
            </View>
          </Pressable>
          <Text style={[styles.phoneNumber1, styles.textClr]}>Sign in</Text>
        </View>
        <View style={[styles.statusBar, styles.bgPosition1]}>
          <View style={[styles.button1, styles.borderPosition]} />
          <View style={styles.battery}>
            <View style={[styles.border2, styles.border2Bg]} />
            <Image
              style={[styles.capIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/cap.png")}
            />
            <View style={[styles.capacity, styles.border2Bg]} />
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
          <Text style={[styles.text, styles.textClr]}>4:21</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  borderPosition: {
    bottom: "0%",
    left: "0%",
  },
  phoneNumber1Typo: {
    fontFamily: FontFamily.fontsBoldHeading16B,
    fontWeight: "700",
    lineHeight: 22,
    fontSize: FontSize.fontsBoldHeading16B_size,
  },
  fieldLayout: {
    height: 59,
    position: "absolute",
  },
  countryTypo: {
    textAlign: "left",
    color: Color.secondaryGrey,
    lineHeight: 16,
    fontSize: FontSize.fontsSemiboldLabel13S_size,
    fontFamily: FontFamily.fontsSemiboldLabel13S,
    fontWeight: "500",
    left: "0%",
    top: "0%",
    position: "absolute",
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
  textClr: {
    color: Color.dark,
    textAlign: "left",
  },
  border2Bg: {
    backgroundColor: Color.dark,
    position: "absolute",
  },
  btnBg: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.firebrick,
    left: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    bottom: "0%",
    position: "absolute",
    width: "100%",
  },
  signUploginWith: {
    marginTop: -11,
    left: "43.72%",
    color: Color.white,
    textAlign: "center",
    top: "50%",
    fontWeight: "700",
    lineHeight: 22,
    fontSize: FontSize.fontsBoldHeading16B_size,
    position: "absolute",
  },
  button1: {
    left: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    bottom: "0%",
    position: "absolute",
    width: "100%",
  },
  button: {
    width: "86.67%",
    top: 289,
    right: "6.67%",
    left: "6.67%",
    height: 48,
    position: "absolute",
  },
  india: {
    top: "47.46%",
    left: "0.31%",
    fontFamily: FontFamily.fontsSemiboldLabel13S,
    fontWeight: "500",
    fontSize: FontSize.fontsBoldHeading16B_size,
    position: "absolute",
  },
  border: {
    height: "1.7%",
    top: "98.3%",
    backgroundColor: Color.border,
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  country1: {
    height: "27.12%",
    width: "48.62%",
  },
  field: {
    top: 0,
    right: 0,
    left: 0,
  },
  country: {
    top: 111,
    left: 25,
    right: 25,
    height: 59,
  },
  icConfirmIcon: {
    top: 24,
    right: 1,
    width: 18,
    height: 18,
    position: "absolute",
  },
  phoneNumber: {
    top: 190,
    left: 25,
    right: 25,
    height: 59,
  },
  bg: {
    backgroundColor: Color.crimson_200,
    left: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    bottom: "0%",
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
  phoneNumber1: {
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
  border2: {
    width: "90.43%",
    right: "9.57%",
    borderRadius: 3,
    opacity: 0.35,
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
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
  text: {
    marginTop: -8,
    left: "8.27%",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.quicksand,
    fontWeight: "500",
    color: Color.dark,
    top: "50%",
    position: "absolute",
  },
  statusBar: {
    height: "46.81%",
    bottom: "53.19%",
    display: "none",
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
  },
  header: {
    top: -30,
    height: 94,
    left: "0%",
    right: "0%",
    position: "absolute",
  },
  loginWithPhone: {
    backgroundColor: Color.white,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default LoginWithPhone2;
