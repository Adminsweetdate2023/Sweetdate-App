import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Photo287 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.photo2}>
      <Pressable
        style={[styles.rectangleParent, styles.groupLayout1]}
        onPress={() => navigation.navigate("Connect21")}
      >
        <Image
          style={[styles.groupChild, styles.groupChildPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-614.png")}
        />
        <View style={[styles.ellipseParent, styles.groupLayout]}>
          <Image
            style={[styles.groupItem, styles.groupLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-2914.png")}
          />
          <Text style={[styles.rose23, styles.rose23Typo]}>Rose, 23</Text>
          <Image
            style={[styles.tablervideoIcon, styles.tablervideoIconLayout]}
            contentFit="cover"
            source={require("../assets/tablervideo1.png")}
          />
          <Text style={[styles.available, styles.availableTypo]}>
            Available
          </Text>
        </View>
      </Pressable>
      <Pressable
        style={[styles.rectangleGroup, styles.groupPosition]}
        onPress={() => navigation.navigate("Connect21")}
      >
        <Image
          style={[styles.groupChild, styles.groupChildPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-604.png")}
        />
        <View style={[styles.ellipseGroup, styles.groupLayout]}>
          <Image
            style={[styles.ellipseIcon, styles.groupLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-2915.png")}
          />
          <Text style={[styles.evelyn25, styles.evelyn25Position]}>
            Evelyn, 25
          </Text>
          <Image
            style={[styles.tablervideoIcon1, styles.evelyn25Position]}
            contentFit="cover"
            source={require("../assets/tablervideo1.png")}
          />
          <Text style={[styles.available1, styles.availableTypo]}>
            Available
          </Text>
        </View>
      </Pressable>
      <Pressable
        style={[styles.rectangleContainer, styles.groupPressablePosition]}
        onPress={() => navigation.navigate("Connect21")}
      >
        <Image
          style={[styles.groupChild, styles.groupChildPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-615.png")}
        />
        <View style={[styles.ellipseContainer, styles.groupViewPosition]}>
          <Image
            style={[styles.groupItem, styles.groupLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-2916.png")}
          />
          <Text style={[styles.rose23, styles.rose23Typo]}>Diana, 19</Text>
          <Image
            style={[styles.tablervideoIcon, styles.tablervideoIconLayout]}
            contentFit="cover"
            source={require("../assets/tablervideo1.png")}
          />
          <Text style={[styles.available, styles.availableTypo]}>
            Available
          </Text>
        </View>
      </Pressable>
      <Pressable
        style={[styles.groupPressable, styles.groupPressablePosition]}
        onPress={() => navigation.navigate("Connect21")}
      >
        <Image
          style={[styles.groupChild, styles.groupChildPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-605.png")}
        />
        <View style={[styles.groupView, styles.groupViewPosition]}>
          <Image
            style={[styles.groupChild3, styles.groupLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-2917.png")}
          />
          <Text style={[styles.princess35, styles.princess35Position]}>
            Princess, 35
          </Text>
          <Image
            style={[styles.tablervideoIcon3, styles.princess35Position]}
            contentFit="cover"
            source={require("../assets/tablervideo1.png")}
          />
          <Text style={[styles.available3, styles.availableTypo]}>
            Available
          </Text>
        </View>
      </Pressable>
      <Pressable
        style={[styles.parent, styles.parentLayout]}
        onPress={() => navigation.navigate("Photo233")}
      >
        <Text style={[styles.text, styles.textFlexBox]}>0</Text>
        <Image
          style={[styles.money11, styles.parentLayout]}
          contentFit="cover"
          source={require("../assets/money-1-1.png")}
        />
      </Pressable>
      <Image
        style={[styles.photo2Child, styles.newPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-1.png")}
      />
      <View style={[styles.rectangleParent1, styles.rectangleLayout]}>
        <View style={[styles.rectangleView, styles.rectangleLayout]} />
        <View style={styles.groupChild4Position}>
          <View style={[styles.groupChild4, styles.groupChild4Position]} />
          <Text style={styles.all}>All</Text>
        </View>
        <View style={[styles.newWrapper, styles.wrapperPosition]}>
          <Pressable
            style={[styles.new, styles.newPosition]}
            onPress={() => navigation.navigate("Photo285")}
          >
            <Text style={[styles.new1, styles.textTypo]}>New</Text>
          </Pressable>
        </View>
        <View style={[styles.popularWrapper, styles.wrapperPosition]}>
          <Pressable
            style={[styles.new, styles.newPosition]}
            onPress={() => navigation.navigate("Photo286")}
          >
            <Text style={[styles.popular1, styles.textTypo]}>Popular</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupLayout1: {
    height: 214,
    position: "absolute",
  },
  groupChildPosition: {
    maxWidth: "100%",
    left: "0%",
    top: 0,
    overflow: "hidden",
  },
  groupLayout: {
    height: 39,
    position: "absolute",
  },
  rose23Typo: {
    textAlign: "left",
    color: Color.black,
    fontWeight: "700",
    fontSize: FontSize.fontsRegularCaption12_size,
    fontFamily: FontFamily.quicksandBold,
    top: 0,
  },
  tablervideoIconLayout: {
    height: 10,
    top: 18,
    maxWidth: "100%",
    overflow: "hidden",
  },
  availableTypo: {
    color: Color.gray_600,
    fontSize: FontSize.size_5xs,
    top: 18,
    textAlign: "left",
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    position: "absolute",
  },
  groupPosition: {
    left: "5%",
    right: "52.5%",
  },
  evelyn25Position: {
    left: "44.34%",
    position: "absolute",
  },
  groupPressablePosition: {
    top: 128,
    height: 214,
    width: "42.5%",
    position: "absolute",
  },
  groupViewPosition: {
    top: 11,
    height: 39,
    position: "absolute",
  },
  princess35Position: {
    left: "40.87%",
    position: "absolute",
  },
  parentLayout: {
    height: 20,
    position: "absolute",
  },
  textFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  newPosition: {
    left: "50%",
    position: "absolute",
  },
  rectangleLayout: {
    height: 41,
    width: 305,
    position: "absolute",
  },
  groupChild4Position: {
    width: 102,
    height: 41,
    left: 0,
    top: 0,
    position: "absolute",
  },
  wrapperPosition: {
    height: 15,
    top: 13,
    left: "50%",
    position: "absolute",
  },
  textTypo: {
    textAlign: "center",
    color: Color.black,
    fontWeight: "700",
    fontSize: FontSize.fontsRegularCaption12_size,
  },
  groupChild: {
    right: "0%",
    borderRadius: Border.br_xl,
    height: 214,
    position: "absolute",
    width: "100%",
  },
  groupItem: {
    width: "39.39%",
    right: "60.61%",
    maxWidth: "100%",
    left: "0%",
    top: 0,
    overflow: "hidden",
  },
  rose23: {
    left: "47.47%",
    position: "absolute",
  },
  tablervideoIcon: {
    width: "10.1%",
    right: "42.42%",
    left: "47.47%",
    position: "absolute",
  },
  available: {
    left: "63.64%",
  },
  ellipseParent: {
    left: "6.54%",
    right: "28.76%",
    width: "64.71%",
    top: 16,
    height: 39,
  },
  rectangleParent: {
    left: "52.78%",
    right: "4.72%",
    top: 357,
    width: "42.5%",
    height: 214,
  },
  ellipseIcon: {
    width: "36.79%",
    right: "63.21%",
    maxWidth: "100%",
    left: "0%",
    top: 0,
    overflow: "hidden",
  },
  evelyn25: {
    textAlign: "left",
    color: Color.black,
    fontWeight: "700",
    fontSize: FontSize.fontsRegularCaption12_size,
    fontFamily: FontFamily.quicksandBold,
    top: 0,
  },
  tablervideoIcon1: {
    width: "9.43%",
    right: "46.23%",
    height: 10,
    top: 18,
    maxWidth: "100%",
    overflow: "hidden",
  },
  available1: {
    left: "59.43%",
  },
  ellipseGroup: {
    width: "69.28%",
    right: "26.14%",
    left: "4.58%",
    top: 16,
    height: 39,
  },
  rectangleGroup: {
    height: 214,
    position: "absolute",
    top: 357,
    width: "42.5%",
  },
  ellipseContainer: {
    left: "6.54%",
    right: "28.76%",
    width: "64.71%",
  },
  rectangleContainer: {
    left: "52.78%",
    right: "4.72%",
  },
  groupChild3: {
    width: "33.91%",
    right: "66.09%",
    maxWidth: "100%",
    left: "0%",
    top: 0,
    overflow: "hidden",
  },
  princess35: {
    textAlign: "left",
    color: Color.black,
    fontWeight: "700",
    fontSize: FontSize.fontsRegularCaption12_size,
    fontFamily: FontFamily.quicksandBold,
    top: 0,
  },
  tablervideoIcon3: {
    width: "8.7%",
    right: "50.43%",
    height: 10,
    top: 18,
    maxWidth: "100%",
    overflow: "hidden",
  },
  available3: {
    left: "54.78%",
  },
  groupView: {
    width: "75.16%",
    right: "20.26%",
    left: "4.58%",
  },
  groupPressable: {
    left: "5%",
    right: "52.5%",
  },
  text: {
    top: 1,
    fontFamily: FontFamily.robotoBold,
    display: "flex",
    width: 14,
    height: 17,
    textAlign: "center",
    color: Color.black,
    fontWeight: "700",
    fontSize: FontSize.fontsRegularCaption12_size,
    left: 0,
    position: "absolute",
    justifyContent: "center",
  },
  money11: {
    left: 14,
    width: 20,
    top: 0,
  },
  parent: {
    left: 293,
    width: 34,
    top: 20,
  },
  photo2Child: {
    marginLeft: -20,
    width: 40,
    height: 43,
    top: 20,
  },
  rectangleView: {
    backgroundColor: Color.gainsboro_100,
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
  },
  groupChild4: {
    borderStyle: "solid",
    borderColor: "#d9d9d9",
    borderWidth: 2,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.white,
  },
  all: {
    marginLeft: -9,
    width: 18,
    top: 13,
    left: "50%",
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    fontSize: FontSize.fontsRegularCaption12_size,
    position: "absolute",
  },
  new1: {
    marginLeft: -13,
    fontFamily: FontFamily.quicksandBold,
    textAlign: "center",
  },
  new: {
    top: 0,
  },
  newWrapper: {
    marginLeft: -12.5,
    width: 26,
  },
  popular1: {
    marginLeft: -23,
    fontFamily: FontFamily.quicksandBold,
    textAlign: "center",
  },
  popularWrapper: {
    marginLeft: 77.5,
    width: 46,
  },
  rectangleParent1: {
    top: 72,
    left: 28,
  },
  photo2: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Photo287;
