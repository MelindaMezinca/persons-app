import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import React, {Component} from 'react';
import axios from "axios";

const apiBaseUrl ='http://localhost:8080/person';

class GeneratePersonsScreen extends Component {
constructor(props){
  super(props);
  this.handleClick = this.handleClick.bind(this);
 }
 
 handleClick() {
   return axios
    .post(apiBaseUrl)
    .then(response => { 
       console.log(response);
       localStorage.setItem('Generate', "true");
       const log = '/generate';
       this.props.history.push(log);
       alert('10 person had been successfully generated in the mongo DB');
    })
    .catch(error => {
        console.log(error);
        alert('An error occured!');
 })
}

render() {
    return (
      <div className="App">
      <div>
        <MuiThemeProvider>
          <div>
          <AppBar
             title="Generate Persons"
           />
             <RaisedButton label="Generate" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>     
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

export default GeneratePersonsScreen;