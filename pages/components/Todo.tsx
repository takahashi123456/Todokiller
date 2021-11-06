import React, { useState } from "react"

type Todo = {
    value: string
}
export function Todo() {
    const [text, setText] = useState('');
    const [todos, setTodos] = useState<Todo[]>([]);
}