import React from "react";
import { Header, Right, Button, Icon, Text } from "native-base";

export default function TopNav() {
  return (
    <Header style={{ height: 75 }} span>
      <Right style={{ marginRight: 110 }}>
        <Button
          onPress={() => {
            this.props.navigation.navigate("Login");
          }}
          transparent
          iconRight
        >
          <Text style={{ marginRight: 10, fontSize: 20, color: "#29AD85" }}>
            Login
          </Text>
          <Icon
            type='FontAwesome5'
            name='user-alt'
            style={{ color: "#29AD85" }}
          />
        </Button>
      </Right>
    </Header>
  );
}
