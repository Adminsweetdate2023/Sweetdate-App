import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const IPhone13ProMax36 = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.iphone13ProMax36}
      resizeMode="cover"
      source={require("../assets/rectangle-193.png")}
    >
      <View style={styles.ellipseParent}>
        <Image
          style={styles.groupChild}
          contentFit="cover"
          source={require("../assets/ellipse-291.png")}
        />
        <Text style={[styles.teeman32, styles.textFlexBox]}>Teeman,32</Text>
        <View style={styles.groupItem} />
      </View>
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("IPhone13ProMax63")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/group-5199.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.groupParent, styles.groupLayout]}
        onPress={() => navigation.navigate("IPhone13ProMax40")}
      >
        <Image
          style={[styles.groupInner, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/group-4936.png")}
        />
        <Image
          style={[
            styles.fluentchat24FilledIcon,
            styles.fluentchat24FilledIconLayout,
          ]}
          contentFit="cover"
          source={require("../assets/fluentchat24filled.png")}
        />
      </Pressable>
      <View style={styles.parent}>
        <Text style={[styles.text, styles.textFlexBox]}>150</Text>
        <Image
          style={[styles.ellipseIcon, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-74.png")}
        />
        <Image
          style={[styles.groupChild1, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-75.png")}
        />
        <Image
          style={[styles.groupChild2, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-76.png")}
        />
        <Image
          style={[styles.groupChild3, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-77.png")}
        />
        <Pressable
          style={[
            styles.materialSymbolscancelRounde,
            styles.fluentchat24FilledIconLayout,
          ]}
          onPress={() =>
            navigation.navigate("BottomTabsRoot", { screen: "Live" })
          }
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/materialsymbolscancelrounded.png")}
          />
        </Pressable>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  textFlexBox: {
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  groupLayout: {
    width: 40,
    height: 40,
    position: "absolute",
  },
  fluentchat24FilledIconLayout: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  groupChildLayout: {
    width: "14.44%",
    height: 26,
    maxWidth: "100%",
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  groupChild: {
    top: 2,
    left: 3,
    width: 23,
    height: 25,
    position: "absolute",
  },
  teeman32: {
    top: 5,
    left: 33,
    fontSize: FontSize.size_sm,
    fontWeight: "700",
    fontFamily: FontFamily.quicksandBold,
  },
  groupItem: {
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    borderColor: "#0fa958",
    borderWidth: 2,
    left: 0,
    top: 0,
    height: 30,
    width: 127,
    position: "absolute",
  },
  ellipseParent: {
    top: 27,
    left: 22,
    height: 30,
    width: 127,
    position: "absolute",
  },
  icon: {
    maxWidth: "100%",
    height: "100%",
  },
  wrapper: {
    left: "17.5%",
    right: "71.39%",
    width: "11.11%",
    height: 40,
    bottom: 24,
    position: "absolute",
  },
  groupInner: {
    bottom: 0,
    left: 0,
  },
  fluentchat24FilledIcon: {
    top: 8,
    left: 8,
    overflow: "hidden",
  },
  groupParent: {
    left: 13,
    bottom: 24,
    width: 40,
  },
  text: {
    top: 7,
    left: "71.03%",
    fontSize: FontSize.fontsRegularCaption12_size,
    fontWeight: "900",
    fontFamily: FontFamily.nunitoBlack,
  },
  ellipseIcon: {
    right: "85.56%",
    left: "0%",
  },
  groupChild1: {
    right: "67.96%",
    left: "17.59%",
  },
  groupChild2: {
    right: "50.19%",
    left: "35.37%",
  },
  groupChild3: {
    right: "32.41%",
    left: "53.15%",
  },
  materialSymbolscancelRounde: {
    left: 156,
    top: 1,
  },
  parent: {
    width: "50%",
    top: 29,
    right: "5%",
    left: "45%",
    height: 26,
    position: "absolute",
  },
  iphone13ProMax36: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone13ProMax36;
