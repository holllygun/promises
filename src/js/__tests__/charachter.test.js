import Character from '../characters/character.js';
import Bowman from '../characters/bowman.js';

test ('commonCharacter', () => {
    const newCharacter = new Character("Legolas", "Zombie");
    const correct = {
        _attack: undefined,
        defence: undefined,
        health: 100,
        level: 1,
        name: "Legolas",
        type: "Zombie",
        _distance: 1,
    };

    expect(newCharacter).toEqual(correct);
});

test('Name error', () => {
    expect(() =>new Character('J', 'Bowman')).toThrow('Имя должно содержать от 2 до 10 символов');

    expect(() => new Character('Jooooohhhhhhnnnnnn', 'Bowman')).toThrow('Имя должно содержать от 2 до 10 символов');
});


test('Type error', () => {
    expect(() => new Character("Bo", "Bow")).toThrow('Такого героя нет! Выберите подходящий тип');
});

test('levelUp', () => {
    const newCharacter = new Character ("Bo", "Bowman");
    newCharacter._attack = 25;
    newCharacter.defence = 25;
    newCharacter.levelUp()

    expect(newCharacter._attack).toBe(45);
    expect(newCharacter.defence).toBe(45);
})

test ('levelUpError', () => {
    const newCharacter = new Character ("Bo", "Bowman")
    newCharacter.health = 0;

    expect(() => newCharacter.levelUp()).toThrow("Нельзя повысить уровень умершего!");
});

test ('damageTest', () => {
    const newCharacter = new Character("Bo", "Bowman");
    newCharacter._attack = 25;
    newCharacter.defence = 25;

    newCharacter.damage(10);

    expect(newCharacter.health).toBeCloseTo(92.5);
})

test ('damageError', () => {
    const newCharacter = new Character("Bo", "Bowman");
    newCharacter.health = 0;
    expect(() => newCharacter.damage(10)).toThrow("Персонаж погиб!");
})

test ('damageTestUndefined', () => {
    const newCharacter = new Character("Bo", "Bowman");

    expect(() => newCharacter.damage(10)).toThrow("У персонажа нет свойства атаки!");
})

test('levelUpUndefined', () => {
    const newCharacter = new Character ("Bo", "Bowman")

    expect(() =>newCharacter.levelUp()).toThrow("У персонажа нет свойств атаки и защиты!");
})

test('Set distance error', () => {
    const newCharacter = new Character("Bo", "Bowman");

    expect(() => { newCharacter.distance = 0 }).toThrow('Атаковать можно на расстоянии хотя бы одной клетки!');
})

test('Get distance', () => {
    const newCharacter = new Character("Bo", "Bowman");

    expect(newCharacter.distance).toBe(1);
})

test('Get attack', () => {
    const newCharacter = new Bowman("Bo");

    expect(newCharacter.attack).toBe(25);
})