"use strict";
class BattleService {
    attack(initiator, target) {
        target.health - initiator.strength;
    }
}
exports.BattleService = BattleService;
//# sourceMappingURL=battle.service.js.map