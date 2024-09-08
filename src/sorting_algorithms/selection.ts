import { SortOrder } from "../types/SortOrder";

/**
 * Sorts an array using the selection sort algorithm
 *
 * @param arr - The array to sort
 * @param order - The order to sort the array in
 *
 * @returns The sorted array
 */
export const selectionSort = (arr: number[], order: SortOrder): number[] => {
	let copyArr = [...arr]; // Copy the array to avoid mutating the original array

	for (let i = 0; i < copyArr.length - 1; i++) {
		let minIndex = i; // Assume the current index has the minimum value

		for (let j = i + 1; j < copyArr.length; j++) {
			// Compare the current element with the minimum element
			if (order === SortOrder.ASC ? copyArr[j] < copyArr[minIndex] : copyArr[j] > copyArr[minIndex]) {
				minIndex = j; // Update the minimum index
			}
		}

		// Swap the current element with the minimum element
		[copyArr[i], copyArr[minIndex]] = [copyArr[minIndex], copyArr[i]];
	}

	return copyArr; // Return the sorted array
};
