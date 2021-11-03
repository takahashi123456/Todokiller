import React, { useState } from 'react';

interface Props {
    taskOn: Number
}


export const Bottom_menu: React.FC<Props> = ({ taskOn }) => {
    // export default function Bottom_menu(taskOn: number) {
    let ans = taskOn % 2
    return (
        <>
            <div className="bottom-0 shadow-2xl border-t w-screen fixed z-50 bg-white ">
                {ans === 1
                    ?
                    <ul className="flex text-center border-t-2 bg-gray-100 ">
                        < li className="w-1/2">
                            <button>タスクを追加</button>
                        </li>
                    </ul>
                    :
                    <ul className="flex text-center border-t-2 bg-gray-100 ">
                        <li className="w-1/2">編集</li>
                        <li className="w-1/2">消毒</li>

                    </ul>
                }
            </div>
        </>
    )
}
export default Bottom_menu;