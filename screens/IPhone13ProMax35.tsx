import * as React from "react";
import { StyleSheet, View, Pressable, Text, TextInput } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const IPhone13ProMax35 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone13ProMax35}>
      <View style={styles.iphone13ProMax35Child} />
      <View style={styles.iphone13ProMax35Item} />
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("Photo214")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/group-51761.png")}
        />
      </Pressable>
      <View style={styles.ellipseParent}>
        <Image
          style={styles.groupChild}
          contentFit="cover"
          source={require("../assets/ellipse-291.png")}
        />
        <Text style={[styles.teeman32, styles.textFlexBox]}>Teeman,32</Text>
        <View style={styles.groupItem} />
      </View>
      <View style={styles.searchScreenWrapper}>
        <View style={styles.searchScreen}>
          <Image
            style={[
              styles.icbaselineEmojiEmotionsIcon,
              styles.icbaselineEmojiEmotionsIconLayout,
            ]}
            contentFit="cover"
            source={require("../assets/icbaselineemojiemotions1.png")}
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
        <View style={[styles.groupInner, styles.groupInnerPosition]} />
        <View style={[styles.mimika521Parent, styles.parentPosition]}>
          <Text style={[styles.mimika521, styles.mimika521Typo]}>
            MIMIKA521;
          </Text>
          <Text style={[styles.mimika521, styles.mimika521Typo]}>
            Your smile is so so pretty
          </Text>
        </View>
      </View>
      <View style={[styles.rectangleGroup, styles.groupPosition]}>
        <View style={[styles.rectangleView, styles.groupInnerPosition]} />
        <Text style={[styles.nokosaJoinedThe, styles.mimika521Typo]}>
          NOKOSA JOINED THE LIVE
        </Text>
      </View>
      <View style={[styles.rectangleContainer, styles.rectanglePosition]}>
        <View style={[styles.groupInner, styles.groupInnerPosition]} />
        <View style={[styles.topaz111Parent, styles.parentPosition]}>
          <Text style={[styles.mimika521, styles.mimika521Typo]}>
            TOPAZ111;
          </Text>
          <Text style={[styles.yourSmileIs1, styles.mimika521Typo]}>
            Your smile is so so pretty
          </Text>
        </View>
      </View>
      <View style={[styles.groupView, styles.groupPosition]}>
        <View style={[styles.rectangleView, styles.groupInnerPosition]} />
        <View style={[styles.logma121Parent, styles.parentPosition]}>
          <Text style={styles.logma121Typo}>LOGMA121;</Text>
          <Text style={[styles.yourSmileIs2, styles.logma121Typo]}>
            Your smile is so so pretty
          </Text>
        </View>
      </View>
      <Pressable
        style={styles.container}
        onPress={() => navigation.navigate("IPhone13ProMax37")}
      >
        <Image
          style={styles.icon1}
          contentFit="cover"
          source={require("../assets/group-5199.png")}
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
          onPress={() => navigation.navigate("LiveAudiolive")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/materialsymbolscancelrounded.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textFlexBox: {
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  icbaselineEmojiEmotionsIconLayout: {
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
  groupInnerPosition: {
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
  mimika521Typo: {
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
  },
  groupPosition: {
    left: "5.61%",
    height: 34,
    position: "absolute",
  },
  logma121Typo: {
    color: Color.white,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.fontsRegularCaption12_size,
    textAlign: "left",
  },
  groupChildLayout: {
    width: "14.44%",
    height: 26,
    maxWidth: "100%",
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  iphone13ProMax35Child: {
    backgroundColor: Color.gray_400,
    width: 428,
    height: 143,
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
    position: "absolute",
  },
  iphone13ProMax35Item: {
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
    borderColor: "#0fa958",
    borderWidth: 2,
    borderStyle: "solid",
    height: 30,
    width: 127,
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
    position: "absolute",
  },
  ellipseParent: {
    top: 27,
    left: 22,
    height: 30,
    width: 127,
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
    bottom: 0,
    height: 50,
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
  groupInner: {
    backgroundColor: Color.gainsboro_200,
  },
  mimika521: {
    fontSize: FontSize.fontsRegularCaption12_size,
    color: Color.black,
    fontFamily: FontFamily.interRegular,
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
  rectangleView: {
    backgroundColor: Color.black,
  },
  nokosaJoinedThe: {
    bottom: 13,
    left: "5.85%",
    fontSize: FontSize.size_3xs,
    color: Color.crimson_200,
    position: "absolute",
  },
  rectangleGroup: {
    width: "78.27%",
    right: "16.12%",
    bottom: 194,
  },
  yourSmileIs1: {
    marginLeft: 4,
    fontSize: FontSize.fontsRegularCaption12_size,
    color: Color.black,
    fontFamily: FontFamily.interRegular,
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
  text: {
    top: 7,
    left: "71.03%",
    fontWeight: "900",
    fontFamily: FontFamily.nunitoBlack,
    fontSize: FontSize.fontsRegularCaption12_size,
  },
  ellipseIcon: {
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
    left: "86.67%",
    top: 1,
    width: "13.33%",
    right: "0%",
    height: 24,
  },
  parent: {
    width: "50%",
    top: 29,
    right: "5%",
    left: "45%",
    height: 26,
    position: "absolute",
  },
  iphone13ProMax35: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone13ProMax35;
