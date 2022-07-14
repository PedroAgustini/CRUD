import React from "react";

const UsersList =({ users }) => {
    return (
        <ul>
            <h1>New User</h1>
            {
            users.map(user =>(
                <li key={user.id}>
                    <div><b>First_name</b> {user.first_name} </div>
                    <div><b>Last_name</b> {user.last_name} </div>
                    <div><b>Email</b> {user.email} </div>
                    <div><b>Password</b> {user.password} </div>
                    <div><b>Birthday</b> {user.birthday} </div>
                    
                </li>
            ))

            }
        </ul>

    );
    
}
export default UsersList;