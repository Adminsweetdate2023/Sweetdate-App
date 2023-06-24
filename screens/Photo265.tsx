import * as React from "react";
import { StyleSheet, View, Text, Pressable, ScrollView } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Photo265 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.photo2}>
      <View style={[styles.photo2Child, styles.groupItemPosition]} />
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupShadowBox]} />
        <Pressable
          style={[styles.parent, styles.groupPosition]}
          onPress={() => navigation.navigate("Photo261")}
        >
          <Text style={[styles.text, styles.textTypo]}>161</Text>
          <Text style={[styles.following, styles.textTypo]}>Following</Text>
        </Pressable>
        <Pressable
          style={[styles.group, styles.groupPosition]}
          onPress={() => navigation.navigate("Photo262")}
        >
          <Text style={[styles.text, styles.textTypo]}>635</Text>
          <Text style={[styles.followers, styles.textTypo]}>Followers</Text>
        </Pressable>
        <Pressable
          style={[styles.container, styles.groupPosition]}
          onPress={() => navigation.navigate("Photo263")}
        >
          <Text style={[styles.text, styles.textTypo]}>900</Text>
          <Text style={[styles.gifts, styles.textTypo]}>Gifts</Text>
        </Pressable>
      </View>
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Text style={[styles.alexa1234, styles.columbiaTypo]}>alexa1234</Text>
      </View>
      <Image
        style={[styles.photo2Item, styles.alexa30Position]}
        contentFit="cover"
        source={require("../assets/group-612.png")}
      />
      <Text style={[styles.alexa30, styles.alexa30Position]}>Alexa, 30</Text>
      <Text style={[styles.columbia, styles.alexa30Position]}>Columbia</Text>
      <Text style={[styles.stories, styles.alexa30Position]}>STORIES</Text>
      <Pressable
        style={[styles.wrapper, styles.wrapperLayout]}
        onPress={() => navigation.navigate("Moment102")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-1.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.frame, styles.framePosition]}
        onPress={() => navigation.navigate("Moment102")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-21.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.ellipsePressable, styles.framePosition]}
        onPress={() => navigation.navigate("Moment102")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-3.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.wrapper1, styles.wrapperLayout]}
        onPress={() => navigation.navigate("Moment102")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-4.png")}
        />
      </Pressable>
      <ScrollView
        style={styles.rectangleContainer}
        horizontal
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.frameScrollViewContent}
      >
        <Image
          style={[styles.frameChild, styles.frameChildLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-691.png")}
        />
        <Pressable
          style={[styles.rectanglePressable, styles.frameChildLayout]}
          onPress={() => navigation.navigate("Moment103")}
        >
          <Image
            style={[styles.icon4, styles.icon4Position]}
            contentFit="cover"
            source={require("../assets/rectangle-701.png")}
          />
        </Pressable>
      </ScrollView>
      <Text style={[styles.imASingle, styles.alexa30Typo]}>
        i’m a single girl. I love to play for long times, making you have a very
        nice and delightful time.
      </Text>
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("Live12")}
      >
        <Image
          style={[styles.icon5, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector5.png")}
        />
      </Pressable>
      <Pressable
        style={styles.charmmenuKebab}
        onPress={() => navigation.navigate("Photo264")}
      >
        <Image
          style={[styles.icon6, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/charmmenukebab1.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.following1, styles.alexa1234Position]}
        onPress={() => navigation.navigate("Photo266")}
      >
        <Text style={[styles.following2, styles.columbiaTypo]}>Following</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  frameScrollViewContent: {
    flexDirection: "row",
  },
  groupItemPosition: {
    borderBottomLeftRadius: Border.br_xl,
    borderBottomRightRadius: Border.br_xl,
  },
  groupChildLayout: {
    height: 50,
    position: "absolute",
    width: "100%",
  },
  groupShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.crimson_100,
    left: "0%",
    right: "0%",
  },
  groupPosition: {
    height: 14,
    top: 18,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    color: Color.white,
    fontSize: FontSize.fontsRegularCaption12_size,
    top: 0,
    position: "absolute",
  },
  groupLayout: {
    height: 45,
    top: 0,
    position: "absolute",
    width: "100%",
  },
  columbiaTypo: {
    color: Color.gray_500,
    fontFamily: FontFamily.quicksandBold,
    fontSize: FontSize.size_sm,
    fontWeight: "700",
  },
  alexa30Position: {
    left: "50%",
    position: "absolute",
  },
  wrapperLayout: {
    height: 70,
    width: "19.44%",
    top: 451,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  framePosition: {
    top: 450,
    height: 70,
    width: "19.44%",
    position: "absolute",
  },
  frameChildLayout: {
    height: 142,
    width: 185,
  },
  icon4Position: {
    borderTopRightRadius: Border.br_3xs,
    borderTopLeftRadius: Border.br_3xs,
  },
  alexa30Typo: {
    fontFamily: FontFamily.quicksandBold,
    textAlign: "center",
    fontWeight: "700",
  },
  alexa1234Position: {
    top: 13,
    position: "absolute",
  },
  photo2Child: {
    backgroundColor: Color.brown,
    height: 397,
    left: "0%",
    right: "0%",
    top: 0,
    position: "absolute",
    width: "100%",
  },
  groupChild: {
    borderRadius: Border.br_xl,
    height: 50,
    position: "absolute",
    width: "100%",
    top: 0,
  },
  text: {
    textAlign: "center",
    color: Color.white,
    left: "0%",
  },
  following: {
    left: "28.77%",
    textAlign: "left",
    color: Color.white,
  },
  parent: {
    width: "20.28%",
    right: "68.06%",
    left: "11.67%",
  },
  followers: {
    left: "28.38%",
    textAlign: "left",
    color: Color.white,
  },
  group: {
    width: "20.56%",
    right: "11.39%",
    left: "68.06%",
  },
  gifts: {
    left: "44.68%",
    textAlign: "left",
    color: Color.white,
  },
  container: {
    width: "13.06%",
    right: "43.33%",
    left: "43.61%",
  },
  rectangleParent: {
    top: 348,
    left: "0%",
    right: "0%",
  },
  groupItem: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.crimson_100,
    left: "0%",
    right: "0%",
    borderBottomLeftRadius: Border.br_xl,
    borderBottomRightRadius: Border.br_xl,
  },
  alexa1234: {
    left: 50,
    top: 13,
    position: "absolute",
    textAlign: "left",
  },
  rectangleGroup: {
    right: "-0.28%",
    left: "0.28%",
  },
  photo2Item: {
    marginLeft: -62,
    top: 64,
    width: 125,
    height: 125,
  },
  alexa30: {
    marginLeft: -39,
    top: 199,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.quicksandBold,
    textAlign: "center",
    fontWeight: "700",
    color: Color.white,
  },
  columbia: {
    marginLeft: -32,
    top: 222,
    color: Color.gray_500,
    fontFamily: FontFamily.quicksandBold,
    fontSize: FontSize.size_sm,
    fontWeight: "700",
    textAlign: "center",
  },
  stories: {
    marginLeft: -29,
    top: 422,
    color: Color.black,
    fontFamily: FontFamily.quicksandBold,
    textAlign: "center",
    fontWeight: "700",
    fontSize: FontSize.size_sm,
    left: "50%",
  },
  icon: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  wrapper: {
    left: "7.22%",
    right: "73.33%",
  },
  frame: {
    left: "29.17%",
    right: "51.39%",
  },
  ellipsePressable: {
    left: "51.11%",
    right: "29.44%",
  },
  wrapper1: {
    left: "73.06%",
    right: "7.5%",
  },
  frameChild: {
    borderTopRightRadius: Border.br_3xs,
    borderTopLeftRadius: Border.br_3xs,
  },
  icon4: {
    height: "100%",
    width: "100%",
  },
  rectanglePressable: {
    marginLeft: 9,
  },
  rectangleContainer: {
    top: 554,
    left: 26,
    position: "absolute",
    width: "100%",
  },
  imASingle: {
    width: "71.94%",
    top: 250,
    left: "14.17%",
    color: Color.white,
    fontSize: FontSize.fontsRegularCaption12_size,
    fontFamily: FontFamily.quicksandBold,
    position: "absolute",
  },
  icon5: {
    maxHeight: "100%",
  },
  vector: {
    left: 25,
    top: "2.11%",
    bottom: "96.26%",
    width: 9,
    height: "1.63%",
    position: "absolute",
  },
  icon6: {
    overflow: "hidden",
  },
  charmmenuKebab: {
    top: 11,
    right: 14,
    width: 24,
    height: 24,
    position: "absolute",
  },
  following2: {
    textAlign: "center",
  },
  following1: {
    right: 43,
  },
  photo2: {
    backgroundColor: Color.white,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default Photo265;
