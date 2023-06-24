import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View, Text, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const Photo228 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.photo2}>
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("Photo231")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/vector3.png")}
        />
      </Pressable>
      <View style={styles.rectangleParent}>
        <View style={styles.groupChild} />
        <View style={[styles.rectangleGroup, styles.groupLayout]}>
          <View style={[styles.groupItem, styles.groupItemBorder]} />
          <Text style={styles.followers}>Followers</Text>
        </View>
        <Pressable
          style={styles.followingWrapper}
          onPress={() => navigation.navigate("Photo227")}
        >
          <Text style={styles.following}>Following</Text>
        </Pressable>
      </View>
      <ScrollView
        style={styles.groupParent}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.frameScrollViewContent}
      >
        <View style={[styles.groupContainer, styles.groupLayout1]}>
          <View style={[styles.ellipseParent, styles.groupParentPosition]}>
            <Image
              style={[styles.groupInner, styles.groupParentPosition]}
              contentFit="cover"
              source={require("../assets/ellipse-361.png")}
            />
            <Text style={styles.leo}>Leo</Text>
          </View>
          <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
            <View style={[styles.rectangleView, styles.rectangleLayout]} />
            <Text style={[styles.follow, styles.followTypo]}>Follow</Text>
          </View>
        </View>
        <View style={[styles.groupView, styles.groupLayout1]}>
          <View style={[styles.ellipseGroup, styles.groupParentPosition]}>
            <Image
              style={[styles.groupInner, styles.groupParentPosition]}
              contentFit="cover"
              source={require("../assets/ellipse-361.png")}
            />
            <Text style={styles.leo}>Cleopatra</Text>
          </View>
          <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
            <View style={[styles.rectangleView, styles.rectangleLayout]} />
            <Text style={[styles.unfollow, styles.followTypo]}>Unfollow</Text>
          </View>
        </View>
        <View style={[styles.groupView, styles.groupLayout1]}>
          <View style={[styles.ellipseContainer, styles.groupParentPosition]}>
            <Image
              style={[styles.groupInner, styles.groupParentPosition]}
              contentFit="cover"
              source={require("../assets/ellipse-361.png")}
            />
            <Text style={styles.leo}>Evelyn</Text>
          </View>
          <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
            <View style={[styles.rectangleView, styles.rectangleLayout]} />
            <Text style={[styles.unfollow, styles.followTypo]}>Unfollow</Text>
          </View>
        </View>
        <View style={[styles.groupView, styles.groupLayout1]}>
          <View style={[styles.ellipseParent1, styles.groupParentPosition]}>
            <Image
              style={[styles.groupInner, styles.groupParentPosition]}
              contentFit="cover"
              source={require("../assets/ellipse-361.png")}
            />
            <Text style={styles.leo}>Nifesimi</Text>
          </View>
          <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
            <View style={[styles.rectangleView, styles.rectangleLayout]} />
            <Text style={[styles.follow, styles.followTypo]}>Follow</Text>
          </View>
        </View>
        <View style={[styles.groupView, styles.groupLayout1]}>
          <View style={[styles.ellipseParent2, styles.groupParentPosition]}>
            <Image
              style={[styles.groupInner, styles.groupParentPosition]}
              contentFit="cover"
              source={require("../assets/ellipse-361.png")}
            />
            <Text style={styles.leo}>Paclips</Text>
          </View>
          <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
            <View style={[styles.rectangleView, styles.rectangleLayout]} />
            <Text style={[styles.follow, styles.followTypo]}>Follow</Text>
          </View>
        </View>
        <View style={[styles.groupView, styles.groupLayout1]}>
          <View style={[styles.ellipseParent3, styles.groupParentPosition]}>
            <Image
              style={[styles.groupInner, styles.groupParentPosition]}
              contentFit="cover"
              source={require("../assets/ellipse-361.png")}
            />
            <Text style={styles.leo}>Andrew</Text>
          </View>
          <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
            <View style={[styles.rectangleView, styles.rectangleLayout]} />
            <Text style={[styles.unfollow, styles.followTypo]}>Unfollow</Text>
          </View>
        </View>
        <View style={[styles.groupView, styles.groupLayout1]}>
          <View style={[styles.ellipseParent4, styles.groupParentPosition]}>
            <Image
              style={[styles.groupInner, styles.groupParentPosition]}
              contentFit="cover"
              source={require("../assets/ellipse-361.png")}
            />
            <Text style={styles.leo}>Ebuka</Text>
          </View>
          <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
            <View style={[styles.rectangleView, styles.rectangleLayout]} />
            <Text style={[styles.follow, styles.followTypo]}>Follow</Text>
          </View>
        </View>
        <View style={[styles.groupView, styles.groupLayout1]}>
          <View style={[styles.ellipseParent5, styles.groupParentPosition]}>
            <Image
              style={[styles.groupInner, styles.groupParentPosition]}
              contentFit="cover"
              source={require("../assets/ellipse-361.png")}
            />
            <Text style={styles.leo}>Rexx</Text>
          </View>
          <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
            <View style={[styles.rectangleView, styles.rectangleLayout]} />
            <Text style={[styles.unfollow, styles.followTypo]}>Unfollow</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  frameScrollViewContent: {
    flexDirection: "column",
  },
  groupLayout: {
    width: 153,
    left: 0,
    position: "absolute",
    height: 41,
  },
  groupItemBorder: {
    borderStyle: "solid",
    top: 0,
    backgroundColor: Color.white,
  },
  groupLayout1: {
    height: 40,
    width: 305,
  },
  groupParentPosition: {
    left: 0,
    height: 40,
    top: 0,
    position: "absolute",
  },
  rectangleLayout: {
    height: 22,
    width: 87,
    right: 0,
    position: "absolute",
  },
  followTypo: {
    fontSize: FontSize.size_2xs,
    top: 4,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    left: "50%",
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  vector: {
    width: 9,
    height: 13,
  },
  groupChild: {
    right: "0%",
    left: "0%",
    backgroundColor: Color.gainsboro_100,
    borderRadius: Border.br_3xs,
    top: 0,
    position: "absolute",
    height: 41,
    width: "100%",
  },
  groupItem: {
    borderColor: "#d9d9d9",
    borderWidth: 2,
    width: 153,
    left: 0,
    position: "absolute",
    height: 41,
    borderRadius: Border.br_3xs,
  },
  followers: {
    marginLeft: -28.25,
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    fontSize: FontSize.fontsRegularCaption12_size,
    left: "50%",
    top: 13,
    position: "absolute",
  },
  rectangleGroup: {
    top: 0,
  },
  following: {
    right: 0,
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    fontSize: FontSize.fontsRegularCaption12_size,
    top: 0,
    position: "absolute",
  },
  followingWrapper: {
    right: 49,
    width: 55,
    height: 15,
    top: 13,
    position: "absolute",
  },
  rectangleParent: {
    marginTop: 29,
    height: 41,
    width: 305,
  },
  groupInner: {
    width: 40,
    height: 40,
  },
  leo: {
    top: 11,
    left: 63,
    fontSize: FontSize.size_sm,
    color: Color.gray_100,
    textAlign: "left",
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    position: "absolute",
  },
  ellipseParent: {
    width: 88,
    height: 40,
  },
  rectangleView: {
    borderRadius: Border.br_xl,
    borderColor: "#9d1720",
    borderWidth: 1,
    borderStyle: "solid",
    top: 0,
    backgroundColor: Color.white,
  },
  follow: {
    marginLeft: -17.5,
  },
  rectangleContainer: {
    top: 9,
  },
  groupContainer: {
    height: 40,
  },
  ellipseGroup: {
    width: 131,
    height: 40,
  },
  unfollow: {
    marginLeft: -23.5,
  },
  groupView: {
    marginTop: 11,
    height: 40,
  },
  ellipseContainer: {
    width: 107,
    height: 40,
  },
  ellipseParent1: {
    width: 117,
    height: 40,
  },
  ellipseParent2: {
    width: 111,
    height: 40,
  },
  ellipseParent3: {
    width: 114,
    height: 40,
  },
  ellipseParent4: {
    width: 105,
    height: 40,
  },
  ellipseParent5: {
    width: 95,
    height: 40,
  },
  groupParent: {
    marginTop: 29,
    flex: 1,
  },
  photo2: {
    height: 800,
    overflow: "hidden",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_xl,
    alignItems: "center",
    width: "100%",
    flex: 1,
    backgroundColor: Color.white,
  },
});

export default Photo228;
