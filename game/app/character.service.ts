import { Injectable } from '@angular/core';
import { Character } from './character'

import { CLASSES } from './classes'
import { MONSTERS } from './monsters'

@Injectable()
export class CharacterService {
  getClasses(): Promise<Character[]> {
    return Promise.resolve(CLASSES);
  }

  getPlayerChar(id: number): Promise<Character> {
    return this.getClasses()
      .then(classes => classes.find(role => role.id === id));
  }

  makeEnemy(id: number): Promise<Character> {
    return Promise.resolve(MONSTERS[id]);
  }

  makeEnemies() {}

  getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.ceil(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
