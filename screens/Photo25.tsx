import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, TextInput, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Photo25 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.photo2}>
      <Image
        style={[styles.photo2Child, styles.groupItemLayout]}
        contentFit="cover"
        source={require("../assets/group-2211.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.groupChildBorder]} />
        <Image
          style={[styles.groupItem, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/group-2221.png")}
        />
        <Pressable
          style={styles.makigift}
          onPress={() => navigation.navigate("Photo21")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/makigift1.png")}
          />
        </Pressable>
        <TextInput
          style={styles.typeSomethingSweet}
          placeholder="Type something sweet...."
          keyboardType="default"
          placeholderTextColor="rgba(0, 0, 0, 0.5)"
        />
      </View>
      <Image
        style={styles.photo2Item}
        contentFit="cover"
        source={require("../assets/group-227.png")}
      />
      <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
        <View style={styles.groupInner} />
        <Text style={[styles.ringMe, styles.ringMeFlexBox]}>Ring me</Text>
        <Text style={[styles.text, styles.textTypo1]}>20:21</Text>
      </View>
      <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
        <View style={[styles.rectangleView, styles.groupChild2Position]} />
        <Text style={[styles.youGood, styles.textTypo]}>You good?</Text>
        <Text style={[styles.text1, styles.textTypo]}>20:21</Text>
      </View>
      <View style={[styles.groupView, styles.groupChildLayout]}>
        <View style={[styles.groupChild1, styles.groupChildLayout]} />
        <Text style={[styles.ringMe, styles.ringMeFlexBox]}>
          We can talk here
        </Text>
        <Text style={[styles.text2, styles.textTypo1]}>20:21</Text>
      </View>
      <View style={[styles.rectangleParent1, styles.groupChildLayout]}>
        <View style={[styles.groupChild2, styles.groupChildLayout]} />
        <Text style={[styles.heyHowAre, styles.textTypo]}>
          Hey, how are you doing?
        </Text>
        <Text style={[styles.text3, styles.textTypo]}>20:21</Text>
      </View>
      <View style={[styles.photo2Inner, styles.groupChildBorder]} />
      <Image
        style={styles.ellipseIcon}
        contentFit="cover"
        source={require("../assets/ellipse-42.png")}
      />
      <Text style={[styles.alexa30, styles.ringMeFlexBox]}>Alexa, 30</Text>
      <Pressable
        style={[
          styles.solarvideocameraRecordBold,
          styles.charmmenuKebabPosition,
        ]}
        onPress={() => navigation.navigate("Connect2")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/solarvideocamerarecordbold.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.charmmenuKebab, styles.charmmenuKebabPosition]}
        onPress={() => navigation.navigate("Photo24")}
      >
        <Image
          style={[styles.icon2, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/charmmenukebab.png")}
        />
      </Pressable>
      <Pressable
        style={styles.vector}
        onPress={() =>
          navigation.navigate("BottomTabsRoot", { screen: "Photo26" })
        }
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  groupItemLayout: {
    height: 26,
    position: "absolute",
  },
  iconLayout1: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupChildBorder: {
    borderColor: "#d9d9d9",
    borderStyle: "solid",
    position: "absolute",
    backgroundColor: Color.white,
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  rectangleLayout: {
    height: 33,
    width: 93,
    position: "absolute",
  },
  ringMeFlexBox: {
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  textTypo1: {
    color: Color.gray_600,
    fontSize: FontSize.size_6xs,
    bottom: 1,
    textAlign: "left",
    fontFamily: FontFamily.quicksandRegular,
    position: "absolute",
  },
  groupChild2Position: {
    backgroundColor: Color.crimson_100,
    borderBottomLeftRadius: Border.br_mini,
    borderBottomRightRadius: Border.br_9xs,
    right: 0,
    borderTopLeftRadius: Border.br_mini,
    bottom: 0,
  },
  textTypo: {
    color: Color.white,
    textAlign: "left",
    fontFamily: FontFamily.quicksandRegular,
    position: "absolute",
  },
  groupChildLayout: {
    width: 163,
    height: 33,
    position: "absolute",
  },
  charmmenuKebabPosition: {
    top: 30,
    height: 24,
    position: "absolute",
  },
  photo2Child: {
    bottom: 29,
    width: 26,
    right: 15,
  },
  vectorIcon: {
    height: "3%",
    top: "93.25%",
    right: "3.06%",
    bottom: "3.75%",
    left: "90.28%",
    maxHeight: "100%",
    width: "6.67%",
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_xl,
    borderWidth: 1,
    left: 0,
    bottom: 0,
    borderColor: "#d9d9d9",
    borderStyle: "solid",
    height: 41,
    width: 268,
  },
  groupItem: {
    width: "9.7%",
    right: "2.99%",
    bottom: 7,
    left: "87.31%",
    height: 26,
    position: "absolute",
  },
  icon: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  makigift: {
    left: "6.34%",
    right: "84.7%",
    bottom: 8,
    width: "8.96%",
    height: 24,
    position: "absolute",
  },
  typeSomethingSweet: {
    bottom: 14,
    left: "20.15%",
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  rectangleParent: {
    bottom: 22,
    left: 47,
    height: 41,
    width: 268,
    position: "absolute",
  },
  photo2Item: {
    bottom: 30,
    left: 12,
    width: 25,
    height: 25,
    position: "absolute",
  },
  groupInner: {
    borderTopLeftRadius: Border.br_9xs,
    backgroundColor: Color.gainsboro_100,
    borderBottomLeftRadius: Border.br_9xs,
    borderBottomRightRadius: Border.br_mini,
    borderTopRightRadius: Border.br_mini,
    height: 33,
    width: 93,
    left: 0,
    bottom: 0,
    position: "absolute",
  },
  ringMe: {
    left: 8,
    fontFamily: FontFamily.quicksandRegular,
    textAlign: "left",
    color: Color.black,
    bottom: 10,
    fontSize: FontSize.size_3xs,
  },
  text: {
    left: 62,
  },
  rectangleGroup: {
    bottom: 90,
    left: 18,
  },
  rectangleView: {
    borderTopRightRadius: Border.br_9xs,
    height: 33,
    width: 93,
    position: "absolute",
  },
  youGood: {
    right: 36,
    color: Color.white,
    bottom: 10,
    fontSize: FontSize.size_3xs,
  },
  text1: {
    fontSize: FontSize.size_6xs,
    bottom: 1,
    color: Color.white,
    right: 15,
  },
  rectangleContainer: {
    bottom: 183,
    right: 11,
  },
  groupChild1: {
    borderTopLeftRadius: Border.br_mini,
    width: 163,
    backgroundColor: Color.gainsboro_100,
    borderBottomLeftRadius: Border.br_9xs,
    borderBottomRightRadius: Border.br_mini,
    borderTopRightRadius: Border.br_mini,
    left: 0,
    bottom: 0,
  },
  text2: {
    left: 131,
  },
  groupView: {
    bottom: 129,
    left: 18,
  },
  groupChild2: {
    backgroundColor: Color.crimson_100,
    borderBottomLeftRadius: Border.br_mini,
    borderBottomRightRadius: Border.br_9xs,
    right: 0,
    borderTopLeftRadius: Border.br_mini,
    bottom: 0,
    borderTopRightRadius: Border.br_mini,
    width: 163,
  },
  heyHowAre: {
    right: 40,
    color: Color.white,
    bottom: 10,
    fontSize: FontSize.size_3xs,
  },
  text3: {
    right: 16,
    fontSize: FontSize.size_6xs,
    bottom: 1,
    color: Color.white,
  },
  rectangleParent1: {
    bottom: 222,
    right: 11,
  },
  photo2Inner: {
    top: 20,
    right: "0%",
    left: "0%",
    borderBottomWidth: 1,
    height: 44,
    width: "100%",
  },
  ellipseIcon: {
    top: 22,
    left: 35,
    width: 40,
    height: 40,
    position: "absolute",
  },
  alexa30: {
    top: 33,
    left: 86,
    fontSize: FontSize.size_sm,
    fontWeight: "700",
    fontFamily: FontFamily.quicksandBold,
  },
  solarvideocameraRecordBold: {
    left: "78.33%",
    right: "15%",
    width: "6.67%",
  },
  icon2: {
    overflow: "hidden",
  },
  charmmenuKebab: {
    right: 19,
    width: 24,
  },
  vector: {
    left: 15,
    top: 36,
    width: 9,
    height: 13,
    position: "absolute",
  },
  photo2: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Photo25;
