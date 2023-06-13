import React from 'react'
import LoginService from '../../service/Login'
import { useState } from 'react'

const Login = () => {
    const [data,setData] = useState({
  email:"",
  password:""
})

const [error,setError] = useState("")

console.log(data)
const handleChange = ({currentTarget:input})=>{
  setData({...data,[input.name]:input.value})
}
const handleSubmit = (e)=>{
e.preventDefault()
LoginService.create(data)
.then(res=>{
console.log(res)
window.location="/"
}).catch(error=>{
  console.log(error)
  if (error.response && error.response.status>=400 && error.response.status<=500) {
    setError(error.response.data.message)
  }
})
}
  return (
    <div
      style={{


        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{ width: "600px", padding: "50px" }}
        className="authentication-wrapper authentication-basic container-p-y"
      >
        <div className="authentication-inner">
          {/* Register */}
          <div className="card">
            <div className="card-body">
              {/* Logo */}
              <div className="app-brand justify-content-center" 
              style={{marginBlock:"20px"}}
              >
                <a  className="app-brand-link gap-2">

                <center>
            <img src="logo.png" width="280px" alt="" />

            </center>

            <img  width="130px" src="https://thumbs.dreamstime.com/b/ic%C3%B4ne-d-admin-dans-le-style-%C3%A0-la-mode-de-conception-isolement-sur-fond-blanc-symbole-plat-simple-et-moderne-vecteur-pour-135742404.jpg" alt="" />
                </a>
              </div>
              {/* /Logo */}
     
             
              <form
                id="formAuthentication"
                className="mb-3"
                onSubmit={handleSubmit}
              >
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                   Courriel ou nom d'utilisateur

                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    required
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                    placeholder="Enter your email or username"
                    autofocus
                  />
                </div>
                <div className="mb-3 form-password-toggle">
                  <div className="d-flex justify-content-between">
                    <label className="form-label" htmlFor="password">
                      Mot de passe
                    </label>
                    <a href="auth-forgot-password-basic.html">
                      <small>Mot de passe oublié ?</small>
                    </a>
                  </div>
                  <div
                    style={{ display: "flex", flexDirection: "column" }}
                    className="input-group input-group-merge"
                  >
                    <div style={{ display: "flex" }}>
                      {" "}
                      <input
                        type="password"
                        id="password"
                        className="form-control"
                        required
                        name="password"
                        value={data.password}
                        onChange={handleChange}
                        placeholder="············"
                        aria-describedby="password"
                        width="90%"
                        style={{ borderRadius: " 5px 0 0 5px" }}
                      />
                      <span
                        className="input-group-text cursor-pointer"
                        style={{ borderRadius: " 0 5px  5px 0" }}
                      >
                        <i
                          className="bx bx-hide"
          
                        />
                      </span>
                    </div>

                    <div>
                      <font color={"red"}>
                        <div> {error && <div>{error}</div>}</div>
                      </font>
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="remember-me"
                    />
                    <label className="form-check-label" htmlFor="remember-me">
                      {" "}
                      Souviens-toi de moi{" "}
                    </label>
                  </div>
                </div>
                <div className="mb-3">
                  <button
                    className="btn btn-primary d-grid w-100"
                    type="submit"
                  >
                    Se connecter
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* /Register */}
        </div>
      </div>
    </div>
  );
}

export default Login