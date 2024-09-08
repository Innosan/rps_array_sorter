import { SortOrder } from "../../types/SortOrder";

/**
 * Bubble sort algorithm
 *
 * Description: Bubble sort is a simple sorting algorithm that repeatedly steps through the list,
 * compares adjacent elements, and swaps them if they are in the wrong order.
 * The pass through the list is repeated until no swaps are needed, which indicates that the list is sorted.
 *
 * @param arr - The array to be sorted
 * @param order - The order to sort the array in (ascending or descending)
 */
export const bubbleSort = (arr: number[], order: SortOrder): number[] => {
	let copyArr = [...arr]; // Copy the array to avoid mutating the original array
	let swapped: boolean; // Flag to check if any swap has been made

	// Loop through the array and compare elements based on the order
	for (let i = 0; i < copyArr.length; i++) {
		swapped = false; // Reset the flag for each iteration

		for (let j = 0; j < copyArr.length - i - 1; j++) {
			// Compare adjacent elements and swap them if they are in the wrong order
			if (order === SortOrder.ASC ? copyArr[j] > copyArr[j + 1] : copyArr[j] < copyArr[j + 1]) {
				[copyArr[j], copyArr[j + 1]] = [copyArr[j + 1], copyArr[j]]; // Swap the elements
				swapped = true; // Set the flag to true
			}
		}

		// If no swap has been made in the current iteration, the array is already sorted
		if (!swapped) {
			break;
		}
	}

	return copyArr; // Return the sorted array
};
