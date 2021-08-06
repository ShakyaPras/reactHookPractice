import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Counter from './components/Counter';
import TablePage from './components/TablePage';
import Nav from './components/Nav';


function App() {

	return (
		<Router>
			<div className="App">
				<Nav />
				<Switch>
					<Route path="/" exact component ={ Home } />
					<Route path="/tablePage" component ={ TablePage } />
					<Route path="/counter" component ={ Counter } />
				</Switch>
			</div>
		</Router>
	);
}
const Home = () => (
	<div>
		<h1> Welcome to the HomePage! </h1>
	</div>
)
export default App;