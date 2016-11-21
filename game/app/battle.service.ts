import { Character } from './character'

export class BattleService {
  attack(initiator: Character, target: Character): void {
    target.health - initiator.strength
  }
}
