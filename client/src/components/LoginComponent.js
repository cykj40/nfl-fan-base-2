import React, { useState } from 'react'
// import LoginData from '../assets/accountData'

export default function LoginComponent({ UserLogin, error }) {
  const [info, setInfo] = useState({ username: "", password: "" });

  const submitForm = e => {
    e.preventDefault();

  
    console.log(info);
  }

  return (
    <div className="container pt-5 centered-contact text-center form-margin">
      <div className="jumbotron">
        <h1>Login</h1>
        <div className="card">
          <div className="card-body">
            <form onSubmit={submitForm}>
              <div>
                <label htmlFor='username'>
                  Username:
                  <input
                    className="form-control"
                    type="text"
                    id="username"
                    name="username"
                    onChange={e => setInfo({ ...info, username: e.target.value })}
                    value={info.username}
                  />
                </label>
              </div>
              <div className="">
                <label htmlFor='password'>
                  Password:
                  <input
                    className="form-control"
                    type="password"
                    id="password"
                    name="password"
                    onChange={e => setInfo({ ...info, password: e.target.value })}
                    value={info.password}
                  />
                </label>
              </div>
              <button className="btn btn-primary" type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}