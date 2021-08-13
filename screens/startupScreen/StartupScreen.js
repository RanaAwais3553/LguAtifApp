import {
  ActivityIndicator,
  AsyncStorage,
  LogBox,
  Text,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Color from "../../colors/Color";
import { authenticate } from "../../store/action/authAction";

//import AsyncStorage from '@react-native-async-storage/async-storage'

function StartupScreen(props) {
  LogBox.ignoreLogs(["Setting a timer for a"]);
  const userEmail = useSelector((state) => state.auth.email);
  const dispatch = useDispatch();
  useEffect(() => {
    const tryLogin = async () => {
      const userData = await AsyncStorage.getItem("userData");
      if (!userData) {
        props.navigation.navigate("Auth");
        return;
      }
      const transformedData = JSON.parse(userData);
      const { token, userId, expiryDate } = transformedData;
      const expirationDate = new Date(expiryDate);
      if (expirationDate <= new Date() || !token || !userId) {
        props.navigation.navigate("Auth");
        return;
      }
      const expirationTime = expirationDate.getTime() - new Date().getTime();
      if (userId === "7OCALBqwUxPakjdOlXF1OHZIw7a2") {
        props.navigation.navigate("appScreen");
      } else {
        props.navigation.navigate("userScreen");
      }
      dispatch(authenticate(userEmail, userId, token, expirationTime));
    };
    tryLogin();
  }, [dispatch]);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator color={Color.primaryColour} />
    </View>
  );
}

export default StartupScreen;
