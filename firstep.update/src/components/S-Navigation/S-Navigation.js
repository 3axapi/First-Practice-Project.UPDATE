import React from "react";
import "./S-Navigation.css";
import studujeit from "../../images/studuje.it.png";

function SNavigation () {
    return (
        <nav>
            <div className="site_container">
                <div className="navbar-header">
                    <a href="#page-top" className="navbar-brand ">
                        <img src={studujeit} alt="Platforma do Nauki Programowania i IT" className="img-responsive" />
                    </a>
                </div>

                <div className="top-menu">
                    <ul className="navPages nav navbar-nav">
                        <li><a href="#"><span>O Studiuję IT</span></a></li>
                        <li><a href="#"><span>Ścieżki nauki</span></a></li>
                        <li><a href="#"><span>Dla kogo STUDIUJĘ IT</span></a></li>
                        <li><a href="#"><span>Dołącz do nas!</span></a></li>
                        <li><a href="#"><span>Przedmioty</span></a></li>
                        <li><a href="#"><span>Kontakt</span></a></li>
                        <li><a href="#"><span>ZALOGUJ SIĘ</span></a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default SNavigation;