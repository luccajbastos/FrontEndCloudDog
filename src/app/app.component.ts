import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <section class="main">
      <app-menu></app-menu>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </section>
    <app-footer></app-footer>
  `,
})
export class AppComponent {}

//  <app-header></app-header>  <app-footer></app-footer>
