import React from "react";
import wordPressLogo from "../assets/logo-wordpress.svg";

import "./articleBox.scss"

const ArticleBox1 = () => {
    return (
        <div className="article">
            <h3 className="article__title">Heading</h3>
            <p className="article__text"> Lorem ipsum dolor sit amet.</p>
            <img className="article__picture" src={wordPressLogo} alt="wordPressLogo"/>
        </div>
    )
}

export default ArticleBox1;