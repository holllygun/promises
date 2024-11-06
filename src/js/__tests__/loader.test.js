import GameSavingLoader from "../current game/loader";
import GameSaving from "../current game/game saving";

test('Load Game Info', async () => {
    const savedGame = await GameSavingLoader.load();
    const data = {"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}
    
    expect(savedGame).toBeInstanceOf(GameSaving);
    expect(savedGame).toEqual(data);
})
