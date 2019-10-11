export const CHANGE_CARB_RATIO = "CHANGE_CARB_RATIO";
export const CHANGE_INSULIN_SENSITIVITY = "CHANGE_INSULIN_SENSITIVITY";

export function changeCarbRatio(carbRatio) {
  return { type: CHANGE_CARB_RATIO, carbRatio: carbRatio };
}

export function changeInsulinSensitivity(insulinSensitivity) {
  return {
    type: CHANGE_INSULIN_SENSITIVITY,
    insulinSensitivity: insulinSensitivity
  };
}
