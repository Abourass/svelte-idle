import { writable, Writable } from 'svelte/store';

export const firstRowUpgrades: Writable<number> = writable(0);
export const secondRowUpgrades: Writable<number> = writable(0);
export const hotDogBunsBought: Writable<number> = writable(0);
