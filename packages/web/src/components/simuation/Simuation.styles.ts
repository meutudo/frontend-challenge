import styled, { css } from 'styled-components'
export const Container = styled.div`
    width: 100%;
`
export const Context = styled.section`
    ${({ theme }) => css`
        display: flex;
        align-items: center;
        gap: 15px;
        border-bottom: solid 1px ${theme.colors.gray};
        padding: 15px 0;
        margin: 0 15px 15px;
        min-width: 345px;
    `}
`

export const Logo = styled.figure`
    ${({ theme }) => css`
        width: 63px;
        height: 63px;
        border: solid 1px ${theme.colors.gray};
        border-radius: 10px;
        padding: 10px;
        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    `} {
`
export const Prices = styled.div`
    flex: 1 1 auto;
    min-width: 0;
    font-size: 12px;
`
export const Price = styled.div`
    ${({ theme }) => css`
        font-weight: ${theme.font.bold};
        font-size: 18px;
        color: ${theme.brand.primary};
    `}
`
export const Rates = styled.div`
    ${({ theme }) => css`
        flex: 0 0 100px;
        min-widht: 0;
        font-size: 12px;
        border-left: solid 1px ${theme.colors.gray};
        padding: 15px;

        strong {
            display: block;
            font-size: 13px;
        }
    `}
`
export const Date = styled.div`
    ${({ theme }) => css`
        padding: 0 15px;
        font-size: 12px;
        svg {
            color: ${theme.brand.primary};
        }
        strong {
            display: block;
        }
    `}
`

export const Actions = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 10px 15px;
`
export const ActionButton = styled.button`
    ${({ theme }) => css`
        display: flex;
        text-decoration: none;
        font-size: 13px;
        font-weight: ${theme.font.medium};
        color: ${theme.brand.primary};
        letter-spacing: 0.5px;
        align-items: center;

        svg {
            margin-left: 5px;
            margin-bottom: -3px;
        }
    `}
`
