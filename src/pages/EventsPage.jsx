import { json, useLoaderData, defer, Await } from 'react-router';
import EventsList from '../components/EventsList';
import { DB_URL } from '../config/config';
import { Suspense } from 'react';

function EventsPage() {
	const { events } = useLoaderData();

	return (
		<Suspense fallback={<p>Loading...</p>}>
			<Await resolve={events}>
				{(loadedEvents) => <EventsList events={loadedEvents} />}
			</Await>
		</Suspense>
	);

	// if (data.isError) {
	// 	return <p>{data.message}</p>;
	// }

	// const events = data.events;

	// return <EventsList events={events} />;
}

export default EventsPage;

const loadEvents = async function () {
	// const response = await fetch('http://localhost:8080/eventsss');
	const response = await fetch(DB_URL);

	if (!response.ok) {
		// return { isError: true, message: 'Could not fetch events. ' };
		// throw new Response(JSON.stringify({ message: 'Failed to fetch events.' }), {
		// 	status: 500,
		// });
		// console.log('loadEvents if');
		throw json({ message: 'Failed to fetch events.' }, { status: 500 }); //creates a Response() in JSON format
	} else {
		const resData = await response.json();
		return resData.events;
	}
};

export const loader = function () {
	return defer({
		events: loadEvents(),
	});
};
