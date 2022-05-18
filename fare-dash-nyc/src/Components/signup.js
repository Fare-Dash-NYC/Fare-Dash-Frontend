import {Row,Button,Label,Input,FormGroup,Col,Form} from 'reactstrap'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

function SignUp (){
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

//   function handleInput(event){
// setFirstName(event.target.value)
//   }

    return (

        <div>
            <Form>
                <h1>CREATE ACCOUNT</h1>
  <Row>
    <Col md={6}>
      <FormGroup>
        <Label for="firstName">
          First Name
        </Label>
        <Input 
        onChange={((event)=> {
          setFirstName(event.target.value)
        })}
          id="firstNae"
          name="firstname"
          placeholder="enter first name"
          type="name"
        />
      </FormGroup>
    </Col>
    <Col md={6}>
      <FormGroup>
        <Label for="lastName">
          Last Name
        </Label>
        <Input
        onChange={((event )=>{
          setLastName(event.target.value)
        })}
          id="lastName"
          name="lastname"
          placeholder="enter last name"
          type="name"
        />
      </FormGroup>
    </Col>
  </Row>
  
  <Col md={6}>
      <FormGroup>
        <Label for="displayName">
          Display Name
        </Label>
        <Input
         onChange={((event )=>{
          setDisplayName(event.target.value)
        })}
          id="displayName"
          name="displayName"
          placeholder="enter your display name"
          type="displayName"
        />
      </FormGroup>
    </Col>
  <Row>
    <Col md={6}>
    <FormGroup>
    <Label for="email">
      Email
    </Label>
    <Input
     onChange={((event )=>{
      setEmail(event.target.value)
    })}
      id="email"
      name="email"
      placeholder="example@gmail.com"
    />
  </FormGroup>
    </Col>
    <Col md={4}>
    <FormGroup>
        <Label for="examplePassword">
          Password
        </Label>
        <Input
         onChange={((event )=>{
          setPassword(event.target.value)
        })}
          id="examplePassword"
          name="password"
          placeholder="password placeholder"
          type="password"
        />
      </FormGroup>
    </Col>
 
  </Row>
  
<Link to={'/explore'}>
  <Button>
   Create Account
  </Button>
  </Link>
</Form>
          

        </div>
    )
}

export default SignUp