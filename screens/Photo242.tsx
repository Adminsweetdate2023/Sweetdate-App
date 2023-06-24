import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Photo242 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.photo2}>
      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.groupPosition2]} />
        <View style={[styles.rectangleGroup, styles.groupLayout]}>
          <View style={[styles.groupItem, styles.groupItemShadowBox]} />
          <Text style={[styles.alexa1234, styles.columbiaTypo]}>alexa1234</Text>
        </View>
        <Image
          style={styles.groupInner}
          contentFit="cover"
          source={require("../assets/group-612.png")}
        />
        <Text style={[styles.alexa30, styles.startClr]}>Alexa, 30</Text>
        <Text style={[styles.columbia, styles.columbiaTypo]}>Columbia</Text>
        <Text style={styles.stories}>STORIES</Text>
        <Image
          style={[styles.ellipseIcon, styles.ellipseIconLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-1.png")}
        />
        <Image
          style={[styles.groupChild1, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-21.png")}
        />
        <Image
          style={[styles.groupChild2, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-3.png")}
        />
        <Image
          style={[styles.groupChild3, styles.ellipseIconLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-4.png")}
        />
        <Image
          style={[styles.rectangleIcon, styles.groupChild4Layout]}
          contentFit="cover"
          source={require("../assets/rectangle-691.png")}
        />
        <Image
          style={[styles.groupChild4, styles.groupChild4Layout]}
          contentFit="cover"
          source={require("../assets/rectangle-701.png")}
        />
        <Text style={styles.imASingle}>
          i’m a single girl. I love to play for long times, making you have a
          very nice and delightful time.
        </Text>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector5.png")}
        />
        <Image
          style={styles.charmmenuKebabIcon}
          contentFit="cover"
          source={require("../assets/charmmenukebab1.png")}
        />
        <Text style={[styles.following, styles.columbiaTypo]}>Following</Text>
        <View style={[styles.rectangleContainer, styles.rectanglePosition]}>
          <View style={[styles.rectangleView, styles.rectanglePosition]} />
          <View style={[styles.parent, styles.groupPosition1]}>
            <Text style={[styles.text, styles.textTypo]}>161</Text>
            <Text style={[styles.following1, styles.textTypo]}>Following</Text>
          </View>
          <View style={[styles.group, styles.groupPosition1]}>
            <Text style={[styles.text, styles.textTypo]}>635</Text>
            <Text style={[styles.followers, styles.textTypo]}>Followers</Text>
          </View>
          <View style={[styles.container, styles.groupPosition1]}>
            <Text style={[styles.text, styles.textTypo]}>900</Text>
            <Text style={[styles.gifts, styles.textTypo]}>Gifts</Text>
          </View>
        </View>
      </View>
      <View style={[styles.photo2Child, styles.childPosition]} />
      <View style={[styles.groupView, styles.groupPosition]}>
        <View style={[styles.groupChild5, styles.groupChildPosition]} />
        <Pressable
          style={styles.button1}
          onPress={() => navigation.navigate("Photo243")}
        >
          <View style={[styles.button1Child, styles.childPosition]} />
          <Text style={[styles.start, styles.startClr]}>Cancel</Text>
        </Pressable>
        <Pressable
          style={[styles.groupPressable, styles.groupParentLayout]}
          onPress={() => navigation.navigate("Photo244")}
        >
          <View style={[styles.groupChild6, styles.groupChild6Border]} />
          <Text style={[styles.unfollow, styles.blockTypo]}>Unfollow</Text>
        </Pressable>
        <Pressable
          style={[styles.rectangleParent1, styles.groupParentLayout]}
          onPress={() => navigation.navigate("Photo286")}
        >
          <View style={[styles.groupChild6, styles.groupChild6Border]} />
          <Text style={[styles.block, styles.blockTypo]}>Block</Text>
        </Pressable>
        <View style={[styles.rectangleParent2, styles.groupParentLayout]}>
          <View style={[styles.groupChild6, styles.groupChild6Border]} />
          <Text style={[styles.report, styles.blockTypo]}>Report</Text>
        </View>
        <Pressable
          style={[styles.linePressable, styles.groupChild6Border]}
          onPress={() => navigation.navigate("Photo243")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupPosition2: {
    borderBottomLeftRadius: Border.br_xl,
    borderBottomRightRadius: Border.br_xl,
  },
  groupLayout: {
    height: 45,
    position: "absolute",
  },
  groupItemShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.crimson_100,
    right: "0%",
    top: 0,
    width: "100%",
  },
  columbiaTypo: {
    color: Color.gray_500,
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  startClr: {
    color: Color.white,
    textAlign: "center",
    position: "absolute",
  },
  ellipseIconLayout: {
    height: 70,
    maxWidth: "100%",
    top: 451,
    width: "17.28%",
    position: "absolute",
    overflow: "hidden",
  },
  groupChildLayout: {
    top: 450,
    height: 70,
    maxWidth: "100%",
    width: "17.28%",
    position: "absolute",
    overflow: "hidden",
  },
  groupChild4Layout: {
    height: 142,
    borderTopRightRadius: Border.br_3xs,
    borderTopLeftRadius: Border.br_3xs,
    top: 554,
    width: "45.68%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  rectanglePosition: {
    height: 50,
    left: "0%",
    position: "absolute",
  },
  groupPosition1: {
    height: 14,
    top: 18,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.robotoBold,
    fontSize: FontSize.fontsRegularCaption12_size,
    color: Color.white,
    fontWeight: "700",
    top: 0,
    position: "absolute",
  },
  childPosition: {
    bottom: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  groupPosition: {
    height: 273,
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  groupChildPosition: {
    bottom: 0,
    backgroundColor: Color.white,
  },
  groupParentLayout: {
    height: 54,
    left: "0%",
    right: "0%",
    width: "100%",
  },
  groupChild6Border: {
    borderColor: "rgba(0, 0, 0, 0.5)",
    borderStyle: "solid",
    position: "absolute",
  },
  blockTypo: {
    fontFamily: FontFamily.quicksandMedium,
    fontWeight: "500",
    bottom: 18,
    color: Color.black,
    textAlign: "center",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  groupChild: {
    marginLeft: -202.5,
    backgroundColor: Color.brown,
    width: 360,
    height: 397,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  groupItem: {
    left: "0%",
    height: 45,
    position: "absolute",
    borderBottomLeftRadius: Border.br_xl,
    borderBottomRightRadius: Border.br_xl,
  },
  alexa1234: {
    left: 50,
    textAlign: "left",
    top: 13,
    color: Color.gray_500,
  },
  rectangleGroup: {
    right: "10.86%",
    left: "0.25%",
    width: "88.89%",
    top: 0,
  },
  groupInner: {
    marginLeft: -84.5,
    top: 64,
    width: 125,
    height: 125,
    left: "50%",
    position: "absolute",
  },
  alexa30: {
    marginLeft: -61.5,
    top: 199,
    fontSize: FontSize.size_lg,
    textAlign: "center",
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    color: Color.white,
    left: "50%",
  },
  columbia: {
    marginLeft: -54.5,
    top: 222,
    textAlign: "center",
    left: "50%",
  },
  stories: {
    marginLeft: -51.5,
    top: 422,
    color: Color.black,
    textAlign: "center",
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    fontSize: FontSize.size_sm,
    left: "50%",
    position: "absolute",
  },
  ellipseIcon: {
    right: "76.3%",
    left: "6.42%",
  },
  groupChild1: {
    right: "56.79%",
    left: "25.93%",
  },
  groupChild2: {
    right: "37.28%",
    left: "45.43%",
  },
  groupChild3: {
    right: "17.78%",
    left: "64.94%",
  },
  rectangleIcon: {
    right: "47.9%",
    left: "6.42%",
  },
  groupChild4: {
    left: "54.32%",
    right: "0%",
    borderTopRightRadius: Border.br_3xs,
    borderTopLeftRadius: Border.br_3xs,
    top: 554,
    width: "45.68%",
  },
  imASingle: {
    width: "63.95%",
    top: 250,
    left: "12.59%",
    fontSize: FontSize.fontsRegularCaption12_size,
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    position: "absolute",
  },
  vectorIcon: {
    height: "1.87%",
    top: "2.42%",
    bottom: "95.7%",
    left: 25,
    maxHeight: "100%",
    width: 9,
    position: "absolute",
  },
  charmmenuKebabIcon: {
    top: 11,
    right: 59,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  following: {
    right: 88,
    textAlign: "center",
    top: 13,
    color: Color.gray_500,
  },
  rectangleView: {
    borderRadius: Border.br_xl,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.crimson_100,
    right: "0%",
    top: 0,
    width: "100%",
  },
  text: {
    textAlign: "center",
    left: "0%",
  },
  following1: {
    left: "28.77%",
    textAlign: "left",
  },
  parent: {
    width: "20.28%",
    right: "68.06%",
    left: "11.67%",
  },
  followers: {
    left: "28.38%",
    textAlign: "left",
  },
  group: {
    width: "20.56%",
    right: "11.39%",
    left: "68.06%",
  },
  gifts: {
    left: "44.68%",
    textAlign: "left",
  },
  container: {
    width: "13.06%",
    right: "43.33%",
    left: "43.61%",
  },
  rectangleContainer: {
    top: 348,
    right: "11.11%",
    width: "88.89%",
  },
  rectangleParent: {
    marginLeft: -180,
    width: 405,
    height: 696,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  photo2Child: {
    backgroundColor: Color.gray_600,
  },
  groupChild5: {
    height: 273,
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  button1Child: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.crimson_100,
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  start: {
    top: "32.08%",
    left: "43.18%",
    fontWeight: "600",
    fontFamily: FontFamily.quicksandSemibold,
    textAlign: "center",
    color: Color.white,
    fontSize: FontSize.size_sm,
  },
  button1: {
    width: "93.13%",
    right: "3.54%",
    bottom: 15,
    left: "3.33%",
    height: 38,
    position: "absolute",
  },
  groupChild6: {
    borderBottomWidth: 1,
    height: 54,
    left: "0%",
    right: "0%",
    width: "100%",
    bottom: 0,
    backgroundColor: Color.white,
  },
  unfollow: {
    left: "41.94%",
  },
  groupPressable: {
    bottom: 184,
    position: "absolute",
  },
  block: {
    left: "45%",
  },
  rectangleParent1: {
    bottom: 129,
    position: "absolute",
  },
  report: {
    left: "43.61%",
  },
  rectangleParent2: {
    bottom: 74,
    position: "absolute",
  },
  linePressable: {
    width: "30.56%",
    top: 20,
    right: "34.72%",
    left: "34.72%",
    borderTopWidth: 2,
    height: 2,
  },
  groupView: {
    bottom: -1,
  },
  photo2: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Photo242;
