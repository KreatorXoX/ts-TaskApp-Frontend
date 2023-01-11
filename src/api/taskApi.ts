import { useMutation, useQuery } from "@tanstack/react-query";
import { ICreateTask } from "../interfaces/ICreateTask";
import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:5000/api/tasks",
});

const getTasks = async (): Promise<ICreateTask[]> => {
  const response = await axiosClient.get<ICreateTask[]>("/");
  return response.data;
};
export const useGetTasks = () =>
  useQuery({ queryKey: ["tasks"], queryFn: getTasks });

const createTask = async (data: ICreateTask): Promise<void> => {
  const response = await axiosClient.post("/", data);
  return response.data;
};
export const useCreateTask = () =>
  useMutation({
    mutationFn: (data: ICreateTask) => createTask(data),
  });
