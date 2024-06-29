"use client";
import { Container, List, Paper } from "@mui/material";
import { Task } from "@/shared/entities/Task";
import { remult } from "remult";
import { useState, useEffect } from "react";
import TaskItem from "./TaskItem";

const taskRepo = remult.repo(Task);

const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    taskRepo.find().then(setTasks);
  }, []);

  const dynamicTasks = tasks.map((task) => <TaskItem key={task.id} task={task} />);

  return (
    <Paper sx={{ width: 400 }}>
      <Container>
        <List>{dynamicTasks}</List>
      </Container>
    </Paper>
  );
};

export default TaskList;
