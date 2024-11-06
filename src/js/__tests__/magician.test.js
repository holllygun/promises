import Magician from '../characters/magician.js';

test ('magicianInfo', () => {
    const newMagician = new Magician("Magician");
    const correct = {
        _attack: 10, 
        defence: 40,
        health: 100, 
        level: 1,
        name: "Magician",
        type: "Magician",
        _stoned: false,
        _distance: 1,
    };

    expect(newMagician).toEqual(correct)
});
