import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


axios.defaults.baseURL = "https://62584f320c918296a49543e7.mockapi.io"

export const fetchTasks = createAsyncThunk("tasks/fetchAll", async (_, thunkApi) => {

    try {
        const response = await axios.get("/tasks")

        return response.data
    } catch (e) {

        return thunkApi.rejectWithValue(e.message)
    }

})

export const addTask = createAsyncThunk("tasks/addTask", async (text, thunkApi) => {
    try {
        const response = await axios.post("/tasks", { text })

        return response.data
    } catch (e) {
        return thunkApi.rejectWithValue(e.message)
    }
})

export const deleteTask = createAsyncThunk("tasks/deleteTask", async (taskId, thunkApi) => {
    try {
        const response = await axios.delete(`/tasks/${taskId}`)

        return response.data
    } catch (e) {
        return thunkApi.rejectWithValue(e.message)
    }
})

export const toggleCompleted = createAsyncThunk("tasks/toggleCompleted", async (task, thunkApi) => {
    try {
        const response = await axios.put(`/tasks/${task.id}`, {
            completed: !task.completed
        })

        return response.data
    } catch (e) {
        return thunkApi.rejectWithValue(e.message)
    }
})

