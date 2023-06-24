import * as React from "react";
import { StyleSheet, View, Text, Pressable, ScrollView } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const IPhone13ProMax239 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone13ProMax239}>
      <View
        style={[styles.iphone13ProMax239Child, styles.searchScreenPosition]}
      />
      <View
        style={[styles.iphone13ProMax239Item, styles.frameParentPosition]}
      />
      <View style={[styles.searchScreenWrapper, styles.searchLayout]}>
        <View style={[styles.searchScreen, styles.searchLayout]}>
          <Image
            style={[
              styles.icbaselineEmojiEmotionsIcon,
              styles.typeInHerePosition,
            ]}
            contentFit="cover"
            source={require("../assets/icbaselineemojiemotions.png")}
          />
          <Text style={[styles.typeInHere, styles.text2FlexBox]}>
            Type in here
          </Text>
        </View>
      </View>
      <Image
        style={styles.iphone13ProMax239Inner}
        contentFit="cover"
        source={require("../assets/group-51762.png")}
      />
      <View style={[styles.groupParent, styles.parentLayout]}>
        <View style={[styles.ellipseParent, styles.groupItemLayout]}>
          <Image
            style={styles.groupChild}
            contentFit="cover"
            source={require("../assets/ellipse-292.png")}
          />
          <Text style={[styles.mia19, styles.textFlexBox]}>MIA,19</Text>
          <View style={[styles.groupItem, styles.groupItemBorder]} />
          <Image
            style={styles.groupInner}
            contentFit="cover"
            source={require("../assets/group-1662.png")}
          />
        </View>
        <View style={styles.parent}>
          <Text style={[styles.text, styles.textFlexBox]}>150</Text>
          <Image
            style={[styles.ellipseIcon, styles.groupChildLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-74.png")}
          />
          <Image
            style={[styles.groupChild1, styles.groupChildLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-751.png")}
          />
          <Image
            style={[styles.groupChild2, styles.groupChildLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-763.png")}
          />
          <Image
            style={[styles.groupChild3, styles.groupChildLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-773.png")}
          />
        </View>
      </View>
      <View style={styles.rectanglePosition}>
        <View style={[styles.rectangleView, styles.rectanglePosition]} />
        <View style={[styles.icons8Coin481Parent, styles.parentPosition]}>
          <Image
            style={styles.icons8Coin481}
            contentFit="cover"
            source={require("../assets/icons8coin48-1.png")}
          />
          <Text style={[styles.text1, styles.parentFlexBox]}>0</Text>
        </View>
        <Pressable
          style={[styles.linePressable, styles.groupItemBorder]}
          onPress={() => navigation.navigate("IPhone13ProMax238")}
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
              onPress={() => navigation.navigate("IPhone13ProMax240")}
            >
              <Image
                style={styles.ringCase1}
                contentFit="cover"
                source={require("../assets/ring-case-1.png")}
              />
              <Text style={[styles.text2, styles.mia19Typo]}>500</Text>
            </Pressable>
            <Pressable
              style={[styles.sun1Parent, styles.parentFlexBox]}
              onPress={() => navigation.navigate("IPhone13ProMax241")}
            >
              <Image
                style={styles.ringCase1}
                contentFit="cover"
                source={require("../assets/sun-1.png")}
              />
              <Text style={[styles.text2, styles.mia19Typo]}>900</Text>
            </Pressable>
            <Pressable
              style={[styles.mg1Parent, styles.parentFlexBox]}
              onPress={() => navigation.navigate("IPhone13ProMax242")}
            >
              <Image
                style={styles.ringCase1}
                contentFit="cover"
                source={require("../assets/mg-1.png")}
              />
              <Text style={[styles.text2, styles.mia19Typo]}>600</Text>
            </Pressable>
            <View style={[styles.iceCream1Parent, styles.parentFlexBox]}>
              <Image
                style={styles.ringCase1}
                contentFit="cover"
                source={require("../assets/ice-cream-1.png")}
              />
              <Text style={[styles.text2, styles.mia19Typo]}>200</Text>
            </View>
            <View style={[styles.heartChocolate2Parent, styles.parentFlexBox]}>
              <Image
                style={styles.ringCase1}
                contentFit="cover"
                source={require("../assets/heart-chocolate-2.png")}
              />
              <Text style={[styles.text2, styles.mia19Typo]}>400</Text>
            </View>
            <View style={[styles.heartChain1Parent, styles.parentFlexBox]}>
              <Image
                style={styles.ringCase1}
                contentFit="cover"
                source={require("../assets/heart-chain-1.png")}
              />
              <Text style={[styles.text2, styles.mia19Typo]}>1300</Text>
            </View>
            <View style={[styles.castle1Parent, styles.parentFlexBox]}>
              <Image
                style={styles.ringCase1}
                contentFit="cover"
                source={require("../assets/castle-1.png")}
              />
              <Text style={[styles.text2, styles.mia19Typo]}>1200</Text>
            </View>
            <View style={[styles.burj1Parent, styles.parentFlexBox]}>
              <Image
                style={styles.ringCase1}
                contentFit="cover"
                source={require("../assets/burj-1.png")}
              />
              <Text style={[styles.text2, styles.mia19Typo]}>1500</Text>
            </View>
            <View style={[styles.bed1Parent, styles.parentFlexBox]}>
              <Image
                style={styles.ringCase1}
                contentFit="cover"
                source={require("../assets/bed-1.png")}
              />
              <Text style={[styles.text2, styles.mia19Typo]}>800</Text>
            </View>
          </View>
          <View style={[styles.frameContainer, styles.frameLayout]}>
            <Pressable
              style={[styles.ringCase1Parent, styles.parentFlexBox]}
              onPress={() => navigation.navigate("IPhone13ProMax243")}
            >
              <Image
                style={styles.ringCase1}
                contentFit="cover"
                source={require("../assets/perfume-1.png")}
              />
              <Text style={[styles.text2, styles.mia19Typo]}>50</Text>
            </Pressable>
            <Pressable
              style={[styles.sun1Parent, styles.parentFlexBox]}
              onPress={() => navigation.navigate("IPhone13ProMax244")}
            >
              <Image
                style={styles.ringCase1}
                contentFit="cover"
                source={require("../assets/coin-4.png")}
              />
              <Text style={[styles.text2, styles.mia19Typo]}>70</Text>
            </Pressable>
            <Pressable
              style={[styles.mg1Parent, styles.parentFlexBox]}
              onPress={() => navigation.navigate("IPhone13ProMax245")}
            >
              <Image
                style={styles.ringCase1}
                contentFit="cover"
                source={require("../assets/love-1.png")}
              />
              <Text style={[styles.text2, styles.mia19Typo]}>100</Text>
            </Pressable>
            <View style={[styles.iceCream1Parent, styles.parentFlexBox]}>
              <Image
                style={styles.ringCase1}
                contentFit="cover"
                source={require("../assets/cupid-1.png")}
              />
              <Text style={[styles.text2, styles.mia19Typo]}>300</Text>
            </View>
            <View style={[styles.heartChocolate2Parent, styles.parentFlexBox]}>
              <Image
                style={styles.ringCase1}
                contentFit="cover"
                source={require("../assets/diamond-1-1.png")}
              />
              <Text style={[styles.text2, styles.mia19Typo]}>700</Text>
            </View>
            <View style={[styles.heartChain1Parent, styles.parentFlexBox]}>
              <Image
                style={styles.ringCase1}
                contentFit="cover"
                source={require("../assets/car-1-1.png")}
              />
              <Text style={[styles.text2, styles.mia19Typo]}>1100</Text>
            </View>
            <View style={[styles.castle1Parent, styles.parentFlexBox]}>
              <Image
                style={styles.ringCase1}
                contentFit="cover"
                source={require("../assets/car2-1.png")}
              />
              <Text style={[styles.text2, styles.mia19Typo]}>1000</Text>
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
  searchScreenPosition: {
    left: 0,
    top: 0,
  },
  frameParentPosition: {
    right: "0%",
    width: "100%",
  },
  searchLayout: {
    height: 50,
    width: 262,
    position: "absolute",
  },
  typeInHerePosition: {
    top: 13,
    position: "absolute",
  },
  text2FlexBox: {
    textAlign: "center",
    color: Color.black,
  },
  parentLayout: {
    height: 37,
    position: "absolute",
  },
  groupItemLayout: {
    width: 127,
    left: 0,
  },
  textFlexBox: {
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  groupItemBorder: {
    borderStyle: "solid",
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
  rectanglePosition: {
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
  mia19Typo: {
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
  },
  frameLayout: {
    height: 75,
    width: 352,
  },
  iphone13ProMax239Child: {
    backgroundColor: Color.gray_400,
    width: 428,
    height: 143,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  iphone13ProMax239Item: {
    height: "100%",
    top: "0%",
    bottom: "0%",
    backgroundColor: Color.white,
    left: "0%",
    position: "absolute",
  },
  icbaselineEmojiEmotionsIcon: {
    left: 9,
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  typeInHere: {
    left: 61,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: FontFamily.quicksandMedium,
    fontSize: FontSize.fontsRegularCaption12_size,
    top: 13,
    position: "absolute",
  },
  searchScreen: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.white,
    left: 0,
    top: 0,
  },
  searchScreenWrapper: {
    top: 858,
    left: 18,
  },
  iphone13ProMax239Inner: {
    width: "87.52%",
    top: 150,
    right: "6.37%",
    left: "6.11%",
    height: 129,
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
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
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
  },
  groupItem: {
    borderColor: "#0fa958",
    borderWidth: 2,
    height: 30,
    top: 7,
    width: 127,
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
    height: 37,
    position: "absolute",
    top: 0,
  },
  text: {
    left: "85.32%",
    fontWeight: "900",
    fontFamily: FontFamily.nunitoBlack,
    top: 7,
    fontSize: FontSize.fontsRegularCaption12_size,
  },
  ellipseIcon: {
    right: "82.65%",
    left: "0%",
  },
  groupChild1: {
    right: "61.28%",
    left: "21.37%",
  },
  groupChild2: {
    right: "39.92%",
    left: "42.73%",
  },
  groupChild3: {
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
  rectangleView: {
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
    fontWeight: "700",
    alignItems: "center",
    textAlign: "center",
    color: Color.black,
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
  },
  ringCase1: {
    width: 60,
    height: 60,
  },
  text2: {
    fontSize: FontSize.size_3xs,
    marginTop: 2,
    textAlign: "center",
    color: Color.black,
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
  iphone13ProMax239: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone13ProMax239;
