import DisplayTimTable from "./../../screens/testmonial/DisplayTimTable";
import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const DisplayTimeTableStackNavigator = createStackNavigator({
  Contact_Us: {
    screen: DisplayTimTable,
    navigationOptions: {
      headerTitleAlign: "center",
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? "#fff" : "#fff",
      },
      headerTitleStyle: {
        fontFamily: "open-sans-bold",
        fontWeight: "200",
      },
      headerTintColor: "white",
    },
  },
});
const DisplayTimeTableStackNavigation = createAppContainer(
  DisplayTimeTableStackNavigator
);
export default DisplayTimeTableStackNavigation;
