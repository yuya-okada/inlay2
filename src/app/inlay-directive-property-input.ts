
import { EventEmitter, Input } from "@angular/core";
import { InlayDirectiveProperty } from "inlay-runner";


/**
 * ディレクティブのプロパティとして表示されるコンポーネントはすべてこのクラスを継承しなければならない
 *
 * @export
 * @class InlayDirectivePropertyInput
 */
export class InlayDirectivePropertyInput {
  value: any = null
  emitter: EventEmitter<{ newVal: any, property: InlayDirectiveProperty, id: string }> = null
  @Input() id: string;
  @Input() property: InlayDirectiveProperty;

  constructor() { }

  onChanged() {
    if (this.emitter) {
      this.emitter.emit({ newVal: this.value, property: this.property, id: this.id })
    }
  }

}