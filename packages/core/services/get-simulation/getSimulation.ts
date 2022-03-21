import { Axios } from '../Axios'

export interface ISimulation {
    contractValue: number
    numberOfInstallments: number
    installmentValue: number
    rate: number
    nearEstimatedDate: string
    fatEstimatedDate: string
}

export function getSimulation(): Promise<ISimulation> {
    return Axios.get<ISimulation>('/simulation').then(response => response.data)
}
