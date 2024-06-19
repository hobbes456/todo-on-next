export class Item {
    constructor(value) {
        this.id = Date.now();
        this.value = value;
        this.isCompleted = false;
    }
}
