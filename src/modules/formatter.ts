import type { Writable } from 'svelte/store';

// Formatters
const moneyFormatter: Intl.NumberFormat = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'});
export const usdFormat = (money: number|Writable<number>): string => moneyFormatter.format(money as number);

export const plural = (unit: string, amount: number) => {
  if (amount > 1) return `${unit}s`
  return unit;
}

export default usdFormat;
