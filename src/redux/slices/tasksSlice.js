import { createSlice } from "@reduxjs/toolkit";
import { fetchTasks, addTask, deleteTask, toggleCompleted } from "../operations";

const handlePending = state => {
    state.isLoading = true;
}

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
}

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        items: [],
        isLoading: false,
        error: null
    },
    extraReducers: {
        [fetchTasks.pending]: handlePending,
        [addTask.pending]: handlePending,
        [deleteTask.pending]: handlePending,
        [toggleCompleted.pending]: handlePending,
        [fetchTasks.rejected]: handleRejected,
        [addTask.rejected]: handleRejected,
        [deleteTask.rejected]:handleRejected,
        [toggleCompleted.rejected]: handleRejected,
        [fetchTasks.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
        },
        
       
        [addTask.fulfilled] (state, action) {
            state.isLoading = false;
            state.error = null;
            state.items.push(action.payload);
        },
        
       
        [deleteTask.fulfilled] (state, action) {
            state.isLoading = false;
            state.error = null;
            const index = state.items.findIndex(
                task => task.id === action.payload.id
            );
            state.items.splice(index, 1)
        },
       
       
        [toggleCompleted.fulfilled] (state, action) {
            state.isLoading = false;
            state.error = null;
            const index = state.items.findIndex(
                task => task.id === action.payload.id
            );
            state.items.splice(index, 1, action.payload)
        },
        
    }
})

export const { fetchingInProgress, fetchingSuccess, fetchingError} = tasksSlice.actions

// const tasksInitialState = [
//     { id: 0, text: "Learn HTML and CSS", completed: true },
//     { id: 1, text: "Get good at JavaScript", completed: true },
//     { id: 2, text: "Master React", completed: false },
//     { id: 3, text: "Discover Redux", completed: false },
//     { id: 4, text: "Build amazing apps", completed: false },
//   ];

// const tasksSlice = createSlice({
//     name: 'tasks',
//     initialState: tasksInitialState,
//     reducers: {
//         addTask: {
//         reducer(state, action) {
//             state.push(action.payload)
//         },
//         prepare(text) {
//             return {
//                 payload: {
//                     text,
//                     id: nanoid(),
//                     completed: false
//                 }
//             }
//         }
//     },
//         deleteTask(state, action) {
//             const index = state.findIndex(task => task.id === action.payload)
//             state.splice(index, 1);
//         },
//         // Zapis rozszerzony tego co powyzej!
//         // deleteTask: {
//         //     reducer(state, action) {
//         //         const index = state.findIndex(task => task.id === action.payload)
//         //         state.splice(index, 1)
//         //     },
//         //     prepare(taskId) {
//         //         return {
//         //             payload: taskId
//         //         }
//         //     }
//         // },
//         toggleCompleted(state, action) {
//             for (const task of state) {
//                 if (task.id === action.payload) {
//                   task.completed = !task.completed
//                 }
//               }
//         }
//     }
// })

// export const { addTask, deleteTask, toggleCompleted } = tasksSlice.actions

export const tasksReducer = tasksSlice.reducer