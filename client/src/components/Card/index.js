import React from 'react';
import './style.css';

function Card({ icon, title, children }) {
	return (
		<>
			<div className="card mt-4">
				<div className="card-header">
					<h4>
						<i className={`fa fa-${icon}`} aria-hidden="true" />
						{title}
					</h4>
				</div>
				<div className="card-body">{children}</div>
			</div>
		</>
	);
}

export default Card;
