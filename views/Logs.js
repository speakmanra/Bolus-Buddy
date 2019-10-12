import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Header, Right, Button, Icon, Title } from "native-base";

export default class Logs extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View>
          <Header style={{ height: 75 }} span>
            <Right style={{ marginRight: 110 }}>
              <Button
                // onPress={() => {
                //   this.props.navigation.navigate("Login");
                // }}
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
        <View>
          <Text>Logs</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
