import * as React from "react";
import { StyleSheet, View, Text, Pressable, ScrollView } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Photo266 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.photo2}>
      <View style={[styles.rectangleParent, styles.groupChildPosition2]}>
        <View style={[styles.groupChild, styles.groupPosition2]} />
        <View style={[styles.rectangleGroup, styles.groupPosition1]}>
          <View style={[styles.groupItem, styles.groupItemShadowBox]} />
          <Text style={[styles.alexa1234, styles.columbiaTypo]}>alexa1234</Text>
        </View>
        <Image
          style={styles.groupInner}
          contentFit="cover"
          source={require("../assets/group-613.png")}
        />
        <Text style={[styles.alexa30, styles.followTypo]}>Alexa, 30</Text>
        <Text style={[styles.columbia, styles.columbiaTypo]}>Columbia</Text>
        <Text style={styles.stories}>STORIES</Text>
        <Pressable
          style={[styles.wrapper, styles.wrapperLayout]}
          onPress={() => navigation.navigate("Moment101")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-1.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.container, styles.framePosition]}
          onPress={() => navigation.navigate("Moment101")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-21.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.frame, styles.framePosition]}
          onPress={() => navigation.navigate("Moment101")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-3.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.ellipsePressable, styles.wrapperLayout]}
          onPress={() => navigation.navigate("Moment101")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-4.png")}
          />
        </Pressable>
        <View style={[styles.rectangleContainer, styles.rectanglePosition]}>
          <View style={[styles.rectangleView, styles.groupChild1Layout1]} />
          <Pressable
            style={[styles.parent, styles.groupPosition]}
            onPress={() => navigation.navigate("Photo256")}
          >
            <Text style={[styles.text, styles.textTypo]}>161</Text>
            <Text style={[styles.following, styles.textTypo]}>Following</Text>
          </Pressable>
          <Pressable
            style={[styles.group, styles.groupPosition]}
            onPress={() => navigation.navigate("Photo257")}
          >
            <Text style={[styles.text, styles.textTypo]}>635</Text>
            <Text style={[styles.followers, styles.textTypo]}>Followers</Text>
          </Pressable>
          <Pressable
            style={[styles.groupPressable, styles.groupPosition]}
            onPress={() => navigation.navigate("Photo258")}
          >
            <Text style={[styles.text, styles.textTypo]}>900</Text>
            <Text style={[styles.gifts, styles.textTypo]}>Gifts</Text>
          </Pressable>
        </View>
        <ScrollView
          style={styles.frameScrollview}
          horizontal
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.frameScrollViewContent}
        >
          <Pressable
            style={styles.wrapper1Layout}
            onPress={() => navigation.navigate("Moment103")}
          >
            <Image
              style={[styles.icon4, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-691.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.wrapper1, styles.wrapper1Layout]}
            onPress={() => navigation.navigate("Moment103")}
          >
            <Image
              style={[styles.icon4, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-701.png")}
            />
          </Pressable>
        </ScrollView>
        <Text style={styles.imASingle}>
          i’m a single girl. I love to play for long times, making you have a
          very nice and delightful time.
        </Text>
        <Pressable
          style={styles.vector}
          onPress={() => navigation.navigate("Live12")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/vector5.png")}
          />
        </Pressable>
        <Pressable
          style={styles.charmmenuKebab}
          onPress={() => navigation.navigate("Photo260")}
        >
          <Image
            style={[styles.icon7, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/charmmenukebab1.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.rectangleParent1, styles.groupChild1Layout]}
          onPress={() => navigation.navigate("Photo265")}
        >
          <View style={[styles.groupChild1, styles.groupChild1Layout]} />
          <Text style={[styles.follow, styles.followTypo]}>Follow</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameScrollViewContent: {
    flexDirection: "row",
  },
  groupChildPosition2: {
    top: 0,
    position: "absolute",
  },
  groupPosition2: {
    borderBottomLeftRadius: Border.br_xl,
    borderBottomRightRadius: Border.br_xl,
    left: "0%",
  },
  groupPosition1: {
    height: 45,
    top: 0,
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
    width: "100%",
  },
  columbiaTypo: {
    color: Color.gray_500,
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  followTypo: {
    color: Color.white,
    textAlign: "center",
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    position: "absolute",
  },
  wrapperLayout: {
    height: 70,
    width: "19.39%",
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
    width: "19.39%",
    position: "absolute",
  },
  rectanglePosition: {
    height: 50,
    left: "0%",
    position: "absolute",
  },
  groupChild1Layout1: {
    borderRadius: Border.br_xl,
    top: 0,
  },
  groupPosition: {
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
  wrapper1Layout: {
    height: 142,
    width: 185,
  },
  groupChild1Layout: {
    height: 33,
    width: 72,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.brown,
    height: 397,
    right: "0.28%",
    width: "99.72%",
    top: 0,
    position: "absolute",
  },
  groupItem: {
    height: 45,
    top: 0,
    position: "absolute",
    borderBottomLeftRadius: Border.br_xl,
    borderBottomRightRadius: Border.br_xl,
    left: "0%",
  },
  alexa1234: {
    top: 13,
    left: 50,
    textAlign: "left",
  },
  rectangleGroup: {
    left: "0.28%",
    right: "0%",
    height: 45,
    width: "99.72%",
  },
  groupInner: {
    marginLeft: -62.5,
    top: 64,
    width: 125,
    height: 125,
    left: "50%",
    position: "absolute",
  },
  alexa30: {
    marginLeft: -39.5,
    top: 199,
    fontSize: FontSize.size_lg,
    textAlign: "center",
    left: "50%",
  },
  columbia: {
    marginLeft: -32.5,
    top: 222,
    textAlign: "center",
    left: "50%",
  },
  stories: {
    top: 422,
    left: "41.83%",
    color: Color.black,
    textAlign: "center",
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  icon: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  wrapper: {
    left: "7.2%",
    right: "73.41%",
  },
  container: {
    left: "29.09%",
    right: "51.52%",
  },
  frame: {
    left: "50.97%",
    right: "29.64%",
  },
  ellipsePressable: {
    left: "72.85%",
    right: "7.76%",
  },
  rectangleView: {
    height: 50,
    left: "0%",
    position: "absolute",
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
    width: "100%",
  },
  text: {
    textAlign: "center",
    left: "0%",
  },
  following: {
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
  groupPressable: {
    width: "13.06%",
    right: "43.33%",
    left: "43.61%",
  },
  rectangleContainer: {
    top: 348,
    right: "0.28%",
    width: "99.72%",
  },
  icon4: {
    borderTopLeftRadius: Border.br_3xs,
    borderTopRightRadius: Border.br_3xs,
  },
  wrapper1: {
    marginLeft: 9,
  },
  frameScrollview: {
    top: 554,
    left: 26,
    position: "absolute",
    width: "100%",
  },
  imASingle: {
    width: "71.75%",
    top: 250,
    left: "14.13%",
    fontSize: FontSize.fontsRegularCaption12_size,
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    position: "absolute",
  },
  vector: {
    left: 23,
    top: 17,
    width: 9,
    height: 13,
    position: "absolute",
  },
  icon7: {
    overflow: "hidden",
  },
  charmmenuKebab: {
    top: 11,
    right: 15,
    width: 24,
    height: 24,
    position: "absolute",
  },
  groupChild1: {
    right: 0,
    borderStyle: "solid",
    borderColor: "#d9d9d9",
    borderWidth: 1,
    borderRadius: Border.br_xl,
    top: 0,
  },
  follow: {
    top: 8,
    right: 14,
    textAlign: "center",
    fontSize: FontSize.size_sm,
    color: Color.white,
  },
  rectangleParent1: {
    top: 6,
    right: 43,
  },
  rectangleParent: {
    width: "100.28%",
    right: "-0.28%",
    height: 696,
    left: "0%",
  },
  photo2: {
    backgroundColor: Color.white,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default Photo266;
