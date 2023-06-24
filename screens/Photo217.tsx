import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const Photo217 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.photo2}>
      <View style={styles.nav1Parent}>
        <View style={styles.nav1}>
          <Image
            style={styles.groupIcon}
            contentFit="cover"
            source={require("../assets/group1.png")}
          />
        </View>
        <View style={styles.nav1}>
          <Image
            style={[styles.clarityhistoryLineIcon, styles.video21Layout]}
            contentFit="cover"
            source={require("../assets/clarityhistoryline.png")}
          />
        </View>
        <View style={styles.nav1}>
          <Image
            style={styles.video21Layout}
            contentFit="cover"
            source={require("../assets/video-2-1.png")}
          />
        </View>
        <View style={styles.nav1}>
          <Image
            style={[styles.clarityhistoryLineIcon, styles.video21Layout]}
            contentFit="cover"
            source={require("../assets/mdisearch.png")}
          />
        </View>
        <View style={styles.nav1}>
          <Image
            style={[styles.clarityhistoryLineIcon, styles.video21Layout]}
            contentFit="cover"
            source={require("../assets/epchatdotround.png")}
          />
        </View>
      </View>
      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.groupPosition1]} />
        <View style={styles.rectangleGroup}>
          <View style={[styles.groupItem, styles.groupShadowBox]} />
          <Text style={[styles.teeman124556, styles.teemanTypo]}>
            teeman124556
          </Text>
          <Pressable
            style={styles.vector}
            onPress={() => navigation.navigate("LiveAudiolive")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/vector1.png")}
            />
          </Pressable>
        </View>
        <View style={[styles.rectangleContainer, styles.groupChildPosition]}>
          <View style={[styles.groupInner, styles.groupShadowBox]} />
          <Pressable
            style={[styles.parent, styles.groupPosition]}
            onPress={() => navigation.navigate("Photo215")}
          >
            <Text style={[styles.text, styles.textTypo]}>0</Text>
            <Text style={[styles.following, styles.followingTypo]}>
              Following
            </Text>
          </Pressable>
          <Pressable
            style={[styles.group, styles.groupPosition]}
            onPress={() => navigation.navigate("Photo216")}
          >
            <Text style={[styles.text1, styles.textTypo]}>0</Text>
            <Text style={[styles.followers, styles.followingTypo]}>
              Followers
            </Text>
          </Pressable>
          <View style={[styles.lineView, styles.groupPosition]} />
        </View>
        <Image
          style={[styles.groupChild1, styles.indiaPosition]}
          contentFit="cover"
          source={require("../assets/group-61.png")}
        />
        <Text style={[styles.teeman30, styles.indiaPosition]}>Teeman, 30</Text>
        <Text style={[styles.india, styles.indiaPosition]}>India</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  video21Layout: {
    height: 24,
    width: 24,
  },
  groupPosition1: {
    borderBottomLeftRadius: Border.br_xl,
    borderBottomRightRadius: Border.br_xl,
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
    top: 0,
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  teemanTypo: {
    textAlign: "center",
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
  },
  groupChildPosition: {
    right: "0.28%",
    width: "99.72%",
    left: "0%",
    position: "absolute",
  },
  groupPosition: {
    height: 17,
    top: 15,
    position: "absolute",
  },
  textTypo: {
    display: "flex",
    fontFamily: FontFamily.robotoBold,
    fontSize: FontSize.fontsRegularCaption12_size,
    height: 17,
    textAlign: "center",
    color: Color.white,
    fontWeight: "700",
    top: 0,
    justifyContent: "center",
    alignItems: "center",
    left: "0%",
    position: "absolute",
  },
  followingTypo: {
    textAlign: "left",
    top: 2,
    fontFamily: FontFamily.robotoBold,
    fontSize: FontSize.fontsRegularCaption12_size,
    color: Color.white,
    fontWeight: "700",
    position: "absolute",
  },
  indiaPosition: {
    left: "50%",
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
    bottom: 0,
    flexDirection: "row",
    paddingHorizontal: Padding.p_8xs,
    paddingBottom: Padding.p_3xs,
    justifyContent: "space-between",
    alignItems: "center",
    right: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
    backgroundColor: Color.white,
  },
  groupChild: {
    backgroundColor: Color.brown,
    height: 313,
    right: "0.28%",
    width: "99.72%",
    left: "0%",
    position: "absolute",
    top: 0,
  },
  groupItem: {
    height: 39,
    borderBottomLeftRadius: Border.br_xl,
    borderBottomRightRadius: Border.br_xl,
  },
  teeman124556: {
    top: 10,
    left: "36.11%",
    color: Color.white,
    textAlign: "center",
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  vector: {
    left: 32,
    top: 13,
    width: 9,
    height: 13,
    position: "absolute",
  },
  rectangleGroup: {
    left: "0.28%",
    height: 39,
    top: 0,
    width: "99.72%",
    right: "0%",
    position: "absolute",
  },
  groupInner: {
    borderRadius: Border.br_xl,
    height: 50,
  },
  text: {
    width: "21.21%",
  },
  following: {
    left: "21.21%",
  },
  parent: {
    width: "18.33%",
    right: "58.33%",
    left: "23.33%",
  },
  text1: {
    width: "20.9%",
  },
  followers: {
    left: "20.9%",
  },
  group: {
    width: "18.61%",
    right: "23.06%",
    left: "58.33%",
  },
  lineView: {
    width: "0.28%",
    right: "49.86%",
    left: "49.86%",
    borderStyle: "solid",
    borderColor: "#000",
    borderRightWidth: 1,
  },
  rectangleContainer: {
    top: 274,
    height: 50,
  },
  groupChild1: {
    marginLeft: -62.5,
    top: 64,
    width: 125,
    height: 125,
  },
  teeman30: {
    marginLeft: -50.5,
    top: 199,
    fontSize: FontSize.size_lg,
    textAlign: "center",
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    color: Color.white,
  },
  india: {
    marginLeft: -17.5,
    top: 222,
    color: Color.gray_500,
    textAlign: "center",
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    left: "50%",
    fontSize: FontSize.size_sm,
  },
  rectangleParent: {
    width: "100.28%",
    top: 20,
    right: "-0.28%",
    height: 324,
    left: "0%",
    position: "absolute",
  },
  photo2: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Photo217;
