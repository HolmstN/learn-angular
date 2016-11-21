import { Effect } from './effect'

export class Item {
  id: number;
  weight: number;
  effect: Effect;
  uses: number;
  name: string;
  type: string;
}
