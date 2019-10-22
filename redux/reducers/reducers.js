import {
  CHANGE_CARB_RATIO,
  CHANGE_INSULIN_SENSITIVITY,
  CHANGE_MIN_RANGE,
  CHANGE_MAX_RANGE
} from "../actions/actions";
import { AsyncStorage } from "react-native";

const initialState = {
  carbRatio: 15,
  insulinSensitivity: 50,
  minRange: 80,
  maxRange: 160
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_CARB_RATIO:
      AsyncStorage.setItem("carbRatio", action.carbRatio);
      return {
        ...state,
        carbRatio: action.carbRatio
      };
    case CHANGE_INSULIN_SENSITIVITY:
      AsyncStorage.setItem("insulinSensitivity", action.insulinSensitivity);
      return {
        ...state,
        insulinSensitivity: action.insulinSensitivity
      };
    case CHANGE_MIN_RANGE:
      AsyncStorage.setItem("minRange", action.minRange);
      return {
        ...state,
        minRange: action.minRange
      };
    case CHANGE_MAX_RANGE:
      AsyncStorage.setItem("maxRange", action.maxRange);
      return {
        ...state,
        maxRange: action.maxRange
      };
    default:
      return state;
  }
}

export default rootReducer;
