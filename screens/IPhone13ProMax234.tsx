import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const IPhone13ProMax234 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone13ProMax234}>
      <Image
        style={[styles.icbaselineMicOffIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/icbaselinemicoff.png")}
      />
      <View style={styles.iphone13ProMax234Child} />
      <View
        style={[styles.iphone13ProMax234Item, styles.carbonaddFilledPosition]}
      />
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("IPhone13ProMax235")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/group-51763.png")}
        />
      </Pressable>
      <View style={styles.groupParent}>
        <Pressable
          style={[styles.container, styles.containerLayout]}
          onPress={() => navigation.navigate("Photo286")}
        >
          <Image
            style={styles.icon1Layout}
            contentFit="cover"
            source={require("../assets/group-168.png")}
          />
        </Pressable>
        <Pressable
          style={styles.ellipseParent}
          onPress={() => navigation.navigate("Photo244")}
        >
          <Image
            style={styles.groupChild}
            contentFit="cover"
            source={require("../assets/ellipse-293.png")}
          />
          <Text style={[styles.mia19, styles.textFlexBox]}>MIA,19</Text>
          <View style={[styles.groupItem, styles.textPosition]} />
          <Image
            style={styles.groupInner}
            contentFit="cover"
            source={require("../assets/group-1663.png")}
          />
        </Pressable>
        <View style={[styles.groupContainer, styles.groupContainerPosition]}>
          <Pressable
            style={styles.frame}
            onPress={() => navigation.navigate("IPhone13ProMax236")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/group-1691.png")}
            />
          </Pressable>
          <View
            style={[
              styles.carbonaddFilledParent,
              styles.groupContainerPosition,
            ]}
          >
            <Pressable
              style={[styles.carbonaddFilled, styles.carbonaddFilledPosition]}
              onPress={() => navigation.navigate("IPhone13ProMax235")}
            >
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../assets/carbonaddfilled.png")}
              />
            </Pressable>
            <Text style={[styles.text, styles.textPosition]}>150</Text>
            <Image
              style={[styles.ellipseIcon, styles.ellipseIconLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-762.png")}
            />
            <Image
              style={[styles.groupChild1, styles.ellipseIconLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-772.png")}
            />
          </View>
        </View>
      </View>
      <Pressable
        style={[styles.groupPressable, styles.groupLayout]}
        onPress={() => navigation.navigate("IPhone13ProMax238")}
      >
        <Image
          style={styles.icon1Layout}
          contentFit="cover"
          source={require("../assets/group-5199.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.groupParent1, styles.groupLayout]}
        onPress={() => navigation.navigate("IPhone13ProMax237")}
      >
        <Image
          style={[styles.groupIcon, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/group-4936.png")}
        />
        <Image
          style={[styles.fluentchat24FilledIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/fluentchat24filled.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  carbonaddFilledPosition: {
    right: "0%",
    position: "absolute",
  },
  containerLayout: {
    height: 30,
    left: 0,
  },
  textFlexBox: {
    textAlign: "left",
    color: Color.black,
  },
  textPosition: {
    top: 7,
    position: "absolute",
  },
  groupContainerPosition: {
    height: 28,
    right: "0%",
    position: "absolute",
  },
  ellipseIconLayout: {
    height: 26,
    width: "23.21%",
    maxWidth: "100%",
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  groupLayout: {
    height: 40,
    width: 40,
    position: "absolute",
  },
  icbaselineMicOffIcon: {
    top: 449,
    left: 175,
    height: 24,
  },
  iphone13ProMax234Child: {
    backgroundColor: Color.gray_400,
    width: 428,
    height: 143,
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
    position: "absolute",
  },
  iphone13ProMax234Item: {
    top: "0%",
    bottom: "0%",
    backgroundColor: Color.white,
    left: "0%",
    height: "100%",
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
  icon1Layout: {
    height: "100%",
    width: "100%",
  },
  container: {
    width: 30,
    top: 8,
    position: "absolute",
  },
  groupChild: {
    top: 9,
    left: 3,
    width: 23,
    height: 25,
    position: "absolute",
  },
  mia19: {
    top: 12,
    left: 33,
    fontSize: FontSize.size_sm,
    fontWeight: "700",
    fontFamily: FontFamily.quicksandBold,
    position: "absolute",
  },
  groupItem: {
    borderStyle: "solid",
    borderColor: "#0fa958",
    borderWidth: 2,
    width: 127,
    height: 30,
    left: 0,
    borderRadius: Border.br_3xs,
  },
  groupInner: {
    left: 109,
    width: 14,
    height: 16,
    top: 0,
    position: "absolute",
  },
  ellipseParent: {
    left: 42,
    height: 37,
    width: 127,
    top: 0,
    position: "absolute",
  },
  frame: {
    top: 5,
    right: "85.11%",
    width: "14.89%",
    height: 21,
    left: "0%",
    position: "absolute",
  },
  carbonaddFilled: {
    left: "78.57%",
    top: 4,
    width: "21.43%",
    height: 24,
  },
  text: {
    left: "56.98%",
    fontSize: FontSize.fontsRegularCaption12_size,
    fontWeight: "900",
    fontFamily: FontFamily.nunitoBlack,
    textAlign: "left",
    color: Color.black,
  },
  ellipseIcon: {
    right: "76.79%",
    left: "0%",
  },
  groupChild1: {
    right: "48.21%",
    left: "28.57%",
  },
  carbonaddFilledParent: {
    width: "79.43%",
    left: "20.57%",
    top: 0,
  },
  groupContainer: {
    width: "44.34%",
    left: "55.66%",
    top: 8,
  },
  groupParent: {
    top: 20,
    left: 22,
    width: 318,
    height: 38,
    position: "absolute",
  },
  groupPressable: {
    left: 63,
    bottom: 24,
    width: 40,
  },
  groupIcon: {
    bottom: 0,
    left: 0,
  },
  fluentchat24FilledIcon: {
    bottom: 8,
    left: 8,
    height: 24,
  },
  groupParent1: {
    left: 13,
    bottom: 24,
    width: 40,
  },
  iphone13ProMax234: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone13ProMax234;
