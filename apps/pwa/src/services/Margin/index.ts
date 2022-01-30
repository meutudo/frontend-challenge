import { IGetCurrentMarginsData } from './types'
import api from '@/services/api'

export class MarginService {
  public static async getCurrentMargins(): Promise<IGetCurrentMarginsData> {
    return api.get('/margins').then(response => response.data)
  }
}
