import logo from './logo.svg';
import './App.css';
import Task from './components/task';
import { useState } from 'react';

function App() {
  let taskList = ["Create theme", "Work on wordpress", "Organize office main department", "Error solve in HTML template"];
  const [list, setList] = useState([...taskList]);

  const [inputText, setinputText] = useState("");
  const handleChange = (e) => {
    setinputText(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setList([...list, inputText]);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="card card-white">
            <div className="card-body">

              <form onSubmit={handleSubmit}>
                <input type="text" className="form-control add-task" placeholder="New Task..." onChange={handleChange} />
                <button type="submit" className="btn btn-primary mt-3">Add</button>
              </form>


              <ul className="nav nav-pills todo-nav">
                <li role="presentation" className="nav-item all-task active"><a href="#" className="nav-link">All</a></li>
                <li role="presentation" className="nav-item active-task"><a href="#" className="nav-link">Active</a></li>
                <li role="presentation" className="nav-item completed-task"><a href="#" className="nav-link">Completed</a></li>
              </ul>
              <div className="todo-list">
                {
                  list.map((item) => {
                    return <div key={item}>
                      <Task taskItem={item}></Task>
                    </div>


                  })


                }


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;



// <div className="todo-item">
// <div className="checker"><span className=""><input type="checkbox"/></span></div>
// <span>Create theme</span>
// <a href="javascript:void(0);" className="float-right remove-todo-item"><i className="icon-close"></i></a>
// </div>
// <div className="todo-item">
// <div className="checker"><span className=""><input type="checkbox"/></span></div>
// <span>Work on wordpress</span>
// <a href="javascript:void(0);" className="float-right remove-todo-item"><i className="icon-close"></i></a>
// </div>

// <div className="todo-item">
// <div className="checker"><span className=""><input type="checkbox"/></span></div>
// <span>Organize office main department</span>
// <a href="javascript:void(0);" className="float-right remove-todo-item"><i className="icon-close"></i></a>
// </div>
// <div className="todo-item">
// <div className="checker"><span><input type="checkbox"/></span></div>
// <span>Error solve in HTML template</span>
// <a href="javascript:void(0);" className="float-right remove-todo-item"><i className="icon-close"></i></a>
// </div>