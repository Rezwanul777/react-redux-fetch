
import { applyMiddleware,createStore } from "redux";
import thunk from "redux-thunk";
import todosReduer from "./reducer/todosReducer";

const store=createStore(todosReduer,applyMiddleware(thunk))

export default store;