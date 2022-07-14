import React from "react";

const UsersList = ({ users }) => {
    return (
        <ul className="users-list">
            <h2>Lista de usuarios:</h2>
            {
            users.map(user =>(
                <li key={user.id}>
                    <div><b>Nombre:</b> {user.first_name} </div>
                    <div><b>Apellido:</b> {user.last_name} </div>
                    <div><b>Email:</b> {user.email} </div>
                    <div><b>Contraseña:</b> {user.password} </div>
                    <div><b>Fecha de cumpleaños:</b> {user.birthday} </div>
                </li>
                
            ))

            }
        </ul>

    );
    
}
export default UsersList;