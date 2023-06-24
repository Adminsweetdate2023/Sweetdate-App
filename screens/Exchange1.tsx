import * as React from "react";
import { ScrollView, StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const Exchange1 = () => {
  const navigation = useNavigation();

  return (
    <ScrollView
      style={[styles.exchange, styles.iconLayout]}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.exchangeScrollViewContent}
    >
      <View style={styles.rectangleParent}>
        <View style={styles.groupChild} />
        <Pressable
          style={[
            styles.materialSymbolsarrowBackIo,
            styles.materialSymbolsarrowBackIoLayout,
          ]}
          onPress={() => navigation.navigate("Exchange2")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/materialsymbolsarrowbackiosrounded.png")}
          />
        </Pressable>
        <Text style={styles.exchange1}>Exchange</Text>
      </View>
      <View style={styles.rectangleGroup}>
        <View style={styles.groupItem} />
        <View style={styles.rectangleContainer}>
          <View style={styles.groupInner} />
          <Text style={[styles.text, styles.textTypo]}>=$1200</Text>
          <Image
            style={[styles.materialSymbolshelpOutlineIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/materialsymbolshelpoutline.png")}
          />
        </View>
        <Image
          style={styles.coin1Icon}
          contentFit="cover"
          source={require("../assets/coin-1.png")}
        />
        <Text style={[styles.text1, styles.textTypo]}>10654</Text>
        <Image
          style={[
            styles.mdiclipboardTextHistoryOutIcon,
            styles.materialSymbolsarrowBackIoLayout,
          ]}
          contentFit="cover"
          source={require("../assets/mdiclipboardtexthistoryoutline.png")}
        />
      </View>
      <Pressable
        style={styles.groupPressable}
        onPress={() => navigation.navigate("Exchange")}
      >
        <View style={styles.groupChild1ShadowBox} />
        <Text style={[styles.amountToExchange, styles.withdrawTypo]}>
          Amount to exchange
        </Text>
      </Pressable>
      <View style={styles.groupPressable}>
        <View style={styles.groupChild1ShadowBox} />
        <Text style={[styles.withdraw, styles.withdrawTypo]}>WITHDRAW</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  exchangeScrollViewContent: {
    flexDirection: "column",
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 23,
  },
  iconLayout: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  materialSymbolsarrowBackIoLayout: {
    height: 24,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.nunitoBlack,
    fontWeight: "900",
    color: Color.crimson_200,
    textAlign: "left",
    position: "absolute",
  },
  withdrawTypo: {
    textAlign: "center",
    top: 20,
    fontWeight: "600",
    textTransform: "uppercase",
    fontSize: FontSize.fontsBoldHeading16B_size,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.white,
    borderRadius: Border.br_xl,
    left: "0%",
    right: "0%",
    top: 0,
    position: "absolute",
    height: 61,
    width: "100%",
  },
  icon: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
  },
  materialSymbolsarrowBackIo: {
    left: "5.84%",
    top: 18,
    right: "88.55%",
    width: "5.61%",
  },
  exchange1: {
    top: 23,
    left: "37.15%",
    color: Color.black,
    textAlign: "left",
    fontWeight: "600",
    textTransform: "uppercase",
    fontSize: FontSize.fontsBoldHeading16B_size,
    fontFamily: FontFamily.nunitoSemibold,
    position: "absolute",
  },
  rectangleParent: {
    height: 61,
    alignSelf: "stretch",
  },
  groupItem: {
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_3xs,
    height: 157,
    backgroundColor: Color.white,
    left: "0%",
    right: "0%",
    top: 0,
    position: "absolute",
    width: "100%",
  },
  groupInner: {
    backgroundColor: Color.black,
    height: 18,
    borderRadius: Border.br_xl,
    left: "0%",
    right: "0%",
    top: 0,
    position: "absolute",
    width: "100%",
  },
  text: {
    width: "74.61%",
    left: "5.26%",
    fontSize: FontSize.size_3xs,
    textTransform: "capitalize",
    display: "flex",
    alignItems: "center",
    color: Color.crimson_200,
    height: 18,
    top: 0,
    fontFamily: FontFamily.nunitoBlack,
    fontWeight: "900",
  },
  materialSymbolshelpOutlineIcon: {
    width: "21.05%",
    top: 1,
    right: "3.51%",
    left: "75.44%",
    height: 15,
    position: "absolute",
  },
  rectangleContainer: {
    width: "19.86%",
    top: 107,
    right: "40.14%",
    left: "40%",
    height: 18,
    position: "absolute",
  },
  coin1Icon: {
    top: 37,
    left: 53,
    width: 40,
    height: 40,
    position: "absolute",
  },
  text1: {
    top: 41,
    left: "41.87%",
    fontSize: FontSize.size_5xl,
    color: Color.crimson_200,
  },
  mdiclipboardTextHistoryOutIcon: {
    top: 45,
    right: 53,
    width: 20,
    overflow: "hidden",
    height: 24,
  },
  rectangleGroup: {
    marginTop: 14,
    height: 157,
    alignSelf: "stretch",
  },
  groupChild1ShadowBox: {
    elevation: 7,
    shadowRadius: 7,
    height: 63,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.white,
    left: "0%",
    right: "0%",
    top: 0,
    position: "absolute",
    width: "100%",
  },
  amountToExchange: {
    left: "19.79%",
    fontStyle: "italic",
    fontFamily: FontFamily.nunitoSemiboldItalic,
    color: Color.crimson_200,
  },
  groupPressable: {
    height: 63,
    marginTop: 14,
    alignSelf: "stretch",
  },
  withdraw: {
    left: "35.48%",
    color: "rgba(217, 27, 36, 0.5)",
    fontFamily: FontFamily.nunitoSemibold,
    top: 20,
  },
  exchange: {
    backgroundColor: Color.whitesmoke_200,
    flex: 1,
    width: "100%",
    maxWidth: "100%",
  },
});

export default Exchange1;
