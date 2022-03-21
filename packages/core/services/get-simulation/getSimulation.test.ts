import { getSimulation } from '.'
import { Axios } from '../Axios'

jest.mock('../Axios')

const mockedAxios = Axios as jest.Mocked<typeof Axios>

describe('getSimulation', () => {
    it('should return an object of simulation', async () => {
        mockedAxios.get.mockResolvedValue({ data: {} })

        const opportunities = await getSimulation()
        expect(opportunities).toBeInstanceOf(Object)
    })
})
