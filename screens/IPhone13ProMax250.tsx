import * as React from "react";
import { ScrollView, StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const IPhone13ProMax250 = () => {
  const navigation = useNavigation();

  return (
    <ScrollView
      style={[styles.iphone13ProMax250, styles.iconLayout]}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.iPhone13ProMax250Content}
    >
      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.groupChildPosition1]} />
        <Pressable
          style={styles.materialSymbolsarrowBackIo}
          onPress={() => navigation.navigate("Exchange")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/materialsymbolsarrowbackiosrounded.png")}
          />
        </Pressable>
        <Text style={[styles.exchange, styles.exchangeFlexBox]}>Exchange</Text>
      </View>
      <View style={styles.groupParent}>
        <View style={[styles.rectangleGroup, styles.rectanglePosition]}>
          <View style={[styles.groupItem, styles.groupChildPosition]} />
          <Text style={[styles.addAnotherPayoneer, styles.addTypo]}>
            ADD ANOTHER PAYONEER ACCOUNT
          </Text>
        </View>
        <View
          style={[styles.rectangleContainer, styles.rectangleParentPosition]}
        >
          <View style={[styles.groupInner, styles.groupChildPosition]} />
          <Text style={styles.rexxdavegmailcom}>Rexxdave@gmail.com</Text>
        </View>
        <View style={[styles.groupView, styles.viewLayout]}>
          <View style={[styles.rectangleView, styles.viewLayout]} />
          <Text style={[styles.payoneerWallet, styles.payoneerWalletTypo]}>
            Payoneer Wallet
          </Text>
          <Image
            style={[
              styles.materialSymbolsarrowDropUpIcon,
              styles.materialIconLayout,
            ]}
            contentFit="cover"
            source={require("../assets/materialsymbolsarrowdropup.png")}
          />
        </View>
      </View>
      <View style={styles.groupContainer}>
        <View style={[styles.rectangleParent1, styles.rectanglePosition]}>
          <View style={[styles.groupChild1, styles.groupChildPosition]} />
          <Text style={[styles.addAnotherBank, styles.addTypo]}>
            ADD ANOTHER Bank ACCOUNT
          </Text>
        </View>
        <View style={[styles.rectangleParent2, styles.rectangleParentPosition]}>
          <View style={[styles.groupChild2, styles.groupChildPosition]} />
          <Text style={[styles.silvergateBank, styles.text1Typo]}>
            Silvergate bank
          </Text>
        </View>
        <View style={[styles.rectangleParent3, styles.rectangleParentPosition]}>
          <View style={[styles.groupChild3, styles.groupChildPosition]} />
          <Text style={[styles.silvergateBank, styles.text1Typo]}>
            321456737333
          </Text>
        </View>
        <View style={[styles.rectangleParent4, styles.rectangleParentPosition]}>
          <View style={[styles.groupChild4, styles.groupChildPosition]} />
          <Text style={[styles.text1, styles.text1FlexBox]}>124353536</Text>
        </View>
        <View style={[styles.groupView, styles.viewLayout]}>
          <View style={[styles.rectangleView, styles.viewLayout]} />
          <Text style={[styles.bankWithdrawal, styles.text1FlexBox]}>
            Bank Withdrawal
          </Text>
          <Image
            style={[
              styles.materialSymbolsarrowDropUpIcon,
              styles.materialIconLayout,
            ]}
            contentFit="cover"
            source={require("../assets/materialsymbolsarrowdropup.png")}
          />
        </View>
      </View>
      <View style={styles.rectangleParent6}>
        <View style={[styles.groupChild6, styles.groupChildPosition]} />
        <Text style={styles.paypal}>PAYPAL</Text>
        <Image
          style={[
            styles.materialSymbolsarrowDropDoIcon,
            styles.materialIconLayout,
          ]}
          contentFit="cover"
          source={require("../assets/materialsymbolsarrowdropdownrounded.png")}
        />
      </View>
      <Pressable
        style={styles.groupPressable}
        onPress={() => navigation.navigate("IPhone13ProMax251")}
      >
        <View style={[styles.groupChild7, styles.groupChildPosition]} />
        <Text style={[styles.confirm, styles.confirmTypo]}>CONFIRM</Text>
      </Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  iPhone13ProMax250Content: {
    flexDirection: "column",
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 23,
  },
  iconLayout: {
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%",
  },
  groupChildPosition1: {
    backgroundColor: Color.white,
    left: "0%",
    right: "0%",
    top: 0,
    width: "100%",
  },
  exchangeFlexBox: {
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  rectanglePosition: {
    left: "0%",
    right: "0%",
    top: 0,
    position: "absolute",
    width: "100%",
  },
  groupChildPosition: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_3xs,
    left: "0%",
    right: "0%",
    top: 0,
    position: "absolute",
    width: "100%",
  },
  addTypo: {
    color: Color.crimson_200,
    fontSize: FontSize.fontsRegularCaption12_size,
    fontFamily: FontFamily.nunitoSemiboldItalic,
    fontStyle: "italic",
    left: "3.7%",
    textAlign: "left",
    fontWeight: "600",
    textTransform: "uppercase",
    position: "absolute",
  },
  rectangleParentPosition: {
    right: "3.7%",
    width: "92.59%",
    left: "3.7%",
  },
  viewLayout: {
    height: 37,
    position: "absolute",
  },
  payoneerWalletTypo: {
    fontFamily: FontFamily.nunitoBlack,
    fontWeight: "900",
    fontSize: FontSize.size_mini,
    left: "1.14%",
  },
  materialIconLayout: {
    height: 15,
    position: "absolute",
    maxWidth: "100%",
    overflow: "hidden",
  },
  text1Typo: {
    left: "5.43%",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.nunitoSemiboldItalic,
    fontStyle: "italic",
    fontWeight: "600",
    textTransform: "uppercase",
  },
  text1FlexBox: {
    alignItems: "center",
    display: "flex",
    width: "78.29%",
    top: 8,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  confirmTypo: {
    fontFamily: FontFamily.nunitoSemibold,
    fontWeight: "600",
    textTransform: "uppercase",
    fontSize: FontSize.fontsBoldHeading16B_size,
  },
  groupChild: {
    borderRadius: Border.br_xl,
    position: "absolute",
    height: 61,
  },
  icon: {
    height: "100%",
  },
  materialSymbolsarrowBackIo: {
    left: "5.84%",
    top: 18,
    right: "88.55%",
    width: "5.61%",
    height: 24,
    position: "absolute",
  },
  exchange: {
    top: 23,
    left: "37.15%",
    fontFamily: FontFamily.nunitoSemibold,
    fontWeight: "600",
    textTransform: "uppercase",
    fontSize: FontSize.fontsBoldHeading16B_size,
  },
  rectangleParent: {
    height: 61,
    alignSelf: "stretch",
  },
  groupItem: {
    elevation: 4,
    shadowRadius: 4,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.white,
    height: 159,
  },
  addAnotherPayoneer: {
    top: 116,
  },
  rectangleGroup: {
    height: 159,
  },
  groupInner: {
    height: 36,
    elevation: 4,
    shadowRadius: 4,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.white,
  },
  rexxdavegmailcom: {
    left: "4.57%",
    fontSize: FontSize.size_sm,
    top: 8,
    fontFamily: FontFamily.nunitoSemiboldItalic,
    fontStyle: "italic",
    textAlign: "left",
    color: Color.black,
    fontWeight: "600",
    textTransform: "uppercase",
    position: "absolute",
  },
  rectangleContainer: {
    top: 63,
    height: 36,
    position: "absolute",
  },
  rectangleView: {
    borderStyle: "solid",
    borderColor: "#000",
    borderBottomWidth: 1,
    backgroundColor: Color.white,
    left: "0%",
    right: "0%",
    top: 0,
    width: "100%",
  },
  payoneerWallet: {
    top: 11,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  materialSymbolsarrowDropUpIcon: {
    width: "4.29%",
    top: 13,
    right: "3.71%",
    left: "92%",
  },
  groupView: {
    top: 1,
    right: "3.7%",
    width: "92.59%",
    left: "3.7%",
  },
  groupParent: {
    marginTop: 14,
    height: 159,
    alignSelf: "stretch",
  },
  groupChild1: {
    height: 229,
    elevation: 4,
    shadowRadius: 4,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.white,
  },
  addAnotherBank: {
    top: 188,
  },
  rectangleParent1: {
    height: 229,
  },
  groupChild2: {
    height: 36,
    elevation: 4,
    shadowRadius: 4,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.white,
  },
  silvergateBank: {
    top: 8,
    left: "5.43%",
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  rectangleParent2: {
    top: 54,
    height: 36,
    position: "absolute",
  },
  groupChild3: {
    height: 36,
    elevation: 4,
    shadowRadius: 4,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.white,
  },
  rectangleParent3: {
    top: 98,
    height: 36,
    position: "absolute",
  },
  groupChild4: {
    height: 36,
    elevation: 4,
    shadowRadius: 4,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.white,
  },
  text1: {
    height: 19,
    left: "5.43%",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.nunitoSemiboldItalic,
    fontStyle: "italic",
    fontWeight: "600",
    textTransform: "uppercase",
  },
  rectangleParent4: {
    top: 141,
    height: 36,
    position: "absolute",
  },
  bankWithdrawal: {
    height: 26,
    fontFamily: FontFamily.nunitoBlack,
    fontWeight: "900",
    fontSize: FontSize.size_mini,
    left: "1.14%",
  },
  groupContainer: {
    height: 229,
    marginTop: 14,
    alignSelf: "stretch",
  },
  groupChild6: {
    height: 36,
    elevation: 4,
    shadowRadius: 4,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.white,
  },
  paypal: {
    top: 6,
    fontFamily: FontFamily.nunitoSemiboldItalic,
    fontStyle: "italic",
    left: "3.7%",
    textAlign: "left",
    color: Color.black,
    fontWeight: "600",
    textTransform: "uppercase",
    fontSize: FontSize.fontsBoldHeading16B_size,
    position: "absolute",
  },
  materialSymbolsarrowDropDoIcon: {
    width: "3.97%",
    top: 10,
    right: "7.14%",
    left: "88.89%",
  },
  rectangleParent6: {
    height: 36,
    marginTop: 14,
    alignSelf: "stretch",
  },
  groupChild7: {
    backgroundColor: Color.crimson_200,
    shadowRadius: 7,
    elevation: 7,
    height: 63,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_3xs,
  },
  confirm: {
    top: 20,
    left: "38.55%",
    color: Color.white,
    textAlign: "center",
    position: "absolute",
  },
  groupPressable: {
    width: 320,
    height: 63,
    marginTop: 14,
  },
  iphone13ProMax250: {
    backgroundColor: Color.whitesmoke_200,
    flex: 1,
  },
});

export default IPhone13ProMax250;
