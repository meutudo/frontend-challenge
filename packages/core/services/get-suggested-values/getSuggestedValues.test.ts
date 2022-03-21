import { getSuggestedValues } from '.'
import { Axios } from '../Axios'

jest.mock('../Axios')

const mockedAxios = Axios as jest.Mocked<typeof Axios>

describe('getSuggestedValues', () => {
    it('should return an object of sugested values', async () => {
        mockedAxios.get.mockResolvedValue({ data: {} })

        const opportunities = await getSuggestedValues()
        expect(opportunities).toBeInstanceOf(Object)
    })
})
