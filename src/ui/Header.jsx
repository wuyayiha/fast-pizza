import UserName from "../features/user/Username"
import SearchOrder from "../features/order/SearchOrder"
import { Link } from "react-router-dom"

function Header() {
    return (
        <header className="flex items-center justify-between border-b border-stone-200 bg-yellow-400 uppercase px-4 py-3 sm:px-6 font-sans">
            <Link to="/">Fast Pizza Co.</Link>
            <SearchOrder />
            <UserName />
        </header>
    )
}

export default Header
