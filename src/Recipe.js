import React from "react";
import style from "./recipe.module.css";
const Recipe = ({title, calories, image,}) => {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            {/* <ol>{ingredients}</ol>           */}
            <p>{calories}</p>
            <img className={style.image} src={image} alt=""/>
        </div>
    );
}
export default Recipe;