import { writable, Writable } from 'svelte/store';

export const crackDens: Writable<number> = writable(0);
export const tacoTrucks: Writable<number> = writable(0);
export const mortuaries: Writable<number> = writable(0);
export const tacoFranchise: Writable<number> = writable(0);