import SpecialCharacter from "../characters/special_character";
import Daemon from "../characters/daemon";

test ('Stoned Value', () => {
    const newCharacter = new SpecialCharacter("Bo", "Daemon");
    newCharacter.stoned = true;
    expect(newCharacter.stoned).toBe(true);
})

test ('Attack Power Stoned', () => {
    const newCharacter = new Daemon("Bo");
    newCharacter.stoned = true;
    newCharacter.distance = 2
    expect(newCharacter.attack).toBe(4)
})

test ('Attack Power not stoned', () => {
    const newCharacter = new Daemon("Bo");
    newCharacter.distance = 2
    expect(newCharacter.attack).toBe(9)
})