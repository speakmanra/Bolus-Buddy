import React, { Component } from "react";
import { View, ScrollView, StyleSheet, Text, Keyboard } from "react-native";
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
      minRange: 80,
      maxRange: 160,
      bloodSugar: 0,
      insulinTotal: 0
    };
  }

  getSettings = () => {
    this.setState({
      carbRatio: this.props.carbRatio,
      insulinSensitivity: this.props.insulinSensitivity,
      minRange: this.props.minRange,
      maxRange: this.props.maxRange
    });
  };

  insulinAlgo = () => {
    const {
      carbRatio,
      insulinSensitivity,
      carbs,
      bloodSugar,
      minRange,
      maxRange
    } = this.state;
    foodBolus = carbs / carbRatio;
    let correctionBolus;
    if (bloodSugar < minRange && bloodSugar != 0) {
      correctionBolus = ((minRange - bloodSugar) / insulinSensitivity) * -1;
    } else if (bloodSugar > maxRange) {
      correctionBolus = (bloodSugar - maxRange) / insulinSensitivity;
    } else {
      correctionBolus = 0;
    }
    let insulinTotal = correctionBolus + foodBolus;

    this.setState({
      insulinTotal: insulinTotal
    });
  };

  getBolus = () => {
    Keyboard.dismiss();
    this.getSettings();
    this.insulinAlgo();
  };

  updateCarbs = num => {
    this.setState({
      carbs: num
    });
  };

  updateBloodSugar = num => {
    this.setState({
      bloodSugar: num
    });
  };

  render() {
    const { carbRatio, insulinSensitivity, insulinTotal } = this.state;
    console.log(this.state.carbs);
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <Form>
            <Item inlineLabel>
              <Label>Food (Optional)</Label>
              <Input />
            </Item>
            <Item inlineLabel>
              <Label>Carbohydrates</Label>
              <Input onChangeText={this.updateCarbs} />
            </Item>
            <Item inlineLabel last>
              <Label>Blood Sugar</Label>
              <Input onChangeText={this.updateBloodSugar} />
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
    insulinSensitivity: state.insulinSensitivity,
    minRange: state.minRange,
    maxRange: state.maxRange
  };
};

export default connect(mapStateToProps)(Calculate);
