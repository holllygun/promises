import Character from "./character";

export default class SpecialCharacter extends Character {
    constructor(name,type) {
        super(name,type);
        this._stoned = false;
    }

    set stoned(value) {
        this._stoned = value;
    }

    get stoned() {
        return this._stoned;
    }

    get attack() {
        let attackPower = this._attack * (10 - (this._distance-1))/10;
        if (this._stoned) {
            attackPower -= Math.log2(this._distance) * 5;
        }
        return Math.max(attackPower, 0);
    }
}

