import { useEffect, useRef } from "react";

const RefForm = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

useEffect(()=> {
    nameRef.current.focus();
},[])

    const handelSubmit =  e => {
        e.preventDefault();
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);

    }


    return (
        <div>
             <form onSubmit={handelSubmit}>
                <input ref={nameRef} type='text' name="name"/>
                <br/>
                <input ref={emailRef} defaultValue={'rojoni@rojin.com'} type='email' name="email" id=""/>
                <br/>
                <input ref={passwordRef} type='password' name="password" id=""/>
                <br/>
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    );
};
export default RefForm;















