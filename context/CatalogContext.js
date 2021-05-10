import React, { useReducer } from 'react'

export const CatalogContext = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE':
            return { ...state, catalog: action.payload }
        default:
            return state;
    }
}

// Нужно загружать список категорий только при переходе на страницу каталога
export const CatalogContextProvider = ({ children }) => {
    const update = (data) => dispatch({ type: 'UPDATE', payload: data }) // Принимает массив каталога
    const [state, dispatch] = useReducer(reducer, {
        catalog: false,
        update
    })


    return (
        <CatalogContext.Provider value={state}>
            {children}
        </CatalogContext.Provider >
    )
}
