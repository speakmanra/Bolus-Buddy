import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Form, Item, Label, Input, Button } from "native-base";

export default class Settings extends Component {
  state = {
    carbRatio: 15,
    insulinSensitivity: 50,
    insulinType: "humalog",
    correctionRangeLow: 90,
    correctionRangeHigh: 120
  };

  updateCarb = num => {
    this.setState({ carbRatio: num });
  };

  updateSensitivity = num => {
    this.setState({ insulinSensitivity: num });
  };

  render() {
    const {
      carbRatio,
      insulinSensitivity,
      insulinType,
      correctionRangeHigh,
      correctionRangeLow
    } = this.state;
    return (
      <View style={styles.container}>
        <Form>
          <Item floatingLabel>
            <Label style={styles.label}>Carb Ratio</Label>
            <Input onChangeText={this.updateCarb} />
          </Item>
          <Item floatingLabel>
            <Label style={styles.label}>Insulin Sensitivity</Label>
            <Input onChangeText={this.updateSensitivity} />
          </Item>
          {/* <Item floatingLabel>
            <Label style={styles.label}>Insulin Type</Label>
            <Input />
          </Item>
          <Item floatingLabel last>
            <Label style={styles.label}>Correction Range</Label>
            <Input />
          </Item> */}
          <Button
            onPress={() =>
              this.props.navigation.navigate("Calculate", {
                carbRatio,
                insulinSensitivity,
                insulinType,
                correctionRangeHigh,
                correctionRangeLow
              })
            }
          >
            <Text>Click Me!</Text>
          </Button>
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
  },
  label: {
    textAlign: "center"
  }
});
