import React from 'react';
import './style.css';

function Jumbotron({ children }) {
	return (
		<>
			<div className="jumboStyle">
				<div className="jumbotron mt-4">{children}</div>
			</div>
		</>
	);
}

export default Jumbotron;
