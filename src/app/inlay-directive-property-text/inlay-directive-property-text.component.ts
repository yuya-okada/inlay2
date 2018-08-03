import { Component, OnInit, EventEmitter } from '@angular/core';
import { InlayDirectivePropertyInput } from '../inlay-directive-property-input';

@Component({
  selector: 'app-inlay-directive-property-text',
  templateUrl: './inlay-directive-property-text.component.html',
  styleUrls: ['./inlay-directive-property-text.component.css']
})
export class InlayDirectivePropertyTextComponent extends InlayDirectivePropertyInput implements OnInit {

  constructor() { 
    super()
  }

  ngOnInit() {
  }


}
