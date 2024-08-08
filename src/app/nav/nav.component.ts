import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
menuVariable:boolean = false;
menu_icon_variable:boolean=false;
menu_icon_variable1:boolean=true;


openMenu(){
  this.menuVariable =! this.menuVariable;
  this.menu_icon_variable=! this.menu_icon_variable;
  this.menu_icon_variable1=!this.menu_icon_variable1
}

closeNav() {
  this.menuVariable = false;
  this.menu_icon_variable1=true;
  this.menu_icon_variable = false;
}
}

// isNavOpen = false;

// toggleNav() {
//   this.isNavOpen = !this.isNavOpen;
// }

// closeNav() {
//   this.isNavOpen = false;
// }
// }