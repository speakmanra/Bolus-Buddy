import React from "react";
import BottomNav from "./Components/BottomNav";
import LoadingView from "./Components/LoadingView";
import { Provider } from "react-redux";

import { persistor, store } from "./redux/store/store";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store}>
      <BottomNav />
    </Provider>
  );
}

export default App;
