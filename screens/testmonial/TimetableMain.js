import {
  FlatList,
  Image,
  LogBox,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import Grid from "./TableView";
import HeaderButton from "../../components/headerButton/HeaderButton";
import HeaderLogo from "../../components/headerLogo/HeaderLogo";
import MapPreview from "../../components/mapPreview/MapPreview";
import React from "react";

const TimeTableMain = (props) => {
  LogBox.ignoreLogs(["Your project is accessing the following APIs"]);
  return (
    <View style={{ flex: 1 }}>
      {/* <MapPreview /> */}
      <Grid />
    </View>
  );
};

export default TimeTableMain;
TimeTableMain.navigationOptions = (navData) => {
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
