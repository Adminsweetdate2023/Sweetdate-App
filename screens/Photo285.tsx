import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Photo285 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.photo2}>
      <Pressable
        style={[styles.rectangleParent, styles.groupLayout1]}
        onPress={() => navigation.navigate("Connect24")}
      >
        <Image
          style={[styles.groupChild, styles.groupChildPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-60.png")}
        />
        <View style={[styles.ellipseParent, styles.groupLayout]}>
          <Image
            style={[styles.groupItem, styles.groupLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-296.png")}
          />
          <Text style={[styles.princess35, styles.diana19Typo]}>
            Princess, 35
          </Text>
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
        style={[styles.rectangleGroup, styles.groupPosition1]}
        onPress={() => navigation.navigate("Connect24")}
      >
        <Image
          style={[styles.groupChild, styles.groupChildPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-61.png")}
        />
        <View style={[styles.ellipseGroup, styles.groupPosition]}>
          <Image
            style={[styles.ellipseIcon, styles.groupLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-297.png")}
          />
          <Text style={[styles.diana19, styles.diana19Position]}>
            Diana, 19
          </Text>
          <Image
            style={[styles.tablervideoIcon1, styles.diana19Position]}
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
        onPress={() => navigation.navigate("Connect24")}
      >
        <Image
          style={[styles.groupChild, styles.groupChildPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-601.png")}
        />
        <View style={[styles.ellipseContainer, styles.groupViewPosition]}>
          <Image
            style={[styles.groupChild1, styles.groupLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-298.png")}
          />
          <Text style={[styles.evelyn25, styles.evelyn25Position]}>
            Evelyn, 25
          </Text>
          <Image
            style={[styles.tablervideoIcon2, styles.evelyn25Position]}
            contentFit="cover"
            source={require("../assets/tablervideo1.png")}
          />
          <Text style={[styles.available2, styles.availableTypo]}>
            Available
          </Text>
        </View>
      </Pressable>
      <Pressable
        style={[styles.groupPressable, styles.groupPressablePosition]}
        onPress={() => navigation.navigate("Connect24")}
      >
        <Image
          style={[styles.groupChild, styles.groupChildPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-611.png")}
        />
        <View style={[styles.groupView, styles.groupViewPosition]}>
          <Image
            style={[styles.ellipseIcon, styles.groupLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-299.png")}
          />
          <Text style={[styles.diana19, styles.diana19Position]}>Rose, 23</Text>
          <Image
            style={[styles.tablervideoIcon1, styles.diana19Position]}
            contentFit="cover"
            source={require("../assets/tablervideo1.png")}
          />
          <Text style={[styles.available1, styles.availableTypo]}>
            Available
          </Text>
        </View>
      </Pressable>
      <Pressable
        style={[styles.parent, styles.parentLayout]}
        onPress={() => navigation.navigate("Photo284")}
      >
        <Text style={[styles.text, styles.allTypo]}>0</Text>
        <Image
          style={[styles.money11, styles.parentLayout]}
          contentFit="cover"
          source={require("../assets/money-1-1.png")}
        />
      </Pressable>
      <View style={[styles.rectangleParent1, styles.rectangleLayout]}>
        <View style={[styles.rectangleView, styles.groupChild4Layout1]} />
        <Pressable
          style={[styles.allWrapper, styles.wrapperPosition]}
          onPress={() =>
            navigation.navigate("BottomTabsRoot", { screen: "Photo287" })
          }
        >
          <Text style={[styles.all, styles.allPosition]}>All</Text>
        </Pressable>
        <View style={[styles.rectangleParent2, styles.groupChild4Layout]}>
          <View style={[styles.groupChild4, styles.groupChild4Layout]} />
          <Text style={[styles.new, styles.allPosition]}>New</Text>
        </View>
        <View style={[styles.popularWrapper, styles.wrapperPosition]}>
          <Pressable
            style={[styles.popular, styles.allPosition]}
            onPress={() => navigation.navigate("Photo286")}
          >
            <Text style={[styles.popular1, styles.allTypo]}>Popular</Text>
          </Pressable>
        </View>
      </View>
      <Image
        style={[styles.photo2Child, styles.allPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-1.png")}
      />
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
  diana19Typo: {
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
  groupPosition1: {
    left: "53.06%",
    right: "4.44%",
  },
  groupPosition: {
    left: "6.54%",
    right: "28.76%",
    width: "64.71%",
  },
  diana19Position: {
    left: "47.47%",
    position: "absolute",
  },
  groupPressablePosition: {
    top: 357,
    height: 214,
    width: "42.5%",
    position: "absolute",
  },
  groupViewPosition: {
    top: 16,
    height: 39,
    position: "absolute",
  },
  evelyn25Position: {
    left: "44.34%",
    position: "absolute",
  },
  parentLayout: {
    height: 20,
    position: "absolute",
  },
  allTypo: {
    textAlign: "center",
    color: Color.black,
    fontWeight: "700",
    fontSize: FontSize.fontsRegularCaption12_size,
  },
  rectangleLayout: {
    height: 41,
    width: 305,
    position: "absolute",
  },
  groupChild4Layout1: {
    borderRadius: Border.br_3xs,
    left: 0,
  },
  wrapperPosition: {
    height: 15,
    left: "50%",
    top: 13,
    position: "absolute",
  },
  allPosition: {
    left: "50%",
    position: "absolute",
  },
  groupChild4Layout: {
    width: 102,
    height: 41,
    top: 0,
    position: "absolute",
  },
  groupChild: {
    right: "0%",
    borderRadius: Border.br_xl,
    height: 214,
    position: "absolute",
    left: "0%",
    width: "100%",
  },
  groupItem: {
    width: "33.91%",
    right: "66.09%",
    maxWidth: "100%",
    left: "0%",
    top: 0,
    overflow: "hidden",
  },
  princess35: {
    left: "40.87%",
    position: "absolute",
  },
  tablervideoIcon: {
    width: "8.7%",
    right: "50.43%",
    left: "40.87%",
    position: "absolute",
  },
  available: {
    left: "54.78%",
  },
  ellipseParent: {
    width: "75.16%",
    right: "20.26%",
    left: "4.58%",
    top: 11,
    height: 39,
  },
  rectangleParent: {
    left: "5.28%",
    right: "52.22%",
    top: 128,
    width: "42.5%",
    height: 214,
    position: "absolute",
  },
  ellipseIcon: {
    width: "39.39%",
    right: "60.61%",
    maxWidth: "100%",
    left: "0%",
    top: 0,
    overflow: "hidden",
  },
  diana19: {
    textAlign: "left",
    color: Color.black,
    fontWeight: "700",
    fontSize: FontSize.fontsRegularCaption12_size,
    fontFamily: FontFamily.quicksandBold,
    top: 0,
  },
  tablervideoIcon1: {
    width: "10.1%",
    right: "42.42%",
    height: 10,
    top: 18,
    maxWidth: "100%",
    overflow: "hidden",
  },
  available1: {
    left: "63.64%",
  },
  ellipseGroup: {
    height: 39,
    position: "absolute",
    top: 11,
  },
  rectangleGroup: {
    height: 214,
    position: "absolute",
    top: 128,
    width: "42.5%",
  },
  groupChild1: {
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
  tablervideoIcon2: {
    width: "9.43%",
    right: "46.23%",
    height: 10,
    top: 18,
    maxWidth: "100%",
    overflow: "hidden",
  },
  available2: {
    left: "59.43%",
  },
  ellipseContainer: {
    width: "69.28%",
    right: "26.14%",
    left: "4.58%",
  },
  rectangleContainer: {
    left: "5.28%",
    right: "52.22%",
  },
  groupView: {
    left: "6.54%",
    right: "28.76%",
    width: "64.71%",
  },
  groupPressable: {
    left: "53.06%",
    right: "4.44%",
  },
  text: {
    top: 1,
    fontFamily: FontFamily.robotoBold,
    display: "flex",
    width: 14,
    height: 17,
    left: 0,
    textAlign: "center",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
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
  rectangleView: {
    backgroundColor: Color.gainsboro_100,
    height: 41,
    width: 305,
    position: "absolute",
    top: 0,
  },
  all: {
    marginLeft: -8.88,
    width: 18,
    textAlign: "center",
    color: Color.black,
    fontWeight: "700",
    fontSize: FontSize.fontsRegularCaption12_size,
    fontFamily: FontFamily.quicksandBold,
    top: 0,
  },
  allWrapper: {
    marginLeft: -110.5,
    width: 18,
  },
  groupChild4: {
    borderStyle: "solid",
    borderColor: "#d9d9d9",
    borderWidth: 2,
    borderRadius: Border.br_3xs,
    left: 0,
    backgroundColor: Color.white,
    width: 102,
  },
  new: {
    marginLeft: -13,
    top: 13,
    left: "50%",
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    fontSize: FontSize.fontsRegularCaption12_size,
  },
  rectangleParent2: {
    left: 102,
  },
  popular1: {
    marginLeft: -23,
    textAlign: "center",
    fontFamily: FontFamily.quicksandBold,
  },
  popular: {
    top: 0,
  },
  popularWrapper: {
    marginLeft: 77.5,
    width: 46,
  },
  rectangleParent1: {
    top: 72,
    left: 28,
  },
  photo2Child: {
    marginLeft: -20,
    width: 40,
    height: 43,
    top: 20,
  },
  photo2: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Photo285;
