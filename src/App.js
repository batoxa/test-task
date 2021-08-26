import React from "react";
import './App.css';
import { NewsListContainer } from "./components/NewsList/NewsListContainer";
import { NewsPageContainer } from "./components/NewsPage/NewsPageContainer";
import { Route } from "react-router";
import { Header } from "./components/Header/Header";

const App = (props) => {
    return (
        <div className="App">
            <Header />
            <div className="content-wrapper">
                <Route exact={true} path='/' render={() => <NewsListContainer />} />
                <Route path='/news/:newsId?' render={() => <NewsPageContainer />} />
            </div>
        </div>
    );
}

export { App };

