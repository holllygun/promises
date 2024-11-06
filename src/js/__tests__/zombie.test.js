import Zombie from '../characters/zombie.js';

test ('zombieInfo', () => {
    const newZombie = new Zombie("Zombie");
    const correct = {
        _attack: 40, 
        defence: 10,
        health: 100, 
        level: 1, 
        name: "Zombie",
        type: "Zombie",
        _distance: 1,
    };

    expect(newZombie).toEqual(correct);
});
