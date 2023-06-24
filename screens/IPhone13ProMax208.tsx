import * as React from "react";
import { StyleSheet, View, TextInput, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const IPhone13ProMax208 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone13ProMax208}>
      <View style={styles.iphone13ProMax208Child} />
      <View style={styles.iphone13ProMax208Item} />
      <View style={[styles.rectangleParent, styles.groupChildLayout1]}>
        <Image
          style={[styles.groupChild, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-2221.png")}
        />
        <Image
          style={[styles.groupItem, styles.groupPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-2231.png")}
        />
        <Image
          style={[styles.groupInner, styles.groupPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-2244.png")}
        />
        <View style={[styles.rectangleGroup, styles.groupPosition]}>
          <View style={styles.rectangleView} />
          <Image
            style={styles.materialSymbolschairIcon}
            contentFit="cover"
            source={require("../assets/materialsymbolschair2.png")}
          />
        </View>
      </View>
      <View style={styles.searchScreenWrapper}>
        <View style={styles.searchScreen}>
          <Image
            style={[
              styles.icbaselineEmojiEmotionsIcon,
              styles.carbonaddFilledLayout,
            ]}
            contentFit="cover"
            source={require("../assets/icbaselineemojiemotions3.png")}
          />
          <TextInput
            style={styles.typeInHere}
            placeholder="Type in here"
            keyboardType="default"
            placeholderTextColor="#000"
          />
        </View>
      </View>
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("IPhone13ProMax209")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/group-5199.png")}
        />
      </Pressable>
      <View style={[styles.rectangleContainer, styles.rectanglePosition]}>
        <View style={[styles.groupChild1, styles.groupChildPosition]} />
        <View style={[styles.mimika521Parent, styles.parentPosition]}>
          <Text style={[styles.mimika521, styles.lia22Clr]}>MIMIKA521;</Text>
          <Text style={[styles.mimika521, styles.lia22Clr]}>
            Your smile is so so pretty
          </Text>
        </View>
      </View>
      <View style={[styles.groupView, styles.groupViewPosition]}>
        <View style={[styles.groupChild2, styles.groupChildPosition]} />
        <Text style={styles.nokosaJoinedThe}>NOKOSA JOINED THE LIVE</Text>
      </View>
      <View style={[styles.rectangleParent1, styles.rectanglePosition]}>
        <View style={[styles.groupChild1, styles.groupChildPosition]} />
        <View style={[styles.topaz111Parent, styles.parentPosition]}>
          <Text style={[styles.mimika521, styles.lia22Clr]}>TOPAZ111;</Text>
          <Text style={[styles.yourSmileIs1, styles.lia22Clr]}>
            Your smile is so so pretty
          </Text>
        </View>
      </View>
      <View style={[styles.rectangleParent2, styles.groupViewPosition]}>
        <View style={[styles.groupChild2, styles.groupChildPosition]} />
        <View style={[styles.logma121Parent, styles.parentPosition]}>
          <Text style={styles.logma121Typo}>LOGMA121;</Text>
          <Text style={[styles.yourSmileIs2, styles.logma121Typo]}>
            Your smile is so so pretty
          </Text>
        </View>
      </View>
      <View style={[styles.groupParent, styles.parentLayout]}>
        <Pressable
          style={[styles.ellipseParent, styles.parentLayout]}
          onPress={() => navigation.navigate("Photo283")}
        >
          <Image
            style={styles.ellipseIcon}
            contentFit="cover"
            source={require("../assets/ellipse-295.png")}
          />
          <Text style={[styles.lia22, styles.lia22Position]}>LIA,22</Text>
          <View style={[styles.groupChild5, styles.framePosition]} />
          <Image
            style={styles.groupIcon}
            contentFit="cover"
            source={require("../assets/group-1665.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.container, styles.lia22Position]}
          onPress={() => navigation.navigate("IPhone13ProMax200")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/group-1691.png")}
          />
        </Pressable>
        <View style={styles.carbonaddFilledParent}>
          <Pressable
            style={[styles.carbonaddFilled, styles.carbonaddFilledLayout]}
            onPress={() => navigation.navigate("IPhone13ProMax207")}
          >
            <Image
              style={[styles.icon2, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/carbonaddfilled.png")}
            />
          </Pressable>
          <Text style={styles.text}>150</Text>
          <Image
            style={[styles.groupChild6, styles.groupChildLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-762.png")}
          />
          <Image
            style={[styles.groupChild7, styles.groupChildLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-772.png")}
          />
        </View>
        <Pressable
          style={[styles.frame, styles.framePosition]}
          onPress={() => navigation.navigate("Photo285")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/group-168.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout1: {
    height: 415,
    position: "absolute",
  },
  groupLayout: {
    maxWidth: "100%",
    borderRadius: Border.br_3xs,
    overflow: "hidden",
  },
  groupPosition: {
    height: 132,
    left: "68.25%",
    width: "31.75%",
    right: "0%",
    position: "absolute",
  },
  carbonaddFilledLayout: {
    width: 24,
    height: 24,
    position: "absolute",
  },
  rectanglePosition: {
    height: 34,
    right: "17.29%",
    width: "77.34%",
    left: "5.38%",
    position: "absolute",
  },
  groupChildPosition: {
    borderRadius: Border.br_xl,
    height: 34,
    bottom: 0,
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  parentPosition: {
    flexDirection: "row",
    bottom: 9,
    position: "absolute",
  },
  lia22Clr: {
    color: Color.black,
    textAlign: "left",
  },
  groupViewPosition: {
    left: "5.61%",
    height: 34,
    position: "absolute",
  },
  logma121Typo: {
    color: Color.white,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.fontsRegularCaption12_size,
  },
  parentLayout: {
    height: 37,
    position: "absolute",
  },
  lia22Position: {
    top: 12,
    position: "absolute",
  },
  framePosition: {
    height: 30,
    top: 7,
    left: 0,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  groupChildLayout: {
    height: 26,
    width: 26,
    top: 0,
    position: "absolute",
  },
  iphone13ProMax208Child: {
    backgroundColor: Color.gray_400,
    width: 428,
    height: 143,
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
    position: "absolute",
  },
  iphone13ProMax208Item: {
    top: "0%",
    bottom: "0%",
    backgroundColor: Color.white,
    right: "0%",
    left: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  groupChild: {
    width: "67.72%",
    right: "32.28%",
    height: 415,
    position: "absolute",
    left: "0%",
    maxWidth: "100%",
    top: 0,
  },
  groupItem: {
    maxWidth: "100%",
    borderRadius: Border.br_3xs,
    overflow: "hidden",
    top: 0,
  },
  groupInner: {
    top: 142,
    maxWidth: "100%",
    borderRadius: Border.br_3xs,
    overflow: "hidden",
  },
  rectangleView: {
    borderWidth: 1,
    borderColor: "#9d1720",
    borderStyle: "solid",
    height: 132,
    backgroundColor: Color.white,
    left: "0%",
    right: "0%",
    borderRadius: Border.br_3xs,
    top: 0,
    position: "absolute",
    width: "100%",
  },
  materialSymbolschairIcon: {
    width: "20%",
    top: 54,
    right: "40%",
    left: "40%",
    height: 24,
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  rectangleGroup: {
    top: 283,
  },
  rectangleParent: {
    width: "88.32%",
    top: 150,
    right: "5.61%",
    left: "6.07%",
  },
  icbaselineEmojiEmotionsIcon: {
    left: 9,
    top: 13,
    overflow: "hidden",
  },
  typeInHere: {
    left: 61,
    fontWeight: "500",
    fontFamily: FontFamily.quicksandMedium,
    fontSize: FontSize.fontsRegularCaption12_size,
    top: 13,
    position: "absolute",
  },
  searchScreen: {
    borderRadius: Border.br_11xl,
    bottom: 0,
    height: 50,
    borderWidth: 1,
    borderColor: "#9d1720",
    borderStyle: "solid",
    backgroundColor: Color.white,
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  searchScreenWrapper: {
    width: "61.21%",
    right: "33.41%",
    bottom: 14,
    height: 50,
    left: "5.38%",
    position: "absolute",
  },
  wrapper: {
    left: 249,
    bottom: 19,
    width: 40,
    height: 40,
    position: "absolute",
  },
  groupChild1: {
    backgroundColor: Color.gainsboro_200,
  },
  mimika521: {
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.fontsRegularCaption12_size,
  },
  mimika521Parent: {
    width: "75.43%",
    right: "18.23%",
    left: "6.34%",
    flexDirection: "row",
    bottom: 9,
  },
  rectangleContainer: {
    bottom: 156,
  },
  groupChild2: {
    backgroundColor: Color.black,
  },
  nokosaJoinedThe: {
    bottom: 13,
    left: "5.85%",
    fontSize: FontSize.size_3xs,
    color: Color.crimson_200,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  groupView: {
    width: "78.27%",
    right: "16.12%",
    bottom: 194,
  },
  yourSmileIs1: {
    marginLeft: 4,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.fontsRegularCaption12_size,
  },
  topaz111Parent: {
    width: "73.63%",
    right: "20.02%",
    left: "6.34%",
    flexDirection: "row",
    bottom: 9,
  },
  rectangleParent1: {
    bottom: 118,
  },
  yourSmileIs2: {
    marginLeft: 5,
  },
  logma121Parent: {
    width: "76.15%",
    right: "17.81%",
    left: "6.04%",
    flexDirection: "row",
    bottom: 9,
  },
  rectangleParent2: {
    right: "17.05%",
    bottom: 80,
    width: "77.34%",
    left: "5.61%",
  },
  ellipseIcon: {
    top: 9,
    left: 3,
    width: 23,
    height: 25,
    position: "absolute",
  },
  lia22: {
    left: 33,
    fontSize: FontSize.size_sm,
    fontWeight: "700",
    fontFamily: FontFamily.quicksandBold,
    textAlign: "left",
    color: Color.black,
  },
  groupChild5: {
    borderColor: "#0fa958",
    borderWidth: 2,
    width: 127,
    borderStyle: "solid",
    height: 30,
    borderRadius: Border.br_3xs,
  },
  groupIcon: {
    left: 109,
    width: 14,
    height: 16,
    top: 0,
    position: "absolute",
  },
  ellipseParent: {
    left: 42,
    width: 127,
    top: 0,
  },
  container: {
    right: 120,
    width: 21,
    height: 21,
  },
  icon2: {
    overflow: "hidden",
  },
  carbonaddFilled: {
    left: 88,
    top: 4,
  },
  text: {
    right: 26,
    fontWeight: "900",
    fontFamily: FontFamily.nunitoBlack,
    top: 7,
    textAlign: "left",
    color: Color.black,
    fontSize: FontSize.fontsRegularCaption12_size,
    position: "absolute",
  },
  groupChild6: {
    right: 86,
  },
  groupChild7: {
    right: 54,
  },
  carbonaddFilledParent: {
    top: 8,
    left: 206,
    width: 112,
    height: 28,
    position: "absolute",
  },
  frame: {
    width: 30,
  },
  groupParent: {
    top: 20,
    left: 22,
    width: 318,
  },
  iphone13ProMax208: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone13ProMax208;
