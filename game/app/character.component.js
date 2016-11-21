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
const character_service_1 = require("./character.service");
let CharacterComponent = class CharacterComponent {
    constructor(charService) {
        this.charService = charService;
    }
    ngOnInit() {
        this.getAllPlayerCharacters();
    }
    // TO DO:  maybe add a 'type' to eval between player and monster
    getAllPlayerCharacters() {
        this.charService.getClasses()
            .then(chars => this.chars = chars);
    }
    getPlayerCharacter(id) {
        this.charService.getPlayerChar(id)
            .then(char => this.char = char);
    }
    getMonster(id) {
        this.charService.makeEnemy(id)
            .then(char => this.char = char);
    }
};
CharacterComponent = __decorate([
    core_1.Component({
        selector: 'app-character',
        templateUrl: 'app/character.component.html',
    }),
    __metadata("design:paramtypes", [character_service_1.CharacterService])
], CharacterComponent);
exports.CharacterComponent = CharacterComponent;
//# sourceMappingURL=character.component.js.map