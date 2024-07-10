export interface ItemProps {
    id: number;
    value: string;
    isCompleted: boolean;
}

const nextTodoId = (todos: Array<ItemProps>): number => {
    return todos.reduce((maxId, todo) => Math.max(todo.id, maxId), 1) + 1;
};

export class Item implements ItemProps {
    public isCompleted: boolean = false;
    public id: number;

    constructor(state: Array<ItemProps>, public value: string) {
        this.value = value;
        this.id = nextTodoId(state);
    }
}
