import thunkMiddleware from "redux-thunk";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { newsListReducer } from "./newsList-reducer";
import { newsPageReducer } from "./newsPage-reducer";

const reducers = combineReducers({

    newsList: newsListReducer,
    newsPage: newsPageReducer,

});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));


window.store = store;

export { store };