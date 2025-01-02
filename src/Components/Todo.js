import {useState} from "react";
import "./Todo.css";
 export default function Todo() {
    const [title,setTitle] = useState("");
    const [todo ,setTodo] =useState([]);
    const [message,setMessage] = useState([]);
    const [description , setDescriptoin] =useState([]);
    const [error,setError] = useState([]);
    const apiUrl ="http://localhost:8000/";
    // const[description,setDescription] = useState("");

    const click = () =>{
        if(title.trim() !==" " && description.trim() !==" "){
            fetch(apiUrl + "/todo",{
                method:"Post",
                headers :{
                    'content-Type':'application/json'
                },
                body:JSON.stringify({title, description})
            }).then( (res) =>{
                if(res.ok){
                    setTodo([...todo,{title,description}])
                    setMessage("Task added successfully")
                }
                else{
                    //set error 
                    setError("Unable to get")
                }
            })
        }

    }
    return <>
        <div className="row p-3 bg-success text-light">
            <h1>ToDo project with mern stack</h1>
        </div>
        <div className="row">
            <h3>Add Item </h3>
           { message && <p className="text-success">{message}</p> }
            <div className="form-group d-flex gap-2">

                <input  className="form-control" type="text" onChange={(e) => setTitle(e.target.value)} value={title} ></input> 
                <input  className="form-control" type="text" onChange={(e) =>setDescriptoin(e.target.value)} value={description}></input>
                <button className="btn btn-dark" onClick={click}>Submit</button>
            </div>
            {error && <p className="text-danger">{error}</p>}
        </div>
        </>
    
}
