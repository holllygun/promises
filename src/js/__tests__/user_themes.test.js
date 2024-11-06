import Settings from "../user/user_themes";

test ('Default settings', () => {
    const defaultCustomer = new Settings();

    expect(defaultCustomer.settings).toEqual(new Map([
        ['theme', 'dark'],
        ['music', 'trance'],
        ['difficulty', 'easy']
    ]))
});

test ('Customer settings', () => {
    const customer = new Settings();
    customer.setSetting('theme', 'gray');
    expect(customer.settings).toEqual(new Map([
        ['theme', 'gray'],
        ['music', 'trance'],
        ['difficulty', 'easy']
    ]))
});

test ('Value error', () => {
    const wrongValue = new Settings();
    expect(() => wrongValue.setSetting('theme', 'blue')).toThrow('Недопустимое значение для настройки')
});

test ('Setting error', () => {
    const wrongSetting = new Settings();
    expect(() => wrongSetting.setSetting('sky', 'gray')).toThrow('Настройка не поддерживается.')
});
