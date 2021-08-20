import * as ImagePicker from "expo-image-picker";
import * as firebase from "firebase";

import {
  ActivityIndicator,
  Alert,
  AsyncStorage,
  Dimensions,
  Image,
  LogBox,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Avatar, Button } from "react-native-elements";
import React, { useCallback, useEffect, useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Color from "../../colors/Color";
import { createTimeTable } from "../../store/action/timeTableAction";
import { firebaseConfig } from "../../firebase/config";

//import Input from '../authScreen/Input'

const screenWidth = Dimensions.get("screen").width;
const screenHeight = Dimensions.get("screen").height;

const UpdateProfile = (props) => {
  LogBox.ignoreLogs(["Your project is accessing the following APIs"]);
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  const [error, setError] = useState();
  const [imageURI, setImageURI] = useState("");
  const [name, setName] = useState("");
  const [disimage, setdisImage] = useState(null);
  const [uploading, setUploading] = useState(false);

  // UpdateProfile functions

  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      Alert.alert("An Error Occurred!", error, [{ text: "Okay" }]);
    }
  }, [error]);

  const uploadImage = async () => {
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function () {
        reject(new TypeError("Network request failed"));
      };
      xhr.responseType = "blob";
      xhr.open("GET", disimage, true);
      xhr.send(null);
    });

    const ref = firebase.storage().ref().child(new Date().toISOString());
    const snapshot = ref.put(blob);
    snapshot.on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      () => {
        setUploading(true);
      },
      (error) => {
        setUploading(false);
        console.log(error);
        blob.close();
        return;
      },
      () => {
        snapshot.snapshot.ref.getDownloadURL().then((url) => {
          setUploading(false);
          console.log(url);
          setImageURI(url);
          blob.close();
          return url;
        });
      }
    );
  };
  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [9, 8],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      const response = await fetch(result.uri);
      setdisImage(result.uri);
    }
  };

  const updateHandler = useCallback(async () => {
    setError(null);
    try {
      await dispatch(createTimeTable(imageURI, name));
    } catch (err) {
      setError(err.message);
    }
  }, [dispatch, name, imageURI]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text
              style={{
                color: "#121212",
                fontWeight: "bold",
                fontSize: 18,
              }}
            >
              Enter Class Name & Paste TimeTable
            </Text>
            <Text
              style={{
                color: Color.accentColour,
                fontWeight: "700",
              }}
            >
              Save & continue
            </Text>
          </View>

          <View style={styles.footer}>
            <Text
              style={[
                styles.title,
                {
                  marginTop: 10,
                },
              ]}
            >
              Enter Title
            </Text>
            <View style={styles.action}>
              <TextInput
                style={styles.input}
                //  value={name}
                onChangeText={(name) => setName(name)}
                keyboardType="default"
                //   autoCapitalize="sentences"
                // autoCorrect
                returnKeyType="next"
                multiline={true}
                numberOfLines={2}
              />
            </View>

            <View style={{ marginBottom: 10, flex: 1 }}>
              <View
                style={{
                  marginTop: 20,
                  flex: 1,
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}
              >
                <Button title="Select Image " onPress={pickImage} />
                <View
                  style={{
                    height: 200,
                    width: screenWidth / 1.2,
                    borderWidth: 1,
                    borderColor: "#f2f2f2",
                  }}
                >
                  {disimage && (
                    <Image
                      source={{ uri: disimage }}
                      style={{ width: 200, height: 200 }}
                    />
                  )}
                </View>
              </View>
            </View>
            <View>
              {!uploading ? (
                <Button
                  title="upload"
                  containerStyle={{
                    width: screenWidth / 3,
                    marginBottom: 30,
                  }}
                  onPress={uploadImage}
                />
              ) : (
                <ActivityIndicator size="large" color="#000" />
              )}
              {/* <Button title='Submit' type='solid' onPress={submitHandler} /> */}
            </View>

            <TouchableOpacity onPress={updateHandler}>
              <View style={styles.button_container}>
                <View style={styles.animation}>
                  <Text style={styles.textLogin}>Upload</Text>
                </View>
              </View>
            </TouchableOpacity>

            {/* <View style={styles.signUp}>
              <Text style={{ color: "black" }}>Already Updated?</Text>
              <Text
                onPress={() => {
                  // props.navigation.goBack()
                }}
                style={{ color: Color.accentColour, fontWeight: "700" }}
              >
                {" "}
                Cancel
              </Text>
            </View> */}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default UpdateProfile;

const height = Dimensions.get("screen").height;
var styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    height: height / 9.5,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  footer: {
    //flex: 1,
    // paddingTop: 150,
    height: height / 1.3,
    padding: 20,
  },
  imageBackground: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // resizeMode: 'stretch',
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
  },
  button_container: {
    alignItems: "center",
    justifyContent: "center",
  },
  animation: {
    backgroundColor: Color.accentColour,
    width: screenWidth / 1.2,
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
});

UpdateProfile.navigationOptions = () => {
  return {
    headerTitle: "Set Time Table",
  };
};
