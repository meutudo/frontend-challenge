import { IGetCurrentMarginsData } from '@/services/Margin/types'
import { CardProps } from './components/Card'

export interface ICardData extends Pick<CardProps, 'title' | 'iconSrc'> {
  marginKey: keyof IGetCurrentMarginsData
}
