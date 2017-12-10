import {ADD_TODO, REMOVE_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER} from './actionTypes.js';

export function addTodo(text){
    return {type : ADD_TODO, text }
}

export function removeTodo(index){
    return {type : REMOVE_TODO, index }
}

export function toggleTodo(index){
    return {type : TOGGLE_TODO, index }
}

export function setVisibilityFilter(filter) {
    return {type : SET_VISIBILITY_FILTER, filter}
}

