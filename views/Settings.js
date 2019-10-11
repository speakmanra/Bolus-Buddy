import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Form, Item, Label, Input, Button } from "native-base";
import { connect } from "react-redux";
import {
  changeInsulinSensitivity,
  changeCarbRatio,
  changeMinRange,
  changeMaxRange
} from "../redux/actions/actions";
// import RangeSlider from "react-native-range-slider";

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carbRatio: 15,
      insulinSensitivity: 50,
      minRange: 80,
      maxRange: 160
    };
  }

  setCarbRatio = num => {
    this.props.changeCarbRatio(num);
    this.setState({ carbRatio: num });
  };

  setInsulinSensitivity = num => {
    this.props.changeInsulinSensitivity(num);
    this.setState({ insulinSensitivity: num });
  };

  setMinRange = num => {
    this.props.changeMinRange(num);
    this.setState({ minRange: num });
  };

  setMaxRange = num => {
    this.props.changeMaxRange(num);
    this.setState({ maxRange: num });
  };

  render() {
    const { carbRatio, insulinSensitivity, minRange, maxRange } = this.state;
    return (
      <View style={styles.container}>
        <Form>
          <Item inlineLabel>
            <Label style={styles.label}>Carb Ratio</Label>
            <Input
              placeholder={carbRatio.toString()}
              onChangeText={this.setCarbRatio}
            />
          </Item>
          <Item inlineLabel>
            <Label style={styles.label}>Insulin Sensitivity</Label>
            <Input
              placeholder={insulinSensitivity.toString()}
              onChangeText={this.setInsulinSensitivity}
            />
          </Item>
          <Item inlineLabel>
            <Label style={styles.label}>Min Range</Label>
            <Input
              placeholder={minRange.toString()}
              onChangeText={this.setMinRange}
            />
          </Item>
          <Item inlineLabel last>
            <Label style={styles.label}>Max Range</Label>
            <Input
              placeholder={maxRange.toString()}
              onChangeText={this.setMaxRange}
            />
          </Item>
          <View>
            {/* <RangeSlider
              minValue={0}
              maxValue={100}
              tintColor={"#da0f22"}
              handleBorderWidth={1}
              handleBorderColor="#454d55"
              selectedMinimum={20}
              selectedMaximum={40}
              style={{
                flex: 1,
                height: 70,
                padding: 10,
                backgroundColor: "#ddd"
              }}
              onChange={data => {
                console.log(data);
              }}
            /> */}
          </View>
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

export default connect(
  null,
  {
    changeCarbRatio,
    changeInsulinSensitivity,
    changeMinRange,
    changeMaxRange
  }
)(Settings);
