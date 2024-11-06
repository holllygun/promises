export default class Settings {
    constructor() {
        this.defaultsettings = new Map([
            ['theme', 'dark'],
            ['music', 'trance'],
            ['difficulty', 'easy']
        ]);

        this.customSettings = new Map();

        this.allowedValues = new Map([
            ['theme', ['dark', 'light', 'gray']],
            ['music', ['trance', 'pop', 'rock', 'chillout', 'off']],
            ['difficulty', ['easy', 'normal', 'hard', 'nightmare']]
        ]);
    }

    setSetting(key, value) {
        if (this.defaultsettings.has(key)) {
            const allowed = this.allowedValues.get(key);
            if (allowed.includes(value)) {
                this.customSettings.set(key, value);
            } else {
                throw new Error ('Недопустимое значение для настройки');
            }
        } else {
            throw new Error ('Настройка не поддерживается.');
        }
    }

    get settings() {
        const combinedSettings = new Map (this.defaultsettings);
        
        for (const [key, value] of this.customSettings) {
            combinedSettings.set(key, value);
        }

        return combinedSettings;
    }
}