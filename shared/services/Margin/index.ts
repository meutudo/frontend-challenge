import { IGetCurrentMarginsData } from './types'
import { api } from '@tudo/axios'

export class MarginService {
  public static async getCurrentMargins(): Promise<IGetCurrentMarginsData> {
    return api.get('/margins').then(response => response.data)
  }
}

console.log('teste git')
