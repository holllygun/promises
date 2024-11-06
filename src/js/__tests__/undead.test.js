import Undead from '../characters/undead.js';

test ('undeadInfo', () => {
    const newUndead = new Undead("Undead");
    const correct = {
        _attack: 25,
        defence: 25,
        health: 100,
        level: 1,
        name: "Undead",
        type: "Undead",
        _distance: 1,
    };

    expect(newUndead).toEqual(correct);
});
