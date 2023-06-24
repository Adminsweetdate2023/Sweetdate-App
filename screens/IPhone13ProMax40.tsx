import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Pressable,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const IPhone13ProMax40 = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.iphone13ProMax40}
      resizeMode="cover"
      source={require("../assets/rectangle-193.png")}
    >
      <View style={styles.searchScreenWrapper}>
        <View style={styles.searchScreen}>
          <Image
            style={[
              styles.icbaselineEmojiEmotionsIcon,
              styles.icbaselineEmojiEmotionsIconLayout,
            ]}
            contentFit="cover"
            source={require("../assets/icbaselineemojiemotions2.png")}
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
      <View style={styles.ellipseParent}>
        <Image
          style={styles.ellipseIcon}
          contentFit="cover"
          source={require("../assets/ellipse-291.png")}
        />
        <Text style={[styles.teeman32, styles.textClr]}>Teeman,32</Text>
        <View style={styles.groupChild1} />
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
      <View style={styles.parent}>
        <Text style={[styles.text, styles.textClr]}>150</Text>
        <Image
          style={[styles.groupChild2, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-74.png")}
        />
        <Image
          style={[styles.groupChild3, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-75.png")}
        />
        <Image
          style={[styles.groupChild4, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-76.png")}
        />
        <Image
          style={[styles.groupChild5, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-77.png")}
        />
        <Pressable
          style={[
            styles.materialSymbolscancelRounde,
            styles.icbaselineEmojiEmotionsIconLayout,
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
  icbaselineEmojiEmotionsIconLayout: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  rectanglePosition: {
    height: 34,
    right: "17.29%",
    width: "77.34%",
    left: "5.37%",
    position: "absolute",
  },
  groupPosition1: {
    borderRadius: Border.br_xl,
    height: 34,
    left: "0%",
    bottom: 0,
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
  iconLayout: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  groupChildLayout: {
    width: "14.44%",
    height: 26,
    maxWidth: "100%",
    top: 0,
    position: "absolute",
    overflow: "hidden",
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
    backgroundColor: Color.white,
    borderColor: "#9d1720",
    borderWidth: 1,
    borderStyle: "solid",
    bottom: 0,
    right: "0%",
    left: "0%",
    height: 50,
    position: "absolute",
    width: "100%",
  },
  searchScreenWrapper: {
    width: "61.21%",
    right: "33.41%",
    bottom: 14,
    height: 50,
    left: "5.37%",
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
    right: "17.06%",
    bottom: 80,
    width: "77.34%",
    left: "5.61%",
  },
  ellipseIcon: {
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
    textAlign: "left",
    position: "absolute",
  },
  groupChild1: {
    left: 0,
    borderRadius: Border.br_3xs,
    borderColor: "#0fa958",
    borderWidth: 2,
    top: 0,
    height: 30,
    width: 127,
    borderStyle: "solid",
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
    left: "69.17%",
    right: "19.72%",
    bottom: 19,
    width: "11.11%",
    height: 40,
    position: "absolute",
  },
  text: {
    top: 7,
    left: "71.03%",
    fontWeight: "900",
    fontFamily: FontFamily.nunitoBlack,
    textAlign: "left",
    fontSize: FontSize.fontsRegularCaption12_size,
    position: "absolute",
  },
  groupChild2: {
    right: "85.56%",
    left: "0%",
    width: "14.44%",
  },
  groupChild3: {
    right: "67.96%",
    left: "17.59%",
  },
  groupChild4: {
    right: "50.19%",
    left: "35.37%",
  },
  groupChild5: {
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
  iphone13ProMax40: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone13ProMax40;
