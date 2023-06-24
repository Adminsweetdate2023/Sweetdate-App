import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Login = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.login}>
      <Image
        style={styles.loginChild}
        contentFit="cover"
        source={require("../assets/rectangle-11.png")}
      />
      <View style={styles.loginSocialOption}>
        <View style={styles.social}>
          <View style={styles.fb}>
            <View style={styles.bgShadowBox} />
            <Text style={[styles.facebook, styles.or1Typo]}>Facebook</Text>
            <Image
              style={[styles.icFacebookIcon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/ic-facebook.png")}
            />
          </View>
          <View style={[styles.google, styles.phoneLayout]}>
            <View style={styles.bgShadowBox} />
            <Text style={[styles.google1, styles.or1Typo]}>Google</Text>
            <Image
              style={[styles.icGoogleIcon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/ic-google.png")}
            />
          </View>
          <Pressable
            style={[styles.phone, styles.or2Position]}
            onPress={() => navigation.navigate("LoginWithPhone1")}
          >
            <View style={styles.bgShadowBox} />
            <Text style={[styles.phone1, styles.or1Typo]}>Phone</Text>
            <Image
              style={styles.icPhoneIcon}
              contentFit="cover"
              source={require("../assets/ic-phone.png")}
            />
          </Pressable>
        </View>
        <View style={styles.or}>
          <Image
            style={[styles.line89Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/line-89.png")}
          />
          <Image
            style={[styles.line90Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/line-89.png")}
          />
          <View style={[styles.or2, styles.or2Position]}>
            <Text style={[styles.or1, styles.or1Typo]}>or</Text>
          </View>
        </View>
        <Pressable
          style={styles.login1}
          onPress={() => navigation.navigate("LoginWithPhone2")}
        >
          <Text style={[styles.login2, styles.loginTypo]}>LOGIN</Text>
        </Pressable>
        <View style={styles.content}>
          <Text style={[styles.loginMeansYouContainer, styles.loginTypo]}>
            Login means you agree to Terms of Use, Privacy PolicyPowered by
            Yeah!live
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  or1Typo: {
    textAlign: "left",
    fontSize: FontSize.fontsSemiboldLabel13S_size,
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  phoneLayout: {
    height: "29.6%",
    left: "0%",
    right: "0%",
    width: "100%",
  },
  or2Position: {
    bottom: "0%",
    position: "absolute",
  },
  iconLayout: {
    opacity: 0.31,
    bottom: "38.46%",
    top: "53.85%",
    width: "43.18%",
    height: "7.69%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  loginTypo: {
    fontFamily: FontFamily.fontsRegularCaption12,
    lineHeight: 16,
  },
  loginChild: {
    marginLeft: -115,
    top: 102,
    left: "50%",
    width: 229,
    height: 177,
    position: "absolute",
  },
  bgShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.09)",
    borderRadius: 21,
    bottom: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
    backgroundColor: Color.white,
  },
  facebook: {
    top: "35.66%",
    color: Color.dark,
    position: "absolute",
    fontFamily: FontFamily.fontsSemiboldLabel13S,
    fontWeight: "500",
    lineHeight: 16,
    left: "36.66%",
    textAlign: "left",
    fontSize: FontSize.fontsSemiboldLabel13S_size,
  },
  icFacebookIcon: {
    height: "47.04%",
    width: "4.54%",
    top: "26.23%",
    right: "85.51%",
    bottom: "26.73%",
    left: "9.95%",
  },
  fb: {
    bottom: "70.4%",
    left: "0%",
    right: "0%",
    top: "0%",
    height: "29.6%",
    position: "absolute",
    width: "100%",
  },
  google1: {
    top: "35.73%",
    color: Color.dark,
    position: "absolute",
    fontFamily: FontFamily.fontsSemiboldLabel13S,
    fontWeight: "500",
    lineHeight: 16,
    left: "36.66%",
    textAlign: "left",
    fontSize: FontSize.fontsSemiboldLabel13S_size,
  },
  icGoogleIcon: {
    height: "30.87%",
    width: "6.47%",
    top: "35.56%",
    right: "84.25%",
    bottom: "33.57%",
    left: "9.28%",
  },
  google: {
    top: "35.21%",
    bottom: "35.19%",
    left: "0%",
    right: "0%",
    position: "absolute",
  },
  phone1: {
    top: "35.9%",
    color: Color.dark,
    position: "absolute",
    fontFamily: FontFamily.fontsSemiboldLabel13S,
    fontWeight: "500",
    lineHeight: 16,
    left: "36.66%",
    textAlign: "left",
    fontSize: FontSize.fontsSemiboldLabel13S_size,
  },
  icPhoneIcon: {
    width: 12,
    height: 21,
    display: "none",
  },
  phone: {
    top: "70.4%",
    left: "0%",
    right: "0%",
    height: "29.6%",
    width: "100%",
  },
  social: {
    width: 205,
    height: 145,
  },
  line89Icon: {
    right: "56.82%",
    left: "0%",
  },
  line90Icon: {
    left: "56.82%",
    right: "0%",
  },
  or1: {
    marginTop: -6.5,
    top: "50%",
    fontFamily: FontFamily.quicksand,
    color: Color.dark,
    position: "absolute",
    textAlign: "left",
    fontSize: FontSize.fontsSemiboldLabel13S_size,
    left: "0%",
  },
  or2: {
    width: "7.39%",
    right: "46.31%",
    left: "46.31%",
    height: "100%",
    bottom: "0%",
    top: "0%",
    overflow: "hidden",
  },
  or: {
    width: 176,
    height: 13,
    marginTop: 31,
  },
  login2: {
    color: Color.black,
    textAlign: "left",
    fontSize: FontSize.fontsSemiboldLabel13S_size,
  },
  login1: {
    marginTop: 31,
  },
  loginMeansYouContainer: {
    bottom: 0,
    fontSize: FontSize.fontsRegularCaption12_size,
    textAlign: "center",
    color: Color.dark,
    position: "absolute",
    left: "0%",
  },
  content: {
    width: 298,
    height: 32,
    marginTop: 31,
  },
  loginSocialOption: {
    width: "82.78%",
    right: "8.74%",
    bottom: 47,
    left: "8.48%",
    alignItems: "center",
    position: "absolute",
  },
  login: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Login;
