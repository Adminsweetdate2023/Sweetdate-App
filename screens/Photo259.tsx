import React, { useState } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import {
  RadioGroup as RNKRadioGroup,
  Radio as RNKRadio,
} from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border, Padding } from "../GlobalStyles";

const Photo259 = () => {
  const [groupRadioselectedIndex, setGroupRadioselectedIndex] = useState(0);
  const navigation = useNavigation();

  return (
    <View style={styles.photo2}>
      <View style={styles.nav1Parent}>
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
            source={require("../assets/clarityhistoryline.png")}
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
            source={require("../assets/mdisearch.png")}
          />
        </View>
        <View style={styles.nav1}>
          <Image
            style={[styles.clarityhistoryLineIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/epchatdotround.png")}
          />
        </View>
      </View>
      <View style={styles.rectangleParent}>
        <View style={styles.groupChild} />
        <View style={[styles.rectangleGroup, styles.groupLayout1]}>
          <View style={[styles.groupItem, styles.groupItemShadowBox]} />
          <Text style={styles.alexa1234}>alexa1234</Text>
        </View>
        <Image
          style={styles.groupInner}
          contentFit="cover"
          source={require("../assets/group-612.png")}
        />
        <Text style={[styles.alexa30, styles.followTypo]}>Alexa, 30</Text>
        <Text style={[styles.columbia, styles.followTypo]}>Columbia</Text>
        <Text style={[styles.stories, styles.followTypo]}>STORIES</Text>
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
        <View style={styles.rectangleContainer}>
          <View style={[styles.rectangleView, styles.button1ChildPosition]} />
          <View style={[styles.parent, styles.groupPosition1]}>
            <Text style={[styles.text, styles.textTypo]}>161</Text>
            <Text style={[styles.following, styles.followingTypo]}>
              Following
            </Text>
          </View>
          <View style={[styles.group, styles.groupPosition1]}>
            <Text style={[styles.text, styles.textTypo]}>635</Text>
            <Text style={[styles.followers, styles.followingTypo]}>
              Followers
            </Text>
          </View>
        </View>
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
        <View style={[styles.groupView, styles.groupLayout]}>
          <View style={[styles.groupChild5, styles.lineViewBorder]} />
          <Text style={[styles.follow, styles.followTypo]}>Follow</Text>
        </View>
      </View>
      <View style={[styles.photo2Child, styles.childPosition]} />
      <View style={styles.groupPosition}>
        <View style={styles.groupPosition}>
          <View style={[styles.groupChild6, styles.groupPosition]} />
          <Text style={[styles.report, styles.textTypo]}>Report</Text>
          <Pressable
            style={[styles.button2, styles.button2Position]}
            onPress={() =>
              navigation.navigate("BottomTabsRoot", { screen: "Photo268" })
            }
          >
            <View style={[styles.button1, styles.childPosition]}>
              <View style={[styles.button1Child, styles.childPosition]} />
              <Text style={[styles.continue, styles.textTypo]}>Continue</Text>
            </View>
          </Pressable>
          <RNKRadioGroup
            style={[styles.container, styles.button2Position]}
            selectedIndex={groupRadioselectedIndex}
            onChange={setGroupRadioselectedIndex}
          >
            <RNKRadio status="danger">
              {() => (
                <Text style={styles.groupRadioText}>
                  {" "}
                  I don’t like this user
                </Text>
              )}
            </RNKRadio>
            <RNKRadio status="danger">
              {() => (
                <Text style={styles.groupRadioText}>
                  {" "}
                  Nudity or inappropriate content
                </Text>
              )}
            </RNKRadio>
            <RNKRadio status="danger">
              {() => <Text style={styles.groupRadioText}> Spam or fraud</Text>}
            </RNKRadio>
            <RNKRadio status="danger">
              {() => (
                <Text style={styles.groupRadioText}> Violent content</Text>
              )}
            </RNKRadio>
            <RNKRadio status="danger">
              {() => (
                <Text style={styles.groupRadioText}> Verbal harassment</Text>
              )}
            </RNKRadio>
            <RNKRadio status="danger">
              {() => <Text style={styles.groupRadioText}> Underage</Text>}
            </RNKRadio>
            <RNKRadio status="danger">
              {() => <Text style={styles.groupRadioText}> False gender</Text>}
            </RNKRadio>
          </RNKRadioGroup>
        </View>
        <View style={[styles.lineView, styles.lineViewBorder]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupRadioText: {
    fontWeight: "700",
    fontFamily: "Roboto_bold",
    fontSize: 14,
    color: "rgba(0, 0, 0, 0.5)",
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  groupLayout1: {
    height: 45,
    width: 360,
    left: "50%",
    top: 0,
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
    position: "absolute",
  },
  followTypo: {
    textAlign: "center",
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
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
  button1ChildPosition: {
    backgroundColor: Color.crimson_100,
    left: "0%",
    right: "0%",
  },
  groupPosition1: {
    height: 14,
    top: 18,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.robotoBold,
    textAlign: "center",
    fontWeight: "700",
    position: "absolute",
  },
  followingTypo: {
    color: Color.gray_200,
    fontFamily: FontFamily.robotoBold,
    fontSize: FontSize.fontsRegularCaption12_size,
    textAlign: "left",
    fontWeight: "700",
    top: 0,
    position: "absolute",
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
  groupLayout: {
    height: 33,
    width: 72,
  },
  lineViewBorder: {
    borderStyle: "solid",
    position: "absolute",
  },
  childPosition: {
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  groupPosition: {
    height: 402,
    left: "0%",
    bottom: 0,
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  button2Position: {
    left: "5.56%",
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
    bottom: 0,
    right: "0%",
    position: "absolute",
    width: "100%",
    backgroundColor: Color.white,
  },
  groupChild: {
    marginLeft: -202.5,
    height: 397,
    width: 360,
    backgroundColor: Color.brown,
    borderBottomLeftRadius: Border.br_xl,
    borderBottomRightRadius: Border.br_xl,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  groupItem: {
    height: 45,
    width: 360,
    left: "50%",
    top: 0,
    backgroundColor: Color.brown,
    borderBottomLeftRadius: Border.br_xl,
    borderBottomRightRadius: Border.br_xl,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    marginLeft: -180,
  },
  alexa1234: {
    marginLeft: -130,
    top: 13,
    textAlign: "left",
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    color: Color.gray_500,
    fontSize: FontSize.size_sm,
    left: "50%",
    position: "absolute",
  },
  rectangleGroup: {
    marginLeft: -201.5,
    position: "absolute",
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
    color: Color.white,
    left: "50%",
  },
  columbia: {
    marginLeft: -54.5,
    top: 222,
    color: Color.gray_500,
    textAlign: "center",
    fontSize: FontSize.size_sm,
    left: "50%",
  },
  stories: {
    marginLeft: -51.5,
    top: 422,
    color: Color.white,
    fontSize: FontSize.size_sm,
    left: "50%",
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
  rectangleView: {
    borderRadius: Border.br_xl,
    top: 0,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
    height: 50,
    width: "100%",
  },
  text: {
    color: Color.gray_100,
    fontSize: FontSize.fontsRegularCaption12_size,
    top: 0,
    left: "0%",
  },
  following: {
    left: "28.77%",
  },
  parent: {
    width: "20.28%",
    right: "68.06%",
    left: "11.67%",
  },
  followers: {
    left: "28.38%",
  },
  group: {
    width: "20.56%",
    right: "11.39%",
    left: "68.06%",
  },
  rectangleContainer: {
    top: 348,
    right: "11.11%",
    width: "88.89%",
    height: 50,
    left: "0%",
    position: "absolute",
  },
  rectangleIcon: {
    right: "47.9%",
    left: "6.42%",
  },
  groupChild4: {
    left: "54.32%",
    right: "0%",
  },
  imASingle: {
    width: "63.95%",
    top: 250,
    left: "12.59%",
    fontSize: FontSize.fontsRegularCaption12_size,
    color: Color.white,
  },
  vectorIcon: {
    top: 17,
    left: 25,
    width: 9,
    height: 13,
    position: "absolute",
  },
  charmmenuKebabIcon: {
    top: 11,
    right: 59,
    position: "absolute",
    overflow: "hidden",
  },
  groupChild5: {
    right: 0,
    borderColor: "#d9d9d9",
    borderWidth: 1,
    height: 33,
    width: 72,
    borderRadius: Border.br_xl,
    top: 0,
  },
  follow: {
    top: 8,
    right: 14,
    color: Color.white,
    fontSize: FontSize.size_sm,
  },
  groupView: {
    top: 6,
    right: 87,
    position: "absolute",
  },
  rectangleParent: {
    width: 405,
    height: 696,
    left: "50%",
    top: 0,
    marginLeft: -180,
    position: "absolute",
  },
  photo2Child: {
    backgroundColor: Color.gray_600,
    left: "0%",
    right: "0%",
  },
  groupChild6: {
    borderTopLeftRadius: Border.br_xl,
    borderTopRightRadius: Border.br_xl,
    backgroundColor: Color.white,
  },
  report: {
    marginLeft: -21,
    bottom: 347,
    color: Color.black,
    fontSize: FontSize.size_sm,
    left: "50%",
  },
  button1Child: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.crimson_100,
    left: "0%",
    right: "0%",
  },
  continue: {
    marginLeft: -29,
    top: "27.03%",
    color: Color.white,
    fontSize: FontSize.size_sm,
    left: "50%",
  },
  button1: {
    right: "-0.94%",
    left: "0.94%",
  },
  button2: {
    right: "5.56%",
    bottom: 9,
    height: 37,
    width: "88.89%",
  },
  container: {
    width: "65.83%",
    right: "28.61%",
    bottom: 74,
    height: 238,
  },
  lineView: {
    marginLeft: -55,
    top: 21,
    borderColor: "rgba(0, 0, 0, 0.5)",
    borderTopWidth: 2,
    width: 110,
    height: 2,
    left: "50%",
  },
  photo2: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Photo259;
