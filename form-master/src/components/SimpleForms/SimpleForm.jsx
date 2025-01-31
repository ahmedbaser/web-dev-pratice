
const SimpleForm =()=> {
   
    const handelSubmit = e => {
        e.preventDefault();
        console.log(e.target.name.value)
        console.log(e.target.email.value)
        console.log(e.target.phone.value)
        console.log('form submitted');
    }


    return (
        <div>
            <form onSubmit={handelSubmit}>
                <input type='text' name="name"/>
                <br/>
                <input type='email' name="email" id=""/>
                <br/>
                <input type='password' name="password" id=""/>
                <br/>
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    )
}

export default SimpleForm;
