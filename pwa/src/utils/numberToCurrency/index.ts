export const numberToCurrency = (val?: number): string => {
  return (val || 0).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}
