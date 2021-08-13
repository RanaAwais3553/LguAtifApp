import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../../components/headerButton/HeaderButton";
import HeaderLogo from "../../components/headerLogo/HeaderLogo";
import MapPreview from "../../components/mapPreview/MapPreview";
import React from "react";

const TestMonial = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <MapPreview />
    </View>
  );
};

export default TestMonial;
TestMonial.navigationOptions = (navData) => {
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
