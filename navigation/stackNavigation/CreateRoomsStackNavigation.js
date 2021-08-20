import CreateRooms from "../../screens/rooms/CreateRooms";
import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const CreateRoomStackNavigation = createStackNavigator({
  Create_Rooms: {
    screen: CreateRooms,
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
const CreateRoomsStackNavigation = createAppContainer(
  CreateRoomStackNavigation
);
export default CreateRoomsStackNavigation;
