// React
import React from 'react';
import ReactDOM from 'react-dom';

// Containers
import { App, Main, FileManager, Viewer, ViewerCalc } from 'containers';

// Router
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

//Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from 'reducers';
import thunk from 'redux-thunk';

const rootElement = document.getElementById('root');
const store = createStore(
	reducers,
	compose(
		applyMiddleware(thunk),
		window.devToolsExtension && window.devToolsExtension()
	)
);

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={Main} />
				<Route path="/manage" component={FileManager}/>
				<Route path="/viewer" component={Viewer}/>
        <Route path="/viewer/:group" component={ViewerCalc}/>
			</Route>
		</Router>
	</Provider>
	, rootElement);
