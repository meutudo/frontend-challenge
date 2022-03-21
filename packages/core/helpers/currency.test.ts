import { currency } from '.'

describe('currency', () => {
    it('should return a string of currency', () => {
        const result = currency(10)
            .replace(/\xa0/g, ' ')
            .replace(/\u202f/g, ' ')
        expect(result).toBe('R$ 10,00')
    })
})
