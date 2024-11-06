import Validator from "../user/nickname";

test('Correct nickname', () => {
    const newUser = new Validator("Mary_123-ok");
    const res = newUser.validateUsername();
    expect(res).toBe(true);
});

test('begin with number', () => {
    const newUser = new Validator("1Mary_123-ok");
    const res = newUser.validateUsername();
    expect(res).toBe(false);
});

test('ended with number', () => {
    const newUser = new Validator("Mary_123-ok2");
    const res = newUser.validateUsername();
    expect(res).toBe(false);
});

test('more than 3 numbers', () => {
    const newUser = new Validator("Mary_1243-ok");
    const res = newUser.validateUsername();
    expect(res).toBe(false);
});

