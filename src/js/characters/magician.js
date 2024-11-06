
import SpecialCharacter from "./special_character";

class Magician extends SpecialCharacter {
    constructor(name) {
        super(name, "Magician");
        this._attack = 10;
        this.defence = 40;
    }
}

export default Magician;