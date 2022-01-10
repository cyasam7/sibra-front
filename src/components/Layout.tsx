import React from "react";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import LayoutSistema from "../components/LayoutSistema";
import { useLocation } from "react-router-dom";

const Layout: React.FC<any> = ({ children }) => {
    const { pathname } = useLocation();

    if (pathname.includes("/login")) {
        return children;
    }

    if (pathname.includes("/admin")) {
        return <LayoutSistema>{children}</LayoutSistema>;
    }

    return (
        <div className="flex flex-col">
            <Header />
            {children}
            <Contact />
            <Footer />
        </div>
    );
};

export default Layout;
