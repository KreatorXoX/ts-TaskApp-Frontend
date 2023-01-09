import { useMutation } from "@tanstack/react-query";
import { sendRequest } from "./sendRequest";
import { ICreateTask } from "../interfaces/ICreateTask";

const baseUrl = "http://localhost:5000/api/tasks";

export const useCreateTask = () =>
  useMutation({
    mutationFn: (data: ICreateTask) => sendRequest(baseUrl, "POST", data),
  });
