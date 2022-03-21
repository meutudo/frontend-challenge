import { theme } from '@meutudo/core/assets'

type ThemeType = typeof theme

declare module 'styled-components' {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    export interface DefaultTheme extends ThemeType {}
}
