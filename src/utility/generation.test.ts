import { generateArray } from "./generation";

describe("generateArray", () => {
	it("should generate an array of the specified length", () => {
		const length = 10;
		const result = generateArray(1, 100, length);

		expect(result).toHaveLength(length);
	});

	it("should generate numbers within the specified range", () => {
		const from = 1;
		const to = 100;
		const length = 10;
		const result = generateArray(from, to, length);

		result.forEach((num) => {
			expect(num).toBeGreaterThanOrEqual(from);
			expect(num).toBeLessThanOrEqual(to);
		});
	});
});
