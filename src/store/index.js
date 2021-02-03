import {createStore} from "redux";
import reducer from "../reducers";

const initialState = {
    favourites: {
        job:[],
    },
    selected: {
       jobSelected:{}  
    }
}

export default function configStore(){
    return createStore(
        reducer,
        initialState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
}