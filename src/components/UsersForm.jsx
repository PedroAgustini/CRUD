import React from 'react';
import axios from 'axios';


const UsersForm = ({getUsers}) => {

    const [ firstName, setFirstName ] = ("");
    const [ lastName, setLastName ] = ("");
    const [ email, setEmail ] = ("");
    const [ password, setPassword ] = ("");
    const [ birthday, setBirthday ] = ("");

    const submit = e => {
        e.preventDefault()
        alert ("New User")
        const user = {
            first_Name: firstName,
            last_Name: lastName,
            email: email,
            password: password,
            birthday: birthday,
        }

        axios
        .post(`https://users-crud1.herokuapp.com/users/`, user)
        .then(() => getUsers())
        .catch((error) => console.log(error.response));
    }

    return (
        <form onSubmit={submit}>
            
            <div className="input-container">
                <label htmlFor="first_Name"> First Name</label>
                <input 
                    type="text" 
                    id="first_Name"
                    value={firstName}
                    onChange={e=> setFirstName(e.target.value)}
                />
            </div>

             <div className="input-container">
                <label htmlFor="last_Name"> Last Name</label>
                <input 
                    type="text" 
                    id="last_Name"
                    value={lastName}
                    onChange={e=> setLastName(e.target.value)}
                />
            </div>

             <div className="input-container">
                <label htmlFor="email"> Email</label>
                <input 
                    type="text" 
                    id="email"
                    value={email}
                    onChange={e=> setEmail(e.target.value)}
                />
            </div>

            <div className="input-container">
                <label htmlFor="password"> Password</label>
                <input 
                    type="password" 
                    id="password"
                    value={password}
                    onChange={e=> setPassword(e.target.value)}
                />
            </div>

            <div className="input-container">
                <label htmlFor="birthday"> Birthday</label>
                <input 
                    type="date" 
                    id="birthday"
                    value={birthday}
                    onChange={e=> setBirthday(e.target.value)}
                />
            </div>

            <button>Upload</button>
        </form>
    );
};

export default UsersForm;