import { createStore, combineReducers } from 'redux'
import numeroReducer from './reducers/numeroReducers'

//armazenamento dos states
const reducers = combineReducers({

    numeros: numeroReducer,
})

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig