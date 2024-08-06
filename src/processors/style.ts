import type {
  ProcessorParams,
  Rules,
  ValueCache,
} from "@wyw-in-js/processor-utils";
import type { ExpressionValue } from "@wyw-in-js/shared";
import { CallProcessor } from "../call-processor";
import type { Style } from "../types";
import { getValue, throwError, toCss } from "../utils";

export default class StyleProcessor extends CallProcessor {
  readonly #style: ExpressionValue;
  constructor(...params: ProcessorParams) {
    super(...params);
    [this.#style = throwError("Missing arguments.")] = this.args;
  }
  override get asSelector() {
    return `.${this.className}`;
  }
  override get value() {
    return this.astService.stringLiteral(this.className);
  }
  override extractRules(values: ValueCache): Rules | null {
    if (!this.isReferenced) return null;

    return {
      [this.asSelector]: {
        cssText: toCss(getValue(this.#style, values) as Style),
        className: this.className,
        displayName: this.displayName,
        start: this.location?.start ?? null,
      },
    };
  }
}
