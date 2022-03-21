import styled, { css } from 'styled-components'
import * as CardStyles from '../card/Card.styles'

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(138px, 1fr));
    grid-gap: 15px;

    ${CardStyles.Container} {
        color: currentColor;
        text-decoration: none;
    }
`

export const Title = styled.h3`
    font-size: 1.1rem;
    display: block;
    padding: 7px 0;
`

export const Image = styled.img`
    width: 45px;
    height: 45px;
    object-fit: contain;
`

export const Text = styled.p`
    padding: 3px 0;
`

export const Price = styled.p`
    ${({ theme }) => css`
        padding: 3px 0;
        color: ${theme.brand.primary};
    `}
`
