/**
 * Generate a random number between two numbers
 *
 * @param from - The lower bound
 * @param to - The upper bound
 * @param length - The length of the array
 *
 * @returns An array of random numbers
 */
export const generateArray = (from: number, to: number, length: number): number[] => {
	return Array.from({ length }, () => Math.floor(Math.random() * (to - from + 1) + from));
};
