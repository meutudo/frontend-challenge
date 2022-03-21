import styled, { css } from 'styled-components'

const modifyStyles = {
    disabled: css`
        background: #aeaeae;
        color: white;
        opacity: 0.5;
        cursor: not-allowed;
    `
}

export const Container = styled.button`
    ${({ theme, disabled }) => css`
        background-color: ${theme.brand.primary};
        border: 0;
        color: white;
        height: 40px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        padding: 5px 40px;
        border-radius: 40px;
        font-size: 16px
        font-weight: 600;
        border: 0;
        cursor: pointer;

        &:is(a){
            text-decoration: none;
        }

        ${disabled && modifyStyles.disabled}
    `}
`
