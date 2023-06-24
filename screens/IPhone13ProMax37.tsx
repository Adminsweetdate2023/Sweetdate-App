import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const IPhone13ProMax37 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone13ProMax37}>
      <View style={[styles.iphone13ProMax37Child, styles.groupItemPosition]} />
      <View
        style={[
          styles.iphone13ProMax37Item,
          styles.iphone13ProMax37ItemPosition,
        ]}
      />
      <Image
        style={[styles.iphone13ProMax37Inner, styles.icon1Layout]}
        contentFit="cover"
        source={require("../assets/group-51761.png")}
      />
      <View style={[styles.ellipseParent, styles.groupItemLayout]}>
        <Image
          style={styles.groupChild}
          contentFit="cover"
          source={require("../assets/ellipse-291.png")}
        />
        <Text style={[styles.teeman32, styles.textFlexBox]}>Teeman,32</Text>
        <View style={[styles.groupItem, styles.groupItemLayout]} />
      </View>
      <Pressable
        style={styles.groupInnerPosition}
        onPress={() => navigation.navigate("IPhone13ProMax32")}
      >
        <View style={[styles.groupInner, styles.groupInnerPosition]} />
        <Image
          style={[styles.groupIcon, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/group-4925.png")}
        />
        <Text style={[styles.share, styles.flipTypo]}>Share</Text>
        <Text style={[styles.flip, styles.flipTypo]}>Flip</Text>
        <Image
          style={[styles.groupChild1, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/group-4927.png")}
        />
        <Pressable
          style={styles.groupParent}
          onPress={() => navigation.navigate("IPhone13ProMax43")}
        >
          <Pressable
            style={styles.wrapper}
            onPress={() => navigation.navigate("IPhone13ProMax43")}
          >
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require("../assets/group-4929.png")}
            />
          </Pressable>
          <Pressable
            style={styles.giftRecieved}
            onPress={() => navigation.navigate("IPhone13ProMax43")}
          >
            <Text style={[styles.giftRecieved1, styles.flipTypo]}>
              Gift recieved
            </Text>
          </Pressable>
        </Pressable>
      </Pressable>
      <View style={styles.parent}>
        <Text style={[styles.text, styles.textFlexBox]}>150</Text>
        <Image
          style={[styles.ellipseIcon, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-74.png")}
        />
        <Image
          style={[styles.groupChild2, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-75.png")}
        />
        <Image
          style={[styles.groupChild3, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-76.png")}
        />
        <Image
          style={[styles.groupChild4, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-77.png")}
        />
        <Pressable
          style={[
            styles.materialSymbolscancelRounde,
            styles.iphone13ProMax37ItemPosition,
          ]}
          onPress={() => navigation.navigate("LiveAudiolive")}
        >
          <Image
            style={[styles.icon1, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/materialsymbolscancelrounded.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupItemPosition: {
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
  },
  iphone13ProMax37ItemPosition: {
    right: "0%",
    position: "absolute",
  },
  icon1Layout: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupItemLayout: {
    height: 30,
    width: 127,
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  groupInnerPosition: {
    height: 202,
    bottom: 0,
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  groupLayout: {
    width: "13.06%",
    height: 47,
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  flipTypo: {
    textAlign: "center",
    fontFamily: FontFamily.quicksandMedium,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.fontsBoldHeading16B_size,
    color: Color.black,
  },
  groupChildLayout: {
    width: "14.44%",
    height: 26,
    maxWidth: "100%",
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  iphone13ProMax37Child: {
    backgroundColor: Color.gray_400,
    width: 428,
    height: 143,
    position: "absolute",
  },
  iphone13ProMax37Item: {
    height: "100.38%",
    top: "0%",
    bottom: "-0.37%",
    backgroundColor: Color.white,
    left: "0%",
    width: "100%",
    right: "0%",
  },
  iphone13ProMax37Inner: {
    width: "87.52%",
    top: 150,
    right: "6.37%",
    left: "6.11%",
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
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
  },
  ellipseParent: {
    top: 27,
    left: 22,
  },
  groupInner: {
    borderTopLeftRadius: Border.br_xl,
    borderTopRightRadius: Border.br_xl,
    borderColor: "#9d1720",
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.white,
  },
  groupIcon: {
    right: "80.87%",
    bottom: 130,
    left: "6.07%",
    height: 47,
  },
  share: {
    bottom: 93,
    left: "5.43%",
    position: "absolute",
  },
  flip: {
    bottom: 92,
    left: "27.25%",
    position: "absolute",
  },
  groupChild1: {
    right: "61.71%",
    bottom: 129,
    left: "25.23%",
    height: 47,
  },
  wrapper: {
    width: 47,
    height: 47,
  },
  giftRecieved1: {
    display: "flex",
    justifyContent: "center",
    width: 72,
    alignItems: "center",
  },
  giftRecieved: {
    marginTop: 13,
  },
  groupParent: {
    top: 25,
    left: 149,
    alignItems: "center",
    position: "absolute",
  },
  text: {
    top: 7,
    left: "71.03%",
    fontSize: FontSize.fontsRegularCaption12_size,
    fontWeight: "900",
    fontFamily: FontFamily.nunitoBlack,
  },
  ellipseIcon: {
    right: "85.56%",
    left: "0%",
  },
  groupChild2: {
    right: "67.96%",
    left: "17.59%",
  },
  groupChild3: {
    right: "50.19%",
    left: "35.37%",
  },
  groupChild4: {
    right: "32.41%",
    left: "53.15%",
  },
  icon1: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  materialSymbolscancelRounde: {
    left: "86.67%",
    top: 1,
    width: "13.33%",
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
  iphone13ProMax37: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone13ProMax37;
