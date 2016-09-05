import { Component, trigger, state, style, transition, animate } from '@angular/core';
import { Router }    from '@angular/router';
import { Globals } from './globals/globals';

@Component({
    selector: 'sidemenu',
    templateUrl: 'app/templates/sidemenu.component.html',
    animations:[
        trigger('menuState',[
            state('active', style({
                left: "0",
            })),
            state('inactive', style({
                left: "-200px",
            })),
            transition('inactive<=>active', animate('100ms ease-out'))
        ])
    ]
})

export class SidemenuComponent {

constructor(private globals: Globals,
private router: Router) {}

private menuItems = this.globals.menuList;
private searchKeyword = '';

  closeMenu(){
      this.globals.menuState = 'inactive';
  }

  
  searchEvent(){
         this.closeMenu();
         this.router.navigate(['/search/' + this.searchKeyword]);
  }

}
