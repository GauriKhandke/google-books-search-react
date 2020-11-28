import React from 'react';
// Components
import { ListItem } from '../List';
import { Row, Col } from '../Grid';

// style
import './style.css';

function Book({ title, subtitle, authors, link, description, image, Button }) {
	return (
		<>
		{/* Book list */}
			<ListItem>
				<div className="book-container">
					<Row className="flex-wrap-reverse">
						{/* Book title */}
						<Col size="md-8">
							<h3 className="font-italic">{title}</h3>
							{subtitle && (
								<h5 className="font-italic">
									{subtitle}
								</h5>
							)}
						</Col>
						<Col size="md-4">
							{/* view and save/delete Buttons */}
							<div className="btn-container">
								<a
									className="btn btn-secondary"
									target="_blank"
									rel="noopener noreferrer"
									href={link}
								>
									View
								</a>
								<Button />
							</div>
						</Col>
					</Row>
					<Row>
						<Col size="md-6">
							<p className="font-italic small">
								Written by {authors}
							</p>
						</Col>
					</Row>
					<Row>
						<Col size="12 sm-4 md-2">
							<img
								className="img-thumbnail img-fluid w-100"
								src={image}
								alt={title}
							/>
						</Col>
						<Col size="12 sm-8 md-10">
							<p>{description}</p>
						</Col>
					</Row>
				</div>
			</ListItem>
		</>
	);
}

export default Book;
