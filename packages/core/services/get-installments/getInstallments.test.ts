import { getInstallments } from '.'
import { Axios } from '../Axios'

jest.mock('../Axios')

const mockedAxios = Axios as jest.Mocked<typeof Axios>

describe('getInstallments', () => {
    it('should return an object of installments', async () => {
        mockedAxios.get.mockResolvedValue({ data: {} })

        const opportunities = await getInstallments()
        expect(opportunities).toBeInstanceOf(Object)
    })
})
