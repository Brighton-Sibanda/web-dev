import React, { useState, useEffect } from 'react';

// Mock data with placeholder images
const mockStarredMovies = [
	{
		id: 1,
		title: 'Inception',
		year: 2010,
		image: 'https://via.placeholder.com/200x300?text=Inception',
	},
	{
		id: 2,
		title: 'The Matrix',
		year: 1999,
		image: 'https://via.placeholder.com/200x300?text=The+Matrix',
	},
	{
		id: 3,
		title: 'Interstellar',
		year: 2014,
		image: 'https://via.placeholder.com/200x300?text=Interstellar',
	},
];

function Starred() {
	const [starredMovies, setStarredMovies] = useState([]);

	// Mock function to simulate fetching data from a database
	const fetchStarredMovies = () => {
		return mockStarredMovies;
	};

	// Fetch the starred movies when the component mounts
	useEffect(() => {
		const movies = fetchStarredMovies();
		setStarredMovies(movies);
	}, []);

	return (
		<div style={{ textAlign: 'center' }}>
			<h1>Your Favorites</h1>
			{starredMovies.length > 0 ? (
				<ul style={{ listStyleType: 'none', padding: 0 }}>
					{starredMovies.map((movie) => (
						<li key={movie.id} style={{ display: 'inline-block', margin: '20px', textAlign: 'center' }}>
							<img
								src={movie.image}
								alt={movie.title}
								style={{ width: '200px', height: '300px', objectFit: 'cover', borderRadius: '8px', marginBottom: '10px' }}
							/>
							<div style={{ fontSize: '1.2em', fontWeight: 'bold' }}>
								{movie.title} ({movie.year})
							</div>
						</li>
					))}
				</ul>
			) : (
				<p>No starred movies yet!</p>
			)}
		</div>
	);
}

export default Starred;
