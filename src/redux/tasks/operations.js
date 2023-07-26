import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchTasks = createAsyncThunk(
    'tasks/fetchAll',
    async (_, thunkAPI) => {
        
    }
)