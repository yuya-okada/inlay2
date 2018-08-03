import { DirectivePropertyData } from "./directives-data.service";

export class InlayDirectiveProperty {
    /**
     * プロパティの型 
     * 
     * @type {string}
     * @memberof InlayDirectiveProperty
     */
    type:string = "";
    /**
     * 結果の出力手法
     * 
     * @type {string}
     * @memberof InlayDirectiveProperty
     */
    resultType:string = "";
    /**
     * 結果の出力先
     * 
     * @type {string}
     * @memberof InlayDirectiveProperty
     */
    result:string = "";
    /**
     * プロパティの現在の値を保持
     * 
     * @type {*}
     * @memberof InlayDirectiveProperty
     */
    value: any = null
    /**
     * プロパティのテキスト
     * 
     * @type {string}
     * @memberof InlayDirectiveProperty
     */
    text :string = ""

    constructor(propertyData: DirectivePropertyData) {
        this.type = propertyData.type;
        this.resultType = propertyData.resultType;
        this.result = propertyData.result;
        this.value = propertyData.initialValue;
        this.text = propertyData.text;
    }
}
