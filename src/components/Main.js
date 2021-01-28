import React from "react";

import ArticleBox1 from "./ArticleBox-1";
import ArticleBox2 from "./ArticleBox-2";
import ArticleBox3 from "./ArticleBox-3";

import "./main.scss";

const Main = () => {
    return(
        <main className="main">
            <h1 className="main__title">Heading</h1>
            <p className="main__subtitle">Lorem ipsum dolor sit amet, consect etur adipiscing elit. </p>
            <h2 className="articles-title">Heading </h2>
                <div className="articles-box">
                    <ArticleBox1/>
                    <ArticleBox2/>
                    <ArticleBox3/>
            </div>
        </main>
    )
}

export default Main;