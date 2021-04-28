import React from 'react'
import { ErrorMessage, useField } from 'formik'

export const Textfield = ({ label, ...props }) => {
    const [field, meta] = useField(props)
    let input;
    if (field.name==="message") {
        input = <textarea className={`textarea is-hovered ${meta.touched && meta.error && 'is-danger'}`} {...field} {...props}/>;
    } else {
        input = <input className={`input is-hovered ${meta.touched && meta.error && 'is-danger'}`} {...field} {...props} />;
    }

    return (
        <div className="field">
            <label className="label">{label}</label>
            <div className="control">
                {input}
            </div>
            <p class="help is-danger"><ErrorMessage name={field.name} /></p>
        </div>
    )
}
