

const bmiNames = [
	{ "gte": 0,    "lt": 15,   "name": "Very Severely Underweight" },
	{ "gte": 15,   "lt": 16,   "name": "Severely Underweight" },
	{ "gte": 16,   "lt": 18.5, "name": "Underweight" },
	{ "gte": 18.5, "lt": 25,   "name": "Normal" },
	{ "gte": 25,   "lt": 30,   "name": "Overweight" },
	{ "gte": 30,   "lt": 35,   "name": "Moderately Obese" },
	{ "gte": 35,   "lt": 40,   "name": "Severely Obese" },
	{ "gte": 40,   "lt": 9999, "name": "Very Severely Obese" }
]
function calc(weight: number, height: number) {
	const multiplier = 1
	return (multiplier * weight) / (height * height)
}

function name(bmi: number) {
	const set = bmiNames.find( (set) => {
		return (bmi >= set.gte && bmi < set.lt)
	})
	return set && set.name
}

export function calcBmi(weight: number, height: number) {
	const bmi = calc(weight, height)
	return {
		value: bmi,
		name: name(bmi)
	}
}