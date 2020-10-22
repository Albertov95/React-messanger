import React from 'react'
import PropTypes from 'prop-types'

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-beetwen',     
        padding: '2rem 1rem',
        border: '1px solid #ccc',
        marginBottom: '1rem',
        width: '750px',
        background: 'white',
    },
    new: {
        width: '550px',
        overflow: 'hidden'
    }
}

function TodoItem({todo, onDelete, onChange}) {
    return (
    <li style={styles.li}>
        <img src={todo.image} className="logo" alt ="logo" />
        <span className='first'>
            <strong>{todo.title}</strong>
            <br />
            <p style={styles.new}>{todo.text}</p>
        </span>
        <button className='rm' onClick={()=> onDelete(todo.id)}>&times;</button>
        <br />
        <button className='lm' onClick={()=> onChange(todo.id)}>Изменить</button>
    </li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
}

export default TodoItem