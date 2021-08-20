import * as Font from "expo-font";

import React, { useState } from "react";
import { applyMiddleware, combineReducers, createStore } from "redux";

import AppLoading from "expo-app-loading";
import NavigationContainer from "./navigation/ContainerNavigation";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import authReducer from "./store/reducer/authReducer";
import contactReducer from "./store/reducer/contactReducer";
import { enableScreens } from "react-native-screens";
import roomReducer from "./store/reducer/roomReducer";
import timeTableReducer from "./store/reducer/timeTableReducer";

enableScreens();

const rootReducer = combineReducers({
  contactUsers: contactReducer,
  auth: authReducer,
  timetable: timeTableReducer,
  room: roomReducer,
});
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  let x = 1;
  const [fontloaded, setfontloaded] = useState(false);

  if (!fontloaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setfontloaded(true)}
        onError={console.err}
      />
    );
  }
  return (
    <Provider store={store}>
      <NavigationContainer />
    </Provider>
  );
}
