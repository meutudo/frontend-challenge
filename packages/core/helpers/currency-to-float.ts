export function currencyToFloat(currency: string): number {
    return parseFloat(currency.replace(/[^0-9,-]+/g, '').replace(/\,/g, '.'))
}
