import { Component } from '@angular/core';

import { DiceComponent } from './dice.component'

@Component({
    selector: 'my-app',
    template: `{{title}}
    <dice-roller></dice-roller>`
})
export class AppComponent {
  title = 'Dice Roller'
}
