import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `<div>
  <h1>{{pageTitle}}</h1>
  <div>First Component</div>
  </div> `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'Angular: Getting Started';
}
