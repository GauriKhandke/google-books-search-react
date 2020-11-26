import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Import Pages
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import NoMatch from './pages/NoMatch';

// Import Components
import NavBar from './components/NavBar';

function App() {
	return (
		<Router>
			<div>
				<NavBar />
				<Switch>
					<Route exact path="/">
						<SearchBooks />
					</Route>
					<Route exact path="/saved">
						<SavedBooks />
					</Route>
					<Route>
						<NoMatch />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
