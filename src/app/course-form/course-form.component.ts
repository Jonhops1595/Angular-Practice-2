import { Component } from '@angular/core';

@Component({
  selector: 'course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent {
  courseTypes = [
    {id: 1, value: 'Development'},
    {id: 2, value: 'Art'},
    {id: 3, value: 'Languages'}
  ];
  create(f:any) {
    console.log(f);
  }

}
