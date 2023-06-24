import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const Photo22 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.photo2}>
      <Image
        style={[styles.mingcutesendFillIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/mingcutesendfill.png")}
      />
      <Image
        style={[styles.photo2Child, styles.photo2Layout]}
        contentFit="cover"
        source={require("../assets/group-222.png")}
      />
      <Image
        style={[styles.photo2Item, styles.photo2IconLayout]}
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
          style={[styles.makigiftIcon, styles.photo2IconLayout]}
          contentFit="cover"
          source={require("../assets/makigift1.png")}
        />
        <Text style={[styles.typeSomethingSweet, styles.alexa30FlexBox]}>
          Type something sweet....
        </Text>
      </View>
      <Image
        style={[styles.photo2Inner, styles.photo2IconLayout]}
        contentFit="cover"
        source={require("../assets/group-227.png")}
      />
      <View style={[styles.rectangleGroup, styles.groupPosition2]}>
        <View style={styles.groupItem} />
        <Text style={[styles.ringMe, styles.ringMeTypo]}>Ring me</Text>
        <Text style={[styles.text, styles.textTypo1]}>20:21</Text>
      </View>
      <View style={styles.rectangleContainer}>
        <View style={[styles.groupInner, styles.groupChildPosition]} />
        <Text style={[styles.youGood, styles.youGoodTypo]}>You good?</Text>
        <Text style={[styles.text1, styles.textTypo]}>20:21</Text>
      </View>
      <View style={[styles.groupView, styles.groupPosition2]}>
        <View style={styles.rectangleView} />
        <Text style={[styles.weCanTalk, styles.ringMeTypo]}>
          We can talk here
        </Text>
        <Text style={[styles.text2, styles.textTypo1]}>20:21</Text>
      </View>
      <View style={[styles.rectangleParent1, styles.groupChild1Layout]}>
        <View style={[styles.groupChild1, styles.groupChild1Layout]} />
        <Text style={[styles.heyHowAre, styles.youGoodTypo]}>
          Hey, how are you doing?
        </Text>
        <Text style={[styles.text3, styles.textTypo]}>20:21</Text>
      </View>
      <View style={[styles.photo2Inner1, styles.groupChild2Position]}>
        <View style={[styles.photo2Inner1, styles.groupChild2Position]}>
          <View style={[styles.groupChild2, styles.button1Position]} />
          <Image
            style={[styles.blocked1Icon, styles.button1Position]}
            contentFit="cover"
            source={require("../assets/blocked-1.png")}
          />
          <Pressable
            style={[styles.button1, styles.button1Position]}
            onPress={() =>
              navigation.navigate("BottomTabsRoot", { screen: "Photo26" })
            }
          >
            <View style={[styles.button1Child, styles.groupChildPosition]} />
            <Text style={[styles.start, styles.startFlexBox]}>OK</Text>
          </Pressable>
          <Text style={[styles.youveBlockedThis, styles.startFlexBox]}>
            You’ve blocked this user
          </Text>
        </View>
      </View>
      <View style={[styles.rectangleParent3, styles.groupChild3Position]}>
        <View style={[styles.groupChild3, styles.groupChild3Position]} />
        <Image
          style={styles.ellipseIcon}
          contentFit="cover"
          source={require("../assets/ellipse-42.png")}
        />
        <Text style={[styles.alexa30, styles.alexa30FlexBox]}>Alexa, 30</Text>
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
  photo2Layout: {
    height: 26,
    position: "absolute",
  },
  photo2IconLayout: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  alexa30FlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  groupPosition2: {
    height: 33,
    left: "5%",
    position: "absolute",
  },
  ringMeTypo: {
    fontFamily: FontFamily.quicksandRegular,
    color: Color.black,
    top: 10,
    textAlign: "left",
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  textTypo1: {
    fontSize: FontSize.size_6xs,
    top: 23,
    fontFamily: FontFamily.quicksandRegular,
    textAlign: "left",
    color: Color.gray_600,
    position: "absolute",
  },
  groupChildPosition: {
    backgroundColor: Color.crimson_100,
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  youGoodTypo: {
    top: "30.3%",
    color: Color.white,
    fontFamily: FontFamily.quicksandRegular,
    textAlign: "left",
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  textTypo: {
    top: "69.7%",
    color: Color.white,
    fontSize: FontSize.size_6xs,
    fontFamily: FontFamily.quicksandRegular,
    textAlign: "left",
    position: "absolute",
  },
  groupChild1Layout: {
    width: 163,
    position: "absolute",
  },
  groupChild2Position: {
    height: 222,
    left: "0%",
    bottom: 0,
    right: "0%",
    width: "100%",
  },
  button1Position: {
    borderTopRightRadius: Border.br_xl,
    borderTopLeftRadius: Border.br_xl,
    position: "absolute",
  },
  startFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  groupChild3Position: {
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
  },
  groupChild: {
    borderRadius: Border.br_xl,
    borderWidth: 1,
    borderColor: "#d9d9d9",
    borderStyle: "solid",
    bottom: 0,
    backgroundColor: Color.white,
    left: "0%",
    right: "0%",
    height: 41,
    position: "absolute",
    width: "100%",
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
    color: Color.gray_600,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
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
    left: "3.33%",
    position: "absolute",
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
    color: Color.black,
    left: "8.6%",
  },
  text: {
    left: "66.67%",
  },
  rectangleGroup: {
    top: 677,
    right: "69.17%",
    width: "25.83%",
  },
  groupInner: {
    borderTopRightRadius: Border.br_9xs,
    borderBottomLeftRadius: Border.br_mini,
    borderBottomRightRadius: Border.br_9xs,
    backgroundColor: Color.crimson_100,
    borderTopLeftRadius: Border.br_mini,
    bottom: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  youGood: {
    color: Color.white,
    left: "8.6%",
  },
  text1: {
    left: "66.67%",
  },
  rectangleContainer: {
    top: "73%",
    bottom: "22.88%",
    left: "71.11%",
    height: "4.13%",
    width: "25.83%",
    right: "3.06%",
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
    left: "4.91%",
    color: Color.black,
  },
  text2: {
    left: "80.37%",
  },
  groupView: {
    width: "45.28%",
    top: 638,
    right: "49.72%",
  },
  groupChild1: {
    right: 0,
    backgroundColor: Color.crimson_100,
    bottom: "0%",
    top: "0%",
    height: "100%",
    borderBottomLeftRadius: Border.br_mini,
    borderBottomRightRadius: Border.br_9xs,
    borderTopLeftRadius: Border.br_mini,
    borderTopRightRadius: Border.br_mini,
    width: 163,
  },
  heyHowAre: {
    right: 40,
    color: Color.white,
  },
  text3: {
    right: 16,
  },
  rectangleParent1: {
    top: "68.13%",
    right: 11,
    bottom: "27.75%",
    height: "4.13%",
  },
  groupChild2: {
    height: 222,
    left: "0%",
    bottom: 0,
    right: "0%",
    width: "100%",
    backgroundColor: Color.white,
    borderTopLeftRadius: Border.br_xl,
  },
  blocked1Icon: {
    width: "22.22%",
    right: "39.17%",
    bottom: 99,
    left: "38.61%",
    height: 80,
    maxWidth: "100%",
    overflow: "hidden",
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
    left: "46.76%",
    fontWeight: "600",
    fontFamily: FontFamily.quicksandSemibold,
    fontSize: FontSize.size_sm,
    color: Color.white,
  },
  button1: {
    width: "93.13%",
    right: "3.54%",
    bottom: 15,
    height: 38,
    left: "3.33%",
  },
  youveBlockedThis: {
    bottom: 69,
    left: "31.39%",
    fontSize: FontSize.fontsRegularCaption12_size,
    fontWeight: "500",
    fontFamily: FontFamily.quicksandMedium,
    color: Color.black,
  },
  photo2Inner1: {
    position: "absolute",
  },
  groupChild3: {
    borderBottomWidth: 1,
    top: 0,
    width: 360,
    left: "50%",
    marginLeft: -180,
    borderColor: "#d9d9d9",
    borderStyle: "solid",
    backgroundColor: Color.lightgray,
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
  rectangleParent3: {
    top: 20,
  },
  photo2: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.lightgray,
  },
});

export default Photo22;
