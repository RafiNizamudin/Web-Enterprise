import type { TodoItemProps } from "../TodoItem.dto";

export function TodoItem({id, todo, status, onMarkDone, onDelete}: TodoItemProps) {
    return (
        <li style={{ textDecoration: status === 1 ? 'line-through' : 'none' }}>
            <span>{todo}</span>
            {status === 0 && (
                <button onClick={() => onMarkDone(id)}>
                    Mark Done
                </button>
            )}
            <button onClick={() => onDelete(id)}>Delete</button>
        </li>
    );
}