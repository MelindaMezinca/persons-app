import React, { Component } from 'react';
import './App.css';
import Loginscreen from './Loginscreen';
import AggregationTimeScreen from './AggregationTimeScreen';
import Menuscreen from './MenuScreen';
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
      <Router>
        <Switch>
          <Route exact path='/' render={props => (
            <div>
              <Loginscreen
                {...props}
                 />
                      </div>
                      )}
                    /> 
            <Route path="/menu" component={Menuscreen} />
            <Route path="/generate" component={GeneratePersonsScreen} />
            <Route path="/aggregateTime" component={AggregationTimeScreen} />
          </Switch>
        </Router>
        );
      }
    }
    
const style = {
          margin: 15,
      };
      
export default App;