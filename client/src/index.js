import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
	<>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</>,
	document.getElementById('root')
);
registerServiceWorker();
