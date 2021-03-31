import { useState } from "react";
import React from "react";

const Todo = () => {
    const [todoInput, setTodoInput] = useState("");
    const [list, setList] = useState([]);
    const [taskDone, setTaskDone] = useState([]);

    function addToListHandler(){
        setList([...list,todoInput]);
        setTodoInput("");
    }

    function removeFromList(item){
        let index = list.findIndex((val) => val===item);
        const newTodo = [...list]
        newTodo.splice(index,1)
        setList(pre => newTodo);
        setTaskDone((val) => [...val, item]);
        console.log(taskDone);
    }

    function addToList(item){
        let index = taskDone.findIndex(key => key===item)
        const newDoneList = [...taskDone]
        newDoneList.splice(index,1)
        setTaskDone(pre => newDoneList)
        setList(val => [...val, item])
    }
    console.log(list, taskDone)
    return(
        <div className="border">
            <h2>Todo</h2>
            <input value={todoInput} onChange={e => {setTodoInput(e.target.value)}} />
            <button onClick={addToListHandler}>Add To List</button>
            {list.map(item => <div onClick={() =>  removeFromList(item)}>{item}</div>)}
            {
                taskDone.map(item => <div onClick={() =>  addToList(item)}><del>{item}</del></div>)
            }
        </div>
    );
}
// 
export {Todo};