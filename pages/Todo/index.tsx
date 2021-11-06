import Bottom_menu from "../components/Common/Bottom_menu";
import Header from "../components/Common/Header";
import React, { useState } from "react";
import MyDialog from "../components/Modal";

type Todo = {
    val: boolean;
    taskOn: boolean;
}

export default function Todo() {
    const [val, setVal] = React.useState(1);
    const clickTask = () => {
        setVal(val + 1);
    }
    return (

        <>
            <Header />
            <div className="container">
                <h1 onClick={clickTask}> Todo </h1>
            </div>
            <Bottom_menu taskOn={val} />
            <MyDialog />
        </>
    )
}