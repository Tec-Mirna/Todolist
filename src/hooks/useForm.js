import { useState } from "react"


export const useForm = (initialForm = {}) => {

    const [formState, setFormState] = useState(initialForm)

    const onInputChange = (e) => {
        const name = e.target.name 
        const value = e.target.value

        //Actualizar estado del formulario
        setFormState({
            ...formState,
            [name]: value
        })
    }
    //función para resetear el formulario
    const onResetForm = () => {
        setFormState(initialForm)
    }
    return {
        ...formState, 
        formState, 
        onInputChange,
        onResetForm
    }

}
