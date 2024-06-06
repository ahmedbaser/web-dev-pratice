import { useState } from "react";

const StatefulForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState('');
       


 const handelSubmit = e => {
   e.preventDefault();
   if(password.lenght < 6) {
    setError('Password must be 6 characters or longer')
   } else{
    setError('');
    console.log(name, email, password);
   }
   
 }

 const handelNameChange = e => {
    setName(e.target.value);
 }


 const handelEmailChange = e => {
   console.log(e.target.value);
   setEmail(e.target.value)
 }
 

 const handelPasswodChange = e => {
   setPassword(e.target.value);

 }


    return (
        <div>
            <form onSubmit={handelSubmit}>
                <input value={name} onChange={handelNameChange} text='text' name="name"/>
                <br/>
                <input 
                onChange={handelEmailChange}
                text='email' name="email" id=""/>
                <br/>
                <input
                 onChange={handelPasswodChange}
                 type='password' name="password" id="" required/>
                <br/>
                <input type="submit" value="Submit"></input>
           {
            error && <p>{error}</p>
           }
            </form>
        </div>
    );
};

export default StatefulForm;

