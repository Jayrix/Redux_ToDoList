import React from 'react'
import PropTypes from 'prop-types'
import RemoveTodo from '../containers/RemoveTodo.jsx';

const Todo = ({ onClick, completed, text, id }) => (
    <li

    >
        <span onClick={() => onClick(id)}
              style={{
                  textDecoration: completed ? 'line-through' : 'none'
              }}
        >
            {text + ' '}
        </span>
        <RemoveTodo id={id}/>
    </li>
)

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default Todo