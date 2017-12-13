import {ADD_TODO, REMOVE_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER} from './actionTypes.js';

let id_counter = 1;
export function addTodo(text){
    return {type : ADD_TODO, text, id : id_counter++ }
}

export function removeTodo(id){
    return {type : REMOVE_TODO, id }
}

export function toggleTodo(id){
    return {type : TOGGLE_TODO, id }
}

export function setVisibilityFilter(filter) {
    return {type : SET_VISIBILITY_FILTER, filter}
}

