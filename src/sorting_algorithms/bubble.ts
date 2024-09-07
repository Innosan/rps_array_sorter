/**
 * Bubble sort algorithm
 *
 * Description: Bubble sort is a simple sorting algorithm that repeatedly steps through the list,
 * compares adjacent elements, and swaps them if they are in the wrong order.
 * The pass through the list is repeated until no swaps are needed, which indicates that the list is sorted.
 *
 * Time complexity: O(n^2) - O(n) * O(n) (worst and average case), because of the nested loops
 * Space complexity: O(1) - Constant space (no extra space is needed because the array is sorted in place)
 *
 * @param arr - The array to be sorted
 */
export const bubbleSort = (arr: number[]): number[] => {
	let copyArr = [...arr]; // Copy the array to avoid mutating the original array
	let swapped: boolean; // Flag to check if any swap has been made

	do {
		swapped = false;

		// Loop through the array
		for (let i = 0; i < arr.length; i++) {
			if (copyArr[i] > copyArr[i + 1]) {
				[copyArr[i], copyArr[i + 1]] = [copyArr[i + 1], copyArr[i]]; // Swap the elements

				swapped = true; // Set the flag to true
			}
		}
	} while (swapped); // Continue the loop until no swap is made (i.e., the array is sorted)

	// Return the sorted array
	return copyArr;
};
