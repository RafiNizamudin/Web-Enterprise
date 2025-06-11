export type TodoItemProps = {
    id: number;
    todo: string;
    status: number;
    // isDeleted: number
    onMarkDone: (id: number) => void;
    onDelete: (id: number) => void;
};