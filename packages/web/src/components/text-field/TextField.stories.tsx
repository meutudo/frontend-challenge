import React from 'react'
import { Story, Meta } from '@storybook/react'
import { TextField, TextFieldProps } from './TextField'

export default {
    title: 'Components/TextField',
    component: TextField,
    args: {
        label: 'E-mail',
        name: 'email',
        initialValue: '',
        placeholder: 'exemplo@gmail.com',
        disabled: false
    },
    argTypes: {
        onInput: { action: 'changed' }
    }
} as Meta

export const Default: Story<TextFieldProps> = args => (
    <div style={{ maxWidth: 300, padding: 15 }}>
        <TextField {...args} />
    </div>
)

export const withError: Story<TextFieldProps> = args => (
    <div style={{ maxWidth: 300, padding: 15 }}>
        <TextField {...args} />
    </div>
)

withError.args = {
    error: 'Ops...something is wrong'
}
