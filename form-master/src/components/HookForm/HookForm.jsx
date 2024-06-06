import useInputState from "../hooks/useInputState";

const HookForm = () => {
    const [name, handelNameChange]= useInputState('Rojion hooked');
    const emailState = useInputState('rojoin@sojoni.gom')

    const handelSubmit = e =>{
        console.log('form data', emailState.value)
        e.preventDefault();
    }
    return (
        <div>
               <form onSubmit={handelSubmit}>
                {/* <input value={name} onChange={handelNameChange} text='text' name="name"/>
                <br/> */}
               <input {...emailState} type='email' name="email" id=""/>
                <br/>
                <input type='password' name="password" id=""/>
                <br/>
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    );;
};


export default HookForm;
