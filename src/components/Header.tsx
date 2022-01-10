import logo from "../static/icon.png";
import { Link, useLocation } from "react-router-dom";
function Header() {
    const { pathname } = useLocation();

    const menu = [
        {
            name: "INICIO",
            path: "/",
        },
        {
            name: "PROPIEDADES",
            path: "/propiedades",
        },
        {
            name: "SOBRE NOSOTROS",
            path: "/sobre-nosotros",
        },
    ];

    return (
        <header className="flex container mx-auto justify-between items-center py-5">
            <img src={logo} alt="" width="140" height="75" />
            <ul className="flex gap-3">
                {menu.map((i, index) => (
                    <Link to={i.path} key={index}>
                        <li
                            className={
                                pathname === i.path
                                    ? "px-5 py-2"
                                    : "px-5 py-2 hover:bg-blue-900 hover:text-white"
                            }
                            style={
                                pathname === i.path
                                    ? {
                                          background: "green",
                                          color: "white",
                                      }
                                    : undefined
                            }
                        >
                            {i.name}
                        </li>
                    </Link>
                ))}
            </ul>
        </header>
    );
}

export default Header;
