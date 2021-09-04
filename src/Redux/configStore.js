import { combineReducers, createStore } from "redux";
import TodoListReducer from "./Reducer/TodoListReducer";
const rootReducer = combineReducers({TodoListReducer});

const store = createStore(rootReducer);

export default store;
