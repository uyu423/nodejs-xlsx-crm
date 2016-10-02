import React from 'react';
import { Header, Footer } from 'components';
import classNames from 'classnames'

export default class App extends React.Component {
	render() {
		return(
			<div>
				<Header/>
				<div className="wrapper">
					<div className="container">
					{ this.props.children }
					</div>
				</div>
				<div className='push'></div>
				<Footer/>
			</div>
		);
	}
}
