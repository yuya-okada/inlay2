import { InlayButtonComponent } from "./inlay-button/inlay-button.component";
import { ComponentsDataService } from "../components-data.service";
import { DirectivesDataService, DirectiveData, DirectivePropertyData } from "../directives-data.service";
import { InlayDirective } from "./inlay-directive";
import { HostBinding, HostListener, ElementRef, Output, EventEmitter, OnInit, AfterViewInit } from "@angular/core";
import { InlayDirectiveProperty } from "../inlay-directive-property";
import { Uuid } from "../uuid";
declare var $: any;


export class InlayComponent implements OnInit{
    // スタイルを定義するためのプロパティなので、常にtrueにする
    @HostBinding("class.inlay-component") isinlayCompoennt = true
    @HostBinding("class.inlay-component-focused") isFocused = false

    @HostListener("mousedown")
    onMouseDown(ev) {
        this.focus()
    }

    @Output() onFocusEmitter = new EventEmitter(true)
    
    /**
     * コンポーネントの要素を表すjQueryオブジェクト
     * 
     * @private
     * @memberof InlayComponent
     */
    public $element: any;
    /**
     *
     *
     * @private
     * @memberof InlayComponent
     */
    private directivesData = {}

    /**
     * コンポーネントの名前
     * 
     * @type {string}
     * @memberof InlayComponent
     */
    public name:string = null
    /**
     * 
     * 
     * @type {string}
     * @memberof InlayComponent
     */
    public type:string = null
    /**
     * コンポーネントのx座標
     * 
     * @memberof InlayComponent
     */
    public _x = 0
    get x() :number {
        return this._x;
    }
    set x(val: number) {
        this._x = val
        this.$element.css("left", val)
    }

    /**
     * コンポーネントのx座標
     * 
     * @memberof InlayComponent
     */
    public _y = 0
    get y() :number {
        return this._y;
    }
    set y(val: number) {
        this._y = val
        this.$element.css("top", val)
    }

    /**
     * コンポーネントの高さ
     * 
     * @memberof InlayComponent
     */
    public _height = 0
    get height() :number {
        return this._height;
    }
    set height(val: number) {
        this._height = val
        this.$element.height(val)
    }

    /**
     * コンポーネントの幅
     * 
     * @memberof InlayComponent
     */
    public _width = 0
    get width() :number {
        return this._width;
    }
    set width(val: number) {
        this._width = val
        this.$element.width(val)
    }
    
    /**
     * ディレクティブによって適応されるオプション
     * 
     * @type {any[]}
     * @memberof InlayComponent
     */
    public options: {[key:string]: any} = {}
    /**
     * コンポーネントにアタッチされたディレクティブのリスト
     * 
     * @type {InlayDirective[]}
     * @memberof InlayComponent
     */
    public directives: InlayDirective[] = []

   
    
    public static generate(type: string) {
        switch (type) {
            case "button":
                InlayButtonComponent
            break;

        }
    }
 
    constructor(private directivesDataService:DirectivesDataService, private elementRef: ElementRef) {
        this.$element = $(elementRef.nativeElement)

        this.setDraggable()
        this.setResizable()

    }
    
    ngOnInit() {
        this.focus()
    }


    addDirective(directiveNames: string[])
    addDirective(directiveName: string)
    /**
     * 引数に渡された名称をidとするディレクティブをコンポーネントにアタッチする。
     * 配列が渡された場合、各要素それぞれについて上記の処理を行う
     * 
     * @param {string or string[]} arg 
     * @memberof InlayComponent
     */
    addDirective(arg:any) {
        this.directivesDataService.get().subscribe((directivesData: {key: DirectiveData}) => {
            if (Array.isArray(arg)) {
                for (const e of arg) {
                    this.addDirective(e)
                }
            } else if (typeof arg == "string") {
                const directiveName = arg as string;
                const directive = directivesData[directiveName];
                const inlayDirective = new InlayDirective(directiveName, directive, this);
                this.directives.push(inlayDirective);
            }
        })
    }

    setDirectives(directives: InlayDirective[]) {
        this.directives = directives
    }

    /**
     * カスタムディレクティブを作成し、作成されたInlayDirectiveオブジェクトを返す
     * 
     * @returns {InlayDirective} 
     * @memberof InlayComponent
     */
    addCustomDirective() : InlayDirective {
        const directiveName = Uuid.generate()
        const directiveData: DirectiveData = {
            name: "カスタムディレクティブ",
            icon: "",
            properties: [
                {
                    type: "script",
                    text: "スクリプト",
                    resultType: "script",
                }
            ],
        }

        const inlayDirective = new InlayDirective(directiveName, directiveData, this)
        this.directives.push(inlayDirective)
        return inlayDirective
    }
    
    /**
     * プロパティの値歩変更
     * 
     * @param {{newVal: any, property: InlayDirectiveProperty}} data 
     * @memberof InlayComponent
     */
    onPropertyChanged(data: {newVal: any, property: InlayDirectiveProperty, id: string}) {
        switch (data.property.resultType) {
            case "option":
                this.options[data.property.result] = data.newVal
            break;

        }
    }

    /**
     * ドラッグを設定
     * 
     * @param {*} $elementRef 
     * @memberof InlayComponent
     */
    setDraggable() {
        let zoomScale:number = 0
        let click = {
            x: 0,
            y: 0
        }
        this.$element.draggable({
            start: (ev, ui) => {
                const screenRef =  this.$element.closest("#screen")
                zoomScale = parseFloat(screenRef.css("transform").split("(")[1].split(")")[0].split(",")[0])
                click.x = ev.clientX
                click.y = ev.clientY
            },
            drag: (ev, ui) => {
                const original = ui.originalPosition
                const x = ( ev.clientX - click.x + original.left) / zoomScale
                const y = ( ev.clientY - click.y + original.top) / zoomScale
                ui.position = {
                    left: x,
                    top:  y
                }
                this.x = x
                this.y = y
            },
            cancel: null
        })
    }

    setResizable() {
        this.$element.resizable({
            resize: (ev, ui) => {
                this.height = ui.size.height
                this.width = ui.size.width
            }
        })
    }

    /**
     * このコンポーネントをフォーカスされた状態にする
     * 
     * @memberof InlayComponent
     */
    focus() {
        this.onFocusEmitter.emit()
        this.isFocused = true
    }

    /**
     * このコンポーネントをフォーカスされていない状態にする
     * 
     * @memberof InlayComponent
     */
    unfocus() {
        this.isFocused = false
    }

}
