import styled, { css, DefaultTheme } from 'styled-components'
import { TextFieldProps } from './TextField'

type WrapperProps = Pick<TextFieldProps, 'disabled'> & { error?: boolean }

export const InputWrapper = styled.div`
    ${({ theme }) => css`
        display: flex;
        align-items: center;
        padding: 0 ${theme.spacings.xsmall};
        border-bottom: 1px solid ${theme.colors.gray};
        font-size: ${theme.font.sizes.medium};

        &:focus-within {
            border-bottom-color: ${theme.brand.primary};
        }
    `}
`

export const Label = styled.label`
    ${({ theme }) => css`
        display: block;
        font-size: ${theme.font.sizes.medium};
        color: ${theme.colors.base};
        cursor: pointer;
        padding: ${theme.spacings.xxsmall};
    `}
`

export const Input = styled.input`
    ${({ theme }) => css`
        font-size: ${theme.font.sizes.medium};
        padding: ${theme.spacings.xxsmall} 0;
        background: transparent;
        border: 0;
        outline: none;
        width: 100%;
        text-align: center;

        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
        &[type='number'] {
            -moz-appearance: textfield;
        }
        &:-webkit-autofill {
            filter: none;
            &::first-line {
                font-size: ${theme.font.sizes.medium};
            }
        }
        &:focus::placeholder {
            color: transparent;
        }
    `}
`

export const Error = styled.div`
    ${({ theme }) => css`
        color: ${theme.feedback.error.action};
        font-size: ${theme.font.sizes.xsmall};
        padding: ${theme.spacings.xxsmall} 0;
        flex: 0 0 100%;
        min-width: 0;
    `}
`

const wrapperModifiers = {
    error: (theme: DefaultTheme) => css`
        ${InputWrapper} {
            border-color: ${theme.feedback.error.active};
        }
        ${Label} {
            color: ${theme.feedback.error.action};
        }
    `,
    disabled: () => css`
        ${Label},
        ${Input} {
            cursor: not-allowed;
            &::placeholder {
                color: currentColor;
            }
        }
    `
}

export const Wrapper = styled.div<WrapperProps>`
    display: flex;
    flex-flow: row wrap;

    ${({ theme, error, disabled }) => css`
        ${error && wrapperModifiers.error(theme)}
        ${disabled && wrapperModifiers.disabled()}
    `}
`
