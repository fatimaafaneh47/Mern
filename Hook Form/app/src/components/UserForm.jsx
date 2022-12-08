import React,{useState} from 'react'


const form = {
   marginTop:'70px',
   
};
const main={
    marginLeft:'40%',
    marginTop:'10%',
}

const UserForm=(props) =>{
    const[username,setUsername]=useState("");
    const[lastname,setLastname]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState();
    const[confpassword,setConfpassword] = useState();
    const createUser= (e) =>{
        e.preventDefault();
        const newUser ={username,email,password,confpassword}
        console.log("welcome",newUser);

    }
  return (
    <form onSubmit ={createUser}>
        <div style={main}>
    <div>
        <label>UserName:</label>
        <input type="text" onChange={(e) => setUsername(e.target.value)}/>
        <br></br>
        <label>Last Name:</label>
        <input type="text" onChange={(e) => setLastname(e.target.value)} />
        <br></br>
        <label>Email:</label>
        <input type="text" onChange={(e) => setEmail(e.target.value)} />
        <br></br>
        <label>Password:</label>
        <input type="password" onChange={(e)=> setPassword(e.target.value)}/>
        <br></br>
        <label>Confirm Password:</label>
        <input type="password" onChange={(e) => setConfpassword(e.target.value)}/>
    </div>
    < div style={ form}>
    <label>Youre Form Data</label>
    <br></br>
    <label>First Name:</label><input onChange={(e) => setUsername(e.target.value)} value={username}></input>
    <br></br>
    <label>Last Name:</label><input type="text" onChange={(e) => setLastname(e.target.value)} value={lastname}></input>
    <br></br>
    <label>Email:</label><input type="text" onChange={(e) => setEmail(e.target.value)} value={email}></input>
    <br></br>
    <label>Password:</label><input type="text" onChange={(e) => setPassword(e.target.value)} value={password}></input>
    <br></br>
    <label>Confirm Password:</label><input type="text" onChange={(e) => setConfpassword(e.target.value)} value={confpassword}></input>
    </div>
    </div>
    </form>
    
    
  )
}

export default UserForm