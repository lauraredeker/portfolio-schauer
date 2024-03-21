import { writable } from 'svelte/store';
import { LightBackground } from '$lib/Constants'

export const modalOpened = writable(false);
export const isDarkMode = writable(false);
export const customBackground = writable(LightBackground);