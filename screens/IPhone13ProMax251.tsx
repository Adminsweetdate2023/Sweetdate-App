import * as React from "react";
import { ScrollView, StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const IPhone13ProMax251 = () => {
  const navigation = useNavigation();

  return (
    <ScrollView
      style={[styles.iphone13ProMax251, styles.iphone13Layout]}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    >
      <Pressable
        style={[styles.rectangleParent, styles.groupChildLayout]}
        onPress={() => navigation.navigate("Exchange2")}
      >
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={styles.withdrawSuccessful}>{`WITHDRAW SUCCESSFUL `}</Text>
      </Pressable>
      <Image
        style={[styles.iphone13ProMax251Child, styles.iphone13Layout]}
        contentFit="cover"
        source={require("../assets/group-5049.png")}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  iphone13Layout: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupChildLayout: {
    height: 63,
    position: "absolute",
  },
  groupChild: {
    top: 0,
    right: "0%",
    left: "0%",
    borderRadius: Border.br_3xs,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 7,
    elevation: 7,
    shadowOpacity: 1,
    width: "100%",
    backgroundColor: Color.white,
  },
  withdrawSuccessful: {
    top: 22,
    left: "22.26%",
    fontSize: FontSize.size_sm,
    textTransform: "uppercase",
    fontWeight: "600",
    fontFamily: FontFamily.nunitoSemibold,
    color: Color.crimson_200,
    textAlign: "center",
    position: "absolute",
  },
  rectangleParent: {
    width: "88.32%",
    top: 349,
    right: "5.84%",
    left: "5.84%",
  },
  iphone13ProMax251Child: {
    width: "28.97%",
    top: 189,
    right: "34.58%",
    left: "36.45%",
    height: 124,
    position: "absolute",
  },
  iphone13ProMax251: {
    flex: 1,
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default IPhone13ProMax251;
