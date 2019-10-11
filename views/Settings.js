import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Form, Item, Label, Input, Button } from "native-base";
import { connect } from "react-redux";
import {
  changeInsulinSensitivity,
  changeCarbRatio
} from "../redux/actions/actions";

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carbRatio: 0,
      insulinSensitivity: 0,
      minBloodSugar: 70,
      maxBloodSugar: 250
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

  render() {
    console.log(this.state.carbRatio);
    return (
      <View style={styles.container}>
        <Form>
          <Item floatingLabel>
            <Label style={styles.label}>Carb Ratio</Label>
            <Input onChangeText={this.setCarbRatio} />
          </Item>
          <Item floatingLabel>
            <Label style={styles.label}>Insulin Sensitivity</Label>
            <Input onChangeText={this.setInsulinSensitivity} />
          </Item>
          <View>
            <RangeSlider
              minValue={0}
              maxValue={100}
              tintColor={"#da0f22"}
              handleBorderWidth={1}
              handleBorderColor='#454d55'
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
            />
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
    changeInsulinSensitivity
  }
)(Settings);
