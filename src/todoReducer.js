/* 
todo: {
    id: 23,
    description: "Aprender PHP",
    done: true/false
} */


export const todoReducer = (initialState, action) => {

switch (action.type){
    case 'Add Todo':
       return[...initialState, action.payload]

    case 'Delete Todo': // .filter retorna un nuveo arreglo
       return initialState.filter(todo => todo.id !== action.payload)

    case 'Complete Todo':
          return initialState.map(todo => {
            if(todo.id === action.payload){ //
                return{
                    ...todo,
                    done: !todo.done // 
                }
            }
            //Si la condición no se cumple retorna el todo
            return todo;

          })
    case 'Update Todo':
        return initialState.map(todo => {
            if(todo.id === action.payload.id){ //
                return{
                    ...todo,
                   description: action.payload.description,
                }
            }
            //Si la condición no se cumple retorna el todo
            return todo;

          })

    default:
        return initialState
        
}


}