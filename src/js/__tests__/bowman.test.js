import Bowman from '../characters/bowman.js';

test ('bowmanInfo', () => {
    const newBowman = new Bowman("Bowman");
    const correct = {
        _attack: 25,
        defence: 25,
        health: 100,
        level: 1,
        name: 'Bowman',
        type: 'Bowman',
        _distance: 1,
    };

    expect(newBowman).toEqual(correct);
});
