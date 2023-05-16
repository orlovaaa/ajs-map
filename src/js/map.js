export default class ErrorRepository {
    constructor() {
        this.repository = new Map([[1, 'ошибка 1'], [2, 'ошибка 2'], [3, 'ошибка 3'], [4, 'ошибка 4'], [5, 'ошибка 5']]);
    }

    translate(code) {
        if (this.repository.has(code)) {
            return this.repository.get(code);
        }
        return 'Uknown error';
    }
}