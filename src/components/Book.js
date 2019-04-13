import React from 'react'
import styled from 'styled-components';

const BookSection = styled.section`
		margin: 20px;
		padding: 20px;
		border: 22px solid gold;
		outline: 1px solid black;s
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		width: 250px;
		background: orange;
		transform: rotateZ(-4deg);
		box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
	
	&:hover {
		background-color: transparent;
	}
`;

const Heading2 = styled.h2`
  font-size: 25px;
  text-align: center;
`;

const BookCover = styled.img`
    margin-top: 10px;
    max-width: 100px;
    border: 1px solid black;
	border-top-left-radius: 10px;
	border-bottom-right-radius: 10px;
	transform: rotateZ(-7deg);
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
`;

export const Book = ({title = "No Title Provided", author = "No Author", pages = 0, rating = '0', image = 'No Image'}) => {
	return (
		<BookSection>
			<Heading2>{title}</Heading2>
			<p>by: {author}</p>
			<p>Pages: {pages}</p>
			<p>Rating: <b><u>{rating}</u></b></p>
			<BookCover alt={title} src={image}/>
		</BookSection>
	)
};
