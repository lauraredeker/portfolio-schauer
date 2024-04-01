import { writable } from 'svelte/store';
import { LightBackground } from '$lib/Constants'

export const modalOpened = writable(false);
export const isDarkMode = writable(true);
export const customBackground = writable(LightBackground);