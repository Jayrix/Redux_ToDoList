import {ADD_TODO, REMOVE_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters} from "../actions/actionTypes";

const initialState = {
    visibilityFilter : VisibilityFilters.SHOW_ALL,
    todos : []
}

// function todoApp(state, action) {
//     if (typeof state === 'undefined') {
//         return initialState;
//     }
//
//     return state;
// }

function todoApp(state = initialState, action) {
    switch (action.type){
        case SET_VISIBILITY_FILTER:
            return Object.assign({}, state, {
                visibilityFilter: action.filter
            });
        case ADD_TODO:
            return Object.assign({}, state, {
               todos : [
                   ...state.todos,
                   {
                       text : action.text,
                       completed : false
                   }
               ]
            });
        case REMOVE_TODO:
            return Object.assign({}, state, {
               todos : state.todos.filter((todo, index) => {
                   return index !== action.index
               })
            });
        case TOGGLE_TODO:
            return Object.assign({}, state, {
                todos : state.todos.map((todo, index) => {
                    if(index === action.index){
                        return Object.assign({}, todo, {
                            completed : !todo.completed
                        })
                    }
                    return todo
                })
            });
        default:
            return state
    }
}
