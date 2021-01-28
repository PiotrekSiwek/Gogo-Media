import React from "react";
import vector1 from "../assets/Vector.svg";
import vector2 from "../assets/Vector-1.svg";
import vector3 from "../assets/Vector-2.svg";

import "./header.scss";

const Header = () => {
    return (
        <header className="header">
            <div className="header-box container">
                <div className="logo">
                    <img className="logo__part1" src={vector1} alt="gogo-logo"/>
                    <img className="logo__part2" src={vector2} alt="gogo-logo"/>
                    <img className="logo__part3" src={vector3} alt="gogo-logo"/>
                </div>
            </div>
        </header>
    )
}

export default Header;