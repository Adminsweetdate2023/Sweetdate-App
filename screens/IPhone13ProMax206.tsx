import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const IPhone13ProMax206 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone13ProMax206}>
      <View style={styles.iphone13ProMax206Child} />
      <View style={[styles.iphone13ProMax206Item, styles.rectangleViewBg]} />
      <View style={[styles.rectangleParent, styles.groupChildLayout1]}>
        <Image
          style={[styles.groupChild, styles.groupLayout2]}
          contentFit="cover"
          source={require("../assets/rectangle-2221.png")}
        />
        <Image
          style={[styles.groupItem, styles.groupPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-2231.png")}
        />
        <Image
          style={[styles.groupInner, styles.groupPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-2244.png")}
        />
        <Pressable
          style={[styles.rectangleGroup, styles.groupPosition]}
          onPress={() => navigation.navigate("IPhone13ProMax207")}
        >
          <View style={[styles.rectangleView, styles.groupChild1Border]} />
          <Image
            style={styles.materialSymbolschairIcon}
            contentFit="cover"
            source={require("../assets/materialsymbolschair1.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.groupParent, styles.parentLayout]}>
        <Pressable
          style={[styles.ellipseParent, styles.parentLayout]}
          onPress={() => navigation.navigate("Photo283")}
        >
          <Image
            style={styles.ellipseIcon}
            contentFit="cover"
            source={require("../assets/ellipse-294.png")}
          />
          <Text style={[styles.lia22, styles.textFlexBox]}>LIA,22</Text>
          <View style={[styles.groupChild1, styles.containerPosition]} />
          <Image
            style={styles.groupIcon}
            contentFit="cover"
            source={require("../assets/group-1663.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.wrapper, styles.lia22Position]}
          onPress={() => navigation.navigate("IPhone13ProMax200")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/group-1691.png")}
          />
        </Pressable>
        <View style={[styles.carbonaddFilledParent, styles.textPosition]}>
          <Pressable
            style={[styles.carbonaddFilled, styles.filledLayout]}
            onPress={() => navigation.navigate("IPhone13ProMax207")}
          >
            <Image
              style={[styles.icon1, styles.iconLayout]}
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
        <Pressable
          style={[styles.container, styles.containerPosition]}
          onPress={() => navigation.navigate("Photo285")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/group-168.png")}
          />
        </Pressable>
      </View>
      <Pressable
        style={[styles.frame, styles.groupLayout]}
        onPress={() => navigation.navigate("IPhone13ProMax209")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/group-5199.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.groupContainer, styles.groupLayout]}
        onPress={() => navigation.navigate("IPhone13ProMax208")}
      >
        <Image
          style={[styles.groupChild4, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/group-4936.png")}
        />
        <Image
          style={[styles.fluentchat24FilledIcon, styles.filledLayout]}
          contentFit="cover"
          source={require("../assets/fluentchat24filled.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleViewBg: {
    backgroundColor: Color.white,
    left: "0%",
    width: "100%",
  },
  groupChildLayout1: {
    height: 415,
    position: "absolute",
  },
  groupLayout2: {
    maxWidth: "100%",
    borderRadius: Border.br_3xs,
    overflow: "hidden",
  },
  groupPosition: {
    height: 132,
    right: "0%",
    position: "absolute",
  },
  groupChild1Border: {
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
  },
  parentLayout: {
    height: 37,
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "left",
    color: Color.black,
  },
  containerPosition: {
    height: 30,
    top: 7,
    left: 0,
    position: "absolute",
  },
  lia22Position: {
    top: 12,
    position: "absolute",
  },
  textPosition: {
    top: 7,
    position: "absolute",
  },
  filledLayout: {
    width: 24,
    height: 24,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  groupChildLayout: {
    height: 26,
    width: 26,
    top: 0,
    position: "absolute",
  },
  groupLayout: {
    height: 40,
    width: 40,
    position: "absolute",
  },
  iphone13ProMax206Child: {
    backgroundColor: Color.gray_400,
    width: 428,
    height: 143,
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
    position: "absolute",
  },
  iphone13ProMax206Item: {
    top: "0%",
    bottom: "0%",
    right: "0%",
    backgroundColor: Color.white,
    height: "100%",
    position: "absolute",
  },
  groupChild: {
    width: "67.72%",
    right: "32.28%",
    height: 415,
    position: "absolute",
    left: "0%",
    maxWidth: "100%",
    top: 0,
  },
  groupItem: {
    left: "68.25%",
    width: "31.75%",
    height: 132,
    maxWidth: "100%",
    borderRadius: Border.br_3xs,
    overflow: "hidden",
    top: 0,
  },
  groupInner: {
    top: 142,
    left: "68.25%",
    width: "31.75%",
    height: 132,
    maxWidth: "100%",
    borderRadius: Border.br_3xs,
    overflow: "hidden",
  },
  rectangleView: {
    borderColor: "#9d1720",
    borderWidth: 1,
    height: 132,
    right: "0%",
    position: "absolute",
    backgroundColor: Color.white,
    left: "0%",
    width: "100%",
    top: 0,
  },
  materialSymbolschairIcon: {
    width: "20%",
    top: 54,
    right: "40%",
    left: "40%",
    height: 24,
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  rectangleGroup: {
    top: 283,
    left: "68.25%",
    width: "31.75%",
    height: 132,
  },
  rectangleParent: {
    width: "88.32%",
    top: 150,
    right: "5.61%",
    left: "6.07%",
  },
  ellipseIcon: {
    top: 9,
    left: 3,
    width: 23,
    height: 25,
    position: "absolute",
  },
  lia22: {
    left: 33,
    fontSize: FontSize.size_sm,
    fontWeight: "700",
    fontFamily: FontFamily.quicksandBold,
    top: 12,
    position: "absolute",
  },
  groupChild1: {
    borderColor: "#0fa958",
    borderWidth: 2,
    width: 127,
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
    width: 127,
    top: 0,
  },
  wrapper: {
    right: 120,
    width: 21,
    height: 21,
  },
  icon1: {
    overflow: "hidden",
  },
  carbonaddFilled: {
    left: 88,
    top: 4,
  },
  text: {
    right: 26,
    fontSize: FontSize.fontsRegularCaption12_size,
    fontWeight: "900",
    fontFamily: FontFamily.nunitoBlack,
    textAlign: "left",
    color: Color.black,
  },
  groupChild2: {
    right: 86,
  },
  groupChild3: {
    right: 54,
  },
  carbonaddFilledParent: {
    left: 206,
    width: 112,
    height: 28,
  },
  container: {
    width: 30,
  },
  groupParent: {
    top: 20,
    left: 22,
    width: 318,
  },
  frame: {
    left: 63,
    bottom: 24,
    width: 40,
  },
  groupChild4: {
    bottom: 0,
    width: 40,
    left: 0,
  },
  fluentchat24FilledIcon: {
    bottom: 8,
    left: 8,
    overflow: "hidden",
  },
  groupContainer: {
    left: 13,
    bottom: 24,
    width: 40,
  },
  iphone13ProMax206: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone13ProMax206;
