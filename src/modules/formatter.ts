import type { Writable } from 'svelte/store';
import {money, corpse} from '../playerStore'

// Formatters
const moneyFormatter: Intl.NumberFormat = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'});
const usdFormat = (money: number|Writable<number>): string => moneyFormatter.format(money as number);

export const formatProduction = (currency: Writable<number>) => {
  if (currency === money) return usdFormat(currency);
  if (currency === corpse) return `${currency} corpse`
  return currency
}

export default usdFormat;
