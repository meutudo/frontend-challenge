import styled, { css } from 'styled-components'
import * as CardStyles from '../card/Card.styles'
import * as InputStyles from '../input-currency/InputCurrency.styles'

export const Container = styled.section`
    ${InputStyles.Container} {
        width: 200px;
        margin: 0 auto;
        display: flex;
        margin-bottom: 40px;

        input {
            width: 90px;
        }
    }
`

export const Title = styled.h1`
    font-size: 16px;
    font-weight: bold;
`

export const List = styled.div`
    display: flex;
    flex-flow: row wrap;
    gap: 15px;
    padding: 16px 0;

    ${CardStyles.Container} {
        flex: 1 0 100px;
        min-width: 0;
    }
`

export const Link = styled.a`
    ${({ theme }) => css`
        text-align: center;
        display: block;
        padding: 16px 0;
        color: ${theme.brand.primary};
    `}
`

export const Content = styled.div`
    text-align: center;
    padding: 16px 0 0;
`
