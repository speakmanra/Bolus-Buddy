import {
  CHANGE_CARB_RATIO,
  CHANGE_INSULIN_SENSITIVITY
} from "../actions/actions";

const initialState = {
  carbRatio: 15,
  insulinSensitivity: 50
};

console.log(initialState);

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
    default:
      return state;
  }
}

export default rootReducer;
