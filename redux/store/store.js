import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { AsyncStorage } from "react-native";
import rootReducer, { intitialState } from "../reducers/reducers";

// Middleware: Redux Persist Config
const persistConfig = {
  // Root
  key: "root",
  // Storage Method (React Native)
  storage: AsyncStorage,
  // Whitelist (Save Specific Reducers)
  whitelist: ["rootreducer"],
  // Blacklist (Don't Save Specific Reducers)
  blacklist: []
};
// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, intitialState, applyMiddleware());

let persistor = persistStore(store, null, () => {
  store.getState(); // if you want to get restoredState
});

export { store, persistor };
