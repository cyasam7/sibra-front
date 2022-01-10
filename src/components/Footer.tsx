import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
function Footer() {
    return (
        <div className="bg-gray-700 shadow-md">
            <div className="container mx-auto flex flex-col items-center gap-5 pb-16 text-white">
                <p className="pt-10 font-bold">REDES SOCIALES:</p>
                <div className="flex gap-5 pt-6">
                    <FacebookIcon />
                    <InstagramIcon />
                    <TwitterIcon />
                </div>
                <p>+52(618) 159-46-81</p>
                <p className="pt-16">Desarrollado por Aric Ruiz.</p>
            </div>
        </div>
    );
}

export default Footer;
