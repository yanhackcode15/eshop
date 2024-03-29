import React, {createContext, useContext, useReducer} from 'react'
export const StateContext = createContext();
export const StateProvider = ({reducer, initialState, children})=>{
    const [products, setProducts] = React.useState({});
    const [signedInStatus, setSignedInStatus] = React.useState(false)
    const [firstName, setFirstName] = React.useState('')
    React.useEffect(()=>{
        fetch('https://fakestoreapi.com/products?limit=10')
                .then(res=>res.json())
                .then(json=>{//json is the array of objects, each is a product object [{id:'', description: ''...}, {...}], products state is an object with keys being product key, {'1': {product 1}, '2': {product 2}}
                    let productsObject = {}
                    json.forEach(product=>productsObject[product.id]=product)
                    setProducts(productsObject)
                })
                .catch(err => console.error('fakestoreapi error', err))
      }, [])

    const basketStateArray = useReducer(reducer, initialState);
    //provider value is an ojbect with two state variables, products and basket, basket uses reducer hook,
    return (
    <StateContext.Provider value={{products, basketStateArray, signedInStatus, setSignedInStatus, firstName, setFirstName}} >
        {children}
    </StateContext.Provider>
)}

export const useStateValue = ()=> useContext(StateContext);

export const basketItemCount = (basket)=>{
    if (!basket.size){
        return 0;
    }
    let size = 0;
    for (const [key, value] of basket) {
        size=size + value;
    }
    return size; 
}

