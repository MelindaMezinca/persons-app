import React, { Component } from 'react';
import './App.css';
import Loginscreen from './LoginScreen';
import AggregationTimeScreen from './AggregationTimeScreen';
import MenuScreen from './MenuScreen';
import GeneratePersonsScreen from './GeneratePersonsScreen';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginPage: [],
    }
  }

  componentWillMount() {
    var loginPage = [];
    loginPage.push(<Loginscreen parentContext={this} />);
    this.setState({
      loginPage: loginPage
    })
  }
  render() {
    return (
      // <div className="App">
      //   {this.state.loginPage}
      // </div>
        <Router>
          <Switch>
            <Route path='/' component={Loginscreen} />
            <Route path="/menu" component={MenuScreen} />
            <Route path="/generate" component={GeneratePersonsScreen} />
            <Route path="/aggregationTime" component={AggregationTimeScreen} />
          </Switch>
        </Router>   
    );
  }
}

const style = {
  margin: 15,
};

export default App;