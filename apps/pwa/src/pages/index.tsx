import loadable from '@loadable/component'
import { GrowSpinner } from '@/components/GrowSpinner'

function createLoadable(fn) {
  return loadable(fn, {
    fallback: <GrowSpinner />,
  })
}

export const LoadableHome = createLoadable(() => import('./Home'))
export const LoadableNewLoan = createLoadable(() => import('./NewLoan'))
export const LoadableContracts = createLoadable(() => import('./Contracts'))
export const LoadableHelp = createLoadable(() => import('./Help'))
export const LoadableNotFound = createLoadable(() => import('./NotFound'))
