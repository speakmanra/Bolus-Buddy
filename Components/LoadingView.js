import React from "react";
import { View } from "react-native";
import { Spinner } from "native-base";

export default function LoadingView() {
  return (
    <View>
      <Spinner />
    </View>
  );
}
