import React, {Component} from 'react'
import axios from 'axios'
import { Button } from 'react-bootstrap'

const styles = {
    text: {
        fontSize: '50px',
        fontFamily: 'sans-serif',
        color: 'blue',
        padding: '70px',
        backgroundColor: '#11aaff'
    },
    button_container: {
        marginTop: '200px',
        textAlign: 'center'
    },
    button: {
        backgroundColor: 'cyan',
        border: 'none',
        color: 'black',
        fontSize: '24px',
        height: '80px',
        width: '120px',
    }
}

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
        <div style={styles.text}>
          <h1 align='center'>4 Lab React</h1>
        </div>
        <div style={styles.button_container}>
          <button onClick={this.handleClick} style={styles.button}>Click Me</button>
          <p>{this.state.id}</p>
        </div>  
      </div>
    )
    }
}

export default App;