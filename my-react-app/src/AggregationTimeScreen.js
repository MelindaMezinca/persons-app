import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import React, { Component } from 'react';
import axios from "axios";

const apiBaseUrl = 'http://localhost:8080/aggregationTime';


class AggregationTimeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            response: []
        }
        //this.componentDidMount = this.componentDidMount.bind(this);
    }

    getAggregationTime() {
        return axios
            .get(apiBaseUrl)
            .then((response) => {
                console.log(response.data);
                localStorage.setItem('Aggregate', "true");
                const log = '/aggregateTime';
                this.props.history.push(log);
                alert(`The aggregation time is: ${response.data.aggregationTimeInMs}`);
            })
            .catch((error) => {
                console.log(error);
                alert('An error occured!');
            })
    }

    componentDidMount() {
        this.getAggregationTime();
    }

    render() {

        let { response } = this.state;

        // let renderItem;
        // if (this.state.response.length) {
        //     renderItem = this.state.response.map(function(item, i) {
        //       return <li key={i}>{item}</li>
        //     });
        // }

        return (
            <div className="App">
                <div>
                    <MuiThemeProvider>
                        <div>
                            <AppBar
                                title="Aggregation Time"
                            />

                            <ul>{this.state.response.map(res => <li>{res.data}</li>)}</ul>
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

export default AggregationTimeScreen;