import GameSaving from "../current game/game saving";

test('Saved game', () => {
    const data = {"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}};
    const savedGame = new GameSaving(9, 1546300800, {"id":1,"name":"Hitman","level":10,"points":2000})
    expect(savedGame).toEqual(data);
})
