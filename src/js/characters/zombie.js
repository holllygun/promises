
import Character from '../characters/character';

class Zombie extends Character {
    constructor(name) {
        super(name, "Zombie");
        this._attack = 40;
        this.defence = 10;
    }
}

export default Zombie;