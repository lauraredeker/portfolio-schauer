import { fetchOneEntry, fetchEntries, getBuilderSearchParams } from '@builder.io/sdk-svelte';
import { PUBLIC_API_KEY } from '$env/static/public'

/** @type {import('./$types').PageServerLoad} */
export async function load(event) {
	// fetch your Builder content
	const content = await fetchOneEntry({
		model: 'page',
		apiKey: PUBLIC_API_KEY,
		options: getBuilderSearchParams(event.url.searchParams),
		userAttributes: {
			urlPath: event.url.pathname || '/'
		}
	});

		// fetch the nav links
	// and provide your Public API Key
	const links = await fetchEntries({
		model: 'nav-link',
		apiKey: PUBLIC_API_KEY
		// You can use options for queries, sorting, and targeting here
	  });

	return { 
		content,
		props: {
			links, 
		  },
	 };
}
