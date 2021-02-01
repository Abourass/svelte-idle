import { writable, Writable } from 'svelte/store';

export const hotDogStandsBought: Writable<number> = writable(0);
export const hotDogStandsOwned: Writable<number> = writable(0);

export const tacoTrucksBought: Writable<number> = writable(0);
export const tacoTrucksOwned: Writable<number> = writable(0);

export const burgerShacksBought: Writable<number> = writable(0);
export const burgerShacksOwned: Writable<number> = writable(0);

export const mortuariesBought: Writable<number> = writable(0);
export const mortuariesOwned: Writable<number> = writable(0);

export const tacoFranchiseBought: Writable<number> = writable(0);
export const tacoFranchiseOwned: Writable<number> = writable(0);
