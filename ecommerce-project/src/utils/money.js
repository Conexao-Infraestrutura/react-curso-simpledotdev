export function formatMoney(amountCets) {
  return `$${ (amountCets / 100).toFixed(2) }`;
}