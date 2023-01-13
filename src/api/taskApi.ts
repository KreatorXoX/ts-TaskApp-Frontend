import { useMutation, useQuery } from "@tanstack/react-query";
import { ICreateTask } from "../interfaces/ICreateTask";
import { IUpdateTask } from "../interfaces/IUpdateTask";
import { ITaskApi } from "../interfaces/ITaskApi";
import axios from "axios";
import { queryClient } from "../App";
import { IDeleteTask } from "../interfaces/IDeleteTask";

const axiosClient = axios.create({
  baseURL: "http://localhost:5000/api/tasks",
});

const getTasks = async (): Promise<ITaskApi[]> => {
  const response = await axiosClient.get<ITaskApi[]>("/");
  return response.data;
};
export const useGetTasks = () =>
  useQuery({ queryKey: ["tasks"], queryFn: getTasks });

const createTask = async (data: ICreateTask): Promise<ICreateTask> => {
  const response = await axiosClient.post<ICreateTask>("/", data);
  return response.data;
};
export const useCreateTask = () => {
  return useMutation({
    mutationFn: (data: ICreateTask) => createTask(data),
    onSuccess: () => {
      queryClient.invalidateQueries(["tasks"]);
    },
  });
};

const updateTask = async (data: IUpdateTask) => {
  const response = await axiosClient.put("/", data);
  return response.data;
};
3;

export const useUpdateTask = () => {
  return useMutation({
    mutationFn: (data: IUpdateTask) => updateTask(data),
    onSuccess: () => {
      queryClient.invalidateQueries(["tasks"]);
    },
  });
};

const deleteTask = async (id: IDeleteTask) => {
  const response = await axiosClient.delete("/", { data: id });
  return response.data;
};
3;

export const useDeleteTask = () => {
  return useMutation({
    mutationFn: (id: IDeleteTask) => deleteTask(id),
    onSuccess: () => {
      queryClient.invalidateQueries(["tasks"]);
    },
  });
};
