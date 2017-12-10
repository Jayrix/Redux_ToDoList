import {combineReducers} from 'redux';
import {ADD_TODO, REMOVE_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters} from "../actions/actionTypes.js";

const {SHOW_ALL} = VisibilityFilters;

// const initialState = {
//     visibilityFilter : VisibilityFilters.SHOW_ALL,
//     todos : []
// }

// function todoApp(state, action) {
//     if (typeof state === 'undefined') {
//         return initialState;
//     }
//
//     return state;
// }

function visibilityFilter(state = SHOW_ALL , action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state
    }
}

function todos(state = [], action){
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text : action.text,
                    completed : false
                }
            ];
        case REMOVE_TODO:
            return state.filter((todo, index) => {
                return index !== action.index
            });
        case TOGGLE_TODO:
            return state.map((todo, index) => {
                if(index === action.index){
                    return Object.assign({}, todo, {
                        completed : !todo.completed
                    })
                }
                return todo
            });
        default:
            return state
    }
}

// function todoApp(state = {}, action) {
//     return {
//         visibilityFilter: visibilityFilter(state.visibilityFilter, action),
//         todos : todos(state.todos, action)
//     }
// }

const todoApp = combineReducers({
    visibilityFilter,
    todos
});

export default todoApp;