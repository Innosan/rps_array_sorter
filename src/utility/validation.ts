export const isValidInt = (input: string): boolean => {
	const num = parseInt(input, 10);
	return !isNaN(num) && Number.isInteger(num);
};

export const isValidYesNo = (input: string): boolean => {
	return input.toLowerCase() === "yes" || input.toLowerCase() === "no";
};
