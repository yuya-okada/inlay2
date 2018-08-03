import { Component, OnInit, ElementRef } from '@angular/core';
import { InlayComponent } from '../inlay-component';
import { ComponentsDataService } from '../../components-data.service';
import { DirectivesDataService } from '../../directives-data.service';


@Component({
  selector: 'app-inlay-button',
  templateUrl: './inlay-button.component.html',
  styleUrls: ['./inlay-button.component.css']
})
export class InlayButtonComponent extends InlayComponent {

  constructor(directivesDataService:DirectivesDataService, elementRef: ElementRef) {
    super(directivesDataService, elementRef)
  }

}
