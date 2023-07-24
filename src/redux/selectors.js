import { statusFilters } from "./constants"
import { createSelector } from "@reduxjs/toolkit"

// const selectorXd = createSelector(
//     [ inputSelector1, inputSelector2, inputSelector3],
//     (result1, result2, result3) => {
//         //obliczenia
//         return result
//     }
// )

export const selectTasks = state => state.tasks.items

export const selectIsLoading = state => state.tasks.isLoading

export const selectError = state => state.tasks.error

export const selectStatusFilter = state => state.filters.status

export const selectVisibleTasks = createSelector(
    [selectTasks, selectStatusFilter], (tasks, statusFilter) => {

        switch (statusFilter) {
            case statusFilters.active:
                return tasks.filter(task => !task.completed)
            case statusFilters.completed:
                return tasks.filter(task => task.completed)
            default:
             return tasks;
        }
    }
)

export const selectTaskCount = createSelector(
    [selectTasks], tasks => {

    return tasks.reduce(
        (acc, task) => {
            if (task.completed) {
                acc.completed += 1;
            } else {
                acc.active += 1;
            }

            return acc;
        },
        { active: 0, completed: 0}
    )
    }
)
