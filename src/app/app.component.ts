import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <input [(ngModel)]="mass" placeholder="mass in KG" />
  <input [(ngModel)]="height" placeholder="height IN CM" />
  <div *ngIf="mass && height"> {{ bmi }} </div>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  mass : any;
  height :any;

  get bmi() {
    return   (this.mass / this.height / this.height )*10000
    
  }
}
