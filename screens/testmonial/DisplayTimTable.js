import { ActivityIndicator, Alert, Image, Text, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import React, { useCallback, useEffect, useState } from "react";
import {
  deleteTimeTable,
  fetchTimeTable,
} from "../../store/action/timeTableAction";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "react-native-elements";
import Color from "../../colors/Color";
import HeaderButton from "../../components/headerButton/HeaderButton";
import HeaderLogo from "../../components/headerLogo/HeaderLogo";
import { ScrollView } from "react-native-gesture-handler";

function DisplayTimTable() {
  const dispatch = useDispatch();

  const [error, setError] = useState();
  const [isLoading, setIsloading] = useState(false);
  // const usersArray = useSelector((state) => state.contactUsers.availableUsers);

  const loadedUserData = useCallback(async () => {
    setError(null);
    setIsloading(true);
    try {
      await dispatch(fetchTimeTable());
    } catch (err) {
      setError(err.message);
    }
    setIsloading(false);
  }, [dispatch, setError, setIsloading]);
  useEffect(() => {
    loadedUserData();
  }, [dispatch, loadedUserData]);

  const timeTableArray = useSelector(
    (state) => state.timetable.availableTimeTable
  );
  console.log(timeTableArray);

  const deleteHandler = (i) => {
    Alert.alert("Are you sure?", "Do you really want to delete this item?", [
      { text: "No", style: "default" },
      {
        text: "Yes",
        style: "destructive",
        onPress: () => {
          dispatch(deleteTimeTable(i));
        },
      },
    ]);
  };
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color={Color.primaryColour} />
      </View>
    );
  }
  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text
          style={{
            color: "red",
            fontSize: 20,
            fontFamily: "open-sans-bold",
          }}
        >
          An error occured!!!
        </Text>
        <Button title="Try again" onPress={loadedUserData} />
      </View>
    );
  }
  if (!isLoading && timeTableArray.length === 0) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text
          style={{
            color: "#121212",
            fontSize: 20,
            fontFamily: "open-sans-bold",
          }}
        >
          No User Data to Show
        </Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={{ flex: 1 }}>
        {timeTableArray.map((item, i) => {
          console.log(item.imageUri);
          return (
            <View key={i}>
              <Text
                style={{ fontWeight: "700", fontSize: 20, textAlign: "center" }}
              >
                {item.title}
              </Text>
              <Image
                style={{ resizeMode: "stretch", height: 200, width: "100%" }}
                source={{
                  uri: item.imageUri,
                }}
              />
              <Button
                title="Delete"
                onPress={deleteHandler.bind(this, item.id)}
              />
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}

export default DisplayTimTable;
DisplayTimTable.navigationOptions = (navData) => {
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
