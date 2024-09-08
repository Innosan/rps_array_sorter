import * as fs from "fs";

import { SortOrder } from "./types/SortOrder";

import { mergeSort } from "./sorting_algorithms/merge/merge";
import { generateArray } from "./utility/generation";

import { prompt, rl } from "./inputs";
import { isValidInt, isValidYesNo } from "./utility/validation";

const main = async () => {
	while (true) {
		const size = parseInt(await prompt("Enter the size of the array: ", isValidInt), 10);
		const min = parseInt(await prompt("Enter the minimum value: ", isValidInt), 10);
		const max = parseInt(await prompt("Enter the maximum value: ", isValidInt), 10);

		const array = generateArray(min, max, size);

		console.log("Generated Array:", array);

		const order = (await prompt("Choose sorting order (asc/desc): ")) === "asc" ? SortOrder.ASC : SortOrder.DESC;
		const sortedArray = mergeSort(array, order);

		console.log("Sorted Array:", sortedArray);

		const exportToFile = await prompt("Do you want to export the sorted array to a file? (yes/no): ", isValidYesNo);
		if (exportToFile.toLowerCase() === "yes") {
			const fileName = await prompt("Enter the file name: ");
			fs.writeFileSync(fileName, JSON.stringify(sortedArray));

			console.log(`Array exported to ${fileName}`);
		}

		const exit = await prompt("Do you want to exit? (yes/no): ", isValidYesNo);
		if (exit.toLowerCase() === "yes") {
			break;
		}
	}

	rl.close();
};

main().then(() => console.log("Program exited."));
