//1. calculate percent different between 2 numbers ts or js
//2. https://stackoverflow.com/questions/23759782/javascript-percentage-difference-between-two-values

export function percentDifference(a: number, b: number): number {
	return 100 * Math.abs((a - b) / ((a + b) / 2))
}

export function capitalize(str: string) {
	return str.charAt(0).toUpperCase() + str.substring(1)
}
