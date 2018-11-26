import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Menuscreen extends Component {
	constructor() {
		super();	
  }
  showSettings (event) {
	event.preventDefault();
}
	render() {
		return (
			<div className="App">
			<div>
					<MuiThemeProvider>
							<div>
									<AppBar
											title="Menu" style="text-align: center"
									/>
			  <a id="generate" className="menu-item" onClick={() => this.props.history.push('/generate')}><h1>Generate</h1></a>
				<br/>
			  <a id="aggregateTime" className="menu-item" onClick={() => this.props.history.push('/aggregateTime')}><h1>Aggregation time</h1></a>
				
							</div>
					</MuiThemeProvider>
			</div>
	</div>
		  );
	};
}

export default Menuscreen;