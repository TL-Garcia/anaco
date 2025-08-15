import { ValueObject } from "../../shared/value-object/ValueObject.js";

export class MacroNutrient extends ValueObject<number> {
	constructor(value: number) {
		super(value);
	}

	ensureIsValid(value: number): void {
		const MIN_VALUE = 0;
		const MAX_VALUE = 1;

		if (value < MIN_VALUE || value > MAX_VALUE) {
			throw new MacroNutrientInvalidValueError(value);
		}
	}

	isProportionalTo(n: MacroNutrient): boolean {
		const { value: otherNutrient } = n;
		const { value: thisNutrient } = this;

		if (otherNutrient === thisNutrient) return true;

		const remainder =
			otherNutrient > thisNutrient
				? otherNutrient % thisNutrient
				: thisNutrient % otherNutrient;

		return remainder === 0;
	}
}

export class MacroNutrientInvalidValueError extends Error {
	constructor(value: number) {
		super(`Invalid Nutrient value: ${value}`);
	}
}
