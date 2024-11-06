
import SpecialCharacter from "./special_character";

class Daemon extends SpecialCharacter {
    constructor(name) {
        super(name, "Daemon");
        this._attack = 10;
        this.defence = 40;
    }
}

export default Daemon;