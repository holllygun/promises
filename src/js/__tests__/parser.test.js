import json from "../current game/parser";
import read from "../current game/reader";

test ('Array to JSON', async () => {
     const buffer = await read();
     const string = await json(buffer);

     const expectedJson = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}'
     expect(string).toBe(expectedJson);
    })