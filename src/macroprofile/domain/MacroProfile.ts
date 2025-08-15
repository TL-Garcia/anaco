import { MacroNutrient } from "./MacroNutrient";

export type MacroProfilePrimitives = {
	carbs: number;
	fats: number;
	proteins: number;
};

export class MacroProfile {
	constructor(
		readonly carbs: MacroNutrient,
		readonly fats: MacroNutrient,
		readonly proteins: MacroNutrient,
	) {}

	toPrimitives(): MacroProfilePrimitives {
		return {
			proteins: this.proteins.value,
			fats: this.fats.value,
			carbs: this.carbs.value,
		};
	}

	static fromPrimitives({ proteins, fats, carbs }: MacroProfilePrimitives) {
		return new MacroProfile(
			new MacroNutrient(carbs),
			new MacroNutrient(fats),
			new MacroNutrient(proteins),
		);
	}

	isProportionalTo(mp: MacroProfile): boolean {
		return (
			this.proteins.isProportionalTo(mp.proteins) &&
			this.carbs.isProportionalTo(mp.carbs) &&
			this.fats.isProportionalTo(mp.fats)
		);
	}
}
