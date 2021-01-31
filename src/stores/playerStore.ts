import { writable, Writable } from 'svelte/store';

export const money: Writable<number> = writable(20);
export const corpse: Writable<number> = writable(0);
export const hotDogs: Writable<number> = writable(0)
