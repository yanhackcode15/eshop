export const initialState = {
    basket: new Map()
}

const reducer = (state, action)=>{
    let productId = Object.keys(action.item)[0];
    switch(action.type) {
        case "ADD_TO_BASKET": 
            {
                let newBasket = new Map(state.basket);
                newBasket.set(productId, (newBasket.get(productId)??0)+action.item[productId])
                return {
                    ...state,
                    basket: newBasket
                }
            }
        case "UPDATE_BASKET":
            {
                let newBasket = new Map(state.basket);
                if(!action.item[productId]){
                    newBasket.delete(productId);
                    return {
                        ...state,
                        basket: newBasket
                    }   
                }
                newBasket.set(productId, action.item[productId])
                return {
                    ...state,
                    basket: newBasket
                }
            }
        default: 
            {
                return {
                    ...state
                }
            }

            
    }
    return state;

}

export default reducer;     