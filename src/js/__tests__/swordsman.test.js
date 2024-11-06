import Swordsman from '../characters/swordsman.js';

test ('swordsmanInfo', () => {
    const newSwordsman = new Swordsman("Swordsman");
    const correct = {
        _attack: 40, 
        defence: 10,
        health: 100, 
        level: 1,
        name: "Swordsman",
        type: "Swordsman",
        _distance: 1,
    };
    
    expect(newSwordsman).toEqual(correct)
});
