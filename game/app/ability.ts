import { Effect } from './effect'
import { Character } from './character'

export class Ability {
  id: number;
  name: string;
  effect: Effect;
  target: Character;
}
