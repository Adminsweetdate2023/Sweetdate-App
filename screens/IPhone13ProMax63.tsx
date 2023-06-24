import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const IPhone13ProMax63 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone13ProMax63}>
      <View
        style={[styles.iphone13ProMax63Child, styles.rectangleViewPosition]}
      />
      <Image
        style={styles.iphone13ProMax63Item}
        contentFit="cover"
        source={require("../assets/rectangle-193.png")}
      />
      <View style={styles.parent}>
        <Text style={[styles.text, styles.textFlexBox]}>150</Text>
        <Image
          style={[styles.groupChild, styles.groupLayout1]}
          contentFit="cover"
          source={require("../assets/ellipse-74.png")}
        />
        <Image
          style={[styles.groupItem, styles.groupLayout1]}
          contentFit="cover"
          source={require("../assets/ellipse-75.png")}
        />
        <Image
          style={[styles.groupInner, styles.groupLayout1]}
          contentFit="cover"
          source={require("../assets/ellipse-76.png")}
        />
        <Image
          style={[styles.ellipseIcon, styles.groupLayout1]}
          contentFit="cover"
          source={require("../assets/ellipse-77.png")}
        />
        <Pressable
          style={styles.materialSymbolscancelRounde}
          onPress={() =>
            navigation.navigate("BottomTabsRoot", { screen: "Live" })
          }
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/materialsymbolscancelrounded.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.ellipseParent, styles.ellipseParentLayout]}>
        <Image
          style={styles.groupChild1}
          contentFit="cover"
          source={require("../assets/ellipse-291.png")}
        />
        <Text style={[styles.teeman32, styles.textFlexBox]}>Teeman,32</Text>
        <View style={[styles.rectangleView, styles.ellipseParentLayout]} />
      </View>
      <Pressable
        style={styles.groupChild2Position}
        onPress={() => navigation.navigate("IPhone13ProMax36")}
      >
        <View style={[styles.groupChild2, styles.groupChild2Position]} />
        <Image
          style={[styles.groupIcon, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/group-49251.png")}
        />
        <Text style={[styles.share, styles.flipTypo]}>Share</Text>
        <Text style={[styles.flip, styles.flipTypo]}>Flip</Text>
        <Image
          style={[styles.groupChild3, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/group-4927.png")}
        />
        <Pressable
          style={styles.groupParent}
          onPress={() => navigation.navigate("IPhone13ProMax64")}
        >
          <Pressable
            style={styles.wrapper}
            onPress={() => navigation.navigate("IPhone13ProMax64")}
          >
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require("../assets/group-4929.png")}
            />
          </Pressable>
          <Pressable
            style={styles.giftRecieved}
            onPress={() => navigation.navigate("IPhone13ProMax64")}
          >
            <Text style={[styles.giftRecieved1, styles.flipTypo]}>
              Gift recieved
            </Text>
          </Pressable>
        </Pressable>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleViewPosition: {
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
  },
  textFlexBox: {
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  groupLayout1: {
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
  ellipseParentLayout: {
    height: 30,
    width: 127,
    position: "absolute",
  },
  groupChild2Position: {
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
  iphone13ProMax63Child: {
    backgroundColor: Color.gray_400,
    width: 428,
    height: 143,
    position: "absolute",
  },
  iphone13ProMax63Item: {
    top: "0%",
    bottom: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    right: "0%",
    left: "0%",
    height: "100%",
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  text: {
    top: 7,
    left: "71.03%",
    fontSize: FontSize.fontsRegularCaption12_size,
    fontWeight: "900",
    fontFamily: FontFamily.nunitoBlack,
  },
  groupChild: {
    right: "85.56%",
    left: "0%",
    width: "14.44%",
  },
  groupItem: {
    right: "67.96%",
    left: "17.59%",
  },
  groupInner: {
    right: "50.19%",
    left: "35.37%",
  },
  ellipseIcon: {
    right: "32.41%",
    left: "53.15%",
  },
  icon: {
    overflow: "hidden",
  },
  materialSymbolscancelRounde: {
    left: 156,
    top: 1,
    width: 24,
    height: 24,
    position: "absolute",
  },
  parent: {
    width: "50%",
    top: 29,
    right: "5%",
    left: "45%",
    height: 26,
    position: "absolute",
  },
  groupChild1: {
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
  rectangleView: {
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
  groupChild2: {
    borderTopLeftRadius: Border.br_xl,
    borderTopRightRadius: Border.br_xl,
    backgroundColor: Color.white,
    borderColor: "#9d1720",
    borderWidth: 1,
    borderStyle: "solid",
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
  groupChild3: {
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
  iphone13ProMax63: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone13ProMax63;
