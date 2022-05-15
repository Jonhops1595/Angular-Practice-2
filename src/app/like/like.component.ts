import { Component, Input} from '@angular/core';

@Component({
  selector: 'like',
  template: `
  <div>
    <i [id] = "icon" class="bi bi-heart-fill" (click) = "onClick()"> </i> 
  <h2>{{ numLikes }}</h2>
</div>
  `,
  styles: [
    'i {font-size:25px; white-space: nowrap; cursor:pointer; float: left}',
    'h2 {float: left}',
    '#icon-base {color: #ccc}',
    '#icon-liked {color: deeppink}'
  ]
  

})
export class LikeComponent {
  @Input() isLike = false;
  @Input() numLikes = 0;
  icon = "icon-base";

  constructor() { 
    this.changeIcon();
  }

  private changeIcon() {
    this.icon = this.isLike ? "icon-liked" : "icon-base";
  }

  onClick() {
    this.isLike = !this.isLike
    this.isLike ? this.numLikes++ : this.numLikes--;
    this.changeIcon()
  }

  ngOnInit(): void {
  }

}
