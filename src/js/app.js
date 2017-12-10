import {createStore} from 'redux';
import todoApp from './reducers/reducers';
import {addTodo, removeTodo, toggleTodo, setVisibilityFilter} from "./actions/actionCreators";
import {VisibilityFilters} from "./actions/actionTypes";


document.addEventListener('DOMContentLoaded', function (){

    let store = createStore(todoApp);
    console.log(store.getState());

    const unsubscribe = store.subscribe(() =>
        console.log(store.getState())
    )

    store.dispatch(addTodo('Turn on the PC first'));
    store.dispatch(addTodo('Turn on speakers'));
    store.dispatch(toggleTodo(0));
    store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ACTIVE));
    store.dispatch(removeTodo(0));

    unsubscribe();

});