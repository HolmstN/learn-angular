"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var DiceComponent = (function () {
    function DiceComponent() {
    }
    DiceComponent.prototype.roll = function (numDice, sides) {
        var randomNums = [];
        for (var i = 0; i < numDice; i++) {
            randomNums.push(Math.round(Math.random() * (sides - 1) + 1));
        }
        return randomNums;
    };
    DiceComponent.prototype.sumDice = function (dicePool) {
        return dicePool.reduce(function (a, b) {
            return a + b;
        });
    };
    DiceComponent = __decorate([
        core_1.Component({
            selector: 'dice-roller',
            templateUrl: 'app/dice.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], DiceComponent);
    return DiceComponent;
}());
exports.DiceComponent = DiceComponent;
//# sourceMappingURL=dice.component.js.map