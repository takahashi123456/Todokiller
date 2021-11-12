import React, { useState } from "react"
const li_list = [
    { href: "#", value: "HPとは" },
    { href: "#1", value: "機能一覧" },
    { href: "#1", value: "料金プラン" },
    { href: "#1", value: "お知らせ" },
    { href: "#1", value: "お問い合わせ" },
]
export default function Header() {
    const [openMenu, setOpenMenu] = React.useState(false);
    const Menu = () => {
        setOpenMenu(!openMenu)
    }


    return (

        <header className=" mx-auto bg-gray-100">
            <div className="container flex justify-between items-center">
                <h1 className="text-4xl font-semibold pl-16">HR</h1>
                <div>
                    <button onClick={() => Menu()}>
                        <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                            <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
                        </svg>
                    </button>
                </div>
            </div>
            <div >
                {/* 三項演算子を使ってみる */}
                {openMenu ?
                    <ul>
                        {li_list.map((li_li) =>
                            <li
                                key={li_li.value}
                                className="border-b hover:bg-gray-400">
                                <a href={li_li.href} className="block px-8 py-2">{li_li.value}
                                </a>
                            </li>
                        )}
                    </ul>
                    : <p></p>
                }

            </div>
        </header>

    )
}