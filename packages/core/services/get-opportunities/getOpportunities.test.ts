import { getOpportunities } from '.'
import { Axios } from '../Axios'

jest.mock('../Axios')

const mockedAxios = Axios as jest.Mocked<typeof Axios>

describe('getOpportunities', () => {
    it('should return an object of opportunities', async () => {
        mockedAxios.get.mockResolvedValue({ data: {} })

        const opportunities = await getOpportunities()
        expect(opportunities).toBeInstanceOf(Object)
    })
})
