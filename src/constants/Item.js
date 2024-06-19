const nextTodoId = (todos) => {
    const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), 1);
    return maxId + 1;
};

export class Item {
    constructor(state, value) {
        this.id = nextTodoId(state);
        this.value = value;
        this.isCompleted = false;
    }
}
