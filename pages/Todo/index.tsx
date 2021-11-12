import Bottom_menu from "../components/Common/Bottom_menu";
import Header from "../components/Common/Header";
import { TodoItem } from "../components/Todo";
import React, { useState } from "react";
import MyDialog from "../components/Modal";

type Todo = {
    val: boolean;
    taskOn: boolean;
    modal: boolean;
}

export default function Todo() {
    const [val, setVal] = React.useState(true);
    const clickTask = () => {
        setVal(!val);
    }
    const [modal, setModal] = React.useState(true);
    const clickModal = () => {
        setModal(!modal);
    }
    return (

        <>
            <Header />
            <div className="container">
                <h1 onClick={clickTask}> Todo </h1>
            </div>
            <TodoItem />
            <Bottom_menu taskOn={val} />
            <MyDialog />
        </>
    )
}