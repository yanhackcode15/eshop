import React, {createContext, useContext, useReducer} from 'react'
export const StateContext = createContext();
export const StateProvider = ({reducer, initialState, children})=>{
    const [products, setProducts] = React.useState({});
    React.useEffect(()=>{
        fetch('https://fakestoreapi.com/products?limit=10')
                .then(res=>res.json())
                .then(json=>{//json is the array of objects, each is a product object [{id:'', description: ''...}, {...}], products state is an object with keys being product key, {'1': {product 1}, '2': {product 2}}
                    let productsObject = {}
                    json.forEach(product=>productsObject[product.id]=product)
                    setProducts(productsObject)
                })
      }, [])

    const basketStateArray = useReducer(reducer, initialState);
    //provider value is an ojbect with two state variables, products and basket, basket uses reducer hook,
    return (
    <StateContext.Provider value={{products, basketStateArray}} >
        {children}
    </StateContext.Provider>
)}

export const useStateValue = ()=> useContext(StateContext);

