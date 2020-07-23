import React from "react";
import _ from "lodash/fp";
import { useForm } from "react-hook-form";
import "./styles.css";

function Login() {
  const { register, handleSubmit, errors } = useForm();
  var onSubmit = (data) => {
    alert(JSON.stringify(data));
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    fetch("http://localhost:5000/loginform", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
  };
  return (
    <div>
      <h1>LOGIN FORM</h1>
      <hr style={{ color: "white", width: "400px", marginLeft: "475px" }}></hr>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div
          style={{
            width: "500px",
            border: "1px solid whitesmoke",
            marginLeft: "-100px",
          }}
        >
          <label>Email ID</label>
          <input
            name="email"
            ref={register({
              pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/,
            })}
          />
          {_.get("email.type", errors) === "pattern" && <p>Invalid Email ID</p>}
          <label>Password</label>
          <input
            name="password"
            type="password"
            ref={register({ pattern: /^[A-Za-z0-9`!@#$%^&*]+$/i })}
          />
          {_.get("password.type", errors) === "pattern"}
          <button type="Login">LOGIN</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
