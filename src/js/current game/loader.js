import read from "./reader";
import json from "./parser";
import GameSaving from "./game saving";

export default class GameSavingLoader {
    static async load() {
      try {
        const data = await read(); // возвращается Promise!
        const value = await json(data); // возвращается Promise!
        const parsedValue = JSON.parse(value);
        return new GameSaving(
          parsedValue.id,
          parsedValue.created,
          parsedValue.userInfo
        );
      } catch (error) { 
        throw new Error (`Не удалось загрузить сохраненную игру!`);
      }
    }
  }