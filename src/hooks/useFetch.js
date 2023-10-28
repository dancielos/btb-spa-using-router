import { useState, useEffect } from 'react';

const DEFAULT_ERROR_MESSAGE = 'Failed to fetch data.';

/**
 * This function fetches json data from the given URL.
 * @param {string} url - The url on where you want to fetch json data from.
 * @param {object} [options] - Options for retrieving or sending data, which is exactly what you'll pass if you're using fetch(). Leave empty if you simply want to GET data.
 * @param {Array} [initialValue] - the initial value of the data state. The default is an empty array.
 * @param {string} [errorMessage] - The error message you want to display in case of a fetch() error.
 */

export const useFetch = function (
	url,
	options,
	initialValue = [],
	errorMessage
) {
	const [data, setData] = useState(initialValue);
	const [isFetching, setIsFetching] = useState(false);
	const [error, setError] = useState();

	useEffect(() => {
		(async () => {
			setIsFetching(true);
			try {
				let response;
				if (!options) response = await fetch(url);
				else response = await fetch(url, options);

				if (!response.ok) throw new Error(DEFAULT_ERROR_MESSAGE);

				const resData = await response.json();

				setData(resData);
			} catch (error) {
				setError({
					message: errorMessage || error,
				});
			}
			setIsFetching(false);
		})();
	}, [url, options, errorMessage]);

	return {
		data,
		isFetching,
		error,
	};
};
