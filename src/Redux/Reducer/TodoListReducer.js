/* eslint-disable import/no-anonymous-default-export */
import { arrTheme } from "../../Theme/ThemeManager";
import {
  ADD_TASK,
  CHANGE_THEME,
  DELETE_TASK,
  DONE_TASK,
  EDIT_TASK,
  UPDATE_TASK,
} from "../Types/TodoListType";
const initialState = {
  theme: arrTheme[0].theme,
  taskList: [
    { id: 1, taskName: "Task 1", done: true },
    { id: 2, taskName: "Task 2", done: false },
    { id: 3, taskName: "Task 3", done: false },
    { id: 4, taskName: "Task 4", done: true },
  ],
  editTask: {
    input: "",
    id: -1,
  },
};
export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_THEME: {
      console.log(state.taskList);
      state.theme = arrTheme[action.themeID].theme;
      return { ...state };
    }
    case ADD_TASK: {
      let newTask = action.task;
      if (newTask.taskName.trim() === "") {
        alert("Task name is required");
        return { ...state };
      }
      let taskListUpdate = [...state.taskList];
      let index = taskListUpdate.findIndex(
        (task) => task.taskName === newTask.taskName
      );
      if (index !== -1) {
        alert("Task name is already exists");
        return { ...state };
      }
      taskListUpdate.push(newTask);
      state.taskList = taskListUpdate;
      return { ...state };
    }
    case DELETE_TASK: {
      const taskListUpdate = [...state.taskList].filter(
        (task) => task.id !== action.id
      );
      state.taskList = taskListUpdate;
      return { ...state };
    }
    case DONE_TASK: {
      let index = state.taskList.findIndex((task) => task.id === action.id);
      state.taskList[index].done = true;
      return { ...state };
    }
    case EDIT_TASK: {
      state.editTask.input = action.task.taskName;
      state.editTask.id = action.task.id;
      return { ...state };
    }
    case UPDATE_TASK: {
      let index = state.taskList.findIndex(
        (task) => task.id === state.editTask.id
      );
      state.taskList[index].taskName = action.input;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
