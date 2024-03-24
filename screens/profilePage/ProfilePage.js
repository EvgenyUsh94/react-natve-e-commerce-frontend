import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import Option from "../../components/Option";

const ProfilePage = ({ navigation }) => {
  return (
    <View style={styles.view}>
      <Text style={styles.textProfile}>
        My profile
      </Text>
      <View style={styles.profile}>
        <Image
          style={styles.img}
          source={{
            uri: "https://a.storyblok.com/f/191576/1200x800/faa88c639f/round_profil_picture_before_.webp",
          }}
        />
        <View>
          <Text style={styles.textName}>
            Matilda Brown
          </Text>
          <Text style={styles.textEmail}>matilda@gmail.com</Text>
        </View>
      </View>
      <Option
        label={"My orders"}
        span={"Already have 12 orders"}
        nameRouter="ProfilePage"
        navigation={navigation}
      />
      <Option
        label={"Shipping addresses"}
        span={"3 ddresses"}
        nameRouter="MainScreen"
        navigation={navigation}
      />
      <Option
        label={"Payment methods"}
        span={"Visa **34"}
        nameRouter="MainScreen"
        navigation={navigation}
      />
      <Option
        label={"Promocodes"}
        span={"You have special promocodes"}
        nameRouter="MainScreen"
        navigation={navigation}
      />
      <Option
        label={"My reviews"}
        span={"Reviews for 4 items"}
        nameRouter="MainScreen"
        navigation={navigation}
      />
      <Option
        label={"Settings"}
        span={"Notifications, password"}
        nameRouter="MainScreen"
        navigation={navigation}
      />
    </View>
  );
};

export default ProfilePage;

const styles = StyleSheet.create({
  view:{
    padding: 15 
  },
  textProfile:{
    fontWeight: "bold",
    fontSize: 35,
    paddingBottom: 18
  },
  textName:{
    fontWeight: "bold",
    fontSize: 18 
  },
  textEmail:{
    color: "gray"
  },
  profile: {
    display: "flex",
    flexDirection: "row",
    paddingBottom: 45,
  },
  img: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginRight: 20,
  },
});