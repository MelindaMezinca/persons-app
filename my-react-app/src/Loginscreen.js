import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import React, { Component } from 'react';
import axios from "axios";

const apiBaseUrl = 'http://localhost:8080/dbHealth';

class Loginscreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    return axios
      .get(apiBaseUrl)
      .then(response => {
        console.log(response);
        localStorage.setItem('loggedIn', "true");
        if (this.state.username == 'user' && this.state.password == 'pass') {
          const log = '/menu';
          this.props.history.push(log);
          return alert('You successfully logged in');
        } else {
          return Promise.reject('Your username and password are invalid')
        }
      })
      .catch(error => {
        console.log(error);
        return alert('Your username and password are invalid');
      })
  }

  render() {
    return (
      <div className="App">
        <div>
          <MuiThemeProvider>
            <div>
              <AppBar
                title="Login"
              />
              <TextField
                hintText="Enter your Username"
                floatingLabelText="Username"
                onChange={(event, newValue) => this.setState({ username: newValue })}
              />
              <br />
              <TextField
                type="password"
                hintText="Enter your Password"
                floatingLabelText="Password"
                onChange={(event, newValue) => this.setState({ password: newValue })}
              />
              <br />
              <RaisedButton label="Log In" primary={true} style={style} onClick={(event) => this.handleClick(event)} />
            </div>
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}
const style = {
  margin: 15,
};
export default Loginscreen;
