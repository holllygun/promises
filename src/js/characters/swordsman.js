
import Character from '../characters/character';

class Swordsman extends Character {
    constructor(name) {
        super(name, "Swordsman");
        this._attack = 40;
        this.defence = 10;
    }
}

export default Swordsman;