import React from 'react'
import { ErrorMessage, useField } from 'formik'

export const Textfield = ({ label, ...props }) => {
    const [field, meta] = useField(props)
    let input;
    let icons = {
        name: "person",
        mail: "email",
        subject: "short_text",
        message: "chat",
    }

    if (field.name==="message") {
        input = <div className="control">
                    <textarea className={`textarea is-hovered ${meta.touched && meta.error && 'is-danger'}`} rows="8" {...field} {...props} />
                </div>;
    } else {
        input = <div className="control has-icons-left">
                    <input className={`input is-hovered ${meta.touched && meta.error && 'is-danger'}`} {...field} {...props} />
                    <span className="icon is-small is-left">
                        <span className="material-icons">{icons[field.name]}</span>
                    </span>
                </div>;
    }

    return (
        <div className="field">
            <label className="label">{label}</label>
                {input}
            <p class="help is-danger"><ErrorMessage name={field.name} /></p>
        </div>
    )
}
