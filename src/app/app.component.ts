import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <input [(ngModel)]="mass" placeholder="mass" />
  <input [(ngModel)]="height" placeholder="height" />
  <div *ngIf="mass && height"> {{ bmi }} </div>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  mass = 0;
  height = 0;

  get bmi() {
    return   (this.mass / this.height / this.height )*10000
    
  }
}
