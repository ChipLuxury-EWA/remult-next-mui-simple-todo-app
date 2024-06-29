import { Box, Checkbox, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { Task } from "@/shared/entities/Task";

export const TaskItem = ({ task }: {task: Task}) => {
  const { id, title, completed, createdAt } = task;

  return (
    <ListItem disablePadding key={id}>
      <ListItemButton>
        <ListItemIcon>
          <Checkbox checked={completed} />
        </ListItemIcon>
        <ListItemText primary={title} />
      </ListItemButton>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "end" }}>
        <Typography variant="body2">{new Date(createdAt!).toLocaleDateString()}</Typography>
      </Box>
    </ListItem>
  );
};

export default TaskItem;
