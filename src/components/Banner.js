import React, {useState} from "react";
import classNames from "classnames";

import ArticleBox1 from "./ArticleBox-1";
import ArticleBox2 from "./ArticleBox-2";
import ArticleBox3 from "./ArticleBox-3";

import "./banner.scss";

const Banner = () => {

    const [move, setMove] = useState(-1035);
    const [animationRight, setAnimationRight] = useState(false);
    const [animationLeft, setAnimationLeft] = useState(false);

    const handleClickLeftButton = () => {
        setMove(prevState => {
            if(prevState >= -1725){
                setAnimationLeft(false);
                setAnimationRight(false);
               return prevState - 345
            } else {
                setAnimationLeft(true);
                return prevState + 1035;
            }
        });
    }
    const handleClickRightButton = () => {
        setMove(prevState => {
            if(prevState <= -345){
                setAnimationRight(false);
                setAnimationLeft(false);
                return prevState + 345
            }else {
                setAnimationRight(true);
                return prevState - 1035;
            }
        });
    }
    const animationClassWrap = classNames("slideshow__box",{
        "slideshow-anim-right": animationRight,
        "slideshow-anim-left": animationLeft
    })

    return (
        <section className="section-banner">
            <div className="banner container">
                <h1 className="banner__title">Heading</h1>
                <p className="banner__subtitle">Lorem ipsum dolor sit amet, consect etur adipiscing elit. </p>
                <div className="slider">
                    <button className="slider__leftBtn" onClick={handleClickLeftButton}/>
                    <button className="slider__rightBtn" onClick={handleClickRightButton}/>
                    <div className="slideshow">
                        <div className={animationClassWrap} style={{left:`${move}px`}}>
                            <ArticleBox1/>
                            <ArticleBox2/>
                            <ArticleBox3/>
                            <ArticleBox1/>
                            <ArticleBox2/>
                            <ArticleBox3/>
                            <ArticleBox1/>
                            <ArticleBox2/>
                            <ArticleBox3/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner;