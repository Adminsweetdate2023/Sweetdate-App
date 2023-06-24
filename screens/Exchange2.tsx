import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const Exchange2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.exchange}>
      <View style={styles.rectangleParent}>
        <View style={styles.groupChild} />
        <Pressable
          style={[
            styles.materialSymbolsarrowBackIo,
            styles.materialSymbolsarrowBackIoLayout,
          ]}
          onPress={() =>
            navigation.navigate("BottomTabsRoot", { screen: "Photo220" })
          }
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/materialsymbolsarrowbackiosrounded.png")}
          />
        </Pressable>
        <Text style={styles.exchange1}>Exchange</Text>
      </View>
      <View style={[styles.rectangleGroup, styles.groupSpaceBlock]}>
        <View style={[styles.groupItem, styles.groupItemPosition]} />
        <View style={styles.rectangleContainer}>
          <View style={styles.groupInner} />
          <Text style={[styles.text, styles.textClr]}>=$1200</Text>
          <Image
            style={[styles.materialSymbolshelpOutlineIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/materialsymbolshelpoutline1.png")}
          />
        </View>
        <Image
          style={styles.coin1Icon}
          contentFit="cover"
          source={require("../assets/coin-11.png")}
        />
        <Text style={[styles.text1, styles.textClr]}>10654</Text>
        <Image
          style={[
            styles.mdiclipboardTextHistoryOutIcon,
            styles.materialSymbolsarrowBackIoLayout,
          ]}
          contentFit="cover"
          source={require("../assets/mdiclipboardtexthistoryoutline1.png")}
        />
      </View>
      <Pressable
        style={[styles.groupPressable, styles.groupSpaceBlock]}
        onPress={() => navigation.navigate("Exchange1")}
      >
        <View style={[styles.rectangleView, styles.groupItemPosition]} />
        <Text style={[styles.exchangeRewards, styles.textClr]}>
          Exchange rewards
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  materialSymbolsarrowBackIoLayout: {
    height: 24,
    position: "absolute",
  },
  iconLayout: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupSpaceBlock: {
    marginTop: 14,
    alignSelf: "stretch",
  },
  groupItemPosition: {
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
  textClr: {
    color: Color.crimson_200,
    textAlign: "left",
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
    fontSize: FontSize.fontsBoldHeading16B_size,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.nunitoSemibold,
    fontWeight: "600",
    textTransform: "uppercase",
    position: "absolute",
  },
  rectangleParent: {
    height: 61,
    alignSelf: "stretch",
  },
  groupItem: {
    shadowRadius: 4,
    elevation: 4,
    height: 157,
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
    fontFamily: FontFamily.nunitoBlack,
    fontWeight: "900",
    color: Color.crimson_200,
    height: 18,
    top: 0,
    alignItems: "center",
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
    left: "41.88%",
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.nunitoBlack,
    fontWeight: "900",
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
    height: 157,
  },
  rectangleView: {
    shadowRadius: 7,
    elevation: 7,
    height: 63,
  },
  exchangeRewards: {
    top: 22,
    left: "17.19%",
    fontSize: FontSize.size_sm,
    color: Color.crimson_200,
    fontFamily: FontFamily.nunitoSemibold,
    fontWeight: "600",
    textTransform: "uppercase",
  },
  groupPressable: {
    height: 63,
  },
  exchange: {
    backgroundColor: Color.whitesmoke_200,
    flex: 1,
    height: 800,
    paddingHorizontal: Padding.p_xl,
    paddingTop: Padding.p_xl,
    paddingBottom: 23,
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
  },
});

export default Exchange2;
