import axios from 'axios'

// const settings = {
//     withCredentials: true,
//     headers: {
//         // Не забываем заменить API-KEY на собственный
//         'API-KEY': 'd5319fd7-c99a-40ac-b17e-87174e69eee7',
//     },
// }
export type TodolistApiType = {
    id: string
    addedDate: string
    order: number
    title: string
}
export type CreateTodolistResponseType = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: {
        item: TodolistApiType
    }
}
export type UpdateTodolistResponseType = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: {}
}
export type DeleteTodolistResponseType = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: {}
}
export type ResponseType<D> = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: D
}

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        // Не забываем заменить API-KEY на собственный
        'API-KEY': 'd5319fd7-c99a-40ac-b17e-87174e69eee7',
    },
})

export const todolistAPI = {
    updateTodolist(todolistId: string, title: string) {
        const promise = instance.put<ResponseType<{}>>(
            `todo-lists/${todolistId}`,
            {title: title})
        return promise
    },
    getTodoList() {
        const promise = instance.get<Array<TodolistApiType>>(
            `todo-lists`)
        return promise
    },
    createTodoList(title: string) {
        const promise = instance.post<ResponseType<{ item: TodolistApiType }>>(
            `todo-lists`, {title: title},)
        return promise
    },
    deleteTodoList(todolistId: string) {
        const promise = instance.delete<ResponseType<{}>>(`todo-lists/${todolistId}`)
        return promise
    }
}