import * as React from "react";
import { StyleSheet, View, Pressable, Text, ScrollView } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize, Padding } from "../GlobalStyles";

const Photo245 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.photo2}>
      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.groupShadowBox]} />
        <Pressable
          style={styles.vector}
          onPress={() => navigation.navigate("Photo286")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/vector.png")}
          />
        </Pressable>
        <Text style={styles.getCoins}>Get Coins</Text>
        <View style={[styles.parent, styles.parentLayout]}>
          <Text style={[styles.text, styles.textFlexBox1]}>0</Text>
          <Image
            style={[styles.money11, styles.parentLayout]}
            contentFit="cover"
            source={require("../assets/money-1-1.png")}
          />
        </View>
      </View>
      <View style={styles.rectangleGroup}>
        <View style={[styles.groupItem, styles.groupShadowBox]} />
        <Image
          style={styles.groupInner}
          contentFit="cover"
          source={require("../assets/group-75.png")}
        />
        <Text
          style={[styles.shareEarn, styles.shareEarnTypo]}
        >{`SHARE & EARN 110 COINS`}</Text>
        <Text style={styles.shareWithA}>
          Share with a friend and earn 110 coins for free
        </Text>
        <Image
          style={styles.groupIcon}
          contentFit="cover"
          source={require("../assets/group-76.png")}
        />
      </View>
      <ScrollView
        style={styles.photo2Inner}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.frameScrollViewContent}
      >
        <View style={styles.groupParent}>
          <View style={styles.groupLayout}>
            <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
              <View
                style={[styles.rectangleView, styles.groupChildPosition1]}
              />
              <View style={[styles.groupView, styles.groupParentLayout]}>
                <View style={[styles.groupChild1, styles.groupChildPosition]} />
                <Text style={[styles.text1, styles.textTypo2]}>$70</Text>
              </View>
              <Text style={[styles.text2, styles.textTypo1]}>150</Text>
              <Image
                style={[styles.coin21, styles.coin21Layout]}
                contentFit="cover"
                source={require("../assets/coin-2-1.png")}
              />
            </View>
            <View style={[styles.groupParent1, styles.rectangleLayout]}>
              <View style={[styles.groupParent1, styles.rectangleLayout]}>
                <View
                  style={[styles.rectangleView, styles.groupChildPosition1]}
                />
              </View>
              <View style={[styles.groupView, styles.groupParentLayout]}>
                <View style={[styles.groupChild1, styles.groupChildPosition]} />
                <Text style={[styles.text1, styles.textTypo2]}>$70</Text>
              </View>
              <Text style={[styles.text2, styles.textTypo1]}>300</Text>
              <View style={styles.icons8Gift941Parent}>
                <Image
                  style={[styles.icons8Gift941, styles.icons8Layout2]}
                  contentFit="cover"
                  source={require("../assets/icons8gift94-1.png")}
                />
                <Image
                  style={[styles.icons8Coins942, styles.icons8Layout1]}
                  contentFit="cover"
                  source={require("../assets/icons8coins94-2.png")}
                />
                <Image
                  style={[styles.icons8Coins944, styles.icons8Layout1]}
                  contentFit="cover"
                  source={require("../assets/icons8coins94-41.png")}
                />
                <Image
                  style={[styles.icons8Coins943, styles.icons8Layout1]}
                  contentFit="cover"
                  source={require("../assets/icons8coins94-3.png")}
                />
                <Image
                  style={[styles.icons8Coins641, styles.icons8Layout]}
                  contentFit="cover"
                  source={require("../assets/icons8coins64-11.png")}
                />
                <Image
                  style={[styles.icons8Coins642, styles.icons8Layout]}
                  contentFit="cover"
                  source={require("../assets/icons8coins64-21.png")}
                />
                <Image
                  style={[styles.icons8Coins643, styles.icons8Layout]}
                  contentFit="cover"
                  source={require("../assets/icons8coins64-31.png")}
                />
              </View>
              <View style={[styles.rectangleParent2, styles.groupChild4Layout]}>
                <View style={[styles.groupChild4, styles.groupChild4Layout]} />
                <Text style={[styles.off, styles.offPosition]}>75% OFF</Text>
              </View>
            </View>
          </View>
          <View style={[styles.groupParent2, styles.groupLayout]}>
            <View style={[styles.groupParent1, styles.rectangleLayout]}>
              <View
                style={[styles.rectangleView, styles.groupChildPosition1]}
              />
              <View style={[styles.rectangleParent4, styles.groupParentLayout]}>
                <View style={[styles.groupChild1, styles.groupChildPosition]} />
                <Text style={[styles.text5, styles.textTypo2]}>$150</Text>
              </View>
              <Text style={[styles.text2, styles.textTypo1]}>650</Text>
              <Text style={[styles.off1, styles.off1Typo]}>15% OFF</Text>
              <Image
                style={[styles.icons8Coin661, styles.icons8Layout2]}
                contentFit="cover"
                source={require("../assets/icons8coin66-1.png")}
              />
            </View>
            <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
              <View
                style={[styles.rectangleView, styles.groupChildPosition1]}
              />
              <View style={[styles.rectangleParent4, styles.groupParentLayout]}>
                <View style={[styles.groupChild1, styles.groupChildPosition]} />
                <Text style={[styles.text5, styles.textTypo2]}>$300</Text>
              </View>
              <Text style={[styles.text8, styles.textFlexBox]}>1200</Text>
              <Text style={[styles.off1, styles.off1Typo]}>20% OFF</Text>
              <Image
                style={[styles.pile31, styles.pile31Layout]}
                contentFit="cover"
                source={require("../assets/pile-3-1.png")}
              />
            </View>
          </View>
          <View style={[styles.groupParent2, styles.groupLayout]}>
            <View style={[styles.groupParent1, styles.rectangleLayout]}>
              <View
                style={[styles.rectangleView, styles.groupChildPosition1]}
              />
              <View style={[styles.icons8Coins941, styles.offPosition]} />
              <View style={[styles.rectangleParent8, styles.groupParentLayout]}>
                <View style={[styles.groupChild1, styles.groupChildPosition]} />
                <Text style={[styles.text5, styles.textTypo2]}>$550</Text>
              </View>
              <Text style={[styles.text10, styles.textTypo]}>1700</Text>
              <Text style={[styles.off3, styles.offTypo]}>25% OFF</Text>
              <Image
                style={[styles.bag1Icon, styles.pile31Layout]}
                contentFit="cover"
                source={require("../assets/bag-1.png")}
              />
            </View>
            <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
              <View
                style={[styles.rectangleView, styles.groupChildPosition1]}
              />
              <Image
                style={[styles.icons8Coins941, styles.offPosition]}
                contentFit="cover"
                source={require("../assets/icons8coin64-11.png")}
              />
              <View style={[styles.rectangleParent8, styles.groupParentLayout]}>
                <View style={[styles.groupChild1, styles.groupChildPosition]} />
                <Text style={[styles.text5, styles.textTypo2]}>$700</Text>
              </View>
              <Text style={[styles.text10, styles.textTypo]}>2250</Text>
              <Text style={[styles.off3, styles.offTypo]}>30% OFF</Text>
            </View>
          </View>
          <View style={[styles.rectangleParent11, styles.groupChild13Layout]}>
            <View style={[styles.groupChild13, styles.groupChild13Layout]} />
            <View style={[styles.rectangleParent12, styles.groupChild14Layout]}>
              <View style={[styles.groupChild14, styles.groupChild14Layout]} />
              <Text style={[styles.text13, styles.textTypo2]}>$1050</Text>
            </View>
            <Text style={[styles.text14, styles.textTypo]}>11000</Text>
            <Text style={[styles.off5, styles.offTypo]}>35% OFF</Text>
            <Image
              style={[styles.chest1Icon, styles.coin21Layout]}
              contentFit="cover"
              source={require("../assets/chest-1.png")}
            />
          </View>
        </View>
      </ScrollView>
      <View style={[styles.rectangleParent13, styles.groupChild15Layout]}>
        <View style={[styles.groupChild15, styles.groupChild15Layout]} />
        <View style={[styles.bxsupportParent, styles.bxsupportLayout]}>
          <Image
            style={[styles.bxsupportIcon, styles.bxsupportLayout]}
            contentFit="cover"
            source={require("../assets/bxsupport.png")}
          />
          <Text style={[styles.contactUsIf, styles.off1Typo]}>
            Contact us if you have any questions
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameScrollViewContent: {
    flexDirection: "column",
  },
  groupShadowBox: {
    width: 360,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    marginLeft: -180,
    left: "50%",
    top: 0,
    position: "absolute",
    backgroundColor: Color.white,
  },
  parentLayout: {
    height: 20,
    position: "absolute",
  },
  textFlexBox1: {
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
  },
  shareEarnTypo: {
    textAlign: "left",
    fontFamily: FontFamily.quicksandBold,
  },
  rectangleLayout: {
    width: 150,
    height: 166,
    position: "absolute",
  },
  groupChildPosition1: {
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
  },
  groupParentLayout: {
    height: 30,
    width: 132,
    position: "absolute",
  },
  groupChildPosition: {
    backgroundColor: Color.gray_100,
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
  },
  textTypo2: {
    color: Color.white,
    fontFamily: FontFamily.robotoBold,
    textAlign: "center",
    fontWeight: "700",
  },
  textTypo1: {
    fontSize: FontSize.size_sm,
    top: 25,
    fontFamily: FontFamily.robotoBold,
    textAlign: "center",
    color: Color.black,
    fontWeight: "700",
    left: "50%",
    position: "absolute",
  },
  coin21Layout: {
    width: 40,
    height: 40,
    position: "absolute",
  },
  icons8Layout2: {
    width: 43,
    height: 40,
    position: "absolute",
  },
  icons8Layout1: {
    width: 21,
    height: 20,
    position: "absolute",
  },
  icons8Layout: {
    width: 32,
    height: 30,
    position: "absolute",
  },
  groupChild4Layout: {
    height: 14,
    width: 67,
    position: "absolute",
  },
  offPosition: {
    marginLeft: -20.73,
    width: 43,
    left: "50%",
    position: "absolute",
  },
  groupLayout: {
    height: 166,
    alignSelf: "stretch",
  },
  off1Typo: {
    fontSize: FontSize.size_5xs,
    color: Color.gray_600,
    fontWeight: "700",
    position: "absolute",
  },
  textFlexBox: {
    width: 35,
    marginLeft: -17.54,
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
  },
  pile31Layout: {
    height: 39,
    width: 40,
    position: "absolute",
  },
  textTypo: {
    top: 23,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.robotoBold,
    textAlign: "center",
    color: Color.black,
    fontWeight: "700",
    left: "50%",
    position: "absolute",
  },
  offTypo: {
    top: 45,
    fontSize: FontSize.size_5xs,
    color: Color.gray_600,
    fontFamily: FontFamily.robotoBold,
    textAlign: "center",
    fontWeight: "700",
    left: "50%",
    position: "absolute",
  },
  groupChild13Layout: {
    width: 141,
    height: 166,
  },
  groupChild14Layout: {
    width: 124,
    height: 30,
    position: "absolute",
  },
  groupChild15Layout: {
    height: 32,
    width: 360,
  },
  bxsupportLayout: {
    height: 24,
    position: "absolute",
  },
  groupChild: {
    height: 43,
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    width: "100%",
  },
  vector: {
    left: "8.13%",
    top: "29.93%",
    right: "88.68%",
    bottom: "43.87%",
    width: "3.19%",
    height: "26.2%",
    position: "absolute",
  },
  getCoins: {
    marginLeft: -27,
    top: 10,
    textAlign: "center",
    fontFamily: FontFamily.quicksandBold,
    color: Color.black,
    fontWeight: "700",
    fontSize: FontSize.fontsRegularCaption12_size,
    left: "50%",
    position: "absolute",
  },
  text: {
    width: 14,
    height: 17,
    fontFamily: FontFamily.robotoBold,
    textAlign: "center",
    left: 0,
    top: 1,
    display: "flex",
    color: Color.black,
    fontWeight: "700",
    fontSize: FontSize.fontsRegularCaption12_size,
    position: "absolute",
  },
  money11: {
    left: 14,
    width: 20,
    top: 0,
  },
  parent: {
    left: 293,
    width: 34,
    height: 20,
    top: 7,
  },
  rectangleParent: {
    height: 43,
    alignSelf: "stretch",
  },
  groupItem: {
    height: 71,
  },
  groupInner: {
    width: 50,
    height: 50,
    left: 28,
    top: 11,
    position: "absolute",
  },
  shareEarn: {
    top: 17,
    left: 84,
    textAlign: "left",
    color: Color.black,
    fontWeight: "700",
    fontSize: FontSize.fontsRegularCaption12_size,
    position: "absolute",
  },
  shareWithA: {
    top: 36,
    fontSize: FontSize.size_4xs,
    fontFamily: FontFamily.quicksandRegular,
    width: 173,
    color: Color.gray_600,
    textAlign: "left",
    left: 84,
    position: "absolute",
  },
  groupIcon: {
    top: 14,
    right: 28,
    width: 36,
    height: 36,
    position: "absolute",
  },
  rectangleGroup: {
    marginTop: 10,
    height: 71,
    alignSelf: "stretch",
  },
  rectangleView: {
    width: 150,
    height: 166,
    position: "absolute",
    backgroundColor: Color.white,
  },
  groupChild1: {
    height: 30,
    width: 132,
    position: "absolute",
  },
  text1: {
    width: 22,
    left: 54,
    top: 8,
    color: Color.white,
    fontSize: FontSize.fontsRegularCaption12_size,
    position: "absolute",
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
  },
  groupView: {
    top: 128,
    left: 10,
  },
  text2: {
    marginLeft: -13.29,
    width: 27,
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
  },
  coin21: {
    marginLeft: -20.05,
    top: 62,
    height: 40,
    left: "50%",
  },
  rectangleContainer: {
    left: 170,
    top: 0,
  },
  groupParent1: {
    left: 0,
    top: 0,
  },
  icons8Gift941: {
    left: 18,
    top: 11,
  },
  icons8Coins942: {
    left: 46,
    top: 11,
  },
  icons8Coins944: {
    top: 33,
    left: 10,
  },
  icons8Coins943: {
    top: 3,
    left: 28,
  },
  icons8Coins641: {
    left: 0,
    top: 0,
  },
  icons8Coins642: {
    top: 30,
    left: 45,
  },
  icons8Coins643: {
    top: 44,
    left: 32,
  },
  icons8Gift941Parent: {
    top: 52,
    left: 37,
    width: 77,
    height: 74,
    position: "absolute",
  },
  groupChild4: {
    backgroundColor: Color.blueviolet,
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
  },
  off: {
    fontSize: FontSize.size_3xs,
    color: Color.white,
    fontFamily: FontFamily.robotoBold,
    textAlign: "center",
    fontWeight: "700",
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    top: 1,
  },
  rectangleParent2: {
    left: 41,
    top: 7,
  },
  text5: {
    left: 50,
    width: 30,
    top: 8,
    color: Color.white,
    fontSize: FontSize.fontsRegularCaption12_size,
    position: "absolute",
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
  },
  rectangleParent4: {
    top: 129,
    left: 10,
  },
  off1: {
    top: 47,
    marginLeft: -16.48,
    justifyContent: "center",
    display: "flex",
    width: 34,
    alignItems: "center",
    fontFamily: FontFamily.robotoBold,
    textAlign: "center",
    left: "50%",
  },
  icons8Coin661: {
    marginLeft: -20.95,
    top: 73,
    left: "50%",
  },
  text8: {
    fontSize: FontSize.size_sm,
    top: 25,
    fontFamily: FontFamily.robotoBold,
    textAlign: "center",
    color: Color.black,
    fontWeight: "700",
    left: "50%",
    position: "absolute",
  },
  pile31: {
    left: 55,
    top: 73,
  },
  groupParent2: {
    marginTop: 36,
  },
  icons8Coins941: {
    top: 78,
    height: 40,
  },
  rectangleParent8: {
    top: 127,
    left: 10,
  },
  text10: {
    width: 35,
    marginLeft: -17.54,
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
  },
  off3: {
    marginLeft: -16.48,
    justifyContent: "center",
    display: "flex",
    width: 34,
    alignItems: "center",
  },
  bag1Icon: {
    top: 67,
    left: 54,
  },
  groupChild13: {
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.white,
  },
  groupChild14: {
    backgroundColor: Color.gray_100,
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
  },
  text13: {
    left: 44,
    top: 8,
    color: Color.white,
    fontSize: FontSize.fontsRegularCaption12_size,
    position: "absolute",
  },
  rectangleParent12: {
    left: 9,
    top: 127,
  },
  text14: {
    marginLeft: -20.5,
  },
  off5: {
    marginLeft: -15.5,
  },
  chest1Icon: {
    top: 71,
    left: 49,
    height: 40,
  },
  rectangleParent11: {
    marginTop: 36,
  },
  groupParent: {
    paddingHorizontal: Padding.p_xl,
    paddingVertical: 0,
    alignSelf: "stretch",
  },
  photo2Inner: {
    marginTop: 10,
    alignSelf: "stretch",
    flex: 1,
  },
  groupChild15: {
    borderStyle: "solid",
    borderColor: "#d6d6d6",
    borderWidth: 1,
    left: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.white,
  },
  bxsupportIcon: {
    width: 24,
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  contactUsIf: {
    left: 31,
    textAlign: "left",
    fontFamily: FontFamily.quicksandBold,
    top: 7,
  },
  bxsupportParent: {
    marginLeft: -87,
    top: 4,
    width: 174,
    left: "50%",
  },
  rectangleParent13: {
    marginTop: 10,
  },
  photo2: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_xl,
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.white,
  },
});

export default Photo245;
