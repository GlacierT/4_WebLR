import React, {Component} from 'react'
import axios from 'axios'
import { Navbar, Button, Jumbotron, Row, Col, Dropdown, DropdownButton } from 'react-bootstrap'
import jsonData from './counties.json'
const counties = jsonData.counties

class App extends Component
{

  constructor(props) {
      super(props);
      this.state = {
        id: ''
      }
      this.handleClick = this.handleClick.bind(this);
    }
      
    handleClick() {
      //console.log('Click happened');
      //axios.get('https://api.github.com/users/maecapozzi').then(response => console.log(response));
      axios.get('https://api.github.com/users/maecapozzi').then(response => this.setState({id:response.data.id}))
    }

  render()
  {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            4 Lab React Bootstrap
          </Navbar.Brand>
        </Navbar>
        <br />
        <Row>
          <Col></Col>
          <Col md="auto">
            <Button variant="primary" onClick={this.handleClick} >Click me</Button>
          </Col>
          <Col xs lg="5">
            <DropdownButton id="dropdown-basic-button" title="Обласні центри">
              { counties.map(c => (<Dropdown.Item key={c.value} value={c.value}>{c.display}</Dropdown.Item>))}
            </DropdownButton>
          </Col>  
        </Row>  
        <br />
        <Jumbotron>
          <h2>Result</h2>
          <p>{this.state.id}</p>
        </Jumbotron>
      </div>
    )
    }
}

export default App;