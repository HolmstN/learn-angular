import { Component } from '@angular/core';

import { BattleService } from './battle.service'

@Component( {
  moduleId: module.id,
  templateUrl: 'app/battle.component.html',
  providers: [ BattleService ]
})

export class BattleComponent {

}
