import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Photo24 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.photo2}>
      <Image
        style={[styles.mingcutesendFillIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/mingcutesendfill.png")}
      />
      <Image
        style={[styles.photo2Child, styles.photo2Layout1]}
        contentFit="cover"
        source={require("../assets/group-222.png")}
      />
      <Image
        style={[styles.photo2Item, styles.photo2Layout]}
        contentFit="cover"
        source={require("../assets/group-221.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
      <View style={styles.rectangleParent}>
        <View style={styles.groupChild} />
        <Image
          style={[styles.makigiftIcon, styles.photo2Layout]}
          contentFit="cover"
          source={require("../assets/makigift1.png")}
        />
        <Text style={styles.typeSomethingSweet}>Type something sweet....</Text>
      </View>
      <Image
        style={[styles.photo2Inner, styles.button1Position]}
        contentFit="cover"
        source={require("../assets/group-227.png")}
      />
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={styles.groupItem} />
        <Text style={[styles.ringMe, styles.ringMeClr]}>Ring me</Text>
        <Text style={[styles.text, styles.textTypo1]}>20:21</Text>
      </View>
      <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
        <View style={[styles.groupInner, styles.groupPosition]} />
        <Text style={[styles.youGood, styles.youGoodClr]}>You good?</Text>
        <Text style={[styles.text1, styles.textPosition]}>20:21</Text>
      </View>
      <View style={[styles.groupView, styles.groupViewLayout]}>
        <View style={styles.rectangleView} />
        <Text style={[styles.weCanTalk, styles.weCanTalkTypo]}>
          We can talk here
        </Text>
        <Text style={[styles.text2, styles.textTypo]}>20:21</Text>
      </View>
      <View style={[styles.rectangleParent1, styles.groupViewLayout]}>
        <View style={[styles.groupChild1, styles.groupPosition]} />
        <Text style={[styles.heyHowAre, styles.weCanTalkTypo]}>
          Hey, how are you doing?
        </Text>
        <Text style={[styles.text3, styles.textTypo]}>20:21</Text>
      </View>
      <View style={styles.groupChild2Position}>
        <View style={[styles.groupChild2, styles.groupChild2Position]} />
        <Pressable
          style={[styles.button1, styles.button1Position]}
          onPress={() => navigation.navigate("Photo25")}
        >
          <View style={styles.button1Child} />
          <Text style={styles.start}>Cancel</Text>
        </Pressable>
        <Pressable
          style={[styles.groupPressable, styles.groupParentLayout]}
          onPress={() => navigation.navigate("Photo21")}
        >
          <View style={[styles.groupChild3, styles.groupChildBorder]} />
          <Text style={[styles.giftHistory, styles.blockTypo]}>
            Gift history
          </Text>
        </Pressable>
        <Pressable
          style={[styles.rectangleParent3, styles.groupParentLayout]}
          onPress={() => navigation.navigate("Photo22")}
        >
          <View style={[styles.groupChild3, styles.groupChildBorder]} />
          <Text style={[styles.block, styles.blockTypo]}>Block</Text>
        </Pressable>
        <Pressable
          style={[styles.rectangleParent4, styles.groupParentLayout]}
          onPress={() => navigation.navigate("Photo23")}
        >
          <View style={[styles.groupChild3, styles.groupChildBorder]} />
          <Text style={[styles.report, styles.blockTypo]}>Report</Text>
        </Pressable>
        <Pressable
          style={[styles.linePressable, styles.groupChild3Border]}
          onPress={() => navigation.navigate("Photo25")}
        />
      </View>
      <View style={[styles.rectangleParent5, styles.groupChild6Position]}>
        <View style={[styles.groupChild6, styles.groupChild6Position]} />
        <Image
          style={styles.ellipseIcon}
          contentFit="cover"
          source={require("../assets/ellipse-42.png")}
        />
        <Text style={styles.alexa30}>Alexa, 30</Text>
        <Image
          style={[styles.solarvideocameraRecordBoldIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/solarvideocamerarecordbold.png")}
        />
        <Image
          style={[styles.charmmenuKebabIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/charmmenukebab.png")}
        />
        <Image
          style={[styles.vectorIcon1, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    height: 24,
    position: "absolute",
  },
  photo2Layout1: {
    height: 26,
    position: "absolute",
  },
  photo2Layout: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  button1Position: {
    left: "3.33%",
    position: "absolute",
  },
  groupLayout: {
    height: 33,
    left: "5%",
  },
  ringMeClr: {
    color: Color.black,
    top: 10,
  },
  textTypo1: {
    fontSize: FontSize.size_6xs,
    left: "66.67%",
    fontFamily: FontFamily.quicksandRegular,
    textAlign: "left",
    position: "absolute",
  },
  rectangleLayout: {
    height: "4.13%",
    right: "3.06%",
  },
  groupPosition: {
    backgroundColor: Color.blueviolet,
    borderBottomLeftRadius: Border.br_mini,
    borderBottomRightRadius: Border.br_9xs,
    borderTopLeftRadius: Border.br_mini,
    bottom: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  youGoodClr: {
    color: Color.white,
    top: "30.3%",
  },
  textPosition: {
    top: "69.7%",
    color: Color.white,
  },
  groupViewLayout: {
    width: "45.28%",
    position: "absolute",
  },
  weCanTalkTypo: {
    left: "4.91%",
    fontFamily: FontFamily.quicksandRegular,
    textAlign: "left",
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  textTypo: {
    left: "80.37%",
    fontSize: FontSize.size_6xs,
    fontFamily: FontFamily.quicksandRegular,
    textAlign: "left",
    position: "absolute",
  },
  groupChild2Position: {
    height: 273,
    left: "0%",
    bottom: 0,
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  groupParentLayout: {
    height: 54,
    left: "0%",
    right: "0%",
    width: "100%",
  },
  groupChildBorder: {
    borderBottomWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.white,
  },
  blockTypo: {
    fontFamily: FontFamily.quicksandMedium,
    fontWeight: "500",
    bottom: 18,
    textAlign: "center",
    fontSize: FontSize.size_sm,
    color: Color.black,
    position: "absolute",
  },
  groupChild3Border: {
    borderColor: "rgba(0, 0, 0, 0.5)",
    position: "absolute",
  },
  groupChild6Position: {
    height: 44,
    width: 360,
    left: "50%",
    marginLeft: -180,
    position: "absolute",
  },
  iconPosition: {
    top: 10,
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  mingcutesendFillIcon: {
    top: 96,
    left: 24,
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  photo2Child: {
    top: 745,
    left: 281,
    width: 26,
  },
  photo2Item: {
    width: "7.22%",
    right: "4.17%",
    bottom: 29,
    left: "88.61%",
    height: 26,
    position: "absolute",
  },
  vectorIcon: {
    height: "3%",
    width: "6.67%",
    top: "93.25%",
    bottom: "3.75%",
    left: "90.28%",
    right: "3.06%",
    maxHeight: "100%",
  },
  groupChild: {
    borderRadius: Border.br_xl,
    borderWidth: 1,
    borderColor: "#d9d9d9",
    left: "0%",
    right: "0%",
    borderStyle: "solid",
    bottom: 0,
    height: 41,
    position: "absolute",
    width: "100%",
    backgroundColor: Color.white,
  },
  makigiftIcon: {
    width: "8.96%",
    right: "84.7%",
    bottom: 8,
    left: "6.34%",
    height: 24,
    position: "absolute",
  },
  typeSomethingSweet: {
    bottom: 14,
    left: "20.15%",
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
    color: Color.gray_600,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  rectangleParent: {
    width: "74.44%",
    right: "12.5%",
    bottom: 22,
    left: "13.06%",
    height: 41,
    position: "absolute",
  },
  photo2Inner: {
    width: "6.94%",
    right: "89.72%",
    bottom: 30,
    height: 25,
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupItem: {
    borderTopLeftRadius: Border.br_9xs,
    backgroundColor: Color.gainsboro_100,
    borderBottomLeftRadius: Border.br_9xs,
    borderBottomRightRadius: Border.br_mini,
    borderTopRightRadius: Border.br_mini,
    top: 0,
    height: 33,
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  ringMe: {
    fontFamily: FontFamily.quicksandRegular,
    left: "8.6%",
    textAlign: "left",
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  text: {
    top: 23,
    color: Color.gray_600,
  },
  rectangleGroup: {
    top: 677,
    right: "69.17%",
    width: "25.83%",
    position: "absolute",
  },
  groupInner: {
    borderTopRightRadius: Border.br_9xs,
  },
  youGood: {
    fontFamily: FontFamily.quicksandRegular,
    left: "8.6%",
    textAlign: "left",
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  text1: {
    fontSize: FontSize.size_6xs,
    left: "66.67%",
    fontFamily: FontFamily.quicksandRegular,
    textAlign: "left",
    position: "absolute",
  },
  rectangleContainer: {
    top: "73%",
    bottom: "22.88%",
    left: "71.11%",
    width: "25.83%",
    position: "absolute",
  },
  rectangleView: {
    borderTopLeftRadius: Border.br_mini,
    backgroundColor: Color.gainsboro_100,
    borderBottomLeftRadius: Border.br_9xs,
    borderBottomRightRadius: Border.br_mini,
    borderTopRightRadius: Border.br_mini,
    top: 0,
    height: 33,
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  weCanTalk: {
    color: Color.black,
    top: 10,
  },
  text2: {
    top: 23,
    color: Color.gray_600,
  },
  groupView: {
    top: 638,
    right: "49.72%",
    height: 33,
    left: "5%",
  },
  groupChild1: {
    borderTopRightRadius: Border.br_mini,
    backgroundColor: Color.blueviolet,
    borderBottomLeftRadius: Border.br_mini,
    borderBottomRightRadius: Border.br_9xs,
  },
  heyHowAre: {
    color: Color.white,
    top: "30.3%",
  },
  text3: {
    top: "69.7%",
    color: Color.white,
  },
  rectangleParent1: {
    top: "68.13%",
    bottom: "27.75%",
    left: "51.67%",
    height: "4.13%",
    right: "3.06%",
  },
  groupChild2: {
    backgroundColor: Color.white,
    height: 273,
  },
  button1Child: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.crimson_100,
    bottom: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  start: {
    top: "32.08%",
    left: "43.18%",
    fontWeight: "600",
    fontFamily: FontFamily.quicksandSemibold,
    textAlign: "center",
    fontSize: FontSize.size_sm,
    color: Color.white,
    position: "absolute",
  },
  button1: {
    width: "93.13%",
    right: "3.54%",
    bottom: 15,
    height: 38,
  },
  groupChild3: {
    borderColor: "rgba(0, 0, 0, 0.5)",
    position: "absolute",
    height: 54,
    left: "0%",
    right: "0%",
    width: "100%",
    borderBottomWidth: 1,
    bottom: 0,
  },
  giftHistory: {
    left: "40%",
  },
  groupPressable: {
    bottom: 184,
    position: "absolute",
  },
  block: {
    left: "45%",
  },
  rectangleParent3: {
    bottom: 129,
    position: "absolute",
  },
  report: {
    left: "43.61%",
  },
  rectangleParent4: {
    bottom: 74,
    position: "absolute",
  },
  linePressable: {
    width: "30.56%",
    right: "34.72%",
    bottom: 251,
    left: "34.72%",
    borderTopWidth: 2,
    height: 2,
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.5)",
  },
  groupChild6: {
    borderBottomWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.white,
    top: 0,
    width: 360,
    left: "50%",
    marginLeft: -180,
    borderColor: "#d9d9d9",
  },
  ellipseIcon: {
    top: 2,
    left: 35,
    width: 40,
    height: 40,
    position: "absolute",
  },
  alexa30: {
    top: 13,
    left: 86,
    fontWeight: "700",
    fontFamily: FontFamily.quicksandBold,
    fontSize: FontSize.size_sm,
    color: Color.black,
    textAlign: "left",
    position: "absolute",
  },
  solarvideocameraRecordBoldIcon: {
    left: 282,
  },
  charmmenuKebabIcon: {
    left: 317,
  },
  vectorIcon1: {
    height: "29.61%",
    width: "2.5%",
    top: "36.08%",
    right: "93.37%",
    bottom: "34.31%",
    left: "4.13%",
  },
  rectangleParent5: {
    top: 20,
  },
  photo2: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Photo24;
