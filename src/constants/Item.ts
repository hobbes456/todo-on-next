import { IItem } from "@/models/IItem";

const nextTodoId = (todos: Array<IItem>): number => {
    return todos.reduce((maxId, todo) => Math.max(todo.id, maxId), 1) + 1;
};

export class Item implements IItem {
    public isCompleted: boolean = false;
    public id: number;

    constructor(state: Array<IItem>, public value: string) {
        this.value = value;
        this.id = nextTodoId(state);
    }
}
