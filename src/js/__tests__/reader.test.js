import read from "../current game/reader";

test ('read info about saved game', async() => {
    const data = await read();
    expect(data).toBeInstanceOf(ArrayBuffer);
})