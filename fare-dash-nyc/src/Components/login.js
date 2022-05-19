
import {Button,Label,Input,FormGroup,Form} from 'reactstrap'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';


function Login(){
 const [email, setEmail] = useState('')
 const[password, setPassword] = useState('')






    return(
         <div>
           <Form inline>
               <h1>LOG IN</h1>
  <FormGroup className="mb-2 me-sm-2 mb-sm-0">
    <Label
      className="me-sm-2"
      for="exampleEmail"
    >
      Email
    </Label>
    <Input
     onChange={((event )=>{
      setEmail(event.target.value)
    })}
      id="exampleEmail"
      name="email"
      placeholder="something@idk.cool"
      type="email"
    />
  </FormGroup>
  <FormGroup className="mb-2 me-sm-2 mb-sm-0">
    <Label
      className="me-sm-2"
      for="examplePassword"
    >
      Password
    </Label>
    <Input
     onChange={((event )=>{
      setPassword(event.target.value)
    })}
      id="examplePassword"
      name="password"
      placeholder="don't tell!"
      type="password"
    />
  </FormGroup>
    <Link to={'/explore'}>
  <Button>
    Log in 
  </Button>
  </Link>
</Form>
         </div>
    )
}
export default Login