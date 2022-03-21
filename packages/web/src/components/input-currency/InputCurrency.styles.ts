import styled, { css } from 'styled-components'

export const Container = styled.label`
    ${({ theme }) => css`
        display: inline-flex;
        align-items: center;

        span {
            font-size: ${theme.font.sizes.small};
            font-weight: 600;
            padding-right: 10px;
        }
    `}
`
