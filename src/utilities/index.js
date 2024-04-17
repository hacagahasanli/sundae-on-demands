/**
 * @function formatCurrency
 * Format number as currency (US Dollars)
 *
 * @params {number} currency
 * @returns {string} number formatted as currency
 *
 * @example
 *      formatCurrency(0)
 *      // => $0.00
 *
 * @example
 *      formatCurrency(1.5)
 *      // => $1.50
 */

export function formatCurrency(currency) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(currency);
}

export const keys = (value) => Object.keys(value) ?? [];

export const entries = (value) => Object.entries(value) ?? [];
