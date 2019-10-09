import React, { Component } from "react";
import { View, ScrollView, StyleSheet, Text } from "react-native";
import { Form, Item, Label, Input } from "native-base";

export default class Calculate extends Component {
  static navigationOptions = {
    title: "Calculate",
    headerStyle: {
      backgroundColor: "#7a0800"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };
  state = {
    carbRatio: 15,
    insulinSensitivity: 50,
    insulinType: "humalog",
    correctionRangeLow: 90,
    correctionRangeHigh: 120
  };

  componentWillMount() {
    const { navigation } = this.props;
    const carbRatio = navigation.getParam("carbRatio", "NO-ID");
    const insulinSensitivity = navigation.getParam(
      "insulinSensitivity",
      "NO-ID"
    );
    const insulinType = navigation.getParam("insulinType", "NO-ID");
    const correctionRangeLow = navigation.getParam(
      "correctionRangeLow",
      "NO-ID"
    );
    const correctionRangeHigh = navigation.getParam(
      "correctionRangeHigh",
      "NO-ID"
    );
    if (
      carbRatio != "NO-ID" &&
      insulinSensitivity != "NO-ID" &&
      insulinType != "NO-ID"
    ) {
      this.setState({
        carbRatio,
        insulinSensitivity,
        insulinType
      });
    }
  }

  render() {
    const { carbRatio, insulinSensitivity, insulinType } = this.state;
    return (
      <View style={styles.container}>
        <Text>
          {carbRatio}
          {insulinSensitivity}
          {insulinType}
        </Text>
        <Form>
          <Item floatingLabel>
            <Label>Food (Optional)</Label>
            <Input />
          </Item>
          <Item floatingLabel last>
            <Label>Carbohydrates</Label>
            <Input />
          </Item>
        </Form>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
    backgroundColor: "#E7E7E7"
  }
});
