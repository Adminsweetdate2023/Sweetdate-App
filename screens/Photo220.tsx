import * as React from "react";
import { ScrollView, StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Photo220 = () => {
  const navigation = useNavigation();

  return (
    <ScrollView
      style={styles.photo2}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.photo2ScrollViewContent}
    >
      <View style={styles.groupParent}>
        <View style={[styles.rectangleParent, styles.rectanglePosition]}>
          <View style={[styles.groupChild, styles.groupChildPosition]} />
          <Pressable
            style={styles.lineParent}
            onPress={() => navigation.navigate("Photo269")}
          >
            <View style={styles.groupItem} />
            <Image
              style={styles.icons8Coin481}
              contentFit="cover"
              source={require("../assets/icons8coin48-1.png")}
            />
            <Text style={styles.coins}>Coins</Text>
            <Text style={[styles.text, styles.textTypo]}>0</Text>
            <Image
              style={[styles.akarIconstriangleRightFill, styles.akarLayout]}
              contentFit="cover"
              source={require("../assets/akariconstrianglerightfill.png")}
            />
          </Pressable>
          <View style={[styles.lineGroup, styles.linePosition]}>
            <View style={styles.groupItem} />
            <Text style={[styles.gifts, styles.giftsTypo]}>Gifts</Text>
            <Image
              style={[styles.makigiftIcon, styles.akarLayout]}
              contentFit="cover"
              source={require("../assets/makigift1.png")}
            />
            <Image
              style={[
                styles.akarIconstriangleRightFill1,
                styles.riswapLineIconPosition,
              ]}
              contentFit="cover"
              source={require("../assets/akariconstrianglerightfill.png")}
            />
          </View>
          <Pressable
            style={[styles.lineContainer, styles.linePosition]}
            onPress={() => navigation.navigate("Exchange2")}
          >
            <View style={styles.groupItem} />
            <Text style={[styles.exchange, styles.giftsTypo]}>Exchange</Text>
            <Image
              style={[
                styles.akarIconstriangleRightFill1,
                styles.riswapLineIconPosition,
              ]}
              contentFit="cover"
              source={require("../assets/akariconstrianglerightfill.png")}
            />
            <Image
              style={[styles.riswapLineIcon, styles.lineIconLayout]}
              contentFit="cover"
              source={require("../assets/riswapline.png")}
            />
          </Pressable>
        </View>
        <View style={[styles.rectangleView, styles.groupChildPosition]} />
        <View style={[styles.rectangleGroup, styles.rectanglePosition]}>
          <View style={[styles.groupChild1, styles.groupChildShadowBox]} />
          <Text style={[styles.teeman124556, styles.teemanTypo]}>
            teeman124556
          </Text>
        </View>
        <View style={[styles.rectangleContainer, styles.rectanglePosition]}>
          <View style={[styles.groupChild2, styles.groupChildShadowBox]} />
          <Pressable
            style={[styles.parent, styles.groupPosition]}
            onPress={() => navigation.navigate("Photo270")}
          >
            <Text style={[styles.text1, styles.textTypo]}>0</Text>
            <Text style={[styles.following, styles.followingTypo]}>
              Following
            </Text>
          </Pressable>
          <Pressable
            style={[styles.group, styles.groupPosition]}
            onPress={() => navigation.navigate("Photo271")}
          >
            <Text style={[styles.text2, styles.textTypo]}>0</Text>
            <Text style={[styles.followers, styles.followingTypo]}>
              Followers
            </Text>
          </Pressable>
          <View style={[styles.groupChild3, styles.groupPosition]} />
        </View>
        <Image
          style={[styles.groupIcon, styles.indiaPosition]}
          contentFit="cover"
          source={require("../assets/group-611.png")}
        />
        <Pressable
          style={[styles.wrapper, styles.wrapperLayout]}
          onPress={() => navigation.navigate("Photo275")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/group-58.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.container, styles.wrapperLayout]}
          onPress={() => navigation.navigate("Photo219")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/group-60.png")}
          />
        </Pressable>
        <Text style={[styles.teeman30, styles.indiaPosition]}>Teeman, 30</Text>
        <Text style={[styles.india, styles.indiaPosition]}>India</Text>
      </View>
      <Text style={[styles.stories, styles.teemanTypo]}>STORIES</Text>
      <Pressable
        style={styles.frame}
        onPress={() => navigation.navigate("Moment131")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/group-5195.png")}
        />
      </Pressable>
      <ScrollView
        style={styles.frameScrollview}
        horizontal
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.frameScrollViewContent}
      >
        <Image
          style={styles.frameLayout}
          contentFit="cover"
          source={require("../assets/rectangle-69.png")}
        />
        <Image
          style={[styles.frameItem, styles.frameLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-70.png")}
        />
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  frameScrollViewContent: {
    flexDirection: "row",
  },
  photo2ScrollViewContent: {
    flexDirection: "column",
    paddingTop: 20,
  },
  rectanglePosition: {
    right: "0%",
    position: "absolute",
  },
  groupChildPosition: {
    backgroundColor: Color.brown,
    borderBottomLeftRadius: Border.br_xl,
    borderBottomRightRadius: Border.br_xl,
    top: 0,
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  textTypo: {
    height: 17,
    textAlign: "center",
    fontSize: FontSize.fontsRegularCaption12_size,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    position: "absolute",
  },
  akarLayout: {
    height: 24,
    width: "7.55%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  linePosition: {
    left: "5.83%",
    right: "5.83%",
    width: "88.33%",
    position: "absolute",
  },
  giftsTypo: {
    left: "19.18%",
    top: 16,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  riswapLineIconPosition: {
    top: 12,
    position: "absolute",
  },
  lineIconLayout: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  groupChildShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.crimson_100,
    top: 0,
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  teemanTypo: {
    fontFamily: FontFamily.quicksandBold,
    textAlign: "center",
    fontWeight: "700",
  },
  groupPosition: {
    top: 15,
    height: 17,
    position: "absolute",
  },
  followingTypo: {
    top: 2,
    fontSize: FontSize.fontsRegularCaption12_size,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    position: "absolute",
  },
  indiaPosition: {
    left: "50%",
    position: "absolute",
  },
  wrapperLayout: {
    width: 41,
    top: 106,
    height: 41,
    position: "absolute",
  },
  frameLayout: {
    height: 142,
    width: 185,
    borderTopRightRadius: Border.br_3xs,
    borderTopLeftRadius: Border.br_3xs,
  },
  nav1FlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  groupChild: {
    height: 193,
  },
  groupItem: {
    width: "100.31%",
    right: "-0.16%",
    left: "-0.16%",
    borderColor: "rgba(255, 255, 255, 0.5)",
    borderTopWidth: 1,
    height: 1,
    borderStyle: "solid",
    top: 0,
    position: "absolute",
  },
  icons8Coin481: {
    width: "9.43%",
    top: 11,
    right: "84.59%",
    height: 30,
    left: "5.97%",
    position: "absolute",
    maxWidth: "100%",
    overflow: "hidden",
  },
  coins: {
    width: "11.32%",
    left: "20.13%",
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    color: Color.white,
    fontSize: FontSize.size_sm,
    top: 18,
    position: "absolute",
  },
  text: {
    width: "4.4%",
    left: "85.22%",
    color: Color.black,
    top: 18,
    height: 17,
    textAlign: "center",
    fontSize: FontSize.fontsRegularCaption12_size,
  },
  akarIconstriangleRightFill: {
    top: 14,
    left: "90.57%",
    right: "1.89%",
    height: 24,
    width: "7.55%",
    position: "absolute",
  },
  lineParent: {
    top: 44,
    height: 41,
    left: "5.83%",
    right: "5.83%",
    width: "88.33%",
    position: "absolute",
  },
  gifts: {
    width: "9.75%",
  },
  makigiftIcon: {
    top: 13,
    right: "86.48%",
    height: 24,
    width: "7.55%",
    left: "5.97%",
    position: "absolute",
  },
  akarIconstriangleRightFill1: {
    height: 24,
    width: "7.55%",
    maxWidth: "100%",
    overflow: "hidden",
    left: "90.57%",
    right: "1.89%",
  },
  lineGroup: {
    top: 95,
    height: 37,
  },
  exchange: {
    width: "19.18%",
  },
  riswapLineIcon: {
    left: 19,
    top: 12,
    position: "absolute",
  },
  lineContainer: {
    top: 142,
    height: 36,
  },
  rectangleParent: {
    top: 299,
    height: 193,
    left: "0%",
    width: "100%",
  },
  rectangleView: {
    height: 313,
  },
  groupChild1: {
    height: 39,
    borderBottomLeftRadius: Border.br_xl,
    borderBottomRightRadius: Border.br_xl,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.crimson_100,
  },
  teeman124556: {
    width: "27.22%",
    top: 10,
    left: "36.11%",
    color: Color.white,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.quicksandBold,
    position: "absolute",
  },
  rectangleGroup: {
    width: "99.72%",
    left: "0.28%",
    height: 39,
    top: 0,
  },
  groupChild2: {
    borderRadius: Border.br_xl,
    height: 50,
  },
  text1: {
    width: "21.21%",
    color: Color.white,
    top: 0,
    left: "0%",
  },
  following: {
    width: "78.79%",
    left: "21.21%",
  },
  parent: {
    width: "18.33%",
    right: "58.33%",
    left: "23.33%",
  },
  text2: {
    width: "20.9%",
    color: Color.white,
    top: 0,
    left: "0%",
  },
  followers: {
    width: "79.1%",
    left: "20.9%",
  },
  group: {
    width: "18.61%",
    right: "23.06%",
    left: "58.33%",
  },
  groupChild3: {
    width: "0.28%",
    right: "49.86%",
    left: "49.86%",
    borderColor: "#000",
    borderRightWidth: 1,
    borderStyle: "solid",
  },
  rectangleContainer: {
    top: 274,
    height: 50,
    left: "0%",
    width: "100%",
  },
  groupIcon: {
    marginLeft: -62.33,
    top: 64,
    width: 125,
    height: 125,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    right: 56,
  },
  container: {
    left: 56,
  },
  teeman30: {
    marginLeft: -50.36,
    top: 199,
    fontSize: FontSize.size_lg,
    width: 100,
    fontFamily: FontFamily.quicksandBold,
    textAlign: "center",
    fontWeight: "700",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    color: Color.white,
  },
  india: {
    marginLeft: -17.45,
    top: 222,
    color: Color.gray_500,
    width: 34,
    fontFamily: FontFamily.quicksandBold,
    textAlign: "center",
    fontWeight: "700",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.size_sm,
  },
  groupParent: {
    height: 492,
    width: 360,
  },
  stories: {
    marginTop: 10,
    color: Color.black,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.quicksandBold,
  },
  frame: {
    width: 307,
    height: 71,
    marginTop: 10,
  },
  frameItem: {
    marginLeft: 9,
  },
  frameScrollview: {
    marginTop: 10,
    width: "100%",
  },
  photo2: {
    flex: 1,
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Photo220;
