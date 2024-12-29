import React, { useState } from "react";
export default function Taskform() {
    const[task,settask] = useState('');
    const[priority, setpriority] = useState('Medium');
    const[category, setcategory] = useState('General');
    return (
        <form>
            <div  id= "inp">
            <input type ="text"
            value = {task}
            onChange={(e)=>settask(e.target.value)}
            placeholder="Enter your task"
            required />
            <span><button type ="submit">Add Task</button></span>

            </div>
            <div id ="btn">
                <select value ={priority} onChange={(e)=>setpriority(e.target.value)}>
                    <option value ="High">High</option>
                    <option value = "Medium">Medium</option>
                    <option value= "Low">Low</option>
                    </select>
                    <select value = {category} onChange={(e)=>setcategory(e.target.value)}>
                        <option value ="General">General</option>
                        <option value = "work">Work</option>
                        <option value = "personal">Personal</option>
                        
                    </select>

            </div>
        </form>
    )
}