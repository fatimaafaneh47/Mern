  import React ,{useState} from 'react'
  import { navigate } from '@reach/router'

  const List=(props)=> {
    const [type, setType] = useState("people");
    const [id, setId] = useState("");
       
    const handleSubmit=(e)=>{
        e.preventDefault()
        navigate("/"+type+"/"+id)}

      return (
        <div>
      <label>Search for:</label>
          <form onSubmit={handleSubmit}>
          <select value={type} onChange={(e)=>setType(e.target.value)}>
            <option value="people">people</option>
            <option value="planets">planets</option>
          </select>
          <input type="text" onChange={(e)=>setId(e.target.value)}/>
          <button>search</button>
          </form>

        </div>
      )
    }
  export default List;
