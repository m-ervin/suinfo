import { Component, trigger, state, style, transition, animate } from '@angular/core';
import { Globals } from './globals/globals';

@Component({
    selector: 'body',
    templateUrl: 'app/templates/app.component.html',
    animations:[
        trigger('iconState',[
            state('active',style({
                left: "10px",
            })),
            state('inactive',style({
                left: "18px",
            })),
            transition('inactive<=>active', animate('100ms ease-out'))
        ]),
        trigger('fadeState',[
            state('active',style({
                display: "block",
            })),
            state('inactive',style({
                display: "none",
            })),
            transition('inactive<=>active', animate('100ms ease-out'))
        ]),
    ]
})

export class AppComponent {

constructor(private globals: Globals){}

menuToggleState(){
    this.globals.menuState = (this.globals.menuState === 'active') ? 'inactive' : 'active';
}


}
