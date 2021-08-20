import { Platform } from "react-native";
import TimeTableMain from "../../screens/testmonial/TimetableMain";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const TimeTableMainStackNavigator = createStackNavigator({
  TimeTable_Main: {
    screen: TimeTableMain,
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
const TimeTableMainStackNavigation = createAppContainer(
  TimeTableMainStackNavigator
);
export default TimeTableMainStackNavigation;
