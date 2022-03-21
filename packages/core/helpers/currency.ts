export const currency = (
    value: number,
    currency: string = 'BRL',
    locale: string = 'pt-BR'
): string => {
    const formatter = new Intl.NumberFormat(locale, {
        style: 'currency',
        currency,
        minimumFractionDigits: 2
    })
    return formatter.format(value)
}
