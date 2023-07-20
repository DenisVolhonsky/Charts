import React from 'react'

const FieldSet = ({ text, children }: any) => (
    <fieldset style={{marginRight: 32}}>
        <legend>
            {text}
        </legend>
        {children}
    </fieldset>
)

export default FieldSet