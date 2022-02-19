import React from "react";

function Task(props){
return(
    <div className="todo-item">
                        <div className="checker"><span className=""><input type="checkbox"/></span></div>
                            <span>{props.taskItem}</span>
                            <a href="" className="float-right remove-todo-item"><i className="icon-close"></i></a>
                        </div>
)
}

export default Task;