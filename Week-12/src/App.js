import { useState } from "react";
import "./App.css";

function App() {
  const [todoList, setToDoList] = useState([{task: "buying eggs 🥚", isCompleted: false}, {task:"study maths", isCompleted: false}, {task:"workout ", isCompleted: false}, {task:"coding 👨🏻‍💻", isCompleted: false}]);
  const [todo, setToDo] = useState("");

  const update = (event) => {
    setToDo(event.target.value);
  };

  const storeToDo = () => {
    if (!todo) {
      alert('Please enter something!')
      return
    }
    todoList.push({task: todo, isCompleted: false})
    setToDoList(todoList);
    setToDo("");
  };
  return (
    <div className="App">
      <h1>To-Do List ✅</h1>
      <input onChange={update} value={todo} placeholder='Type something here...'/>
      <button onClick={storeToDo}>
        Add to-do
      </button>
      <div className="todolist">
        {todoList.map((el, i) => {
          return (
            <div key={i} id={i} className={`todos-${el.isCompleted}`}>
              <p>{el.task}</p>
              <div className="buttons">
              <button
                id={i}
                title='Delete'
                onClick={() => {
                  todoList.splice(i, 1);
                  setToDoList([...todoList]);
                  console.log(todoList);
                }}
              >
                ❌
              </button>
              <button
                id="completed"
                title='Complete'
                onClick={() => {
                  todoList[i].isCompleted = true
                  setToDoList([...todoList])
                  console.log(i, "id");
                }}
              >
                ✅
              </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
