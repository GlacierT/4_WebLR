import React, {Component} from 'react'
import axios from 'axios'
import { Navbar, Button, Jumbotron, Row, Col, Dropdown, DropdownButton } from 'react-bootstrap'

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
              <Dropdown.Item href="#/action-1">Київ</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Вінниця</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Дніпропетровськ</Dropdown.Item>
              <Dropdown.Item href="#/action-4">Донецьк</Dropdown.Item>
              <Dropdown.Item href="#/action-5">Житомир</Dropdown.Item>
              <Dropdown.Item href="#/action-6">Запоріжжя</Dropdown.Item>
              <Dropdown.Item href="#/action-7">Івано-Франківськ</Dropdown.Item>
              <Dropdown.Item href="#/action-8">Кіровоград</Dropdown.Item>
              <Dropdown.Item href="#/action-9">Луганськ</Dropdown.Item>
              <Dropdown.Item href="#/action-10">Луцьк</Dropdown.Item>
              <Dropdown.Item href="#/action-11">Львів</Dropdown.Item>
              <Dropdown.Item href="#/action-12">Миколаїв</Dropdown.Item>
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