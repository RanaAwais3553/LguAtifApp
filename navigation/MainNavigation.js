import { DrawerItems, createDrawerNavigator } from "react-navigation-drawer";
import {
  Image,
  Linking,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { useDispatch, useSelector } from "react-redux";

import AboutStackNavigation from "./stackNavigation/AboutStackNavigation";
import AuthScreenStackNavigation from "./stackNavigation/AuthStackNavigation";
import { Button } from "react-native-elements";
import Color from "../colors/Color";
import ContactUsStackNavigation from "./stackNavigation/ContactUsStackNavigation";
import ContactUserListStackNavigation from "./stackNavigation/ContactUserList";
import HomeStackNavigation from "./stackNavigation/HomeStackNavigation";
import { Ionicons } from "@expo/vector-icons";
import PortfolioStackNavigation from "./stackNavigation/PortfolioStackNavigation";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import StartupScreen from "../screens/startupScreen/StartupScreen";
import TermandConditionStackNavigation from "./stackNavigation/TermandConditionStackNavigation";
import TestmonialStackNavigation from "./stackNavigation/TestmonialStackNavigation";
import { logOut } from "../store/action/authAction";

const MainDrawerNavigator = createDrawerNavigator(
  {
    HomeScreen: {
      screen: HomeStackNavigation,
      navigationOptions: {
        drawerIcon: () => (
          <Ionicons name="home" size={25} color={Color.secondaryColor} />
        ),

        drawerLabel: "Home",
      },
    },

    // Testimonial: {
    //   screen: TestmonialStackNavigation,
    //   navigationOptions: {
    //     drawerIcon: () => (
    //       <Ionicons
    //         name="thumbs-up-sharp"
    //         size={25}
    //         color={Color.secondaryColor}
    //       />
    //     ),
    //     drawerLabel: "Our Projects",
    //   },
    // },
    Portfolio: {
      screen: PortfolioStackNavigation,
      navigationOptions: {
        drawerIcon: () => (
          <Ionicons
            name="journal-sharp"
            size={25}
            color={Color.secondaryColor}
          />
        ),
        drawerLabel: "Our Team",
      },
    },

    ContactUs: {
      screen: ContactUsStackNavigation,
      navigationOptions: {
        drawerIcon: () => (
          <Ionicons name="call-sharp" size={25} color={Color.secondaryColor} />
        ),
        drawerLabel: "ContactUs",
      },
    },
    ContactUser_List: {
      screen: ContactUserListStackNavigation,
      navigationOptions: {
        drawerIcon: () => (
          <Ionicons
            name="people-circle"
            size={29}
            color={Color.secondaryColor}
          />
        ),
        drawerLabel: "User List",
      },
    },
    About: {
      screen: AboutStackNavigation,
      navigationOptions: {
        drawerIcon: () => (
          <Ionicons
            name="information-circle-sharp"
            size={29}
            color={Color.secondaryColor}
          />
        ),
        drawerLabel: "AboutUs",
      },
    },

    Term_Condition: {
      screen: TermandConditionStackNavigation,
      navigationOptions: {
        drawerIcon: () => (
          <Ionicons
            name="reader-sharp"
            size={29}
            color={Color.secondaryColor}
          />
        ),
        drawerLabel: "Term&Condition",
      },
    },
  },
  {
    contentComponent: (props) => {
      const handlePrivacyPolicy = () => {
        Linking.openURL("https://www.progcc.org/privacy-policy");
      };
      const dispatch = useDispatch();
      const usertoken = useSelector((state) => state.auth.token);
      return (
        <ScrollView showsVerticalScrollIndicator={false}>
          <SafeAreaView
            style={{ flex: 1 }}
            forceInset={{ top: "", horizontal: "never" }}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: Color.drawerColor,
                borderBottomLeftRadius: 70,
              }}
            >
              <View style={styles.drawerLogo}>
                <Image
                  style={{ flex: 1, width: "100%", resizeMode: "contain" }}
                  source={require("../assets/logo.jpg")}
                />
              </View>
            </View>
            <DrawerItems {...props} />
            <TouchableOpacity
              style={styles.privacyStyle}
              onPress={handlePrivacyPolicy}
            >
              <Ionicons name="shield-sharp" size={29} color="#28bd59" />
              <Text style={styles.privacyText}>Privacy Policy</Text>
            </TouchableOpacity>

            <Button
              title="LogOut"
              titleStyle={{ color: "#fff", fontWeight: "700" }}
              containerStyle={{ paddingVertical: 15 }}
              buttonStyle={{
                backgroundColor: Color.primaryColour,
              }}
              onPress={() => {
                dispatch(logOut());
                props.navigation.navigate("Auth");
              }}
              icon={<Ionicons name="log-out" size={29} color="#fff" />}
            />
          </SafeAreaView>
        </ScrollView>
      );
    },
    drawerBackgroundColor: Color.drawerColor,
    drawerPosition: "left",
    hideStatusBar: true,
    contentOptions: {
      activeTintColor: Color.secondaryColor,
      activeBackgroundColor: Color.accentColour,
      inactiveTintColor: Color.inactiveColor,
      itemsContainerStyle: {
        marginVertical: 30,
      },

      labelStyle: {
        fontFamily: "open-sans-bold",
        fontSize: 18,
      },
      itemStyle: {
        marginVertical: 10,
      },
    },
  }
);

// End User Screen

const EndUserDrawerNavigator = createDrawerNavigator(
  {
    HomeScreen: {
      screen: HomeStackNavigation,
      navigationOptions: {
        drawerIcon: () => (
          <Ionicons name="home" size={25} color={Color.secondaryColor} />
        ),

        drawerLabel: "Home",
      },
    },

    // Testimonial: {
    //   screen: TestmonialStackNavigation,
    //   navigationOptions: {
    //     drawerIcon: () => (
    //       <Ionicons
    //         name="thumbs-up-sharp"
    //         size={25}
    //         color={Color.secondaryColor}
    //       />
    //     ),
    //     drawerLabel: "Our Projects",
    //   },
    // },
    Portfolio: {
      screen: PortfolioStackNavigation,
      navigationOptions: {
        drawerIcon: () => (
          <Ionicons
            name="journal-sharp"
            size={25}
            color={Color.secondaryColor}
          />
        ),
        drawerLabel: "Our Team",
      },
    },

    ContactUs: {
      screen: ContactUsStackNavigation,
      navigationOptions: {
        drawerIcon: () => (
          <Ionicons name="call-sharp" size={25} color={Color.secondaryColor} />
        ),
        drawerLabel: "ContactUs",
      },
    },
    About: {
      screen: AboutStackNavigation,
      navigationOptions: {
        drawerIcon: () => (
          <Ionicons
            name="information-circle-sharp"
            size={29}
            color={Color.secondaryColor}
          />
        ),
        drawerLabel: "AboutUs",
      },
    },

    Term_Condition: {
      screen: TermandConditionStackNavigation,
      navigationOptions: {
        drawerIcon: () => (
          <Ionicons
            name="reader-sharp"
            size={29}
            color={Color.secondaryColor}
          />
        ),
        drawerLabel: "Term&Condition",
      },
    },
  },
  {
    contentComponent: (props) => {
      const handlePrivacyPolicy = () => {
        Linking.openURL("https://www.progcc.org/privacy-policy");
      };
      const dispatch = useDispatch();
      const usertoken = useSelector((state) => state.auth.token);
      return (
        <ScrollView showsVerticalScrollIndicator={false}>
          <SafeAreaView
            style={{ flex: 1 }}
            forceInset={{ top: "", horizontal: "never" }}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: Color.drawerColor,
                borderBottomLeftRadius: 70,
              }}
            >
              <View style={styles.drawerLogo}>
                <Image
                  style={{ flex: 1, width: "100%", resizeMode: "contain" }}
                  source={require("../assets/logo.jpg")}
                />
              </View>
            </View>
            <DrawerItems {...props} />
            <TouchableOpacity
              style={styles.privacyStyle}
              onPress={handlePrivacyPolicy}
            >
              <Ionicons name="shield-sharp" size={29} color="#28bd59" />
              <Text style={styles.privacyText}>Privacy Policy</Text>
            </TouchableOpacity>
            <Button
              title="LogOut"
              titleStyle={{ color: "#fff", fontWeight: "700" }}
              containerStyle={{ paddingVertical: 15 }}
              buttonStyle={{
                backgroundColor: Color.primaryColour,
              }}
              onPress={() => {
                dispatch(logOut());
                props.navigation.navigate("Auth");
              }}
              icon={<Ionicons name="log-out" size={29} color="#fff" />}
            />
          </SafeAreaView>
        </ScrollView>
      );
    },
    drawerBackgroundColor: Color.drawerColor,
    drawerPosition: "left",
    hideStatusBar: true,
    contentOptions: {
      activeTintColor: Color.secondaryColor,
      activeBackgroundColor: Color.accentColour,
      inactiveTintColor: Color.inactiveColor,
      itemsContainerStyle: {
        marginVertical: 30,
      },

      labelStyle: {
        fontFamily: "open-sans-bold",
        fontSize: 18,
      },
      itemStyle: {
        marginVertical: 10,
      },
    },
  }
);

const MainAppNavigation = createSwitchNavigator({
  Startup: StartupScreen,
  Auth: AuthScreenStackNavigation,
  appScreen: MainDrawerNavigator,
  userScreen: EndUserDrawerNavigator,
});
export default createAppContainer(MainAppNavigation);

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  drawerLogo: {
    flex: 1,
    height: 100,
    alignItems: "center",
    marginTop: 120,
    justifyContent: "center",
    backgroundColor: Color.drawerColor,
    borderBottomWidth: 2,
    borderBottomColor: Color.inactiveColor,
    borderBottomEndRadius: 38,
    borderBottomStartRadius: 38,
  },
  privacyStyle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "75%",
    alignItems: "center",
    marginBottom: 10,
  },
  privacyText: {
    color: "#808080",
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "open-sans-bold",
  },
});
