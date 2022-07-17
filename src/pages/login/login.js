import { useContext, useRef } from "react";
import { AuthContext } from "../../contexts/auth";

const Login = () =>{
  const { setToken } = useContext(AuthContext);
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleFormSubmit = (evt) =>{
    evt.preventDefault();

    const emailValue = emailRef.current.value;
    const passwordValue = passwordRef.current.value;

    if(emailValue && passwordValue){
      fetch("https://reqres.in/api/login",{
        mathod: "POST",
        body: JSON.stringify({
          "email": "eve.holt@reqres.in",
          "password": "cityslicka"
        }),
        headers: {
          'Content-Type': 'application/json'
        },
      }).then(res => res.json()).then(data => console.log(data))
    }
  }  

  return(
    <form onSubmit={handleFormSubmit}>
      <input ref={emailRef} type="email" placeholder="Email" aria-label="Email"></input>
      <input ref={passwordRef} type="password" placeholder="Password" aria-label="Password"></input>
      <button type="submit">Submit</button>
    </form>
  )
} 

export default Login;