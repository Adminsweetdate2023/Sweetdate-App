import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Livegift13 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.livegift}>
      <Image
        style={styles.livegiftChild}
        contentFit="cover"
        source={require("../assets/rectangle-502.png")}
      />
      <View style={styles.groupChildPosition}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <View style={[styles.icons8Coin481Parent, styles.icons8Layout]}>
          <Image
            style={[styles.icons8Coin481, styles.icons8Layout]}
            contentFit="cover"
            source={require("../assets/icons8coin48-1.png")}
          />
          <Text style={styles.text}>0</Text>
        </View>
        <Pressable
          style={styles.groupItem}
          onPress={() => navigation.navigate("Live12")}
        />
        <ScrollView
          style={styles.frameParent}
          horizontal
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.frameScrollViewContent}
        >
          <View style={styles.frameLayout}>
            <Pressable
              style={[styles.ringCase1Parent, styles.parentPosition]}
              onPress={() => navigation.navigate("Livegift")}
            >
              <Image
                style={styles.ringCase1}
                contentFit="cover"
                source={require("../assets/ring-case-1.png")}
              />
              <Text style={styles.text1}>500</Text>
            </Pressable>
            <Pressable
              style={[styles.sun1Parent, styles.parentPosition]}
              onPress={() => navigation.navigate("Livegift1")}
            >
              <Image
                style={styles.ringCase1}
                contentFit="cover"
                source={require("../assets/sun-1.png")}
              />
              <Text style={styles.text1}>900</Text>
            </Pressable>
            <Pressable
              style={[styles.mg1Parent, styles.parentPosition]}
              onPress={() => navigation.navigate("Livegift2")}
            >
              <Image
                style={styles.ringCase1}
                contentFit="cover"
                source={require("../assets/mg-1.png")}
              />
              <Text style={styles.text1}>600</Text>
            </Pressable>
            <View style={[styles.iceCream1Parent, styles.parentPosition]}>
              <Image
                style={styles.ringCase1}
                contentFit="cover"
                source={require("../assets/ice-cream-1.png")}
              />
              <Text style={styles.text1}>200</Text>
            </View>
            <View style={[styles.heartChocolate2Parent, styles.parentPosition]}>
              <Image
                style={styles.ringCase1}
                contentFit="cover"
                source={require("../assets/heart-chocolate-2.png")}
              />
              <Text style={styles.text1}>400</Text>
            </View>
            <View style={[styles.heartChain1Parent, styles.parentPosition]}>
              <Image
                style={styles.ringCase1}
                contentFit="cover"
                source={require("../assets/heart-chain-1.png")}
              />
              <Text style={styles.text1}>1300</Text>
            </View>
            <View style={[styles.castle1Parent, styles.parentPosition]}>
              <Image
                style={styles.ringCase1}
                contentFit="cover"
                source={require("../assets/castle-1.png")}
              />
              <Text style={styles.text1}>1200</Text>
            </View>
            <View style={[styles.burj1Parent, styles.parentPosition]}>
              <Image
                style={styles.ringCase1}
                contentFit="cover"
                source={require("../assets/burj-1.png")}
              />
              <Text style={styles.text1}>1500</Text>
            </View>
            <View style={[styles.bed1Parent, styles.parentPosition]}>
              <Image
                style={styles.ringCase1}
                contentFit="cover"
                source={require("../assets/bed-1.png")}
              />
              <Text style={styles.text1}>800</Text>
            </View>
          </View>
          <View style={[styles.frameContainer, styles.frameLayout]}>
            <Pressable
              style={[styles.ringCase1Parent, styles.parentPosition]}
              onPress={() => navigation.navigate("Livegift10")}
            >
              <Image
                style={styles.ringCase1}
                contentFit="cover"
                source={require("../assets/perfume-1.png")}
              />
              <Text style={styles.text1}>50</Text>
            </Pressable>
            <Pressable
              style={[styles.sun1Parent, styles.parentPosition]}
              onPress={() => navigation.navigate("Livegift11")}
            >
              <Image
                style={styles.ringCase1}
                contentFit="cover"
                source={require("../assets/coin-4.png")}
              />
              <Text style={styles.text1}>70</Text>
            </Pressable>
            <Pressable
              style={[styles.mg1Parent, styles.parentPosition]}
              onPress={() => navigation.navigate("Livegift12")}
            >
              <Image
                style={styles.ringCase1}
                contentFit="cover"
                source={require("../assets/love-1.png")}
              />
              <Text style={styles.text1}>100</Text>
            </Pressable>
            <View style={[styles.iceCream1Parent, styles.parentPosition]}>
              <Image
                style={styles.ringCase1}
                contentFit="cover"
                source={require("../assets/cupid-1.png")}
              />
              <Text style={styles.text1}>300</Text>
            </View>
            <View style={[styles.heartChocolate2Parent, styles.parentPosition]}>
              <Image
                style={styles.ringCase1}
                contentFit="cover"
                source={require("../assets/diamond-1-1.png")}
              />
              <Text style={styles.text1}>700</Text>
            </View>
            <View style={[styles.heartChain1Parent, styles.parentPosition]}>
              <Image
                style={styles.ringCase1}
                contentFit="cover"
                source={require("../assets/car-1-1.png")}
              />
              <Text style={styles.text1}>1100</Text>
            </View>
            <View style={[styles.castle1Parent, styles.parentPosition]}>
              <Image
                style={styles.ringCase1}
                contentFit="cover"
                source={require("../assets/car2-1.png")}
              />
              <Text style={styles.text1}>1000</Text>
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
  groupChildPosition: {
    height: 245,
    bottom: 0,
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  icons8Layout: {
    height: 30,
    position: "absolute",
  },
  parentPosition: {
    top: 0,
    alignItems: "center",
    position: "absolute",
  },
  frameLayout: {
    height: 75,
    width: 352,
  },
  livegiftChild: {
    height: "100%",
    top: "0%",
    bottom: "0%",
    maxHeight: "100%",
    opacity: 0.5,
    maxWidth: "100%",
    left: "0%",
    right: "0%",
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  groupChild: {
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
    overflow: "hidden",
  },
  text: {
    width: "34.15%",
    bottom: 7,
    left: "65.85%",
    fontSize: FontSize.fontsRegularCaption12_size,
    fontFamily: FontFamily.robotoBold,
    display: "flex",
    justifyContent: "center",
    height: 17,
    alignItems: "center",
    textAlign: "center",
    color: Color.black,
    fontWeight: "700",
    position: "absolute",
  },
  icons8Coin481Parent: {
    width: "11.39%",
    right: "81.39%",
    bottom: 18,
    left: "7.22%",
  },
  groupItem: {
    width: "25.28%",
    right: "37.36%",
    bottom: 230,
    left: "37.36%",
    borderStyle: "solid",
    borderColor: "#000",
    borderTopWidth: 3,
    height: 3,
    position: "absolute",
  },
  ringCase1: {
    width: 60,
    height: 60,
  },
  text1: {
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.quicksandBold,
    marginTop: 2,
    textAlign: "center",
    color: Color.black,
    fontWeight: "700",
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
    marginLeft: -154,
    bottom: 48,
    left: "50%",
    position: "absolute",
    width: "100%",
  },
  livegift: {
    backgroundColor: Color.whitesmoke_200,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default Livegift13;
