import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center">
 
      <h1>
        Welcome to {{title}}!
      </h1>
      <ul class="nav navbar-nav">
      <li><a [routerLink]="['/add-product']">Add</a></li>
      <li><a [routerLink]="['/list-product']">List</a></li>
      </ul>
      <div class='container'>
      <router-outlet></router-outlet>
      </div>
      <!--<product-list></product-list>-->
      <!--<add-prod></add-prod>-->
      </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'Learning Angular';
}
