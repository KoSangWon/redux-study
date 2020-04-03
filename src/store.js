import {createStore} from "redux";

const initialState = {
    isLoaded: false,
    count: 0,
}


export const SET_IS_LOADED = 'SET_IS_LOADED';
export const ADD = 'ADD';
export const MINUS = 'MINUS';
const reducer = (state=initialState, action) => {
    switch(action.type){
        case SET_IS_LOADED:
            return {...state, isLoaded: action.isLoaded}
        case ADD:
            return {...state, count: state.count+1}
        case MINUS:
            return {...state, count: state.count-1}
        default:
            return state;
        
    }
};
const store = createStore(reducer)

console.log(store.getState());

export default store;