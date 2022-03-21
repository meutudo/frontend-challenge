import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    ${({ theme }) => css`
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        html {
            font-size: 86%;
        }
        html,
        body,
        #root {
            height: 100%;
        }
        body {
            background: rgba(236, 236, 236, 1);
            font-family: ${theme.font.family};
        }
    `}
`

export default GlobalStyles
