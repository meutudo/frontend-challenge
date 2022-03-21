import styled, { css } from 'styled-components'

export const Container = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: white;
    box-shadow: 0 -3px 6pt #b8b8b824;
`

export const Item = styled.div<{ hightlight?: string }>`
    ${({ theme, hightlight }) => css`
        display: block;
        color: currentColor;
        text-decoration: none;
        text-align: center;
        padding: 10px;
        flex: 1 1 auto;
        min-width: 0;
        position: relative;

        svg {
            display: inline-block;
        }
        span {
            display: block;
            text-align: center;
            padding: 5px;
        }

        ${Boolean(hightlight) &&
        css`
            &:before {
                content: '';
                width: 12px;
                height: 12px;
                background: ${theme.brand.primary};
                position: absolute;
                top: 0;
                border-radius: 50%;
                left: 50%;
                margin-left: 8px;
                margin-top: 8px;
            }
        `}
    `}
`
