import { useRef, useState } from "react";
import { useForm } from "../hooks/useForm";

const TodoUpdate = ({todo, handleUpdateTodo}) => {

    const {updateDescription, onInputChange} = useForm({
        updateDescription: todo.description
    })
    // al presiona boton de editar
    const [disabled, setDisabled] =useState(true)
    const focusInputRef = useRef()

    const onSubmitUpdate = e => {
        e.preventDefault();

        const id = todo.id
        const description = updateDescription

        handleUpdateTodo(id, description)

        //para el boton de editar
        setDisabled(!disabled)
   
        focusInputRef.current.focus();
    }

    return(
        <>
         <form onSubmit={onSubmitUpdate} >
            <input 
            type="text" 
            className={`input-update ${ todo.done ? 'text-decoration' : '' }`} 
            name="updateDescription" 
            value={updateDescription} 
            onChange={onInputChange}
            placeholder="Asigna una tarea"
             readOnly={disabled}
             ref={focusInputRef}
             />
            <button 
               className="btn-edit"
               type="submit"
               >
                  Editar
            </button>
         </form>
        </>
    )
}
export default TodoUpdate;