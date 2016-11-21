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
const core_1 = require("@angular/core");
const classes_1 = require("./classes");
const monsters_1 = require("./monsters");
let CharacterService = class CharacterService {
    getClasses() {
        return Promise.resolve(classes_1.CLASSES);
    }
    getPlayerChar(id) {
        return this.getClasses()
            .then(classes => classes.find(role => role.id === id));
    }
    makeEnemy(id) {
        return Promise.resolve(monsters_1.MONSTERS[id]);
    }
    makeEnemies() { }
    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.ceil(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
};
CharacterService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], CharacterService);
exports.CharacterService = CharacterService;
//# sourceMappingURL=character.service.js.map