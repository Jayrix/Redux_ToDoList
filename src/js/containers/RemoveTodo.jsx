import React from 'react';
import { connect } from 'react-redux'
import {removeTodo} from '../actions/actionCreators'

let RemoveTodo = ({dispatch, id}) => {
    return (
        <button onClick={e => {
            dispatch(removeTodo(id))
        }}>
            Remove
        </button>
    )

};



RemoveTodo = connect()(RemoveTodo)

export default RemoveTodo;