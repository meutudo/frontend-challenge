import { IGetSuggestedValuesData } from './types'
import { api } from '@tudo/axios'

export class ValuesService {
  public static async getSuggestedValues(): Promise<IGetSuggestedValuesData> {
    return api.get('/suggestedvalues').then(response => response.data)
  }
}
