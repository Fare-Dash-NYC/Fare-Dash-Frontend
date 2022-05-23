import { Button, Label, Input, FormGroup, Form } from "reactstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const url = "http://localhost:8081";

function Login({setAuth}) {
  const navigate = useNavigate();
  const [LogInForm, setLogInForm] = useState({
    email: "",
    password: "",
  });
  const handleLogInFormChange = (event) => {
    event.preventDefault();
    setLogInForm({
      ...LogInForm,
      [event.target.name]: event.target.value,
    });
  };

  const handleLogIn = async (event) => {
    event.preventDefault();
    const response = await fetch(`${url}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(LogInForm),
    });
    const data = await response.json();
    console.log(data.token);
    if (data.token) {
      window.localStorage.setItem("token", data.token);
      setAuth(true);
    } else {
      setAuth(false);
    }
    navigate("/explore", { replace: true });
  };

  return (
    <div>
      <Form inline onSubmit={handleLogIn}>
        <h1 className="mt-5 text-center">LOG IN</h1>
        <FormGroup >
          <Label className="me-sm-2" for="exampleEmail">
            Email
          </Label>
          <Input
            onChange={handleLogInFormChange}
            id="exampleEmail"
            name="email"
            placeholder="something@idk.cool"
            type="email"
            className="form-control my-3"
          />
        </FormGroup>
        <FormGroup >
          <Label className="me-sm-2" for="examplePassword">
            Password
          </Label>
          <Input
            onChange={handleLogInFormChange}
            id="examplePassword"
            name="password"
            placeholder="don't tell!"
            type="password"
            className="form-control my-3"

          />
        </FormGroup>
        <Button type="submit" class="btn btn-success btn-block">Log in</Button>
      </Form>
    </div>
  );
}
export default Login;
