import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View, TextInput, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const Live11 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.live1}>
      <Image
        style={[styles.live1Child, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-50.png")}
      />
      <Pressable
        style={[styles.makigift, styles.wrapperLayout]}
        onPress={() => navigation.navigate("Livegift9")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/makigift2.png")}
        />
      </Pressable>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildBorder]} />
        <TextInput
          style={[styles.sayHi, styles.sayHiTypo]}
          placeholder="Say hi..."
          keyboardType="default"
          placeholderTextColor="#fff"
        />
        <Image
          style={styles.groupItem}
          contentFit="cover"
          source={require("../assets/group-1711.png")}
        />
      </View>
      <Pressable
        style={[styles.wrapper, styles.wrapperLayout]}
        onPress={() =>
          navigation.navigate("BottomTabsRoot", { screen: "Photo287" })
        }
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/group-168.png")}
        />
      </Pressable>
      <Pressable
        style={styles.ellipseParent}
        onPress={() => navigation.navigate("Photo232")}
      >
        <Image
          style={styles.groupInner}
          contentFit="cover"
          source={require("../assets/ellipse-29.png")}
        />
        <Text style={[styles.evelyn25, styles.textFlexBox]}>Evelyn,25</Text>
        <View style={[styles.rectangleView, styles.textPosition]} />
        <Image
          style={styles.groupIcon}
          contentFit="cover"
          source={require("../assets/group-1661.png")}
        />
      </Pressable>
      <Pressable
        style={styles.container}
        onPress={() => navigation.navigate("Livereport")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/group-169.png")}
        />
      </Pressable>
      <View style={styles.parent}>
        <Text style={[styles.text, styles.textPosition]}>150</Text>
        <Image
          style={[styles.ellipseIcon, styles.ellipseIconLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-762.png")}
        />
        <Image
          style={[styles.groupChild1, styles.ellipseIconLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-772.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  wrapperLayout: {
    width: 30,
    height: 30,
    position: "absolute",
  },
  groupChildLayout: {
    height: 38,
    width: 279,
    left: "50%",
    position: "absolute",
  },
  groupChildBorder: {
    borderWidth: 2,
    borderStyle: "solid",
  },
  sayHiTypo: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "left",
    color: Color.black,
  },
  textPosition: {
    top: 7,
    position: "absolute",
  },
  ellipseIconLayout: {
    width: 26,
    height: 26,
    top: 0,
    position: "absolute",
  },
  live1Child: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  icon: {
    overflow: "hidden",
  },
  makigift: {
    left: 21,
    bottom: 39,
    height: 30,
  },
  groupChild: {
    marginLeft: -139.5,
    bottom: 0,
    borderRadius: Border.br_xl,
    borderColor: "#000",
    height: 38,
    width: 279,
    left: "50%",
    position: "absolute",
  },
  sayHi: {
    bottom: 11,
    left: 20,
  },
  groupItem: {
    bottom: 8,
    left: 239,
    width: 24,
    height: 24,
    position: "absolute",
  },
  rectangleParent: {
    marginLeft: -120,
    bottom: 35,
  },
  wrapper: {
    left: 16,
    top: 27,
    height: 30,
  },
  groupInner: {
    top: 9,
    left: 3,
    width: 25,
    height: 25,
    position: "absolute",
  },
  evelyn25: {
    top: 12,
    left: 37,
    display: "flex",
    alignItems: "center",
    width: 66,
    height: 19,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    position: "absolute",
  },
  rectangleView: {
    left: 0,
    borderRadius: Border.br_3xs,
    borderColor: "#0fa958",
    width: 139,
    borderWidth: 2,
    borderStyle: "solid",
    height: 30,
  },
  groupIcon: {
    left: 119,
    width: 15,
    height: 16,
    top: 0,
    position: "absolute",
  },
  ellipseParent: {
    top: 20,
    left: 54,
    height: 37,
    width: 139,
    position: "absolute",
  },
  container: {
    top: 30,
    right: 138,
    width: 21,
    height: 21,
    position: "absolute",
  },
  text: {
    right: 0,
    fontSize: FontSize.fontsRegularCaption12_size,
    fontWeight: "900",
    fontFamily: FontFamily.nunitoBlack,
    textAlign: "left",
    color: Color.black,
  },
  ellipseIcon: {
    right: 60,
  },
  groupChild1: {
    right: 28,
  },
  parent: {
    top: 28,
    right: 18,
    width: 86,
    height: 26,
    position: "absolute",
  },
  live1: {
    backgroundColor: Color.whitesmoke_200,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default Live11;
