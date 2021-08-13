import * as authActions from "../../store/action/authAction";

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
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useCallback, useEffect, useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Color from "../../colors/Color";
import Input from "./Input";

//import AsyncStorage from '@react-native-async-storage/async-storage'

const FORM_INPUT_UPDATE = "FORM_INPUT_UPDATE";
const screenWidth = Dimensions.get("screen").width;
const screenHeight = Dimensions.get("screen").height;

const formReducer = (state, action) => {
  if (action.type === FORM_INPUT_UPDATE) {
    const updatedValues = {
      ...state.inputValues,
      [action.input]: action.value,
    };
    const updatedValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid,
    };
    let updatedFormIsValid = true;
    for (const key in updatedValidities) {
      updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
    }
    return {
      formIsValid: updatedFormIsValid,
      inputValidities: updatedValidities,
      inputValues: updatedValues,
    };
  }
  return state;
};

const Login = (props) => {
  LogBox.ignoreLogs(["Setting a timer for a"]);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      email: "",
      password: "",
    },
    inputValidities: {
      email: false,
      password: false,
    },
    formIsValid: false,
  });
  useEffect(() => {
    if (error) {
      Alert.alert("An Error Occurred!", error, [{ text: "Okay" }]);
    }
  }, [error]);
  const loginHandler = async () => {
    setError(null);
    setIsLoading(true);
    try {
      await dispatch(
        authActions.login(
          formState.inputValues.email,
          formState.inputValues.password
        )
      );
      const userData = await AsyncStorage.getItem("userData");
      const transformedData = JSON.parse(userData);
      const { token, userId, expiryDate } = transformedData;
      if (userId === "7OCALBqwUxPakjdOlXF1OHZIw7a2") {
        props.navigation.navigate("appScreen");
      } else {
        props.navigation.navigate("userScreen");
      }
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };

  const inputChangeHandler = useCallback(
    (inputIdentifier, inputValue, inputValidity) => {
      dispatchFormState({
        type: FORM_INPUT_UPDATE,
        value: inputValue,
        isValid: inputValidity,
        input: inputIdentifier,
      });
    },
    [dispatchFormState]
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <View style={styles.container}>
          <View
            style={{
              width: screenWidth / 2.5,
              justifyContent: "flex-start",
              height: screenHeight / 6,
              alignItems: "center",
            }}
          >
            <Image
              style={{
                resizeMode: "contain",
                width: screenWidth / 2,
                height: screenHeight / 3.5,
              }}
              source={require("../../assets/logo.jpg")}
            />
          </View>
          <View style={styles.header}>
            <Text
              style={{
                color: "#121212",
                fontWeight: "bold",
                fontSize: 25,
              }}
            >
              Welcome Back
            </Text>
            <Text
              style={{
                color: Color.accentColour,
                fontWeight: "700",
              }}
            >
              Sign in to continue
            </Text>
          </View>
          <View style={styles.footer}>
            <Text
              style={[
                styles.title,
                {
                  marginTop: 20,
                },
              ]}
            >
              E-mail
            </Text>
            <View style={styles.action}>
              <Input
                id="email"
                keyboardType="email-address"
                required
                email
                autoCapitalize="none"
                errorText="Please enter a valid email address."
                onInputChange={inputChangeHandler}
                initialValue=""
                style={styles.textInput}
              />
            </View>

            <Text
              style={[
                styles.title,
                {
                  marginTop: 20,
                },
              ]}
            >
              Password
            </Text>
            <View style={styles.action}>
              <Input
                id="password"
                keyboardType="default"
                secureTextEntry
                required
                minLength={5}
                autoCapitalize="none"
                errorText="Please enter a valid password."
                onInputChange={inputChangeHandler}
                initialValue=""
                style={styles.textInput}
              />
            </View>
            {isLoading ? (
              <ActivityIndicator size={"large"} color="#f57842" />
            ) : (
              <Text> </Text>
            )}
            <TouchableOpacity onPress={loginHandler}>
              <View style={styles.button_container}>
                <View style={styles.animation}>
                  <Text style={styles.textLogin}>SignIn</Text>
                </View>
              </View>
            </TouchableOpacity>

            <View style={styles.signUp}>
              <Text style={{ color: "black" }}>New User?</Text>
              <Text
                onPress={() => {
                  props.navigation.navigate("Sign_Up");
                }}
                style={{ color: Color.accentColour, fontWeight: "700" }}
              >
                {" "}
                Sign Up
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Login;

const height = Dimensions.get("screen").height;
var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    height: height / 7,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    height: height / 1.3,
    padding: 20,
  },
  imageBackground: {
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "stretch",
    width: "80%",
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
    backgroundColor: Color.primaryColour,
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

Login.navigationOptions = () => {
  return {
    headerTitle: " ",
  };
};
