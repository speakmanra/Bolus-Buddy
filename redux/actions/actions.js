export const CHANGE_CARB_RATIO = "CHANGE_CARB_RATIO";
export const CHANGE_INSULIN_SENSITIVITY = "CHANGE_INSULIN_SENSITIVITY";
export const CHANGE_MIN_RANGE = "CHANGE_MIN_RANGE";
export const CHANGE_MAX_RANGE = "CHANGE_MAX_RANGE";

export function changeCarbRatio(carbRatio) {
  return { type: CHANGE_CARB_RATIO, carbRatio: carbRatio };
}

export function changeInsulinSensitivity(insulinSensitivity) {
  return {
    type: CHANGE_INSULIN_SENSITIVITY,
    insulinSensitivity: insulinSensitivity
  };
}

export function changeMinRange(minRange) {
  return {
    type: CHANGE_MIN_RANGE,
    minRange: minRange
  };
}

export function changeMaxRange(maxRange) {
  return {
    type: CHANGE_MAX_RANGE,
    maxRange: maxRange
  };
}
