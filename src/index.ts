// Importing crucial functions and sorting algorithm
import { generateArray } from "./utility/generation";
import { bubbleSort } from "./sorting_algorithms/bubble";

const initialArray = generateArray(1, 100, 10);
const sortedArray = bubbleSort(initialArray);

console.log("Initial array:", initialArray);
console.log("\nSorted array:", sortedArray);
