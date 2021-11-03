import Bottom_menu from "../components/Bottom_menu";
import Header from "../components/Header";
import React, { useState } from "react";

type Todo = {
    val: number;
}

export default function Todo() {
    const [val, setVal] = React.useState(1);
    const clickTask = () => {
        setVal(val + 1);
    }
    console.log(val)
    return (

        <>
            <Header />
            <div className="container">
                <h1 onClick={clickTask}> Todo </h1>
            </div>
            <Bottom_menu taskOn={val} />

        </>
    )
}