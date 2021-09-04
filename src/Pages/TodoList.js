import React, { useEffect, useState } from "react";
import { Container } from "../Components/Container";
import { ThemeProvider } from "styled-components";
import { Dropdown } from "../Components/Dropdown";
import { Heading2, Heading3 } from "../Components/Heading";
import { Input, Label, TextField } from "../Components/TextField";
import { Button } from "../Components/Button";
import { Table, Th, Thead, Tr } from "../Components/Table";
import { useDispatch, useSelector } from "react-redux";
import {
  AddTaskAction,
  DeleteTaskAction,
  DoneTaskAction,
  EditTaskAction,
  UpdateTaskAction,
} from "../Redux/Action/TodoListAction";
import { arrTheme } from "../Theme/ThemeManager";

export default function TodoList() {
  const [input, setInput] = useState("");
  const { theme, taskList, editTask } = useSelector(
    (state) => state.TodoListReducer
  );
  useEffect(() => {
    setInput(editTask.input);
  }, [editTask.input]);
  const renderTaskTodo = () => {
    return taskList.map((task, i) => {
      if (!task.done)
        return (
          <Tr style={{ height: 40 }} key={i}>
            <Th style={{ verticalAlign: "middle" }}>{task.taskName}</Th>
            <Th className="text-right" style={{ verticalAlign: "middle" }}>
              <Button
                className="mr-3"
                onClick={() => dispatch(EditTaskAction(task))}
              >
                <i className="fa fa-edit"></i>
              </Button>
              <Button
                className="mr-3"
                onClick={() => {
                  dispatch(DoneTaskAction(task.id));
                }}
              >
                <i className="fa fa-check"></i>
              </Button>
              <Button onClick={() => dispatch(DeleteTaskAction(task.id))}>
                <i className="fa fa-trash"></i>
              </Button>
            </Th>
          </Tr>
        );
    });
  };
  const renderTaskCompleted = () => {
    return taskList.map((task, i) => {
      if (task.done)
        return (
          <Tr style={{ height: 40 }} key={i}>
            <Th style={{ verticalAlign: "middle" }}>{task.taskName}</Th>
            <Th className="text-right" style={{ verticalAlign: "middle" }}>
              <Button onClick={() => dispatch(DeleteTaskAction(task.id))}>
                <i className="fa fa-trash"></i>
              </Button>
            </Th>
          </Tr>
        );
    });
  };
  const dispatch = useDispatch();
  const renderTheme = () => {
    return arrTheme.map((theme, i) => {
      return (
        <option value={theme.id} key={i}>
          {theme.name}
        </option>
      );
    });
  };
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Dropdown
          onChange={(e) => {
            let { value } = e.target;
            dispatch({
              type: "CHANGE_THEME",
              // theme: e.target.options.selectedIndex,
              themeID: value,
            });
          }}
        >
          {renderTheme()}
        </Dropdown>
        <Heading2 className="my-4">To Do List</Heading2>
        <TextField
          value={input}
          name="taskName"
          label="Task Name"
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <Button
          className="ml-2"
          onClick={() => {
            const taskName = input;
            const task = {
              id: Date.now(),
              taskName,
              done: false,
            };
            console.log(task);
            dispatch(AddTaskAction(task));
          }}
        >
          <i className="fa fa-plus d-inline-block mr-2"></i>
          Add Task
        </Button>
        <Button
          className="ml-2"
          onClick={() => {
            dispatch(UpdateTaskAction(input));
          }}
        >
          <i className="fa fa-upload d-inline-block mr-2"></i>
          Update Task
        </Button>
        <hr />
        <Heading3>Task To Do</Heading3>
        <Table>
          <Thead>{renderTaskTodo()}</Thead>
        </Table>
        <Heading3>Task Completed</Heading3>
        <Table>
          <Thead>{renderTaskCompleted()}</Thead>
        </Table>
      </Container>
    </ThemeProvider>
  );
}
