import Character from "../characters/character";
import Team from "../team.js/team_members";

test ('Add new member', () => {
    const member = new Character("Legolas", "Zombie");
    const newTeam = new Team();

    newTeam.add(member)

    expect(newTeam.members.has(member)).toBe(true)
}) 

test ('Add same member', () => {
    const member = new Character("Legolas", "Zombie");
    const newTeam = new Team();

    newTeam.add(member)
    expect(() => newTeam.add(member)).toThrow('Этот персонаж уже добавлен в команду!');
}) 

test ('Add All members', () => {
    const memberOne = new Character("Legolas", "Zombie");
    const memberTwo = new Character("Richard", "Bowman");
    const memberThree = new Character("Anri", "Zombie");

    const newTeam = new Team();

    newTeam.addAll(memberOne, memberTwo, memberThree);
    newTeam.addAll(memberThree);
    expect(newTeam.members.size).toBe(3);
})

test ('Add All members to array', () => {
    const memberOne = new Character("Legolas", "Zombie");
    const memberTwo = new Character("Richard", "Bowman");
    const memberThree = new Character("Anri", "Zombie");

    const newTeam = new Team();
    newTeam.addAll(memberOne, memberTwo, memberThree);
    const array = [memberOne, memberTwo, memberThree]
    const newArray = newTeam.toArray()
    expect(newArray).toEqual(array);
})

