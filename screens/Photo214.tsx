import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, ScrollView, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const Photo214 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.photo2}>
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("IPhone13ProMax32")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/vector3.png")}
        />
      </Pressable>
      <ScrollView
        style={styles.groupParent}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.frameScrollViewContent}
      >
        <View style={[styles.groupContainer, styles.groupLayout]}>
          <View style={[styles.ellipseParent, styles.groupParentPosition]}>
            <Image
              style={[styles.groupChild, styles.groupParentPosition]}
              contentFit="cover"
              source={require("../assets/ellipse-361.png")}
            />
            <Text style={styles.leo}>Leo</Text>
          </View>
          <View style={[styles.rectangleParent, styles.rectangleParentLayout]}>
            <View style={[styles.groupItem, styles.groupItemBorder]} />
            <Text style={[styles.request, styles.addTypo]}>REQUEST</Text>
          </View>
        </View>
        <View style={[styles.groupView, styles.groupLayout]}>
          <View style={[styles.ellipseGroup, styles.groupParentPosition]}>
            <Image
              style={[styles.groupChild, styles.groupParentPosition]}
              contentFit="cover"
              source={require("../assets/ellipse-361.png")}
            />
            <Text style={styles.leo}>Cleopatra</Text>
          </View>
          <View style={[styles.rectangleParent, styles.rectangleParentLayout]}>
            <View style={[styles.groupItem, styles.groupItemBorder]} />
            <Text style={[styles.add, styles.addTypo]}>ADD</Text>
          </View>
        </View>
        <View style={[styles.groupView, styles.groupLayout]}>
          <View style={[styles.ellipseContainer, styles.groupParentPosition]}>
            <Image
              style={[styles.groupChild, styles.groupParentPosition]}
              contentFit="cover"
              source={require("../assets/ellipse-361.png")}
            />
            <Text style={styles.leo}>Evelyn</Text>
          </View>
          <View style={[styles.rectangleParent, styles.rectangleParentLayout]}>
            <View style={[styles.groupItem, styles.groupItemBorder]} />
            <Text style={[styles.remove, styles.addTypo]}>REMOVE</Text>
          </View>
        </View>
        <View style={[styles.groupView, styles.groupLayout]}>
          <View style={[styles.ellipseParent1, styles.groupParentPosition]}>
            <Image
              style={[styles.groupChild, styles.groupParentPosition]}
              contentFit="cover"
              source={require("../assets/ellipse-361.png")}
            />
            <Text style={styles.leo}>Nifesimi</Text>
          </View>
          <View style={[styles.rectangleParent, styles.rectangleParentLayout]}>
            <View style={[styles.groupItem, styles.groupItemBorder]} />
            <Text style={[styles.remove, styles.addTypo]}>REMOVE</Text>
          </View>
        </View>
        <View style={[styles.groupView, styles.groupLayout]}>
          <View style={[styles.ellipseParent2, styles.groupParentPosition]}>
            <Image
              style={[styles.groupChild, styles.groupParentPosition]}
              contentFit="cover"
              source={require("../assets/ellipse-361.png")}
            />
            <Text style={styles.leo}>Paclips</Text>
          </View>
          <View style={[styles.rectangleParent, styles.rectangleParentLayout]}>
            <View style={[styles.groupItem, styles.groupItemBorder]} />
            <Text style={[styles.remove, styles.addTypo]}>REMOVE</Text>
          </View>
        </View>
        <View style={[styles.groupView, styles.groupLayout]}>
          <View style={[styles.ellipseParent3, styles.groupParentPosition]}>
            <Image
              style={[styles.groupChild, styles.groupParentPosition]}
              contentFit="cover"
              source={require("../assets/ellipse-361.png")}
            />
            <Text style={styles.leo}>Andrew</Text>
          </View>
          <View style={[styles.rectangleParent, styles.rectangleParentLayout]}>
            <View style={[styles.groupItem, styles.groupItemBorder]} />
            <Text style={[styles.add, styles.addTypo]}>ADD</Text>
          </View>
        </View>
        <View style={[styles.groupView, styles.groupLayout]}>
          <View style={[styles.ellipseParent4, styles.groupParentPosition]}>
            <Image
              style={[styles.groupChild, styles.groupParentPosition]}
              contentFit="cover"
              source={require("../assets/ellipse-361.png")}
            />
            <Text style={styles.leo}>Ebuka</Text>
          </View>
          <View style={[styles.rectangleParent, styles.rectangleParentLayout]}>
            <View style={[styles.groupItem, styles.groupItemBorder]} />
            <Text style={[styles.add, styles.addTypo]}>ADD</Text>
          </View>
        </View>
        <View style={[styles.groupView, styles.groupLayout]}>
          <View style={[styles.ellipseParent5, styles.groupParentPosition]}>
            <Image
              style={[styles.groupChild, styles.groupParentPosition]}
              contentFit="cover"
              source={require("../assets/ellipse-361.png")}
            />
            <Text style={styles.leo}>Rexx</Text>
          </View>
          <View style={[styles.componentParent, styles.rectangleParentLayout]}>
            <View
              style={[styles.rectangleWrapper, styles.rectangleParentLayout]}
            >
              <View style={[styles.componentChild, styles.groupItemBorder]} />
            </View>
            <Text style={[styles.request, styles.addTypo]}>REQUEST</Text>
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
    width: 305,
    height: 40,
  },
  groupParentPosition: {
    left: 0,
    position: "absolute",
    top: 0,
  },
  rectangleParentLayout: {
    height: 22,
    width: 87,
  },
  groupItemBorder: {
    borderWidth: 1,
    borderColor: "#9d1720",
    borderStyle: "solid",
    borderRadius: Border.br_xl,
    position: "absolute",
    backgroundColor: Color.white,
  },
  addTypo: {
    color: Color.black,
    fontSize: FontSize.size_2xs,
    left: "50%",
    top: 4,
    textAlign: "left",
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  vector: {
    width: 9,
    height: 13,
  },
  groupChild: {
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
  groupItem: {
    height: 22,
    width: 87,
    right: 0,
    top: 0,
    borderWidth: 1,
    borderColor: "#9d1720",
    borderStyle: "solid",
    borderRadius: Border.br_xl,
  },
  request: {
    marginLeft: -25,
  },
  rectangleParent: {
    right: 0,
    width: 87,
    top: 9,
    position: "absolute",
  },
  groupContainer: {
    height: 40,
  },
  ellipseGroup: {
    width: 131,
    height: 40,
  },
  add: {
    marginLeft: -11,
  },
  groupView: {
    marginTop: 11,
    height: 40,
  },
  ellipseContainer: {
    width: 107,
    height: 40,
  },
  remove: {
    marginLeft: -22,
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
  componentChild: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    height: "100%",
    width: "100%",
  },
  rectangleWrapper: {
    left: 0,
    position: "absolute",
    top: 0,
  },
  componentParent: {
    left: 218,
    top: 9,
    position: "absolute",
  },
  groupParent: {
    marginTop: 29,
    flex: 1,
  },
  photo2: {
    height: 800,
    overflow: "hidden",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_11xl,
    alignItems: "center",
    width: "100%",
    backgroundColor: Color.white,
    flex: 1,
  },
});

export default Photo214;
