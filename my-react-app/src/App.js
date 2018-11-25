import React, { Component } from 'react';
import './App.css';
import Loginscreen from './Loginscreen';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      loginPage:[],
    }
  }

  componentWillMount(){
    var loginPage =[];
    loginPage.push(<Loginscreen parentContext={this}/>);
    this.setState({
                  loginPage:loginPage
                    })
  }
  render() {
    return (
      <div className="App">
        {this.state.loginPage}
      </div>
    );
  }
}
const style = {
  margin: 15,
};

export default App;