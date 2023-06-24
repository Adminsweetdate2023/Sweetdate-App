import * as React from "react";
import { StyleSheet, View, Text, Pressable, ScrollView } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const IPhone13ProMax43 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone13ProMax43}>
      <View style={[styles.iphone13ProMax43Child, styles.groupItemPosition]} />
      <View style={[styles.iphone13ProMax43Item, styles.iconLayout1]} />
      <View style={[styles.searchScreenWrapper, styles.searchLayout]}>
        <View style={[styles.searchScreen, styles.searchLayout]}>
          <Image
            style={[
              styles.icbaselineEmojiEmotionsIcon,
              styles.icbaselineEmojiEmotionsIconLayout,
            ]}
            contentFit="cover"
            source={require("../assets/icbaselineemojiemotions.png")}
          />
          <Text style={[styles.typeInHere, styles.textFlexBox]}>
            Type in here
          </Text>
        </View>
      </View>
      <Image
        style={[styles.iphone13ProMax43Inner, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/group-5176.png")}
      />
      <View style={[styles.ellipseParent, styles.groupItemLayout]}>
        <Image
          style={styles.groupChild}
          contentFit="cover"
          source={require("../assets/ellipse-291.png")}
        />
        <Text style={[styles.teeman32, styles.text16FlexBox]}>Teeman,32</Text>
        <View style={[styles.groupItem, styles.groupItemBorder]} />
      </View>
      <View style={styles.groupInnerPosition}>
        <View style={[styles.groupInner, styles.groupInnerPosition]} />
        <Pressable
          style={[styles.linePressable, styles.groupItemBorder]}
          onPress={() => navigation.navigate("IPhone13ProMax37")}
        />
        <ScrollView
          style={styles.frameParent}
          horizontal
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.frameScrollViewContent}
        >
          <View style={styles.frameLayout}>
            <View style={[styles.ringCase1Parent, styles.parentPosition]}>
              <Image
                style={styles.ringCase1}
                contentFit="cover"
                source={require("../assets/ring-case-1.png")}
              />
              <Text style={[styles.text, styles.textTypo]}>400</Text>
            </View>
            <View style={[styles.sun1Parent, styles.parentPosition]}>
              <Image
                style={styles.ringCase1}
                contentFit="cover"
                source={require("../assets/sun-1.png")}
              />
              <Text style={[styles.text, styles.textTypo]}>720</Text>
            </View>
            <View style={[styles.mg1Parent, styles.parentPosition]}>
              <Image
                style={styles.ringCase1}
                contentFit="cover"
                source={require("../assets/mg-1.png")}
              />
              <Text style={[styles.text, styles.textTypo]}>480</Text>
            </View>
            <View style={[styles.iceCream1Parent, styles.parentPosition]}>
              <Image
                style={styles.ringCase1}
                contentFit="cover"
                source={require("../assets/ice-cream-1.png")}
              />
              <Text style={[styles.text, styles.textTypo]}>160</Text>
            </View>
            <View style={[styles.heartChocolate2Parent, styles.parentPosition]}>
              <Image
                style={styles.ringCase1}
                contentFit="cover"
                source={require("../assets/heart-chocolate-2.png")}
              />
              <Text style={[styles.text, styles.textTypo]}>320</Text>
            </View>
            <View style={[styles.heartChain1Parent, styles.parentPosition]}>
              <Image
                style={styles.ringCase1}
                contentFit="cover"
                source={require("../assets/heart-chain-1.png")}
              />
              <Text style={[styles.text, styles.textTypo]}>1040</Text>
            </View>
            <View style={[styles.castle1Parent, styles.parentPosition]}>
              <Image
                style={styles.ringCase1}
                contentFit="cover"
                source={require("../assets/castle-1.png")}
              />
              <Text style={[styles.text, styles.textTypo]}>960</Text>
            </View>
            <View style={[styles.burj1Parent, styles.parentPosition]}>
              <Image
                style={styles.ringCase1}
                contentFit="cover"
                source={require("../assets/burj-1.png")}
              />
              <Text style={[styles.text, styles.textTypo]}>1200</Text>
            </View>
            <View style={[styles.bed1Parent, styles.parentPosition]}>
              <Image
                style={styles.ringCase1}
                contentFit="cover"
                source={require("../assets/bed-1.png")}
              />
              <Text style={[styles.text, styles.textTypo]}>640</Text>
            </View>
          </View>
          <View style={[styles.frameContainer, styles.frameLayout]}>
            <View style={[styles.ringCase1Parent, styles.parentPosition]}>
              <Image
                style={styles.ringCase1}
                contentFit="cover"
                source={require("../assets/perfume-1.png")}
              />
              <Text style={[styles.text, styles.textTypo]}>40</Text>
            </View>
            <View style={[styles.sun1Parent, styles.parentPosition]}>
              <Image
                style={styles.ringCase1}
                contentFit="cover"
                source={require("../assets/coin-4.png")}
              />
              <Text style={[styles.text, styles.textTypo]}>56</Text>
            </View>
            <View style={[styles.mg1Parent, styles.parentPosition]}>
              <Image
                style={styles.ringCase1}
                contentFit="cover"
                source={require("../assets/love-1.png")}
              />
              <Text style={[styles.text, styles.textTypo]}>80</Text>
            </View>
            <View style={[styles.iceCream1Parent, styles.parentPosition]}>
              <Image
                style={styles.ringCase1}
                contentFit="cover"
                source={require("../assets/cupid-1.png")}
              />
              <Text style={[styles.text, styles.textTypo]}>240</Text>
            </View>
            <View style={[styles.heartChocolate2Parent, styles.parentPosition]}>
              <Image
                style={styles.ringCase1}
                contentFit="cover"
                source={require("../assets/diamond-1-1.png")}
              />
              <Text style={[styles.text, styles.textTypo]}>560</Text>
            </View>
            <View style={[styles.heartChain1Parent, styles.parentPosition]}>
              <Image
                style={styles.ringCase1}
                contentFit="cover"
                source={require("../assets/car-1-1.png")}
              />
              <Text style={[styles.text, styles.textTypo]}>880</Text>
            </View>
            <View style={[styles.castle1Parent, styles.parentPosition]}>
              <Image
                style={styles.ringCase1}
                contentFit="cover"
                source={require("../assets/car2-1.png")}
              />
              <Text style={[styles.text, styles.textTypo]}>800</Text>
            </View>
          </View>
        </ScrollView>
        <Text style={[styles.giftRecieved, styles.textFlexBox]}>
          Gift recieved
        </Text>
      </View>
      <View style={styles.parent}>
        <Text style={[styles.text16, styles.text16FlexBox]}>150</Text>
        <Image
          style={[styles.ellipseIcon, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-74.png")}
        />
        <Image
          style={[styles.groupChild1, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-75.png")}
        />
        <Image
          style={[styles.groupChild2, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-761.png")}
        />
        <Image
          style={[styles.groupChild3, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-771.png")}
        />
        <Pressable
          style={[
            styles.materialSymbolscancelRounde,
            styles.icbaselineEmojiEmotionsIconLayout,
          ]}
          onPress={() => navigation.navigate("LiveAudiolive")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/materialsymbolscancelrounded.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameScrollViewContent: {
    flexDirection: "column",
  },
  groupItemPosition: {
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  searchLayout: {
    height: 50,
    width: 262,
    position: "absolute",
  },
  icbaselineEmojiEmotionsIconLayout: {
    height: 24,
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "center",
    color: Color.black,
  },
  iconLayout: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupItemLayout: {
    height: 30,
    width: 127,
  },
  text16FlexBox: {
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  groupItemBorder: {
    borderStyle: "solid",
    position: "absolute",
  },
  groupInnerPosition: {
    height: 245,
    bottom: 0,
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  parentPosition: {
    alignItems: "center",
    top: 0,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
  },
  frameLayout: {
    height: 75,
    width: 352,
  },
  groupChildLayout: {
    width: "14.44%",
    height: 26,
    maxWidth: "100%",
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  iphone13ProMax43Child: {
    backgroundColor: Color.gray_400,
    width: 428,
    height: 143,
    position: "absolute",
  },
  iphone13ProMax43Item: {
    top: "0%",
    bottom: "0%",
    backgroundColor: Color.white,
    left: "0%",
    right: "0%",
    position: "absolute",
  },
  icbaselineEmojiEmotionsIcon: {
    left: 9,
    width: 24,
    top: 13,
    overflow: "hidden",
  },
  typeInHere: {
    left: 61,
    fontFamily: FontFamily.quicksandMedium,
    fontWeight: "500",
    lineHeight: 24,
    color: Color.black,
    fontSize: FontSize.fontsRegularCaption12_size,
    position: "absolute",
    top: 13,
  },
  searchScreen: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.white,
    left: 0,
    top: 0,
    width: 262,
  },
  searchScreenWrapper: {
    top: 858,
    left: 18,
  },
  iphone13ProMax43Inner: {
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
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
  },
  groupItem: {
    borderColor: "#0fa958",
    borderWidth: 2,
    height: 30,
    width: 127,
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
  },
  ellipseParent: {
    top: 27,
    left: 22,
    position: "absolute",
  },
  groupInner: {
    borderTopLeftRadius: Border.br_xl,
    borderTopRightRadius: Border.br_xl,
    backgroundColor: Color.white,
  },
  linePressable: {
    width: "25%",
    right: "37.5%",
    bottom: 233,
    left: "37.5%",
    borderColor: "#000",
    borderTopWidth: 2,
    height: 2,
  },
  ringCase1: {
    width: 60,
    height: 60,
  },
  text: {
    fontSize: FontSize.size_3xs,
    marginTop: 2,
    textAlign: "center",
    color: Color.black,
  },
  ringCase1Parent: {
    left: 0,
  },
  sun1Parent: {
    left: 78,
  },
  mg1Parent: {
    left: 156,
  },
  iceCream1Parent: {
    left: 234,
  },
  heartChocolate2Parent: {
    left: 312,
  },
  heartChain1Parent: {
    left: 390,
  },
  castle1Parent: {
    left: 468,
  },
  burj1Parent: {
    left: 546,
  },
  bed1Parent: {
    left: 624,
  },
  frameContainer: {
    marginTop: 12,
  },
  frameParent: {
    right: "1.11%",
    bottom: 41,
    left: "1.11%",
    position: "absolute",
    width: "100%",
  },
  giftRecieved: {
    bottom: 203,
    left: "2.78%",
    fontFamily: FontFamily.quicksandMedium,
    fontWeight: "500",
    lineHeight: 24,
    color: Color.black,
    fontSize: FontSize.fontsRegularCaption12_size,
    position: "absolute",
  },
  text16: {
    top: 7,
    left: "71.03%",
    fontWeight: "900",
    fontFamily: FontFamily.nunitoBlack,
    fontSize: FontSize.fontsRegularCaption12_size,
    textAlign: "left",
  },
  ellipseIcon: {
    right: "85.56%",
    left: "0%",
  },
  groupChild1: {
    right: "67.96%",
    left: "17.59%",
  },
  groupChild2: {
    right: "50.19%",
    left: "35.37%",
  },
  groupChild3: {
    right: "32.41%",
    left: "53.15%",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  materialSymbolscancelRounde: {
    left: "86.67%",
    top: 1,
    width: "13.33%",
    right: "0%",
  },
  parent: {
    width: "50%",
    top: 29,
    right: "5%",
    left: "45%",
    height: 26,
    position: "absolute",
  },
  iphone13ProMax43: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone13ProMax43;
