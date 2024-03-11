import { fetchOneEntry, getBuilderSearchParams } from '@builder.io/sdk-svelte';
import { PUBLIC_API_KEY } from '$env/static/public'

/** @type {import('./$types').PageServerLoad} */
export async function load(event) {
	// fetch your Builder content
	const content = await fetchOneEntry({
		model: 'contact',
		apiKey: PUBLIC_API_KEY,
		options: getBuilderSearchParams(event.url.searchParams),
		userAttributes: {
			urlPath: event.url.pathname || '/'
		}
	});

	return { content };
}
