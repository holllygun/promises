import GameSavingLoader from "./current game/loader";

GameSavingLoader.load().then((saving) => {
    console.log(saving);
  }, (error) => {
    console.log (error)
  });