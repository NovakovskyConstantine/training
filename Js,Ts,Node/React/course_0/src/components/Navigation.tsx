import { Link } from "react-router-dom"

export function Navigation() {
    return (
        <nav
            className="h-[50px] flex justify-between px-5 bg-gray-500 items-center text-white"
        >
            <span className="font-bold">Новаковский 2023</span>
            <span>
                <Link to="/" className="mr-2">Товары</Link>
                <Link to="/about">О себе</Link>
            </span>
        </nav>
    )
}