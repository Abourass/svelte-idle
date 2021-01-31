import { writable, Writable } from 'svelte/store';

export const beef: Writable<number> = writable(0);
export const longPig: Writable<number> = writable(0);
export const pork: Writable<number> = writable(0);
export const buns: Writable<number> = writable(0);
