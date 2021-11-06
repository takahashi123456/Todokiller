import React, { useState } from 'react';
import MyModal from '../Modal';

interface Props {
    taskOn: boolean
}


export const Bottom_menu: React.FC<Props> = ({ taskOn }) => {
    // export default function Bottom_menu(taskOn: number) {
    return (
        <>
            <div className="bottom-0 shadow-2xl border-t w-screen fixed z-50 bg-white h-14 ">
                {taskOn === true
                    ?
                    <ul className="flex text-center border-t-2 bg-gray-100 h-full ">
                        < li className="w-1/2 h-10 flex justify-center items-center pt-3 text-blue-500 text-lg">
                            <button >タスクを追加</button>
                        </li>
                    </ul>
                    :
                    <ul className="flex text-center border-t-2 bg-gray-100 h-full">
                        < li className="w-1/2 h-10 flex justify-center items-center pt-3 text-blue-500 text-lg">編集</li>
                        < li className="w-1/2 h-10 flex justify-center items-center pt-3 text-blue-500 text-lg">消毒</li>
                    </ul>
                }
            </div>
        </>
    )
}
export default Bottom_menu;