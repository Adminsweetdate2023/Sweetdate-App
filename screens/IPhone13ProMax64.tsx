import * as React from "react";
import { StyleSheet, View, Text, Pressable, ScrollView } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const IPhone13ProMax64 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone13ProMax64}>
      <View style={[styles.iphone13ProMax64Child, styles.groupItemPosition]} />
      <Image
        style={styles.iphone13ProMax64Item}
        contentFit="cover"
        source={require("../assets/rectangle-193.png")}
      />
      <View style={[styles.ellipseParent, styles.groupItemLayout]}>
        <Image
          style={styles.groupChild}
          contentFit="cover"
          source={require("../assets/ellipse-291.png")}
        />
        <Text style={[styles.teeman32, styles.textTypo]}>Teeman,32</Text>
        <View style={[styles.groupItem, styles.groupItemBorder]} />
      </View>
      <View style={styles.groupInnerPosition}>
        <View style={[styles.groupInner, styles.groupInnerPosition]} />
        <Pressable
          style={[styles.linePressable, styles.groupItemBorder]}
          onPress={() => navigation.navigate("IPhone13ProMax63")}
        />
        <ScrollView
          style={styles.frameParent}
          horizontal
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.frameScrollViewContent}
        >
          <View style={styles.frameLayout}>
            <View style={[styles.ringCase1Parent, styles.parentFlexBox]}>
              <Image
                style={styles.ringCase1}
                contentFit="cover"
                source={require("../assets/ring-case-1.png")}
              />
              <Text style={[styles.text, styles.textTypo]}>400</Text>
            </View>
            <View style={[styles.sun1Parent, styles.parentFlexBox]}>
              <Image
                style={styles.ringCase1}
                contentFit="cover"
                source={require("../assets/sun-1.png")}
              />
              <Text style={[styles.text, styles.textTypo]}>720</Text>
            </View>
            <View style={[styles.mg1Parent, styles.mg1ParentPosition]}>
              <Image
                style={styles.ringCase1}
                contentFit="cover"
                source={require("../assets/mg-1.png")}
              />
              <Text style={[styles.text, styles.textTypo]}>480</Text>
            </View>
            <View style={[styles.iceCream1Parent, styles.parentFlexBox]}>
              <Image
                style={styles.ringCase1}
                contentFit="cover"
                source={require("../assets/ice-cream-1.png")}
              />
              <Text style={[styles.text, styles.textTypo]}>160</Text>
            </View>
            <View style={[styles.heartChocolate2Parent, styles.parentFlexBox]}>
              <Image
                style={styles.ringCase1}
                contentFit="cover"
                source={require("../assets/heart-chocolate-2.png")}
              />
              <Text style={[styles.text, styles.textTypo]}>320</Text>
            </View>
            <View style={[styles.heartChain1Parent, styles.parentFlexBox]}>
              <Image
                style={styles.ringCase1}
                contentFit="cover"
                source={require("../assets/heart-chain-1.png")}
              />
              <Text style={[styles.text, styles.textTypo]}>1040</Text>
            </View>
            <View style={[styles.castle1Parent, styles.parentFlexBox]}>
              <Image
                style={styles.ringCase1}
                contentFit="cover"
                source={require("../assets/castle-1.png")}
              />
              <Text style={[styles.text, styles.textTypo]}>960</Text>
            </View>
            <View style={[styles.burj1Parent, styles.parentFlexBox]}>
              <Image
                style={styles.ringCase1}
                contentFit="cover"
                source={require("../assets/burj-1.png")}
              />
              <Text style={[styles.text, styles.textTypo]}>1200</Text>
            </View>
            <View style={[styles.bed1Parent, styles.parentFlexBox]}>
              <Image
                style={styles.ringCase1}
                contentFit="cover"
                source={require("../assets/bed-1.png")}
              />
              <Text style={[styles.text, styles.textTypo]}>640</Text>
            </View>
          </View>
          <View style={[styles.frameContainer, styles.frameLayout]}>
            <View style={[styles.ringCase1Parent, styles.parentFlexBox]}>
              <Image
                style={styles.ringCase1}
                contentFit="cover"
                source={require("../assets/perfume-1.png")}
              />
              <Text style={[styles.text, styles.textTypo]}>40</Text>
            </View>
            <View style={[styles.sun1Parent, styles.parentFlexBox]}>
              <Image
                style={styles.ringCase1}
                contentFit="cover"
                source={require("../assets/coin-4.png")}
              />
              <Text style={[styles.text, styles.textTypo]}>56</Text>
            </View>
            <View style={[styles.mg1Parent, styles.mg1ParentPosition]}>
              <Image
                style={styles.ringCase1}
                contentFit="cover"
                source={require("../assets/love-1.png")}
              />
              <Text style={[styles.text, styles.textTypo]}>80</Text>
            </View>
            <View style={[styles.iceCream1Parent, styles.parentFlexBox]}>
              <Image
                style={styles.ringCase1}
                contentFit="cover"
                source={require("../assets/cupid-1.png")}
              />
              <Text style={[styles.text, styles.textTypo]}>240</Text>
            </View>
            <View style={[styles.heartChocolate2Parent, styles.parentFlexBox]}>
              <Image
                style={styles.ringCase1}
                contentFit="cover"
                source={require("../assets/diamond-1-1.png")}
              />
              <Text style={[styles.text, styles.textTypo]}>560</Text>
            </View>
            <View style={[styles.heartChain1Parent, styles.parentFlexBox]}>
              <Image
                style={styles.ringCase1}
                contentFit="cover"
                source={require("../assets/car-1-1.png")}
              />
              <Text style={[styles.text, styles.textTypo]}>880</Text>
            </View>
            <View style={[styles.castle1Parent, styles.parentFlexBox]}>
              <Image
                style={styles.ringCase1}
                contentFit="cover"
                source={require("../assets/car2-1.png")}
              />
              <Text style={[styles.text, styles.textTypo]}>800</Text>
            </View>
          </View>
        </ScrollView>
        <Text style={[styles.giftRecieved, styles.text16Typo]}>
          Gift recieved
        </Text>
      </View>
      <View style={styles.parent}>
        <Text style={[styles.text16, styles.text16Typo]}>150</Text>
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
          source={require("../assets/ellipse-76.png")}
        />
        <Image
          style={[styles.groupChild3, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-77.png")}
        />
        <Pressable
          style={[styles.materialSymbolscancelRounde, styles.mg1ParentPosition]}
          onPress={() =>
            navigation.navigate("BottomTabsRoot", { screen: "Live" })
          }
        >
          <Image
            style={styles.icon}
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
    top: 0,
    left: 0,
  },
  groupItemLayout: {
    height: 30,
    width: 127,
  },
  textTypo: {
    color: Color.black,
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
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
  parentFlexBox: {
    alignItems: "center",
    top: 0,
  },
  mg1ParentPosition: {
    left: 156,
    position: "absolute",
  },
  frameLayout: {
    height: 75,
    width: 352,
  },
  text16Typo: {
    fontSize: FontSize.fontsRegularCaption12_size,
    color: Color.black,
    position: "absolute",
  },
  groupChildLayout: {
    width: "14.44%",
    height: 26,
    maxWidth: "100%",
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  iphone13ProMax64Child: {
    backgroundColor: Color.gray_400,
    width: 428,
    height: 143,
    position: "absolute",
  },
  iphone13ProMax64Item: {
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
    textAlign: "left",
    position: "absolute",
  },
  groupItem: {
    borderColor: "#0fa958",
    borderWidth: 2,
    height: 30,
    width: 127,
    borderRadius: Border.br_3xs,
    top: 0,
    left: 0,
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
  },
  ringCase1Parent: {
    left: 0,
    alignItems: "center",
    position: "absolute",
  },
  sun1Parent: {
    left: 78,
    position: "absolute",
  },
  mg1Parent: {
    alignItems: "center",
    top: 0,
  },
  iceCream1Parent: {
    left: 234,
    position: "absolute",
  },
  heartChocolate2Parent: {
    left: 312,
    position: "absolute",
  },
  heartChain1Parent: {
    left: 390,
    position: "absolute",
  },
  castle1Parent: {
    left: 468,
    position: "absolute",
  },
  burj1Parent: {
    left: 546,
    position: "absolute",
  },
  bed1Parent: {
    left: 624,
    position: "absolute",
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
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: FontFamily.quicksandMedium,
    textAlign: "center",
  },
  text16: {
    top: 7,
    left: "71.03%",
    fontWeight: "900",
    fontFamily: FontFamily.nunitoBlack,
    textAlign: "left",
  },
  ellipseIcon: {
    right: "85.56%",
    left: "0%",
    width: "14.44%",
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
    overflow: "hidden",
    width: "100%",
  },
  materialSymbolscancelRounde: {
    top: 1,
    width: 24,
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
  iphone13ProMax64: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone13ProMax64;
