import React, { Component } from "react";
import { View, ScrollView, StyleSheet, Text } from "react-native";
import { Form, Item, Label, Input, Button } from "native-base";
import { connect } from "react-redux";

class Calculate extends Component {
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
  constructor(props) {
    super(props);
    this.state = {
      carbRatio: 15,
      insulinSensitivity: 50
    };
  }

  getSettings = () => {
    this.setState({
      carbRatio: this.props.carbRatio,
      insulinSensitivity: this.props.insulinSensitivity
    });
  };

  insulinAlgo = () => {
    const { carbRatio, insulinSensitivity, insulinTotal, carbs } = this.state;
    foodBolus = carbs / carbRatio;
    this.setState({
      insulinTotal: foodBolus
    });
  };

  getBolus = () => {
    this.getSettings();
    this.insulinAlgo();
  };

  updateCarbs = num => {
    this.setState({
      carbs: num
    });
  };

  render() {
    const { carbRatio, insulinSensitivity, insulinTotal } = this.state;
    console.log(this.state.carbs);
    return (
      <View style={styles.container}>
        <Text>{carbRatio}</Text>
        <Text>{insulinSensitivity}</Text>
        <Text>{insulinTotal} total units</Text>
        <Form>
          <Item floatingLabel>
            <Label>Food (Optional)</Label>
            <Input />
          </Item>
          <Item floatingLabel last>
            <Label>Carbohydrates</Label>
            <Input onChangeText={this.updateCarbs} />
          </Item>
          <Button onPress={this.getBolus}>
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
  }
});

const mapStateToProps = state => {
  return {
    carbRatio: state.carbRatio,
    insulinSensitivity: state.insulinSensitivity
  };
};

export default connect(mapStateToProps)(Calculate);
