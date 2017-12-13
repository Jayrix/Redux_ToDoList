import React from 'react'
import PropTypes from 'prop-types'
import RemoveTodo from '../containers/RemoveTodo.jsx';

const Todo = ({ onClick, completed, text, id }) => (
    <li
        onClick={onClick}
        style={{
            textDecoration: completed ? 'line-through' : 'none'
        }}
    >
        {text + ' '}
        <RemoveTodo id={id}/>
    </li>
)

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default Todo