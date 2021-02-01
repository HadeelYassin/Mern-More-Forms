import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const[firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError]=useState("");
    const [password, setPassword] = useState("");
    const [passwordError , setPasswordError]=useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmpasswordError , setConfirmPasswordError]=useState("");

    

    const handleFirstName = (e)=>{
        setFirstName(e.target.value);
        if(e.target.value.length<2){
            setFirstNameError("First Name field must be at least 2 characters.")
        }
        else{
            setFirstNameError("");
        }

    } 
    const handleLastName = (e)=>{
        setLastName(e.target.value);
        if(e.target.value.length<2){
            setLastNameError("Last Name field must be at least 2 characters.")
        }
        else{
            setLastNameError("");
        }

    } 
    const handleEmail = (e)=>{
        setEmail(e.target.value);
        if(e.target.value.length<5){
            setEmailError(" Email must be at lease 5 characters")
        }
        else{
            setEmailError("");
        }
    }

    const handlePassword=(e)=>{
        setPassword(e.target.value);
        if(e.target.value.length<8){
            setPasswordError("Password must be at least 8 charcters");
        }
        else{
            setPasswordError("");
        }
    }
    const handleConfirmPassword=(e)=>{
        setConfirmPassword(e.target.value);
        if(e.target.value!=password){
            setConfirmPasswordError("Confirm Password must match with Password");
        }
        else{
            setConfirmPasswordError("");
        }
    }
    

    
    
    return (
        <form >
	    <div>
                <label>First Name: </label> 
                <input type="text" onChange={ handleFirstName } />
                {
                    firstNameError ?
                    <p style={{color:'red'}}>{ firstNameError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ handleLastName } />
                {
                    lastNameError ?
                    <p style={{color:'red'}}>{ lastNameError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ handleEmail } />
                {
                   emailError ?
                    <p style={{color:'red'}}>{ emailError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ handlePassword } />
                {
                   passwordError ?
                    <p style={{color:'red'}}>{ passwordError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onKeyUp={ handleConfirmPassword } />
                {
                   confirmpasswordError ?
                    <p style={{color:'red'}}>{ confirmpasswordError }</p> :
                    ''
                }
            </div>
        </form>
    );
};
    
export default UserForm;