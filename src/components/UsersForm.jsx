import React, { useState } from "react";
import axios from "axios";

const UsersForm = ({ getUsers }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthday, setBirthday] = useState("");
  const [isVisible, setIsVisible] = useState(false)

  const submit = (e) => {
    e.preventDefault();
    alert("Subiendo")
    const user = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password,
      birthday: birthday
    };

    axios.post(`https://users-crud1.herokuapp.com/users/`, user)
      .then(() => getUsers())
      .catch((error) => console.log(error.response))
  };

  return (
    <form onSubmit={submit} id="form-submit">
      <div className="form-title">
        <h1>Crear usuario</h1>
      </div>
      <div className="input-container">
        <label htmlFor="first_Name" className="title-form">Nombre</label>
            <input
            className="input-form"
            type="text"
            id="first_Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            />
        </div>

        <div className="input-container">
            <label htmlFor="last_Name" className="title-form">Apellido</label>
            <input
            className="input-form"
            type="text"
            id="last_Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            />
        </div>

        <div className="input-container">
            <label htmlFor="email" className="title-form">Email</label>
            <input
            className="input-form"
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
        </div>

        <div className="input-container">
            <label htmlFor="password" className="title-form">Contraseña</label>
            <input
            className="input-password"
            type={isVisible ? "password" : "text"}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <button type="button" className="btn-view" onClick={() => setIsVisible(!isVisible)}><i className="fa-solid fa-eye"></i></button>

        </div>

        <div className="input-container">
            <label htmlFor="birthday" className="title-form">Fecha de cumpleaños</label>
            <input
            className="input-date"
            type="date"
            id="birthday"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
            />
        </div>

      <button type="submit" className="btn-submit">Crear</button>
    </form>
  );
};

export default UsersForm;
