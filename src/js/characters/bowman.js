
import Character from '../characters/character';

class Bowman extends Character {
    constructor(name) {
        super(name, 'Bowman');
        this._attack = 25;
        this.defence = 25;
    }
}

export default Bowman;