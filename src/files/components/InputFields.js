import React, { Component } from 'react';


export const FormRow = () => {
    return (
        <div className="form-row">

        </div>
    );
}
// Plese Wrap througn FormRow
export const ShortInput = ({ placeholder, }) => {
    return (
        <div className="form-group">
            <input type="text" autocomplete="off"
                name="name"
                className="form-control"
                id="name"
                placeholder={placeholder}
                data-rule="minlen:4"
                data-msg="Please enter at least 4 chars"
                onChange={(e) => console.log(e)}
            />
            <div className="validate"></div>
        </div>
    );
}

// Plese Wrapt througn FormRow
export const EmaplInput = ({ placeholder, }) => {
    return (
        <div className="form-group">
            <input type="email" className="form-control" name="email" id="email" placeholder={placeholder} data-rule="email" data-msg="Please enter a valid email" />
            <div className="validate"></div>
        </div>
    );
}



export const LongInput = ({ placeholder, }) => {
    return (
        <div className="form-group">
            <input type="text" className="form-control" name="subject" id="subject" placeholder={placeholder} data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
            <div className="validate"></div>
        </div>
    );
}

export const MultiLineInput = ({ placeholder, }) => {
    return (
        <div className="form-group">
            <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder={placeholder}></textarea>
            <div className="validate"></div>
        </div>
    );
}


export const RadioInput = ({ placeholder, }) => {
    return (
        <div className="form-group">
            <input type="radio" className="form-control" name="email" id="email" placeholder={placeholder} data-rule="email" data-msg="Please enter a valid email" />
            <div className="validate"></div>
        </div>
    );
}

export const FormInput = () => {
    return (
        <div className="col-lg-4">
            <div className="form-group">

            </div>
        </div>
    )
}



