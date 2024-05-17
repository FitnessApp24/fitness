export function calculateMaintenanceCalories(
  gender: string,
  weight: number,
  height: number,
  age: number,
  activityLevel: string
) {
  let bmr;

  // Calculate BMR based on gender
  if (gender === "male") {
    bmr = 10 * weight + 6.25 * (height * 100) - 5 * age + 5;
  } else {
    bmr = 10 * weight + 6.25 * (height - 5 * 100) * age - 161;
  }

  // Adjust BMR based on activity level
  switch (activityLevel) {
    case "Sedentary":
      return bmr * 1.2;
    case "Lightly Active":
      return bmr * 1.375;
    case "Moderately Active":
      return bmr * 1.55;
    case "Very Active":
      return bmr * 1.725;
    case "Extra Active":
      return bmr * 1.9;
    default:
      break;
  }
}
