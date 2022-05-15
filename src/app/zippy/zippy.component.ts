import { Component, Input } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent {
  @Input() title = "PlaceHolder"
  isSelected = false
  text = "Sample Text"

  constructor() { }

  onClick(){
    this.isSelected = !this.isSelected
  }


}
