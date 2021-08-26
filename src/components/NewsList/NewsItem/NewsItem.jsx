import React from "react";
import styles from "./NewsItem.module.css";
import { NavLink } from "react-router-dom";

const NewsItem = (props) => {
    return (
        <div className={styles.itemwrapper}>
            <NavLink to={"/news/" + props.id}>
                <div>News</div>
                <div>Author</div>
                <div>Date</div>
                <div>Raiting</div>
            </NavLink>
        </div>
    );
};

export { NewsItem };
