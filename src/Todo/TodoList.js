import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

const styles = {
    ul: {
        listStyle: 'none',
        marginLeft: '100px',
        padding: 0
    }
}

function TodoList(props) {
    return (
    <ul style={styles.ul}>
        {props.todos.map((todo) => {
            return <TodoItem todo={todo} key={todo.id} onDelete={props.onDelete} onChange={props.onChange} />
        })}
    </ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default TodoList