import { useEffect, useReducer } from "react"
import { todoReducer } from "../todoReducer"

export const useTodo = () => {

    const initialState = [];

     const init = () => {// De stringify devolvemos al tipo que era
        const storedTodos = JSON.parse(localStorage.getItem('todos'));
        return Array.isArray(storedTodos) ? storedTodos : [];
    }
    

    const [todos, dispatch] = useReducer(
        todoReducer, 
        initialState, 
        init
    )

    //LLEVAR EL CONTROL DEL NUMERO DE TAREAS Y DE LAS TAREAS PENDIENTES
    const todosCount = todos.length;
    
    const pendingTodosCount = todos.filter(todo => !todo.done).length

    // Persistencia
    useEffect(() => {  // todos es para identificar
        // Cada vez que los todos cambian, se ejecuta esta lína En localStorgare no puede ir algo que no sea string
         localStorage.setItem('todos', JSON.stringify(todos))
    },[todos])

    const handleNewTodo = todo => {
        const action = {
            type: 'Add Todo',
            payload: todo
        }
        dispatch(action)
    }

    const handleDeleteTodo = id => {
        const action = {
            type: 'Delete Todo',
            payload: id
        }
        dispatch(action)
    }
    const handleCompleteTodo = id => {
        const action = {
            type: 'Complete Todo',
            payload: id
        }
        dispatch(action)
    }
    const handleUpdateTodo = (id, description) => {
        const action = {
            type: 'Update Todo',
            payload: {
                id,
                description
            }
        }
        dispatch(action)
    }
    return{
        todos,
        todosCount,
        pendingTodosCount,
        handleNewTodo,
        handleDeleteTodo,
        handleCompleteTodo,
        handleUpdateTodo
    }

 
}