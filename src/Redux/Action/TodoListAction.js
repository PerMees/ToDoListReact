import {
  ADD_TASK,
  DELETE_TASK,
  DONE_TASK,
  EDIT_TASK,
  UPDATE_TASK,
} from "../Types/TodoListType";

export const AddTaskAction = (task) => ({
  type: ADD_TASK,
  task,
});

export const DeleteTaskAction = (id) => ({
  type: DELETE_TASK,
  id,
});

export const DoneTaskAction = (id) => ({
  type: DONE_TASK,
  id,
});

export const EditTaskAction = (task) => ({
  type: EDIT_TASK,
  task,
});

export const UpdateTaskAction = (input) => ({
  type: UPDATE_TASK,
  input,
});
