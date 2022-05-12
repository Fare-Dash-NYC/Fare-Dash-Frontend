import {Row,Button,Label,Input,FormGroup,Col,Form} from 'reactstrap'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

function SignUp (){

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