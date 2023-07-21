import React, { ReactNode } from 'react'

interface Props {
    text: string;
    children: ReactNode;
}

const FieldSet: React.FC<Props> = ({ text, children }) => (
    <fieldset style={{marginRight: 32}}>
        <legend>
            {text}
        </legend>
        {children}
    </fieldset>
)

export default FieldSet