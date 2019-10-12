import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class Logs extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View>
          <Header style={{ height: 75 }} span>
            <Right style={{ marginRight: 110 }}>
              <Button
                onPress={() => {
                  this.props.navigation.navigate("Login");
                }}
                transparent
                iconRight
              >
                <Text style={{ marginRight: 10, fontSize: 20 }}>Login</Text>
                <Icon
                  type='FontAwesome5'
                  name='user-alt'
                  style={{ color: "#29AD85" }}
                />
              </Button>
            </Right>
          </Header>
        </View>
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
