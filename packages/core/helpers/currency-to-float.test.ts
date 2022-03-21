import { currencyToFloat } from './currency-to-float'

describe('currencyToFloat', () => {
    it('should return a float', () => {
        expect(currencyToFloat('R$1.234,56')).toBe(1234.56)
    })
})
