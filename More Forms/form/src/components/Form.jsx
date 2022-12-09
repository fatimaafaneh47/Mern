import React ,{useState} from 'react'

    const Form = (props) => {
        const [firstname,setFirstname]=useState("");
        const [firstnameError, setFirstNameError] = useState("");
        const[lastname,setLastname]=useState("");
        const [lastnameError, setLastNameError] = useState("");
        const[email,setEmail]=useState("");
        const [emailError, setEmailError] = useState("");
        const[password,setPassword]=useState();
        const [passwordError, setPasswordError] = useState("");
        const[confirmpw,setConfirmpw]=useState();
        const [confirmpwError, setCofirmPwError] = useState("");
        const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
        const createUser =(e) =>{
            e.preventDefault();
            const newUser ={lastname,email,password,confirmpw};
            console.log("welcone",newUser);
            setHasBeenSubmitted(true);
        };
        const formMessage =() => {
            if (hasBeenSubmitted){
                return "Thank you for submitting the form!"
            }
            else{
                return "welcome,please sumbit the form"
            }
        }
        const firstName = (e) => {
            setFirstname(e.target.value);
            if(e.target.value.length < 1) {
                setFirstNameError("First name is required!");
            } else if(e.target.value.length < 2) {
                setFirstNameError("First name must be at least 2 characters");
            } else {
                setFirstNameError("");
            }
        }
        const lastName = (e) => {
            setLastname(e.target.value);
            if(e.target.value.length < 1) {
                setLastNameError("Last name is required!");
            } else if(e.target.value.length < 2) {
                setLastNameError("Last name must be at least 2 characters");
            } else {
                setLastNameError("");
            }
        }
        const Email = (e) => {
            setEmail(e.target.value);
            if(e.target.value.length < 1) {
                setEmailError("Email is required!");
            } else if(e.target.value.length < 2) {
                setEmailError("Email must be at least 2 characters");
            } else {
                setEmailError("");
            }
        }
        const Password = (e) => {
            setPassword(e.target.value);
            if(e.target.value.length < 1) {
                setPasswordError("Password is required!");
            } else if(e.target.value.length < 8) {
                setPasswordError("Password must be at least 8 characters");
            } else {
                setPasswordError("");
            }
        }
        const Confirmpw = (e) => {
            setConfirmpw(e.target.value);
            if(e.target.value.length < 1) {
                setCofirmPwError("Confirm Password is required!");
            } else if(e.target.value.length < 8) {
                setCofirmPwError("Confirm Password must be at least 8 characters");
            }else if(e.target.value != password ){
                setCofirmPwError("Passwords should match!")
            }
             else {
                setCofirmPwError("");
            }
        }

    return (
            <form onSubmit={ (e) => e.preventDefault() }>
            <h3>{formMessage()}</h3>
            <div>
                <label>First Name:</label>
                <input type="text" onChange={firstName}></input>
                {
                            firstnameError ?
                            <p style={{color:'red'}}>{ firstnameError }</p> :
                            ''
                        }
                <br></br>
                <label>Last Name:</label>
                <input type="text" onChange={lastName}></input>
                {
                            lastnameError ?
                            <p style={{color:'red'}}>{ lastnameError }</p> :
                            ''
                        }
                <br></br>
                <label>Email:</label>
                <input type="text" onChange={Email}></input>
                {
                            emailError ?
                            <p style={{color:'red'}}>{ emailError }</p> :
                            ''
                        }   
                <br></br>
                <label>Password:</label>
                <input type="password" onChange={Password}></input>
                {
                            passwordError ?
                            <p style={{color:'red'}}>{ passwordError }</p> :
                            ''
                        }   
                <br></br>
                <label>Confirm Password:</label>
                <input type="password" onChange={Confirmpw}></input>
                {
                            confirmpwError ?
                            <p style={{color:'red'}}>{ confirmpwError }</p> :
                            ''
                        }   
            
            </div>
            
            </form>
        )
        }

        export default Form;
