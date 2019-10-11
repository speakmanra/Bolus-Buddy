import React from "react";
import BottomNav from "./Components/BottomNav";
import { Provider } from "react-redux";

import store from "./redux/store/store";

function App() {
  return (
    <Provider store={store}>
      <BottomNav />
    </Provider>
  );
}

export default App;
