import * as React from "react";
import { StyleSheet, View, Text, Pressable, ScrollView } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const IPhone13ProMax198 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone13ProMax198}>
      <View
        style={[styles.iphone13ProMax198Child, styles.ringCase1ParentPosition]}
      />
      <View
        style={[styles.iphone13ProMax198Item, styles.frameParentPosition]}
      />
      <View style={[styles.rectangleParent, styles.groupChildLayout1]}>
        <Image
          style={[styles.groupChild, styles.groupLayout1]}
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
          source={require("../assets/rectangle-2241.png")}
        />
        <View style={[styles.rectangleGroup, styles.groupPosition]}>
          <View style={[styles.rectangleView, styles.groupPosition]} />
          <Image
            style={[styles.materialSymbolschairIcon, styles.groupLayout1]}
            contentFit="cover"
            source={require("../assets/materialsymbolschair1.png")}
          />
        </View>
      </View>
      <View style={[styles.groupParent, styles.parentLayout]}>
        <View style={[styles.ellipseParent, styles.groupChild1Layout]}>
          <Image
            style={styles.ellipseIcon}
            contentFit="cover"
            source={require("../assets/ellipse-294.png")}
          />
          <Text style={[styles.lia22, styles.textFlexBox]}>LIA,22</Text>
          <View style={[styles.groupChild1, styles.textPosition]} />
          <Image
            style={styles.groupIcon}
            contentFit="cover"
            source={require("../assets/group-1662.png")}
          />
        </View>
        <View style={styles.parent}>
          <Text style={[styles.text, styles.textPosition]}>150</Text>
          <Image
            style={[styles.groupChild2, styles.groupChildLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-74.png")}
          />
          <Image
            style={[styles.groupChild3, styles.groupChildLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-751.png")}
          />
          <Image
            style={[styles.groupChild4, styles.groupChildLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-763.png")}
          />
          <Image
            style={[styles.groupChild5, styles.groupChildLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-773.png")}
          />
        </View>
      </View>
      <View style={styles.groupChild6Position}>
        <View style={[styles.groupChild6, styles.groupChild6Position]} />
        <View style={[styles.icons8Coin481Parent, styles.parentPosition]}>
          <Image
            style={styles.icons8Coin481}
            contentFit="cover"
            source={require("../assets/icons8coin48-1.png")}
          />
          <Text style={[styles.text1, styles.parentFlexBox]}>0</Text>
        </View>
        <Pressable
          style={styles.linePressable}
          onPress={() => navigation.navigate("IPhone13ProMax209")}
        />
        <ScrollView
          style={[styles.frameParent, styles.parentPosition]}
          horizontal
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.frameScrollViewContent}
        >
          <View style={styles.frameLayout}>
            <Pressable
              style={[styles.ringCase1Parent, styles.parentFlexBox]}
              onPress={() => navigation.navigate("IPhone13ProMax199")}
            >
              <Image
                style={styles.ringCase1}
                contentFit="cover"
                source={require("../assets/ring-case-1.png")}
              />
              <Text style={[styles.text2, styles.textTypo]}>500</Text>
            </Pressable>
            <Pressable
              style={[styles.sun1Parent, styles.parentFlexBox]}
              onPress={() => navigation.navigate("IPhone13ProMax201")}
            >
              <Image
                style={styles.ringCase1}
                contentFit="cover"
                source={require("../assets/sun-1.png")}
              />
              <Text style={[styles.text2, styles.textTypo]}>900</Text>
            </Pressable>
            <Pressable
              style={[styles.mg1Parent, styles.parentFlexBox]}
              onPress={() => navigation.navigate("IPhone13ProMax202")}
            >
              <Image
                style={styles.ringCase1}
                contentFit="cover"
                source={require("../assets/mg-1.png")}
              />
              <Text style={[styles.text2, styles.textTypo]}>600</Text>
            </Pressable>
            <View style={[styles.iceCream1Parent, styles.parentFlexBox]}>
              <Image
                style={styles.ringCase1}
                contentFit="cover"
                source={require("../assets/ice-cream-1.png")}
              />
              <Text style={[styles.text2, styles.textTypo]}>200</Text>
            </View>
            <View style={[styles.heartChocolate2Parent, styles.parentFlexBox]}>
              <Image
                style={styles.ringCase1}
                contentFit="cover"
                source={require("../assets/heart-chocolate-2.png")}
              />
              <Text style={[styles.text2, styles.textTypo]}>400</Text>
            </View>
            <View style={[styles.heartChain1Parent, styles.parentFlexBox]}>
              <Image
                style={styles.ringCase1}
                contentFit="cover"
                source={require("../assets/heart-chain-1.png")}
              />
              <Text style={[styles.text2, styles.textTypo]}>1300</Text>
            </View>
            <View style={[styles.castle1Parent, styles.parentFlexBox]}>
              <Image
                style={styles.ringCase1}
                contentFit="cover"
                source={require("../assets/castle-1.png")}
              />
              <Text style={[styles.text2, styles.textTypo]}>1200</Text>
            </View>
            <View style={[styles.burj1Parent, styles.parentFlexBox]}>
              <Image
                style={styles.ringCase1}
                contentFit="cover"
                source={require("../assets/burj-1.png")}
              />
              <Text style={[styles.text2, styles.textTypo]}>1500</Text>
            </View>
            <View style={[styles.bed1Parent, styles.parentFlexBox]}>
              <Image
                style={styles.ringCase1}
                contentFit="cover"
                source={require("../assets/bed-1.png")}
              />
              <Text style={[styles.text2, styles.textTypo]}>800</Text>
            </View>
          </View>
          <View style={[styles.frameContainer, styles.frameLayout]}>
            <Pressable
              style={[styles.ringCase1Parent, styles.parentFlexBox]}
              onPress={() => navigation.navigate("IPhone13ProMax203")}
            >
              <Image
                style={styles.ringCase1}
                contentFit="cover"
                source={require("../assets/perfume-1.png")}
              />
              <Text style={[styles.text2, styles.textTypo]}>50</Text>
            </Pressable>
            <Pressable
              style={[styles.sun1Parent, styles.parentFlexBox]}
              onPress={() => navigation.navigate("IPhone13ProMax204")}
            >
              <Image
                style={styles.ringCase1}
                contentFit="cover"
                source={require("../assets/coin-4.png")}
              />
              <Text style={[styles.text2, styles.textTypo]}>70</Text>
            </Pressable>
            <Pressable
              style={[styles.mg1Parent, styles.parentFlexBox]}
              onPress={() => navigation.navigate("IPhone13ProMax205")}
            >
              <Image
                style={styles.ringCase1}
                contentFit="cover"
                source={require("../assets/love-1.png")}
              />
              <Text style={[styles.text2, styles.textTypo]}>100</Text>
            </Pressable>
            <View style={[styles.iceCream1Parent, styles.parentFlexBox]}>
              <Image
                style={styles.ringCase1}
                contentFit="cover"
                source={require("../assets/cupid-1.png")}
              />
              <Text style={[styles.text2, styles.textTypo]}>300</Text>
            </View>
            <View style={[styles.heartChocolate2Parent, styles.parentFlexBox]}>
              <Image
                style={styles.ringCase1}
                contentFit="cover"
                source={require("../assets/diamond-1-1.png")}
              />
              <Text style={[styles.text2, styles.textTypo]}>700</Text>
            </View>
            <View style={[styles.heartChain1Parent, styles.parentFlexBox]}>
              <Image
                style={styles.ringCase1}
                contentFit="cover"
                source={require("../assets/car-1-1.png")}
              />
              <Text style={[styles.text2, styles.textTypo]}>1100</Text>
            </View>
            <View style={[styles.castle1Parent, styles.parentFlexBox]}>
              <Image
                style={styles.ringCase1}
                contentFit="cover"
                source={require("../assets/car2-1.png")}
              />
              <Text style={[styles.text2, styles.textTypo]}>1000</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameScrollViewContent: {
    flexDirection: "column",
  },
  ringCase1ParentPosition: {
    left: 0,
    top: 0,
  },
  frameParentPosition: {
    right: "0%",
    width: "100%",
  },
  groupChildLayout1: {
    height: 415,
    position: "absolute",
  },
  groupLayout1: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupPosition: {
    height: 132,
    right: "0%",
    position: "absolute",
  },
  parentLayout: {
    height: 37,
    position: "absolute",
  },
  groupChild1Layout: {
    width: 127,
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
  groupChildLayout: {
    width: "17.35%",
    height: 26,
    maxWidth: "100%",
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  groupChild6Position: {
    height: 245,
    bottom: 0,
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  parentPosition: {
    left: "7.5%",
    position: "absolute",
  },
  parentFlexBox: {
    alignItems: "center",
    position: "absolute",
  },
  textTypo: {
    textAlign: "center",
    color: Color.black,
    fontWeight: "700",
  },
  frameLayout: {
    height: 75,
    width: 352,
  },
  iphone13ProMax198Child: {
    backgroundColor: Color.gray_400,
    width: 428,
    height: 143,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  iphone13ProMax198Item: {
    height: "100%",
    top: "0%",
    bottom: "0%",
    backgroundColor: Color.white,
    left: "0%",
    position: "absolute",
  },
  groupChild: {
    width: "67.72%",
    right: "32.28%",
    height: 415,
    position: "absolute",
    left: "0%",
    borderRadius: Border.br_3xs,
    top: 0,
  },
  groupItem: {
    left: "68.25%",
    width: "31.75%",
    height: 132,
    maxWidth: "100%",
    overflow: "hidden",
    borderRadius: Border.br_3xs,
    top: 0,
  },
  groupInner: {
    top: 142,
    left: "68.25%",
    width: "31.75%",
    height: 132,
    maxWidth: "100%",
    overflow: "hidden",
    borderRadius: Border.br_3xs,
  },
  rectangleView: {
    borderColor: "#9d1720",
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.white,
    left: "0%",
    borderRadius: Border.br_3xs,
    top: 0,
    height: 132,
    width: "100%",
  },
  materialSymbolschairIcon: {
    width: "20%",
    top: 54,
    right: "40%",
    left: "40%",
    height: 24,
    position: "absolute",
  },
  rectangleGroup: {
    top: 283,
    left: "68.25%",
    width: "31.75%",
    height: 132,
  },
  rectangleParent: {
    width: "88.32%",
    top: 196,
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
    top: 12,
    left: 33,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    color: Color.black,
    position: "absolute",
  },
  groupChild1: {
    borderColor: "#0fa958",
    borderWidth: 2,
    height: 30,
    width: 127,
    left: 0,
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
    height: 37,
    position: "absolute",
    top: 0,
  },
  text: {
    left: "85.32%",
    fontWeight: "900",
    fontFamily: FontFamily.nunitoBlack,
    fontSize: FontSize.fontsRegularCaption12_size,
    textAlign: "left",
    color: Color.black,
  },
  groupChild2: {
    right: "82.65%",
    left: "0%",
  },
  groupChild3: {
    right: "61.28%",
    left: "21.37%",
  },
  groupChild4: {
    right: "39.92%",
    left: "42.73%",
  },
  groupChild5: {
    right: "18.57%",
    left: "64.08%",
  },
  parent: {
    width: "47.15%",
    top: 8,
    left: "52.85%",
    height: 26,
    right: "0%",
    position: "absolute",
  },
  groupParent: {
    top: 20,
    left: 22,
    width: 318,
  },
  groupChild6: {
    borderTopLeftRadius: Border.br_xl,
    borderTopRightRadius: Border.br_xl,
    backgroundColor: Color.white,
  },
  icons8Coin481: {
    width: "73.17%",
    right: "26.83%",
    borderRadius: Border.br_xl,
    bottom: 0,
    height: 30,
    maxWidth: "100%",
    left: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  text1: {
    width: "34.15%",
    bottom: 7,
    left: "65.85%",
    fontFamily: FontFamily.robotoBold,
    display: "flex",
    justifyContent: "center",
    height: 17,
    textAlign: "center",
    color: Color.black,
    fontWeight: "700",
    fontSize: FontSize.fontsRegularCaption12_size,
  },
  icons8Coin481Parent: {
    width: "11.39%",
    right: "81.11%",
    bottom: 28,
    height: 30,
  },
  linePressable: {
    width: "25.56%",
    right: "37.22%",
    bottom: 233,
    left: "37.22%",
    borderColor: "#000",
    borderTopWidth: 4,
    height: 4,
    borderStyle: "solid",
    position: "absolute",
  },
  ringCase1: {
    width: 60,
    height: 60,
  },
  text2: {
    fontSize: FontSize.size_3xs,
    marginTop: 2,
    fontFamily: FontFamily.quicksandBold,
  },
  ringCase1Parent: {
    left: 0,
    top: 0,
  },
  sun1Parent: {
    left: 78,
    top: 0,
  },
  mg1Parent: {
    left: 156,
    top: 0,
  },
  iceCream1Parent: {
    left: 234,
    top: 0,
  },
  heartChocolate2Parent: {
    left: 312,
    top: 0,
  },
  heartChain1Parent: {
    left: 390,
    top: 0,
  },
  castle1Parent: {
    left: 468,
    top: 0,
  },
  burj1Parent: {
    left: 546,
    top: 0,
  },
  bed1Parent: {
    left: 624,
    top: 0,
  },
  frameContainer: {
    marginTop: 12,
  },
  frameParent: {
    bottom: 68,
    right: "0%",
    width: "100%",
  },
  iphone13ProMax198: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone13ProMax198;
