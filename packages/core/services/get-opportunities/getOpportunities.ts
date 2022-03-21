import { Axios } from '../Axios'

export interface IOpportunities {
    newLoanMaxValue: number
    portabilityMaxValue: number
    refinMaxValue: number
    creditCardMaxValue: number
}

export function getOpportunities(): Promise<IOpportunities> {
    return Axios.get('/')
        .then(response => response.data)
        .catch(error => error)
}
