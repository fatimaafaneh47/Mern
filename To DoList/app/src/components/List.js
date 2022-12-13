    import React ,{useState} from 'react'
    import './list.css';

    function List() {

        const[newTodo,setNewToDo]=useState("");
        const[todos,setToDos]=useState([]);

        const handleNewToDoSubmit =(e) =>{
            e.preventDefault();

        if (newTodo.length==0){
            return ;
        }
        const todoItem ={
            text:newTodo,
            complete:false,
        }
            setToDos([...todos, todoItem]);
            setNewToDo("");   
        }

        const handleToDoDelete =(delIdx) =>{
            const filteredTodos = todos.filter((todo,i)=>{
                return i != delIdx;
            });
            setToDos(filteredTodos);
        }
        const handleToDoComplete=(idx) =>{
            const upadatedTodos = todos.map((todo,i) =>{
                if (idx == i){
                    todo.complete= !todo.complete;
                }
                return todo;
            });
            setToDos(upadatedTodos);
        }


    return (
        <div style={{textAlign:"center"}}>
            <form onSubmit ={(e) =>{handleNewToDoSubmit(e);}}>
                <input onChange={(e) =>{setNewToDo(e.target.value); }} type="text" value={newTodo} />
            
            <div>
                <button>Add</button>
            </div>
            </form>
    {todos.map((todo,i)=>{
        const todoClasses=["bold"];
        if (todo.complete){
            todoClasses.push("strike-through");

        }
        return ( <div key={i}> 
        <input onChange ={(e)=>{
            handleToDoComplete(i);
        }}checked={todo.complete} type="checkbox"/>
        <span className={todoClasses.join(" ")}>{todo.text}</span>
        <button onClick={(e)=>{handleToDoDelete(i);}}>Delete</button>
        </div>
);
    }) }
        </div>
    );
    }




    export default List