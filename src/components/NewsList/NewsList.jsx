import React from "react";
import { NewsItem } from "./NewsItem/NewsItem";

const NewsList = (props) => {
    return (
        <div>
            <NewsItem />
            <NewsItem />
            <NewsItem />
        </div>
    );
};

export { NewsList };
