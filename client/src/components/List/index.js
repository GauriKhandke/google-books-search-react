import React from 'react';
import './style.css';

// This component exports both the List and ListItem components
export const List = ({ children }) => (
	<div className="list-overflow">
		<ul className="list-group">{children}</ul>
	</div>
);

export function ListItem({ children }) {
	return <li className="list-group-item">{children}</li>;
}
