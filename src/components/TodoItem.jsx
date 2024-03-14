import TodoUpdate from "./TodoUpdate";

const TodoItem = ({ //ya no es todos sino todo porque solo retorna un obj
    todo, 
    handleUpdateTodo, 
    handleDeleteTodo, 
    handleCompleteTodo
}) => {
    return(
        <>
             <li>
                <span onClick={() =>handleCompleteTodo(todo.id)}>
                    {/* Clase condiconal para pintar al marcar como completada */}
                    <label className={`container-done ${todo.done ? 'active' : ''}`}></label>
                </span>
                <TodoUpdate 
                todo={todo}
                handleUpdateTodo={handleUpdateTodo}
                />
                <button 
                    className="btn-delete"
                    onClick={() => handleDeleteTodo(todo.id)}>
                    Eliminar
                </button>
            </li>
        </>
    )
}
export default TodoItem;