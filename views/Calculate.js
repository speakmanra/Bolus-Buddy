import React, { Component } from "react";
import { View, StyleSheet, Keyboard, KeyboardAvoidingView } from "react-native";
import {
  Form,
  Item,
  Label,
  Input,
  Button,
  Icon,
  Text,
  Spinner
} from "native-base";

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
      insulinTotal: 0,
      noInput: true,
      isLoading: false
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

  insulinAlgo() {
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
    console.log(foodBolus);
    console.log(correctionBolus);
    let insulinTotal = correctionBolus + foodBolus;

    this.setState({
      insulinTotal: insulinTotal
    });
  }

  getBolus = () => {
    Keyboard.dismiss();
    this.getSettings();
    this.setState({
      isLoading: true,
      noInput: true
    });
    setTimeout(() => {
      this.insulinAlgo();
    }, 500);
    setTimeout(() => {
      this.setState({
        isLoading: false,
        noInput: false
      });
    }, 600);
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
    const { noInput, insulinTotal, isLoading } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.formContainer}>
          <View style={styles.form}>
            <Form>
              <Item
                style={styles.input}
                rounded
                inlineLabel
                error={isNaN(insulinTotal)}
              >
                <Label>Carbohydrates</Label>
                <Input onChangeText={this.updateCarbs} />
                <Icon
                  style={{ color: "#29AD85" }}
                  active
                  type='FontAwesome5'
                  name='bread-slice'
                />
              </Item>

              <Item style={styles.input} rounded inlineLabel>
                <Label>Blood Sugar (Optional)</Label>
                <Input onChangeText={this.updateBloodSugar} />
                <Icon
                  style={{ color: "#29AD85" }}
                  active
                  type='FontAwesome5'
                  name='tint'
                />
              </Item>
              <Item style={styles.input} rounded inlineLabel>
                <Label>Food (Optional)</Label>
                <Input />
                <Icon
                  style={{ color: "#29AD85" }}
                  active
                  type='FontAwesome5'
                  name='utensils'
                />
              </Item>
            </Form>
          </View>
          {!isLoading ? (
            <Button
              dark
              rounded
              iconRight
              style={styles.button}
              onPress={this.getBolus}
            >
              <Text style={{ textAlign: "center" }}>Calculate Insulin</Text>
              <Icon name='calculator' type='FontAwesome5' />
            </Button>
          ) : (
            <Spinner />
          )}

          {noInput || isNaN(insulinTotal) ? (
            <Text style={styles.totalUnits}>Please enter carbs</Text>
          ) : (
            <View>
              <Text style={styles.resultText}>
                {Math.round(insulinTotal * 10) / 10}
              </Text>
              <Text style={styles.totalUnits}>Total Units</Text>
            </View>
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    position: "absolute"
  },
  formContainer: {
    backgroundColor: "#E7E7E7",
    flex: 6,
    justifyContent: "center",
    alignItems: "stretch"
  },
  form: {
    alignItems: "stretch"
  },
  input: {
    width: 320,
    alignSelf: "center",
    marginBottom: 20,
    paddingLeft: 15,
    paddingRight: 15
  },
  button: {
    alignSelf: "center",
    backgroundColor: "#29AD85",
    marginTop: 18,
    marginBottom: 17
  },
  resultText: {
    textAlign: "center",
    marginTop: 25,
    fontSize: 50
  },
  totalUnits: {
    textAlign: "center",
    fontSize: 25,
    marginTop: 20
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
