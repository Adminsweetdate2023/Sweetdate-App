import * as React from "react";
import { StyleSheet, View, Pressable, TextInput, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const IPhone13ProMax237 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone13ProMax237}>
      <View style={styles.iphone13ProMax237Child} />
      <View style={styles.iphone13ProMax237Item} />
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("IPhone13ProMax235")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/group-51763.png")}
        />
      </Pressable>
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
      <View style={[styles.rectangleParent, styles.rectanglePosition]}>
        <View style={[styles.groupChild, styles.groupPosition1]} />
        <View style={[styles.mimika521Parent, styles.parentPosition]}>
          <Text style={[styles.mimika521, styles.textClr]}>MIMIKA521;</Text>
          <Text style={[styles.mimika521, styles.textClr]}>
            Your smile is so so pretty
          </Text>
        </View>
      </View>
      <View style={[styles.rectangleGroup, styles.groupPosition]}>
        <View style={[styles.groupItem, styles.groupPosition1]} />
        <Text style={styles.nokosaJoinedThe}>NOKOSA JOINED THE LIVE</Text>
      </View>
      <View style={[styles.rectangleContainer, styles.rectanglePosition]}>
        <View style={[styles.groupChild, styles.groupPosition1]} />
        <View style={[styles.topaz111Parent, styles.parentPosition]}>
          <Text style={[styles.mimika521, styles.textClr]}>TOPAZ111;</Text>
          <Text style={[styles.yourSmileIs1, styles.textClr]}>
            Your smile is so so pretty
          </Text>
        </View>
      </View>
      <View style={[styles.groupView, styles.groupPosition]}>
        <View style={[styles.groupItem, styles.groupPosition1]} />
        <View style={[styles.logma121Parent, styles.parentPosition]}>
          <Text style={styles.logma121Typo}>LOGMA121;</Text>
          <Text style={[styles.yourSmileIs2, styles.logma121Typo]}>
            Your smile is so so pretty
          </Text>
        </View>
      </View>
      <Pressable
        style={styles.container}
        onPress={() => navigation.navigate("IPhone13ProMax238")}
      >
        <Image
          style={styles.icon1}
          contentFit="cover"
          source={require("../assets/group-5199.png")}
        />
      </Pressable>
      <View style={styles.groupParent}>
        <Pressable
          style={[styles.frame, styles.frameLayout]}
          onPress={() => navigation.navigate("Photo286")}
        >
          <Image
            style={styles.icon1}
            contentFit="cover"
            source={require("../assets/group-168.png")}
          />
        </Pressable>
        <Pressable
          style={styles.ellipseParent}
          onPress={() => navigation.navigate("Photo244")}
        >
          <Image
            style={styles.ellipseIcon}
            contentFit="cover"
            source={require("../assets/ellipse-293.png")}
          />
          <Text style={[styles.mia19, styles.textClr]}>MIA,19</Text>
          <View style={[styles.groupChild1, styles.textPosition]} />
          <Image
            style={styles.groupIcon}
            contentFit="cover"
            source={require("../assets/group-1663.png")}
          />
        </Pressable>
        <View style={[styles.groupContainer, styles.groupContainerPosition]}>
          <Pressable
            style={styles.groupPressable}
            onPress={() => navigation.navigate("IPhone13ProMax236")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/group-1691.png")}
            />
          </Pressable>
          <View
            style={[
              styles.carbonaddFilledParent,
              styles.groupContainerPosition,
            ]}
          >
            <Pressable
              style={[styles.carbonaddFilled, styles.carbonaddFilledLayout]}
              onPress={() => navigation.navigate("IPhone13ProMax235")}
            >
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../assets/carbonaddfilled.png")}
              />
            </Pressable>
            <Text style={[styles.text, styles.textPosition]}>150</Text>
            <Image
              style={[styles.groupChild2, styles.groupChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-762.png")}
            />
            <Image
              style={[styles.groupChild3, styles.groupChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-772.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  carbonaddFilledLayout: {
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
  groupPosition1: {
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
  textClr: {
    color: Color.black,
    textAlign: "left",
  },
  groupPosition: {
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
  frameLayout: {
    height: 30,
    left: 0,
  },
  textPosition: {
    top: 7,
    position: "absolute",
  },
  groupContainerPosition: {
    height: 28,
    right: "0%",
    position: "absolute",
  },
  groupChildLayout: {
    height: 26,
    width: "23.21%",
    maxWidth: "100%",
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  iphone13ProMax237Child: {
    backgroundColor: Color.gray_400,
    width: 428,
    height: 143,
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
    position: "absolute",
  },
  iphone13ProMax237Item: {
    top: "0%",
    bottom: "0%",
    backgroundColor: Color.white,
    left: "0%",
    right: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  icon: {
    maxWidth: "100%",
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  wrapper: {
    left: "6.11%",
    top: 150,
    right: "6.37%",
    width: "87.52%",
    height: 129,
    position: "absolute",
  },
  icbaselineEmojiEmotionsIcon: {
    left: 9,
    width: 24,
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
    borderColor: "#9d1720",
    borderWidth: 1,
    borderStyle: "solid",
    bottom: 0,
    height: 50,
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
  groupChild: {
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
  rectangleParent: {
    bottom: 156,
  },
  groupItem: {
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
  rectangleGroup: {
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
  rectangleContainer: {
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
  groupView: {
    right: "17.05%",
    bottom: 80,
    width: "77.34%",
    left: "5.61%",
  },
  icon1: {
    height: "100%",
    width: "100%",
  },
  container: {
    left: 249,
    bottom: 19,
    width: 40,
    height: 40,
    position: "absolute",
  },
  frame: {
    width: 30,
    top: 8,
    position: "absolute",
  },
  ellipseIcon: {
    top: 9,
    left: 3,
    width: 23,
    height: 25,
    position: "absolute",
  },
  mia19: {
    top: 12,
    left: 33,
    fontSize: FontSize.size_sm,
    fontWeight: "700",
    fontFamily: FontFamily.quicksandBold,
    textAlign: "left",
    position: "absolute",
  },
  groupChild1: {
    borderColor: "#0fa958",
    borderWidth: 2,
    width: 127,
    height: 30,
    left: 0,
    borderStyle: "solid",
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
    height: 37,
    width: 127,
    top: 0,
    position: "absolute",
  },
  groupPressable: {
    top: 5,
    right: "85.11%",
    width: "14.89%",
    height: 21,
    left: "0%",
    position: "absolute",
  },
  carbonaddFilled: {
    left: "78.57%",
    top: 4,
    width: "21.43%",
    right: "0%",
    height: 24,
  },
  text: {
    left: "56.98%",
    fontWeight: "900",
    fontFamily: FontFamily.nunitoBlack,
    textAlign: "left",
    color: Color.black,
    fontSize: FontSize.fontsRegularCaption12_size,
  },
  groupChild2: {
    right: "76.79%",
    left: "0%",
  },
  groupChild3: {
    right: "48.21%",
    left: "28.57%",
  },
  carbonaddFilledParent: {
    width: "79.43%",
    left: "20.57%",
    top: 0,
  },
  groupContainer: {
    width: "44.34%",
    left: "55.66%",
    top: 8,
  },
  groupParent: {
    top: 20,
    left: 22,
    width: 318,
    height: 38,
    position: "absolute",
  },
  iphone13ProMax237: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone13ProMax237;
