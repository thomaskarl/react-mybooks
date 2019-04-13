import React from 'react'
import { Book } from './Book'

class Library extends React.Component {

	static defaultProps = {
		books: [
			{"title": "No Title Provided", "author": "No Author", "pages": 0, "rating": '0', "image": 'No Image'}
		]
	};

	state = {
		data: [],
		loading: false
	};

	componentDidMount() {
		this.setState({loading: true})
		fetch('https://thomasweb.studio/wp-json/wp/v2/books')
			.then(data => data.json())
			.then(data => this.setState({data, loading: false}))
	}

	componentDidUpdate() {
		console.log("The component just updated")
	}

	render() {
		return (
			<div>
				{this.state.loading
					? "loading..."
					: <div className='library'>
						{this.state.data.map(book => {
							return (
								<Book
									title={book.title.rendered}
									author={book.acf.book_author}
									pages={book.acf.book_pages}
									rating={book.acf.book_rating}
									image={book.acf.book_image}/>
							)
						})}

					</div>
				}

			</div>
		)
	}
}

export default Library
