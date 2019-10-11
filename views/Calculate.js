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
      insulinSensitivity: 50,
      insulinTotal: 0
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
        <View style={styles.form}>
          <Form>
            <Item floatingLabel>
              <Label>Food (Optional)</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Carbohydrates</Label>
              <Input onChangeText={this.updateCarbs} />
            </Item>
          </Form>
        </View>
        <Button style={styles.button} onPress={this.getBolus}>
          <Text>Click Me!</Text>
        </Button>
        <Text style={styles.resultText}>
          {Math.round(insulinTotal * 100) / 100}
        </Text>
        <Text style={styles.totalUnits}>total units</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E7E7E7",
    justifyContent: "center"
  },
  form: {
    alignItems: "stretch"
  },
  button: {
    width: 150,
    alignSelf: "center",
    marginTop: 25,
    backgroundColor: "gray"
  },
  resultText: {
    textAlign: "center",
    marginTop: 25,
    fontSize: 50
  },
  totalUnits: {
    textAlign: "center",
    fontSize: 25
  }
});

const mapStateToProps = state => {
  return {
    carbRatio: state.carbRatio,
    insulinSensitivity: state.insulinSensitivity
  };
};

export default connect(mapStateToProps)(Calculate);
