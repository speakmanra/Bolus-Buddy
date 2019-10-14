import React, { Component } from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";

import Ionicons from "react-native-vector-icons/Ionicons";

import Calculate from "../views/Calculate";
import Settings from "../views/Settings";
import Logs from "../views/Logs";
import Login from "../views/Login";

const TabNavigator = createBottomTabNavigator(
  {
    Calculate: Calculate,
    // Logs: Logs,
    Settings: Settings
  },
  {
    initialRouteName: "Calculate",
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === "Calculate") {
          iconName = `ios-calculator`;
        } else if (routeName === "Settings") {
          iconName = `ios-options`;
        } else if (routeName === "Logs") {
          iconName = "ios-paper";
        }

        return <IconComponent name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: "#29AD85",
      inactiveTintColor: "gray",
      keyboardHidesTabBar: false
    }
  }
);

const AppContainer = createAppContainer(TabNavigator);

export default class BottomNav extends Component {
  render() {
    return <AppContainer />;
  }
}
