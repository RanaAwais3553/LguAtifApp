import CreateRooms from "../../screens/rooms/CreateRooms";
import { Platform } from "react-native";
import RoomsList from "../../screens/rooms/RoomsList";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const RoomStackNavigation = createStackNavigator({
  Create_Rooms: {
    screen: RoomsList,
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
const RoomsStackNavigation = createAppContainer(RoomStackNavigation);
export default RoomsStackNavigation;
