import { json, redirect } from 'react-router';
import EventForm from '../components/EventForm';
import { DB_URL } from '../config/config';

const NewEventPage = function () {
	return <EventForm />;
};

export default NewEventPage;

export const action = async function ({ request, params }) {
	const data = await request.formData();

	const eventData = {
		title: data.get('title'),
		image: data.get('image'),
		date: data.get('date'),
		description: data.get('description'),
	};

	const response = await fetch(DB_URL, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(eventData),
	});

	if (response.status === 422) return response;

	if (!response.ok) {
		throw json({ message: 'Could not save event.' }, { status: 500 });
	}

	return redirect('/events');
};
