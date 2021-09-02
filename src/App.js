import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AppOutsideContainer } from './components/styledComponents/shared.js';

import Homepage from './components/homepage';
import Pricing from './components/pricing';
import About from './components/about';
import Contact from './components/contact';

class App extends React.Component {
	render() {
		return (
			<AppOutsideContainer>
				<Switch>
					<Route exact path="/">
						<Homepage />
					</Route>
					<Route exact path="/pricing">
						<Pricing />
					</Route>
					<Route exact path="/about">
						<About />
					</Route>
					<Route exact path="/contact">
						<Contact />
					</Route>
					<Route>
						<Homepage />
					</Route>
				</Switch>
			</AppOutsideContainer>
		);
	}
}

export default App;