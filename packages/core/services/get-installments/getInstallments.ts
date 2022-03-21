import { Axios } from '../Axios'

export interface IInstallments {
    max: number
    min: number
    suggestionInstallments: number[]
}

export function getInstallments(): Promise<IInstallments> {
    return Axios.get<IInstallments>('/installments').then(
        response => response.data
    )
}
