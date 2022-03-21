import styled, { css } from 'styled-components'
import { AppBarProps } from './'

export const Content = styled.div`
    flex: 1;
    min-width: max-content;
    text-align: center;
`

const containerModifiers = {
    mini: () => css`
        ${Content} {
            padding-right: 48px;
        }
    `
}
export const Container = styled.header<AppBarProps>`
    ${({ theme, mini }) => css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-flow: row wrap;
        background: ${theme.brand.secondary};
        color: white;
        padding: 15px;
        border-radius: 0 0 40px 0;
        ${mini && containerModifiers.mini()}
    `}
`

export const ButtonBack = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    border: 0;
    color: currentColor;
    width: 48px;
    height: 48px;
    cursor: pointer;
`

export const Topbar = styled.div`
    flex: 0 0 100%;
    min-width: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
