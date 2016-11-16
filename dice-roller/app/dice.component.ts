import { Component } from '@angular/core';

import { Dice } from './dice';
import { DiceService } from './dice.service';

@Component({
    selector: 'dice-roller',
    templateUrl: 'app/dice.component.html'
})

export class DiceComponent {
    dice: Dice;

    roll(numDice: number, sides: number): Array<number> {
      let randomNums = [];
      for (var i=0; i < numDice ; i++) {
       randomNums.push(Math.round(Math.random() * (sides - 1) + 1));
      }

      return randomNums;
    }

    sumDice(dicePool: Array<number>): number {
      return dicePool.reduce(function (a,b) {
        return a + b;
      });
    }
 }
