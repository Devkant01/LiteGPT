import {Link} from "react-router-dom";

function Header() {
    return (
        <header className="w-full bg-white">
            <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
                    <Link to="/" className="text-2xl md:text-3xl font-bold text-blue-600">
                        LiteGPT
                    </Link>
                </div>
        </header>
    );
}

export default Header;
