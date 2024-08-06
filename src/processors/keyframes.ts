import StyleProcessor from "./style.js";

export default class KeyframesProcessor extends StyleProcessor {
  override get asSelector() {
    return `@keyframes ${this.className}`;
  }
}
