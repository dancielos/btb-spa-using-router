import { json, useRouteLoaderData, useParams, redirect } from 'react-router';
import EventItem from '../components/EventItem';
import { DB_URL } from '../config/config';

const EventDetailPage = function (props) {
	const data = useRouteLoaderData('event-detail');

	return <EventItem event={data.event} />;
};

export default EventDetailPage;

export async function loader({ request, params }) {
	const id = params.eventId;

	const response = await fetch(`${DB_URL}/${id}`);

	if (!response.ok) {
		throw json(
			{ message: 'Failed to fetch details for the selected event.' },
			{ status: 500 }
		);
	} else {
		return response;
	}
}

export const action = async function ({ params, request }) {
	const eventId = params.eventId;

	const response = await fetch(`${DB_URL}/${eventId}`, {
		method: request.method,
	});

	if (!response.ok) {
		throw json({ message: 'Could not delete event.' }, { status: 500 });
	}

	return redirect('/events');
};
