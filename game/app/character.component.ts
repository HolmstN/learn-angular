import { Component, OnInit }   from '@angular/core';
import { Character } from './character'

import { CharacterService } from './character.service';

@Component({
  selector: 'app-character',
  templateUrl: 'app/character.component.html',
})

export class CharacterComponent implements OnInit {
  char: Character;
  chars: Character[];
  constructor(private charService: CharacterService) {}

  ngOnInit(): void {
    this.getAllPlayerCharacters()
  }
  // TO DO:  maybe add a 'type' to eval between player and monster
  getAllPlayerCharacters(): void {
    this.charService.getClasses()
      .then(chars => this.chars = chars);
  }

  getPlayerCharacter(id: number): void {
    this.charService.getPlayerChar(id)
      .then(char => this.char = char);
  }

  getMonster(id: number): void {
    this.charService.makeEnemy(id)
      .then(char => this.char = char);
  }
}
