export default class Validator {
    constructor(name) {
        this.name = name;
    }
    validateUsername () {
        const regExp = /^(?!.*\d{4})[a-zA-Z][\w-]*[a-zA-Z]$/;
        return regExp.test(this.name);
    }
}

