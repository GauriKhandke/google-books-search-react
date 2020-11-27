import React, { Component } from 'react';

// components
import Jumbotron from '../components/Jumbotron';
import Card from '../components/Card';
import Book from '../components/Book';
import { Col, Row, Container } from '../components/Grid';
import { List } from '../components/List';

// API call
import API from '../utils/API';

// Saved Books class component
class SavedBooks extends Component {

	// Component initial state
	state = {
		books: [],
	};

	// Call getSavedBooks method when component mounted
	componentDidMount() {
		this.getSavedBooks();
	}

	// Function to fetch saved books from database
	getSavedBooks = () => {
		API.getSavedBooks()
			.then((res) =>
				this.setState({
					books: res.data,
				})
			)
			.catch((err) => console.log(err));
	};

	// Function to delete book
	handleBookDelete = (id) => {
		API.deleteBook(id).then((res) => this.getSavedBooks());
	};

	render() {
		return (
			<>
				<br />
				<br />
				{/* Container */}
				<Container>
					<div className="main-container">
						<Row>
							<Col size="md-12">
								{/* Jumbotron */}
								<Jumbotron>
									<h1 className="text-center">
										<strong>
											Google Books Search
										</strong>
									</h1>
									<h5 className="text-center">
										MERN App to Search and Save
										Books
									</h5>
								</Jumbotron>
							</Col>
						</Row>
						<Row>
							<Col size="md-12">
								{/* Saved books card */}
								<Card
									title=" Saved Books"
									icon="download"
								>
									{this.state.books.length ? (
										<List>
											{this.state.books.map(
												(book) => (
													<Book
														key={	book._id }
														title={ book.title }
														subtitle={ book.subtitle }
														link={ book.link }
														authors={book.authors.join(', ')}
														description={	book.description }
														image={ book.image }
														Button={() => (
															<button onClick={() => this.handleBookDelete(	book._id ) }
																className="btn btn-danger ml-2">
																Delete
															</button>
														)}
													/>
												)
											)}
										</List>
									) : (
										<h4 className="text-center">
											No Saved Books 
										</h4>
									)}
								</Card>
							</Col>
						</Row>
						<br/>
					</div>
					<br />
					<br />
				</Container>
			</>
		);
	}
}

export default SavedBooks;
