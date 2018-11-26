import React, {Component} from 'react';
import { slide as Menu } from 'react-burger-menu';

class Menuscreen extends Component {
	constructor() {
		super();	
  }
  showSettings (event) {
	event.preventDefault();
}
	render() {
		return (
			<Menu>
			  <a id="generate" className="menu-item" href="/generate">Generate</a>
			  <a id="aggregateTime" className="menu-item" href="/aggregateTime">Aggregation time</a>
			  {/* <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a> */}
			</Menu>
		  );
	};
}

export default Menuscreen;