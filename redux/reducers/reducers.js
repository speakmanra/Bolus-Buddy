import {
  CHANGE_CARB_RATIO,
  CHANGE_INSULIN_SENSITIVITY,
  CHANGE_MIN_RANGE,
  CHANGE_MAX_RANGE
} from "../actions/actions";

const initialState = {
  carbRatio: 15,
  insulinSensitivity: 50,
  minRange: 80,
  maxRange: 160
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_CARB_RATIO:
      return {
        ...state,
        carbRatio: action.carbRatio
      };
    case CHANGE_INSULIN_SENSITIVITY:
      return {
        ...state,
        insulinSensitivity: action.insulinSensitivity
      };
    case CHANGE_MIN_RANGE:
      return {
        ...state,
        minRange: action.minRange
      };
    case CHANGE_MAX_RANGE:
      return {
        ...state,
        maxRange: action.maxRange
      };
    default:
      return state;
  }
}

export default rootReducer;
