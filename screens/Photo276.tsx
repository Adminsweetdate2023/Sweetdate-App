import React, { useState } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { Toggle as RNKToggle } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const Photo276 = () => {
  const [ionswitchchecked, setIonswitchchecked] = useState(undefined);
  const [ionswitch1checked, setIonswitch1checked] = useState(undefined);
  const [ionswitch2checked, setIonswitch2checked] = useState(undefined);
  const [ionswitch3checked, setIonswitch3checked] = useState(undefined);
  const navigation = useNavigation();

  return (
    <View style={styles.photo2}>
      <View style={[styles.photo2Child, styles.photo2ChildPosition]} />
      <Text style={[styles.notificationSettings, styles.photo2ChildPosition]}>
        Notification settings
      </Text>
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("Photo219")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
      </Pressable>
      <View style={[styles.rectangleParent, styles.groupPosition]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <Text style={styles.newFollowers}>New followers</Text>
        <RNKToggle
          style={styles.ionswitch}
          status="danger"
          checked={ionswitchchecked}
          onChange={() => setIonswitchchecked(!ionswitchchecked)}
        />
      </View>
      <View style={[styles.rectangleGroup, styles.groupPosition]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <Text style={styles.newFollowers}>Direct messages</Text>
        <RNKToggle
          style={styles.ionswitch}
          status="danger"
          checked={ionswitch1checked}
          onChange={() => setIonswitch1checked(!ionswitch1checked)}
        />
      </View>
      <View style={[styles.rectangleContainer, styles.groupPosition]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <Text style={styles.newFollowers}>Video calls</Text>
        <RNKToggle
          style={styles.ionswitch}
          status="danger"
          checked={ionswitch2checked}
          onChange={() => setIonswitch2checked(!ionswitch2checked)}
        />
      </View>
      <View style={[styles.groupView, styles.groupPosition]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <Text style={styles.newFollowers}>Reminders</Text>
        <RNKToggle
          style={styles.ionswitch}
          status="danger"
          checked={ionswitch3checked}
          onChange={() => setIonswitch3checked(!ionswitch3checked)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  photo2ChildPosition: {
    left: "50%",
    position: "absolute",
  },
  groupPosition: {
    height: 50,
    left: "0%",
    position: "absolute",
  },
  photo2Child: {
    marginLeft: -180,
    top: 20,
    width: 360,
    height: 43,
    backgroundColor: Color.white,
  },
  notificationSettings: {
    marginLeft: -59,
    top: 34,
    fontSize: FontSize.fontsRegularCaption12_size,
    fontWeight: "700",
    fontFamily: FontFamily.quicksandBold,
    color: Color.black,
    textAlign: "center",
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    width: "100%",
  },
  vector: {
    left: "8.02%",
    top: "4.48%",
    right: "89.48%",
    bottom: "93.89%",
    width: "2.5%",
    height: "1.63%",
    position: "absolute",
  },
  groupChild: {
    top: 0,
    right: "0%",
    backgroundColor: Color.white,
    width: "100%",
  },
  newFollowers: {
    top: 16,
    left: "7.8%",
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    fontFamily: FontFamily.quicksandMedium,
    color: Color.gray_300,
    textAlign: "left",
    position: "absolute",
  },
  ionswitch: {
    top: 7,
    right: 27,
    width: 71,
    height: 35,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleParent: {
    top: 77,
    right: "0.28%",
    width: "99.72%",
    left: "0%",
  },
  rectangleGroup: {
    top: 127,
    right: "0.28%",
    width: "99.72%",
    left: "0%",
  },
  rectangleContainer: {
    top: 177,
    right: "0.28%",
    width: "99.72%",
    left: "0%",
  },
  groupView: {
    top: 227,
    right: "0.28%",
    width: "99.72%",
    left: "0%",
  },
  photo2: {
    backgroundColor: Color.whitesmoke_100,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default Photo276;
