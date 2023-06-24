import * as React from "react";
import { Text, StyleSheet, View, Pressable, ScrollView } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Photo21 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.photo2}>
      <Text style={[styles.receivedGifts, styles.giftsTypo]}>
        Received gifts
      </Text>
      <Text style={[styles.sentGifts, styles.giftsTypo]}>Sent gifts</Text>
      <Text style={[styles.youHaveNotContainer, styles.textFlexBox]}>
        <Text style={styles.youHaveNot}>{`You have not sent any gifts yet.
`}</Text>
        <Text style={styles.giftTypo}>Send a gift and keep it fun.</Text>
      </Text>
      <View style={[styles.rectangleParent, styles.groupChildPosition]}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <Text style={[styles.giftHistory, styles.giftTypo]}>Gift history</Text>
        <Pressable
          style={styles.vector}
          onPress={() => navigation.navigate("Photo25")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/vector1.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.icons8Coin481Parent, styles.icons8Layout]}
          onPress={() => navigation.navigate("Photo2")}
        >
          <Image
            style={[styles.icons8Coin481, styles.icons8Layout]}
            contentFit="cover"
            source={require("../assets/icons8coin48-1.png")}
          />
          <Text style={[styles.text, styles.textFlexBox]}>0</Text>
        </Pressable>
      </View>
      <ScrollView
        style={styles.frameParent}
        horizontal
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.frameScrollViewContent}
      >
        <View style={styles.ringCase1Wrapper}>
          <Image
            style={styles.ringCase1}
            contentFit="cover"
            source={require("../assets/ring-case-1.png")}
          />
        </View>
        <View style={styles.sun1Wrapper}>
          <Image
            style={styles.ringCase1}
            contentFit="cover"
            source={require("../assets/sun-1.png")}
          />
        </View>
        <View style={styles.sun1Wrapper}>
          <Image
            style={styles.ringCase1}
            contentFit="cover"
            source={require("../assets/mg-1.png")}
          />
        </View>
        <View style={styles.sun1Wrapper}>
          <Image
            style={styles.ringCase1}
            contentFit="cover"
            source={require("../assets/ice-cream-1.png")}
          />
        </View>
        <View style={styles.sun1Wrapper}>
          <Image
            style={styles.ringCase1}
            contentFit="cover"
            source={require("../assets/heart-chocolate-2.png")}
          />
        </View>
        <View style={styles.sun1Wrapper}>
          <Image
            style={styles.ringCase1}
            contentFit="cover"
            source={require("../assets/heart-chain-1.png")}
          />
        </View>
        <View style={styles.sun1Wrapper}>
          <Image
            style={styles.ringCase1}
            contentFit="cover"
            source={require("../assets/castle-1.png")}
          />
        </View>
        <View style={styles.sun1Wrapper}>
          <Image
            style={styles.ringCase1}
            contentFit="cover"
            source={require("../assets/burj-1.png")}
          />
        </View>
        <View style={styles.sun1Wrapper}>
          <Image
            style={styles.ringCase1}
            contentFit="cover"
            source={require("../assets/bed-1.png")}
          />
        </View>
      </ScrollView>
      <ScrollView
        style={styles.frameGroup}
        horizontal
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.frameScrollView1Content}
      >
        <View style={styles.frameLayout}>
          <View style={styles.ringCase1Parent}>
            <Image
              style={styles.ringCase1}
              contentFit="cover"
              source={require("../assets/ring-case-1.png")}
            />
            <Text style={[styles.text1, styles.giftTypo]}>500</Text>
          </View>
          <View style={styles.sun1Parent}>
            <Image
              style={styles.ringCase1}
              contentFit="cover"
              source={require("../assets/sun-1.png")}
            />
            <Text style={[styles.text1, styles.giftTypo]}>900</Text>
          </View>
          <View style={styles.mg1Parent}>
            <Image
              style={styles.ringCase1}
              contentFit="cover"
              source={require("../assets/mg-1.png")}
            />
            <Text style={[styles.text1, styles.giftTypo]}>600</Text>
          </View>
          <View style={styles.iceCream1Parent}>
            <Image
              style={styles.ringCase1}
              contentFit="cover"
              source={require("../assets/ice-cream-1.png")}
            />
            <Text style={[styles.text1, styles.giftTypo]}>200</Text>
          </View>
          <View style={styles.heartChocolate2Parent}>
            <Image
              style={styles.ringCase1}
              contentFit="cover"
              source={require("../assets/heart-chocolate-2.png")}
            />
            <Text style={[styles.text1, styles.giftTypo]}>400</Text>
          </View>
          <View style={styles.heartChain1Parent}>
            <Image
              style={styles.ringCase1}
              contentFit="cover"
              source={require("../assets/heart-chain-1.png")}
            />
            <Text style={[styles.text1, styles.giftTypo]}>1300</Text>
          </View>
          <View style={styles.castle1Parent}>
            <Image
              style={styles.ringCase1}
              contentFit="cover"
              source={require("../assets/castle-1.png")}
            />
            <Text style={[styles.text1, styles.giftTypo]}>1200</Text>
          </View>
          <View style={styles.burj1Parent}>
            <Image
              style={styles.ringCase1}
              contentFit="cover"
              source={require("../assets/burj-1.png")}
            />
            <Text style={[styles.text1, styles.giftTypo]}>1500</Text>
          </View>
          <View style={styles.bed1Parent}>
            <Image
              style={styles.ringCase1}
              contentFit="cover"
              source={require("../assets/bed-1.png")}
            />
            <Text style={[styles.text1, styles.giftTypo]}>800</Text>
          </View>
        </View>
        <View style={[styles.frameView, styles.frameLayout]}>
          <View style={styles.ringCase1Parent}>
            <Image
              style={styles.ringCase1}
              contentFit="cover"
              source={require("../assets/perfume-1.png")}
            />
            <Text style={[styles.text1, styles.giftTypo]}>50</Text>
          </View>
          <View style={styles.sun1Parent}>
            <Image
              style={styles.ringCase1}
              contentFit="cover"
              source={require("../assets/coin-4.png")}
            />
            <Text style={[styles.text1, styles.giftTypo]}>70</Text>
          </View>
          <View style={styles.mg1Parent}>
            <Image
              style={styles.ringCase1}
              contentFit="cover"
              source={require("../assets/love-1.png")}
            />
            <Text style={[styles.text1, styles.giftTypo]}>100</Text>
          </View>
          <View style={styles.iceCream1Parent}>
            <Image
              style={styles.ringCase1}
              contentFit="cover"
              source={require("../assets/cupid-1.png")}
            />
            <Text style={[styles.text1, styles.giftTypo]}>300</Text>
          </View>
          <View style={styles.heartChocolate2Parent}>
            <Image
              style={styles.ringCase1}
              contentFit="cover"
              source={require("../assets/diamond-1-1.png")}
            />
            <Text style={[styles.text1, styles.giftTypo]}>700</Text>
          </View>
          <View style={styles.heartChain1Parent}>
            <Image
              style={styles.ringCase1}
              contentFit="cover"
              source={require("../assets/car-1-1.png")}
            />
            <Text style={[styles.text1, styles.giftTypo]}>1100</Text>
          </View>
          <View style={styles.castle1Parent}>
            <Image
              style={styles.ringCase1}
              contentFit="cover"
              source={require("../assets/car2-1.png")}
            />
            <Text style={[styles.text1, styles.giftTypo]}>1000</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  frameScrollViewContent: {
    flexDirection: "row",
  },
  frameScrollView1Content: {
    flexDirection: "column",
  },
  giftsTypo: {
    textAlign: "left",
    color: Color.black,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    left: 29,
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "center",
    color: Color.black,
  },
  groupChildPosition: {
    height: 43,
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  giftTypo: {
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
  },
  icons8Layout: {
    height: 30,
    position: "absolute",
  },
  frameLayout: {
    height: 75,
    width: 352,
  },
  receivedGifts: {
    top: 85,
  },
  sentGifts: {
    top: 181,
  },
  youHaveNot: {
    fontWeight: "300",
    fontFamily: FontFamily.quicksandLight,
  },
  youHaveNotContainer: {
    top: 218,
    left: "26.11%",
    fontSize: FontSize.fontsRegularCaption12_size,
    textAlign: "center",
    position: "absolute",
  },
  groupChild: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    top: 0,
    backgroundColor: Color.white,
  },
  giftHistory: {
    marginLeft: -32,
    top: 14,
    left: "50%",
    textAlign: "center",
    color: Color.black,
    fontSize: FontSize.fontsRegularCaption12_size,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  vector: {
    top: 16,
    width: 9,
    height: 13,
    left: 29,
    position: "absolute",
  },
  icons8Coin481: {
    right: 11,
    borderRadius: Border.br_xl,
    width: 30,
    top: 0,
  },
  text: {
    top: 6,
    right: 0,
    display: "flex",
    justifyContent: "center",
    width: 14,
    height: 17,
    alignItems: "center",
    fontSize: FontSize.fontsRegularCaption12_size,
    textAlign: "center",
    position: "absolute",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
  },
  icons8Coin481Parent: {
    top: 7,
    right: 17,
    width: 41,
  },
  rectangleParent: {
    top: 20,
  },
  ringCase1: {
    width: 60,
    height: 60,
  },
  ringCase1Wrapper: {
    alignItems: "center",
  },
  sun1Wrapper: {
    marginLeft: 18,
    alignItems: "center",
  },
  frameParent: {
    top: 113,
    left: 24,
    position: "absolute",
    width: "100%",
  },
  text1: {
    fontSize: FontSize.size_3xs,
    marginTop: 2,
    textAlign: "center",
    color: Color.black,
  },
  ringCase1Parent: {
    left: 0,
    alignItems: "center",
    top: 0,
    position: "absolute",
  },
  sun1Parent: {
    left: 78,
    alignItems: "center",
    top: 0,
    position: "absolute",
  },
  mg1Parent: {
    left: 156,
    alignItems: "center",
    top: 0,
    position: "absolute",
  },
  iceCream1Parent: {
    left: 234,
    alignItems: "center",
    top: 0,
    position: "absolute",
  },
  heartChocolate2Parent: {
    left: 312,
    alignItems: "center",
    top: 0,
    position: "absolute",
  },
  heartChain1Parent: {
    left: 390,
    alignItems: "center",
    top: 0,
    position: "absolute",
  },
  castle1Parent: {
    left: 468,
    alignItems: "center",
    top: 0,
    position: "absolute",
  },
  burj1Parent: {
    left: 546,
    alignItems: "center",
    top: 0,
    position: "absolute",
  },
  bed1Parent: {
    left: 624,
    alignItems: "center",
    top: 0,
    position: "absolute",
  },
  frameView: {
    marginTop: 12,
  },
  frameGroup: {
    bottom: 344,
    left: "7.5%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  photo2: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Photo21;
