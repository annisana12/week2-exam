import './App.css';
import { useState } from 'react';

function Content({ content }) {
  return (
    <div className='box'>
        <p>{content.title}</p>
    </div>
  )
}

function App() {
  const [title, setTitle] = useState('');

  const [todos, setTodos] = useState([{ id: 0, title: '' }]);

  const onChangeHandler = (event) => {
    setTitle(event.target.value)
  }

  const onSubmitHandler = () => {
    setTodos([...todos, { id: todos[todos.length - 1].id + 1, title: title }])
    setTitle('');
  }

  return (
    <div className="container">
      <div className="input_container">
        <input type="text" onChange={onChangeHandler} value={title} />
        <button onClick={onSubmitHandler}>Add</button>
      </div>
      <h2>Todo List</h2>

      <div className='box_container'>
        {todos.map((todo) => {
          if (todo.id > 0) {
            return (<Content
              content={todo}
              key={`todo-${todo.id}`} />)
          }
        })}
      </div>

    </div>
  );
}

export default App;