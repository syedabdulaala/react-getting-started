import React from 'react';

export const Step1 = (props) => {
    if (props.currentStep !== 1) {
        return null
    }

    return (
        <React.Fragment>
            {console.log('Firstname====', props.firstName)}
            <div className="form-group">
                <label htmlFor="first-name">First Name</label>
                <input
                    id="first-name"
                    type="text"
                    name="firstName"
                    className="form-control"
                    value={props.firstName}
                    onChange={(e) => props.formChange(e)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="last-name">Last Name</label>
                <input
                    id="last-name"
                    type="text"
                    className="form-control"
                    value={props.lastName}
                    onChange={(e) => props.formChange(e)}
                />
            </div>
        </React.Fragment>
    );
}

export const Step2 = (props) => {
    if (props.currentStep !== 2) {
        return null
    }
    
    return (
        <React.Fragment>
            <div className="form-group">
                <label htmlFor="email-address">Email Address</label>
                <input
                    id="email-address"
                    type="email"
                    className="form-control"
                    value={props.email}
                    onChange={(e) => props.formChange(e)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    type="password"
                    className="form-control"
                    value={props.password}
                    onChange={(e) => props.formChange(e)}
                />
            </div>
        </React.Fragment>
    );
}

export const Step3 = (props) => {
    if (props.currentStep !== 3) {
        return null
    }

    return (
        <React.Fragment>
            <p>Help protect your website and its users with clear and fair website terms and conditions. These terms and conditions for a website set out key issues such as acceptable use, privacy, cookies, registration and passwords, intellectual property, links to other sites, termination and disclaimers of responsibility. Terms and conditions are used and necessary to protect a website owner from liability of a user relying on the information or the goods provided from the site then suffering a loss.</p>
            <p>Making your own terms and conditions for your website is hard, not impossible, to do. It can take a few hours to few days for a person with no legal background to make. But worry no more; we are here to help you out.</p>
            <p>All you need to do is fill up the blank spaces and then you will receive an email with your personalized terms and conditions.</p>
            <div className="form-group">
                <label htmlFor="accept-tnc">I accept above terms and conditions</label>
                <input
                    id="accept-tnc"
                    type="checkbox"
                    className="form-control"
                    value={props.acceptTnC}
                    onChange={(e) => (e) => props.formChange(e)(e)}
                />
            </div>
        </React.Fragment>
    );
}