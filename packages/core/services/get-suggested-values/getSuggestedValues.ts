import { Axios } from '../Axios'

export interface ISuggestedValues {
    max: number
    min: number
    suggestionValues: number[]
}

export function getSuggestedValues(): Promise<ISuggestedValues> {
    return Axios.get<ISuggestedValues>('/values').then(
        response => response.data
    )
}
