import React from 'react';
import TodoList from './Todo/TodoList'
import Modal from './Modal/Modal'

let styles = {
  h1: {
    marginTop: '30px',
    marginLeft: '100px'
  },
  p: {
    textDecoration: 'underline',
    paddingTop: '50px',
    paddingLeft: '100px',
    fontSize: '24px',
    color: 'white'
  },
  menuButton: {
    marginTop: '46px',
    marginRight: '670px',
    width: '25px',
    height: '20px',
    textAlign: 'center',
  }
}

function App() {
  const [todos, setMessages] = React.useState([
    {id: 1, title: "Ivan Ivanov", text: "Привет", image: "three.jpg"},
    {id: 2, title: "Nikita Petrov", text: "Рад слышать", image: "logo.jpg"},
    {id: 3, title: "Alexey Komarov", text: "Хорошо", image: "logotwo.jpg"}
  ]) 

  function deleteMessage(id) {
    setMessages(
      todos.filter(item => item.id !== id)
    )
  }


  function changeText(id) {
    let total = prompt('Введите новый текст');
    if (total === null) {
      total = "";
    }
    setMessages(
      todos.map(function(item) {
        if(item.id === id && total.length > 0) {
          item.text = total;
        }
        return item;
      })
    )
  }

  function newMessage() {
    setMessages(
      todos.concat([{id: Date.now(), title: "Pasha Pechkin", text: "Это снова я", image: "logothree.jpg"}])
    )
  }

  return (
    <div className='wrapper'>
      <div className='menu'>
        <h1 style={styles.h1}>Сообщения</h1>
        <button type='submit' style={styles.menuButton} onClick={()=> newMessage()}>+</button>
      </div>
      <Modal />
        {todos.length ? <TodoList todos={todos} onDelete={deleteMessage} onChange={changeText} /> : <p style={styles.p}>У вас нет сообщений</p>}
    </div>
  )
}

export default App;
