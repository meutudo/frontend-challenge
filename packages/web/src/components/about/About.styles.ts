import styled, { css } from 'styled-components'

type ContainerProps = {
    isOpen: boolean
}

export const Welcome = styled.h2`
    ${({ theme }) => css`
        font-size: 19px;
        font-weight: ${theme.font.bold};
        padding-bottom: 18px;
    `}
`
export const Price = styled.p`
    ${({ theme }) => css`
        font-size: 30px;
        font-weight: ${theme.font.bold};
        color: ${theme.brand.primary};
    `}
`
export const Text = styled.p`
    ${({ theme }) => css`
        font-size: 14px;
        font-weight: ${theme.font.regular};
    `}
`
export const Button = styled.button`
    ${({ theme }) => css`
        width: 35px;
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 0;
        background: ${theme.brand.primary};
        color: ${theme.colors.contrast};
        border-radius: 50%;
        position: absolute;
        bottom: -17px;
        left: 50%;
        margin-left: -17px;
        cursor: pointer;
    `}
`
export const Content = styled.div`
    transition: all 0.1s ease-in-out;
    opacity: 1;
`
export const Container = styled.section<ContainerProps>`
    ${({ isOpen }) => css`
        position: relative;
        color: currentColor;
        text-align: center;
        transition: all 0.2s ease-in-out;
        padding: 30px 0;
        ${isOpen &&
        css`
            padding: 0;
        `}

        ${Content} {
            opacity: ${isOpen ? '0' : '1'};
            ${isOpen &&
            css`
                max-height: 0;
                overflow: hidden;
            `}
        }
    `}
`
