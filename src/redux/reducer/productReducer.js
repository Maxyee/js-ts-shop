import {
    GET_ALL_PRODUCTS_BEGIN,
    GET_ALL_PRODUCTS_SUCCESS,
    GET_ALL_PRODUCTS_FAIL
} from '../action/productAction'

const initialState = {
    products: null,
    product: null,
    loading: null,
    error: null
}


export default (state = initialState, action) => {
    switch(action.type){
        case GET_ALL_PRODUCTS_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            }
        case GET_ALL_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload.data.products
            }
        case GET_ALL_PRODUCTS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload.error.response.data
            }
        default:
            return state
    }
}