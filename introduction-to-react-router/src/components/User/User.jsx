
const User = ({user}) => {
    const {id, name, email, phone} = user;
     const userStyle = {
        border: '2px solid yellow',
        padding: '5px',
        borderRadius: '20px'
     }


    return (

        <div style={userStyle}>
          <h2>{name}</h2>
          <p>email: {email}</p>
          <p>phone: {phone}</p>
          <Link to={`/user/${id}`}>Show Details</Link>
          <link to={`/user/${id}`}>
            <button>Click Me</button>
          </link>
        </div>
    );
};

export default User;