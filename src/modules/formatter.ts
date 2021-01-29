// Formatters
const moneyFormatter: Intl.NumberFormat = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'});
export const usdFormat = (money: number): string => moneyFormatter.format(money);
export default usdFormat;
