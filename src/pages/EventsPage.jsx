import { Link } from 'react-router-dom';

const DUMMY_EVENTS = [
	{ id: 'concert', slug: 'concert', name: "Taylor's concert" },
	{ id: 'wedding', slug: 'wedding', name: 'I hear wedding bells' },
	{ id: 'game-night', slug: 'game-night', name: "Game night! Who's in?" },
];

const Events = function (props) {
	return (
		<>
			<h1>Events Page</h1>
			<section className='events-section'>
				<ul>
					{DUMMY_EVENTS.map((event) => {
						return (
							<li key={event.id}>
								<Link to={event.slug}>{event.name}</Link>
							</li>
						);
					})}
				</ul>
			</section>
		</>
	);
};

export default Events;
