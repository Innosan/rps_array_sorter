import readline from "readline";

export const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

export const prompt = (query: string, validate?: (input: string) => boolean): Promise<string> => {
	return new Promise((resolve) => {
		const ask = () => {
			rl.question(query, (answer) => {
				if (validate && !validate(answer)) {
					console.log("Invalid input. Please try again.");
					ask();
				} else {
					resolve(answer);
				}
			});
		};
		ask();
	});
};
