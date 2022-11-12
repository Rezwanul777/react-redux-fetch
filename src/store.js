import { createStore } from "react-redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import todosReduer from "./reducer/todosReducer";

const store=createStore(todosReduer,applyMiddleware(thunk))

export default store;