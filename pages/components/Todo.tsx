import { useState } from 'react';
import { Todocard } from './Common/Todocard';
type Todo = {
    value: string;
    id: number;
    date: string;
};

export const TodoItem = () => {
    const [text, setText] = useState('');
    const [datetime, setDatetime] = useState(Date());
    const [todos, setTodos] = useState<Todo[]>([]);



    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    const DatehandleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDatetime(e.target.value);
    };
    const handleOnSubmit = () => {
        if (!text) return;

        const newTodo: Todo = {
            value: text,
            id: new Date().getTime(),
            date: datetime,
        };

        setTodos([newTodo, ...todos]);
        setText('');
    };


    return (
        <div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleOnSubmit();
                }}
            >
                <input type="text" value={text} onChange={(e) => handleOnChange(e)} />
                <input type="date" value={datetime} onChange={(e) => DatehandleOnChange(e)} />
                <input type="submit" value="追加" onSubmit={handleOnSubmit} />
            </form>
            <ul className="pl-16 pr-16 bg-gray-50 grid grid-cols-2 sm:grid-cols-3 gap-4">
                {todos.map((todo) => {
                    return (
                        <div>
                            <li>{todo.date}</li>
                            <li
                                key={todo.id}
                                className="border "
                            // className="">{todo.value}</li>
                            ><Todocard name={todo.value} id={todo.id} date={todo.date} /> </li>
                        </div>
                    )
                })}
            </ul>

        </div >
    );
};