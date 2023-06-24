import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";

const Photo226 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.photo2}>
      <View style={[styles.nav1Parent, styles.nav1ParentPosition]}>
        <View style={styles.nav1}>
          <Image
            style={styles.groupIcon}
            contentFit="cover"
            source={require("../assets/group3.png")}
          />
        </View>
        <View style={styles.nav1}>
          <Image
            style={[styles.clarityhistoryLineIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/clarityhistoryline3.png")}
          />
        </View>
        <View style={styles.nav1}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/icons8videocall100-1.png")}
          />
        </View>
        <View style={styles.nav1}>
          <Image
            style={[styles.clarityhistoryLineIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/mdisearch3.png")}
          />
        </View>
        <View style={styles.nav1}>
          <Image
            style={[styles.clarityhistoryLineIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/epchatdotround3.png")}
          />
        </View>
      </View>
      <Image
        style={[styles.photo2Child, styles.photo2Layout]}
        contentFit="cover"
        source={require("../assets/rectangle-691.png")}
      />
      <Image
        style={[styles.photo2Item, styles.photo2Layout]}
        contentFit="cover"
        source={require("../assets/rectangle-701.png")}
      />
      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.groupPosition1]} />
        <View style={[styles.rectangleGroup, styles.groupPosition2]}>
          <View style={[styles.groupItem, styles.groupShadowBox]} />
          <View style={[styles.parent, styles.groupPosition]}>
            <Text style={[styles.text, styles.textClr]}>161</Text>
            <Text style={[styles.following, styles.textClr]}>Following</Text>
          </View>
          <View style={[styles.group, styles.groupPosition]}>
            <Text style={[styles.text, styles.textClr]}>635</Text>
            <Text style={[styles.followers, styles.textClr]}>Followers</Text>
          </View>
          <View style={[styles.container, styles.groupPosition]}>
            <Text style={[styles.text, styles.textClr]}>900</Text>
            <Text style={[styles.gifts, styles.textClr]}>Gifts</Text>
          </View>
        </View>
        <View style={[styles.rectangleContainer, styles.groupInnerPosition]}>
          <View style={[styles.groupInner, styles.groupInnerPosition]} />
          <Text style={[styles.alexa1234, styles.columbiaTypo]}>alexa1234</Text>
        </View>
        <Image
          style={styles.groupChild1}
          contentFit="cover"
          source={require("../assets/group-613.png")}
        />
        <Text style={[styles.alexa30, styles.followTypo]}>Alexa, 30</Text>
        <Text style={[styles.columbia, styles.columbiaTypo]}>Columbia</Text>
        <Text style={styles.stories}>STORIES</Text>
        <Image
          style={[styles.ellipseIcon, styles.ellipseIconLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-1.png")}
        />
        <Image
          style={[styles.groupChild2, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-21.png")}
        />
        <Image
          style={[styles.groupChild3, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-3.png")}
        />
        <Image
          style={[styles.groupChild4, styles.ellipseIconLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-4.png")}
        />
        <Text style={[styles.imASingle, styles.followTypo]}>
          i’m a single girl. I love to play for long times, making you have a
          very nice and delightful time.
        </Text>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector5.png")}
        />
        <Image
          style={[styles.charmmenuKebabIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/charmmenukebab1.png")}
        />
        <View style={styles.groupView}>
          <View style={styles.rectangleView} />
          <Text style={[styles.follow, styles.followTypo]}>Follow</Text>
        </View>
      </View>
      <Image
        style={[styles.photo2Inner, styles.photo2InnerPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-72.png")}
      />
      <View style={[styles.rectangleParent1, styles.groupChild5Position]}>
        <View style={[styles.groupChild5, styles.groupChild5Position]} />
        <Pressable
          style={styles.button1}
          onPress={() => navigation.navigate("Photo232")}
        >
          <View style={[styles.button1Child, styles.photo2InnerPosition]} />
          <Text style={[styles.start, styles.textClr]}>Cancel</Text>
        </Pressable>
        <Pressable
          style={[styles.groupPressable, styles.groupLayout]}
          onPress={() =>
            navigation.navigate("BottomTabsRoot", { screen: "Photo287" })
          }
        >
          <View style={[styles.groupChild6, styles.groupChild6Border]} />
          <Text style={[styles.block, styles.blockTypo]}>Block</Text>
        </Pressable>
        <Pressable
          style={[styles.rectangleParent2, styles.groupLayout]}
          onPress={() => navigation.navigate("Photo225")}
        >
          <View style={[styles.groupChild6, styles.groupChild6Border]} />
          <Text style={[styles.report, styles.blockTypo]}>Report</Text>
        </Pressable>
        <Pressable
          style={[styles.linePressable, styles.groupChild6Border]}
          onPress={() => navigation.navigate("Photo232")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  nav1ParentPosition: {
    bottom: 0,
    backgroundColor: Color.white,
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  photo2Layout: {
    height: 142,
    borderTopRightRadius: Border.br_3xs,
    borderTopLeftRadius: Border.br_3xs,
    top: 598,
    width: "51.39%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupPosition1: {
    borderBottomLeftRadius: Border.br_xl,
    borderBottomRightRadius: Border.br_xl,
  },
  groupPosition2: {
    right: "0.28%",
    width: "99.72%",
    left: "0%",
    position: "absolute",
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
    width: "100%",
  },
  groupPosition: {
    height: 14,
    top: 18,
    position: "absolute",
  },
  textClr: {
    color: Color.white,
    position: "absolute",
  },
  groupInnerPosition: {
    height: 45,
    top: 0,
    right: "0%",
    position: "absolute",
  },
  columbiaTypo: {
    color: Color.gray_500,
    fontFamily: FontFamily.quicksandBold,
    fontSize: FontSize.size_sm,
    fontWeight: "700",
    position: "absolute",
  },
  followTypo: {
    fontFamily: FontFamily.quicksandBold,
    textAlign: "center",
    color: Color.white,
    fontWeight: "700",
    position: "absolute",
  },
  ellipseIconLayout: {
    height: 70,
    top: 451,
    width: "19.39%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupChildLayout: {
    top: 450,
    height: 70,
    width: "19.39%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  photo2InnerPosition: {
    bottom: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  groupChild5Position: {
    height: 214,
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  groupLayout: {
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
    color: Color.black,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    top: 18,
    position: "absolute",
  },
  groupIcon: {
    width: 22,
    height: 22,
  },
  nav1: {
    width: 50,
    justifyContent: "center",
    height: 50,
    alignItems: "center",
  },
  clarityhistoryLineIcon: {
    overflow: "hidden",
  },
  nav1Parent: {
    flexDirection: "row",
    paddingHorizontal: Padding.p_8xs,
    paddingBottom: Padding.p_3xs,
    justifyContent: "space-between",
    alignItems: "center",
    left: "0%",
    right: "0%",
    bottom: 0,
    position: "absolute",
    width: "100%",
  },
  photo2Child: {
    right: "41.39%",
    left: "7.22%",
  },
  photo2Item: {
    right: "-12.5%",
    left: "61.11%",
  },
  groupChild: {
    backgroundColor: Color.brown,
    height: 397,
    right: "0.28%",
    width: "99.72%",
    left: "0%",
    position: "absolute",
    top: 0,
  },
  groupItem: {
    borderRadius: Border.br_xl,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    top: 0,
    height: 50,
    right: "0%",
    position: "absolute",
  },
  text: {
    textAlign: "center",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    color: Color.white,
    fontSize: FontSize.fontsRegularCaption12_size,
    top: 0,
    left: "0%",
  },
  following: {
    left: "28.77%",
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    color: Color.white,
    fontSize: FontSize.fontsRegularCaption12_size,
    top: 0,
  },
  parent: {
    width: "20.28%",
    right: "68.06%",
    left: "11.67%",
  },
  followers: {
    left: "28.38%",
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    color: Color.white,
    fontSize: FontSize.fontsRegularCaption12_size,
    top: 0,
  },
  group: {
    width: "20.56%",
    right: "11.39%",
    left: "68.06%",
  },
  gifts: {
    left: "44.68%",
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    color: Color.white,
    fontSize: FontSize.fontsRegularCaption12_size,
    top: 0,
  },
  container: {
    width: "13.06%",
    right: "43.33%",
    left: "43.61%",
  },
  rectangleGroup: {
    top: 348,
    height: 50,
  },
  groupInner: {
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
    width: "100%",
    borderBottomLeftRadius: Border.br_xl,
    borderBottomRightRadius: Border.br_xl,
  },
  alexa1234: {
    top: 13,
    left: "13.89%",
    textAlign: "left",
  },
  rectangleContainer: {
    left: "0.28%",
    width: "99.72%",
    height: 45,
  },
  groupChild1: {
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
    left: "50%",
  },
  columbia: {
    marginLeft: -32.5,
    top: 222,
    left: "50%",
    textAlign: "center",
  },
  stories: {
    marginLeft: -29.5,
    top: 422,
    color: Color.black,
    left: "50%",
    fontFamily: FontFamily.quicksandBold,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    fontWeight: "700",
    position: "absolute",
  },
  ellipseIcon: {
    right: "73.41%",
    left: "7.2%",
  },
  groupChild2: {
    right: "51.52%",
    left: "29.09%",
  },
  groupChild3: {
    right: "29.64%",
    left: "50.97%",
  },
  groupChild4: {
    right: "7.76%",
    left: "72.85%",
  },
  imASingle: {
    width: "71.75%",
    top: 250,
    left: "14.13%",
    fontSize: FontSize.fontsRegularCaption12_size,
    fontFamily: FontFamily.quicksandBold,
  },
  vectorIcon: {
    top: 17,
    right: 327,
    width: 9,
    height: 13,
    position: "absolute",
  },
  charmmenuKebabIcon: {
    top: 11,
    right: 15,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleView: {
    right: 0,
    borderColor: "#d9d9d9",
    borderWidth: 1,
    borderStyle: "solid",
    height: 33,
    width: 72,
    borderRadius: Border.br_xl,
    top: 0,
    position: "absolute",
  },
  follow: {
    top: 8,
    right: 14,
    fontSize: FontSize.size_sm,
  },
  groupView: {
    top: 6,
    right: 43,
    height: 33,
    width: 72,
    position: "absolute",
  },
  rectangleParent: {
    width: "100.28%",
    right: "-0.28%",
    height: 521,
    top: 0,
    left: "0%",
    position: "absolute",
  },
  photo2Inner: {
    maxHeight: "100%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupChild5: {
    bottom: 0,
    backgroundColor: Color.white,
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
    fontSize: FontSize.size_sm,
    textAlign: "center",
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
    top: 0,
    backgroundColor: Color.white,
    borderColor: "rgba(0, 0, 0, 0.5)",
  },
  block: {
    marginLeft: -18,
    left: "50%",
  },
  groupPressable: {
    top: 31,
    position: "absolute",
  },
  report: {
    left: "43.61%",
  },
  rectangleParent2: {
    top: 86,
    position: "absolute",
  },
  linePressable: {
    width: "30.56%",
    top: 16,
    right: "34.72%",
    left: "34.72%",
    borderTopWidth: 2,
    height: 2,
  },
  rectangleParent1: {
    bottom: 1,
  },
  photo2: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Photo226;
