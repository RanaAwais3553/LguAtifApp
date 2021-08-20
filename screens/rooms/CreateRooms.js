import {
  Alert,
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "react-native-elements";
import Color from "../../colors/Color";
import HeaderButton from "../../components/headerButton/HeaderButton";
import HeaderLogo from "../../components/headerLogo/HeaderLogo";
import SocialMediaIcon from "../../components/socialIcon/SocialMediaIcon";
import { createContactForm } from "../../store/action/roomAction";

const screenWidth = Dimensions.get("screen").width;

function CreateRooms() {
  const [title, setTitle] = useState("");
  const [roomNum, setRoomNum] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  const submitHandler = useCallback(() => {
    if (title === "" || roomNum === "" || description === "") {
      Alert.alert("Please enter all input fields");
    } else {
      dispatch(createContactForm(title, roomNum, description));
      Alert.alert("Message submitted successfully!!");
      setName("");

      setMessage("");
      setPhoneNum("");
    }
  }, [dispatch, title, roomNum, description]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <View style={{ flex: 1, marginTop: 0 }}>
          <Image
            style={{
              height: height / 3.5,
              width: screenWidth,
              resizeMode: "stretch",
            }}
            source={require("../../assets/Admissionscaled.jpg")}
          />
          <View
            style={{
              flex: 1,

              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View style={[styles.footer, {}]}>
              <View style={styles.formControl}>
                <Text style={styles.label}>Room Title</Text>
                <TextInput
                  style={styles.input}
                  // value={name}
                  onChangeText={(name) => setTitle(name)}
                  keyboardType="default"
                  autoCapitalize="sentences"
                  autoCorrect
                  returnKeyType="next"
                />
              </View>

              <View style={styles.formControl}>
                <Text style={styles.label}>Enter Room Number</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={(roomNum) => setRoomNum(roomNum)}
                  keyboardType="number-pad"
                  autoCapitalize="sentences"
                  autoCorrect
                  returnKeyType="next"
                />
              </View>

              <View style={styles.formControl}>
                <Text style={styles.label}>Description</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={(description) => setDescription(description)}
                  keyboardType="default"
                  autoCapitalize="sentences"
                  autoCorrect
                  returnKeyType="next"
                  multiline
                  numberOfLines={4}
                />
              </View>

              <TouchableOpacity>
                <View style={styles.button_container}></View>
              </TouchableOpacity>

              <View style={{ marginBottom: 10, flex: 1 }}>
                <View
                  style={{
                    marginTop: 20,
                    flex: 1,
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                  }}
                ></View>
              </View>
              <View>
                <Button
                  buttonStyle={{ backgroundColor: Color.secondaryColor }}
                  title="Submit"
                  type="solid"
                  onPress={submitHandler}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
CreateRooms.navigationOptions = (navData) => {
  return {
    headerTitle: () => <HeaderLogo />,
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default CreateRooms;
const height = Dimensions.get("screen").height;
var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
  },
  header: {
    flex: 1,
  },
  footer: {
    marginTop: 20,
    width: screenWidth / 1.04,
    backgroundColor: "#fff",
    flexGrow: 1,
    padding: 20,
  },
  imageBackground: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: height / 3,
  },
  title: {
    color: "black",
    fontWeight: "bold",
  },
  action: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
  },
  textInput: {
    flex: 1,
    color: "gray",
    backgroundColor: "#fff",
  },
  button_container: {
    alignItems: "center",
    justifyContent: "center",
  },
  animation: {
    backgroundColor: "#93278f",
    paddingVertical: 10,
    marginTop: 20,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  textLogin: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  signUp: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  formControl: {
    width: "100%",
  },
  label: {
    fontFamily: "open-sans-bold",
    marginVertical: 8,
  },
  input: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
});
