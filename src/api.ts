import { remultNextApp } from "remult/remult-next";
import { Task } from "./shared/entities/Task";

export const api = remultNextApp({
  entities: [Task],
  admin: true,
});
