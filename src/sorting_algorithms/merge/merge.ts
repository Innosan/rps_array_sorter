import { SortOrder } from "../../types/SortOrder";

/**
 * Sorts an array using the merge sort algorithm
 *
 * @param arr - The array to sort
 * @param order - The order to sort the array in
 *
 * @returns The sorted array
 */
export const mergeSort = (arr: number[], order: SortOrder): number[] => {
	// Base case: If the array has 0 or 1 elements, it is already sorted
	if (arr.length <= 1) {
		return arr;
	}

	/**
	 * Merge two sorted arrays into a single sorted array
	 *
	 * @param left - The left array
	 * @param right - The right array
	 *
	 * @returns The merged sorted array
	 */
	const merge = (left: number[], right: number[]): number[] => {
		let result: number[] = [];
		let leftIndex = 0;
		let rightIndex = 0;

		// Compare elements from the left and right arrays and merge them into a single array
		while (leftIndex < left.length && rightIndex < right.length) {
			if (order === SortOrder.ASC ? left[leftIndex] < right[rightIndex] : left[leftIndex] > right[rightIndex]) {
				result.push(left[leftIndex]);
				leftIndex++;
			} else {
				result.push(right[rightIndex]);
				rightIndex++;
			}
		}

		// Concatenate the remaining elements from the left and right arrays
		return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
	};

	const middle = Math.floor(arr.length / 2); // Find the middle index of the array

	// Split the array into two halves
	const left = arr.slice(0, middle);
	const right = arr.slice(middle);

	// Recursively merge the sorted halves until the base case is reached
	return merge(mergeSort(left, order), mergeSort(right, order));
};
