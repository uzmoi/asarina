import type {
  ProcessorParams,
  Rules,
  ValueCache,
} from "@wyw-in-js/processor-utils";
import type { ExpressionValue } from "@wyw-in-js/shared";
import { CallProcessor } from "../call-processor";
import type { Style } from "../types";
import { getValue, throwError, toCss } from "../utils";

export default class GlobalStyleProcessor extends CallProcessor {
  readonly #selector: ExpressionValue;
  readonly #style: ExpressionValue;
  constructor(...params: ProcessorParams) {
    super(...params);
    [
      this.#selector = throwError("Missing arguments."),
      this.#style = throwError("Missing arguments."),
    ] = this.args;
  }
  override get asSelector(): string {
    throw new Error("Not implemented.");
  }
  override get value() {
    return this.astService.buildUndefinedNode();
  }
  override extractRules(values: ValueCache): Rules | null {
    return {
      [String(getValue(this.#selector, values))]: {
        cssText: toCss(getValue(this.#style, values) as Style),
        className: "",
        displayName: this.displayName,
        start: this.location?.start ?? null,
      },
    };
  }
}
