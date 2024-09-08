import { SortOrder } from "../../types/SortOrder";
import { mergeSort } from "./merge";

describe("mergeSort", () => {
	it("should sort the array in ascending order", () => {
		const arr = [5, 3, 8, 4, 2, 1, 7, 6];
		const result = mergeSort(arr, SortOrder.ASC);

		expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
	});

	it("should return an empty array if the input array is empty", () => {
		const arr: number[] = [];
		const result = mergeSort(arr, SortOrder.ASC);

		expect(result).toEqual([]);
	});

	it("should return the same array if the input array has only one element", () => {
		const arr = [1];
		const result = mergeSort(arr, SortOrder.ASC);

		expect(result).toEqual([1]);
	});

	it("should return the same array if the input array is already sorted", () => {
		const arr = [1, 2, 3, 4, 5, 6, 7, 8];
		const result = mergeSort(arr, SortOrder.ASC);

		expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
	});

	it("should sort the array in descending order", () => {
		const arr = [5, 3, 8, 4, 2, 1, 7, 6];
		const result = mergeSort(arr, SortOrder.DESC);

		expect(result).toEqual([8, 7, 6, 5, 4, 3, 2, 1]);
	});
});
