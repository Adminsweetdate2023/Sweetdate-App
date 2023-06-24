import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const Photo268 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.photo2, styles.iconLayout]}>
      <Image
        style={[styles.photo2Child, styles.photo2Layout]}
        contentFit="cover"
        source={require("../assets/ellipse-362.png")}
      />
      <Image
        style={[styles.photo2Item, styles.photo2Layout]}
        contentFit="cover"
        source={require("../assets/ellipse-37.png")}
      />
      <Image
        style={[styles.photo2Inner, styles.photo2Layout]}
        contentFit="cover"
        source={require("../assets/ellipse-38.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.photo2Layout]}
        contentFit="cover"
        source={require("../assets/ellipse-39.png")}
      />
      <Text style={[styles.luz19, styles.luz19Typo]}>Luz, 19</Text>
      <Text style={[styles.katrina22, styles.luz19Typo]}>Katrina, 22</Text>
      <Text style={[styles.alexa30, styles.le20Typo]}>Alexa, 30</Text>
      <Text style={[styles.le20, styles.le20Typo]}>Le, 20</Text>
      <Text style={[styles.rejectedCall, styles.callTypo]}>Rejected call</Text>
      <Text style={[styles.missedCall, styles.callTypo]}>Missed call</Text>
      <Text style={[styles.outgoing2m, styles.callTypo]}>Outgoing, 2m</Text>
      <Text style={[styles.outgoing2m1, styles.callTypo]}>Outgoing, 2m</Text>
      <Image
        style={[styles.uilmissedCallIcon, styles.money11Layout]}
        contentFit="cover"
        source={require("../assets/uilmissedcall.png")}
      />
      <Image
        style={[styles.tablervideoIcon, styles.tablervideoIconPosition]}
        contentFit="cover"
        source={require("../assets/tablervideo.png")}
      />
      <Image
        style={[styles.tablervideoIcon1, styles.tablervideoIconPosition]}
        contentFit="cover"
        source={require("../assets/tablervideo.png")}
      />
      <Pressable
        style={[
          styles.solarvideocameraRecordBold,
          styles.solarvideocameraPosition,
        ]}
        onPress={() => navigation.navigate("Connect23")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/solarvideocamerarecordbold.png")}
        />
      </Pressable>
      <Pressable
        style={[
          styles.solarvideocameraRecordBold1,
          styles.solarvideocameraPosition,
        ]}
        onPress={() => navigation.navigate("Connect23")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/solarvideocamerarecordbold.png")}
        />
      </Pressable>
      <Pressable
        style={[
          styles.solarvideocameraRecordBold2,
          styles.solarvideocameraPosition,
        ]}
        onPress={() => navigation.navigate("Connect23")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/solarvideocamerarecordbold.png")}
        />
      </Pressable>
      <Pressable
        style={[
          styles.solarvideocameraRecordBold3,
          styles.solarvideocameraPosition,
        ]}
        onPress={() => navigation.navigate("Connect23")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/solarvideocamerarecordbold.png")}
        />
      </Pressable>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.money11Position]} />
        <Text style={[styles.videoChatHistory, styles.textTypo]}>
          Video chat history
        </Text>
        <Pressable
          style={styles.parent}
          onPress={() => navigation.navigate("Photo267")}
        >
          <Text style={[styles.text, styles.textTypo]}>0</Text>
          <Image
            style={[styles.money11, styles.money11Position]}
            contentFit="cover"
            source={require("../assets/money-1-1.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  tablervideoIconLayout: {
    height: 24,
    width: 24,
  },
  photo2Layout: {
    height: 67,
    width: 67,
    left: 42,
    position: "absolute",
  },
  luz19Typo: {
    textAlign: "left",
    fontWeight: "700",
    fontFamily: FontFamily.quicksandBold,
    fontSize: FontSize.size_sm,
    left: 136,
    position: "absolute",
  },
  le20Typo: {
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    fontSize: FontSize.size_sm,
    left: 136,
    position: "absolute",
  },
  callTypo: {
    color: Color.gray_600,
    fontFamily: FontFamily.quicksandMedium,
    fontWeight: "500",
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    position: "absolute",
  },
  money11Layout: {
    width: 20,
    height: 20,
  },
  tablervideoIconPosition: {
    left: 15,
    position: "absolute",
    overflow: "hidden",
  },
  solarvideocameraPosition: {
    left: 321,
    position: "absolute",
    height: 24,
    width: 24,
  },
  groupChildLayout: {
    height: 47,
    width: 359,
    left: 0,
  },
  money11Position: {
    top: 0,
    position: "absolute",
  },
  textTypo: {
    textAlign: "center",
    color: Color.black,
    fontWeight: "700",
    position: "absolute",
  },
  photo2Child: {
    top: 72,
  },
  photo2Item: {
    top: 151,
  },
  photo2Inner: {
    top: 230,
  },
  ellipseIcon: {
    top: 309,
  },
  luz19: {
    top: 83,
    color: "#ffd233",
  },
  katrina22: {
    top: 163,
    color: "#f24e1e",
  },
  alexa30: {
    top: 242,
  },
  le20: {
    top: 321,
  },
  rejectedCall: {
    top: 113,
    left: 136,
    fontFamily: FontFamily.quicksandMedium,
    fontWeight: "500",
    fontSize: FontSize.size_3xs,
  },
  missedCall: {
    top: 193,
    left: 136,
    fontFamily: FontFamily.quicksandMedium,
    fontWeight: "500",
    fontSize: FontSize.size_3xs,
  },
  outgoing2m: {
    top: 351,
    left: 136,
    fontFamily: FontFamily.quicksandMedium,
    fontWeight: "500",
    fontSize: FontSize.size_3xs,
  },
  outgoing2m1: {
    top: 270,
    left: 135,
  },
  uilmissedCallIcon: {
    top: 96,
    height: 20,
    left: 15,
    position: "absolute",
    overflow: "hidden",
  },
  tablervideoIcon: {
    top: 252,
    height: 24,
    width: 24,
  },
  tablervideoIcon1: {
    top: 331,
    height: 24,
    width: 24,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  solarvideocameraRecordBold: {
    top: 94,
  },
  solarvideocameraRecordBold1: {
    top: 173,
  },
  solarvideocameraRecordBold2: {
    top: 252,
  },
  solarvideocameraRecordBold3: {
    top: 331,
  },
  groupChild: {
    height: 47,
    width: 359,
    left: 0,
    backgroundColor: Color.white,
  },
  videoChatHistory: {
    marginLeft: -61.5,
    top: 14,
    left: "50%",
    textAlign: "center",
    fontFamily: FontFamily.quicksandBold,
    fontSize: FontSize.size_sm,
  },
  text: {
    top: 1,
    fontSize: FontSize.fontsRegularCaption12_size,
    fontFamily: FontFamily.robotoBold,
    display: "flex",
    width: 14,
    height: 17,
    left: 0,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  money11: {
    left: 14,
    height: 20,
    width: 20,
  },
  parent: {
    top: 13,
    left: 293,
    width: 34,
    height: 20,
    position: "absolute",
  },
  rectangleParent: {
    top: 20,
    position: "absolute",
  },
  photo2: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default Photo268;
