import React from "react";
import Styles from '../style/Styles'
import { Form, Field } from 'react-final-form'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))


/*
function onSubmit memunculkan 
alert berisi data dari form yang telah di inputkan

*/
const onSubmit = async values => {
  await sleep(300)
  window.alert(JSON.stringify(values, 0, 2))
}

function FormEmployee () {
    
    return(
        <Styles>
        <h1>Employed Form</h1><Form
            onSubmit={onSubmit}
            initialValues={{}}
            render={({ handleSubmit, form, submitting, pristine, values }) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>First Name</label>
                        <Field
                            name="firstName"
                            component="input"
                            type="text"
                            placeholder="First Name" />
                    </div>
                    <div>
                        <label>Last Name</label>
                        <Field
                            name="lastName"
                            component="input"
                            type="text"
                            placeholder="Last Name" />
                    </div>
                    <div>
                        <label>Employed</label>
                        <Field name="employed" component="input" type="checkbox" />
                    </div>
                    <div>
                        <label>Education</label>
                        <Field name="Education" component="select">
                            <option />
                            <option value="Master">Master</option>
                            <option value="Advance">Advance</option>
                            <option value="Intermediet">Intermediet</option>
                        </Field>
                    </div>
                    <div>
                        <label>Experlise</label>
                        <div>
                            <label>
                                <Field
                                    name="employee"
                                    component="input"
                                    type="checkbox"
                                    value="HTML" />{' '}
                                HTML
                            </label>
                            <label>
                                <Field
                                    name="employee"
                                    component="input"
                                    type="checkbox"
                                    value="CSS" />{' '}
                                CSS
                            </label>
                            <label>
                                <Field
                                    name="employee"
                                    component="input"
                                    type="checkbox"
                                    value="Javascript" />{' '}
                                Javascript
                            </label>
                            <label>
                                <Field
                                    name="employee"
                                    component="input"
                                    type="checkbox"
                                    value="NodeJs" />{' '}
                                NodeJs
                            </label>
                            <label>
                                <Field
                                    name="employee"
                                    component="input"
                                    type="checkbox"
                                    value="ReactJs" />{' '}
                                ReactJs
                            </label>
                        </div>
                    </div>
                    <div>
                    </div>
                    <div>
                        <label>Preferred</label>
                        <div>
                            <label>
                                <Field
                                    name="preferred"
                                    component="input"
                                    type="radio"
                                    value="Full Stack" />{' '}
                                Full Stack
                            </label>

                        </div>
                    </div>
                    <div>
                        <label>Technology</label>
                        <div>
                            <label>
                                <Field
                                    name="stooge"
                                    component="input"
                                    type="radio"
                                    value="Front End" />{' '}
                                Front End
                            </label>

                            <label>
                                <Field
                                    name="stooge"
                                    component="input"
                                    type="radio"
                                    value="Back End" />{' '}
                                Back End
                            </label>
                        </div>
                    </div>
                    <div>
                        <label>Notes</label>
                        <Field name="notes" component="textarea" placeholder="Notes" />
                    </div>
                    <div className="buttons">
                        <button type="submit" disabled={submitting || pristine}>
                            Submit
                        </button>
                        <button
                            type="button"
                            onClick={form.reset}
                            disabled={submitting || pristine}
                        >
                            Reset
                        </button>
                    </div>
                    <pre>{JSON.stringify(values, 0, 2)}</pre>
                </form>
            )} />
      </Styles>
    )
}

export default FormEmployee;