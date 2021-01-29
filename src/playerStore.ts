import { writable, Writable } from 'svelte/store';

export const money: Writable<number> = writable(20);
export const proofs: Writable<number> = writable(0);
