import React from "react";
import BottomNav from "./Components/BottomNav";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { View } from "react-native";

function App() {
  return <BottomNav />;
}

export default App;
