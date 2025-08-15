type BasicPrimitive = string | number | boolean;

export abstract class ValueObject<
	TValue extends BasicPrimitive | BasicPrimitive[],
> {
	readonly value: TValue;

	constructor(input: TValue, mapper?: (input: TValue) => TValue) {
		this.ensureIsValid(input);
		this.value = mapper ? mapper(input) : input;
	}

	abstract ensureIsValid(input: TValue): void;
}
