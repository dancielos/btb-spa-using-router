import { useLoaderData } from 'react-router';
import EventsList from '../components/EventsList';
import { DB_URL } from '../config/config';

function EventsPage() {
	const data = useLoaderData();

	if (data.isError) {
		return <p>{data.message}</p>;
	}

	const events = data.events;

	return <EventsList events={events} />;
}

export const loader = async function () {
	// const response = await fetch('http://localhost:8080/eventsss');
	const response = await fetch(DB_URL);

	if (!response.ok) {
		// return { isError: true, message: 'Could not fetch events. ' };
		throw new Response(JSON.stringify({ message: 'Failed to fetch events.' }), {
			status: 500,
		});
	} else {
		// const resData = await response.json();
		return response;
	}
};

export default EventsPage;
