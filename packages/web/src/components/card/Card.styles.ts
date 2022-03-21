import styled, { css } from 'styled-components'
import { CardProps } from '.'

export const Container = styled.div<CardProps>`
    ${({ theme, disabled, radius, selected, leftLight }) => css`
        display: inline-block;
        padding: ${theme.spacings.xxsmall};
        background: white;
        box-shadow: 0 5px 10px rgba(91, 91, 91, 0.2);
        border-radius: ${`${radius}px`};
        text-decoraton: none;
        border: 0;

        &:is(button, a) {
            cursor: pointer;
        }

        ${disabled &&
        css`
            opacity: 0.5;
            pointer-events: none;
        `}

        ${leftLight &&
        css`
            border-left: solid 5px ${theme.brand.primary};
        `}

        ${selected &&
        css`
            background: ${theme.brand.primary};
            color: white;
            pointer-events: none;
        `}
    `}
`
