import { fetchEntries } from '@builder.io/sdk-svelte';
import { PUBLIC_API_KEY } from '$env/static/public'


/** @type {import('./$types').PageServerLoad} */
export async function load() {
  // get content from other models if needed
  // fetch the nav links
  // and provide your Public API Key
  const contactData = await fetchEntries({
    model: 'contact-section',
    apiKey: PUBLIC_API_KEY
    // You can use options for queries, sorting, and targeting here
  });

  return { 
    contactData, 
  };
}
