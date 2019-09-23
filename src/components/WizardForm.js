import React from 'react';
import { Step1, Step2, Step3 } from './Steps';

export default class WizardForm extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            currentStep: 1,
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            acceptedTnC: false,
        }

        this.formChange = this.formChange.bind(this)
        this.nextStep = this.nextStep.bind(this)
        this.prevStep = this.prevStep.bind(this)
    }

    formChange = (event) => {
        console.log(event);
        const { name, value } = event.target
        console.log(name, value);
        this.setState({ [name]: value });
    }

    nextStep() {
        let currentStep = this.state.currentStep
        currentStep = currentStep >= 2 ? 3 : currentStep + 1
        this.setState({ currentStep: currentStep });
    }

    prevStep() {
        let currentStep = this.state.currentStep
        currentStep = currentStep <= 1 ? 1 : currentStep - 1
        this.setState({ currentStep: currentStep });
    }

    render() {
        return (
            <React.Fragment>
                <h1>10Pearls</h1>
                <p>Step {this.state.currentStep} </p>
                <form>
                    <Step1
                        currentStep={this.state.currentStep}
                        firstName={this.state.firstName}
                        lastName={this.state.lastName}
                        formChange={this.formChange} />
                    <Step2
                        currentStep={this.state.currentStep}
                        email={this.state.email}
                        password={this.state.password}
                        formChange={this.formChange} />
                    <Step3
                        currentStep={this.state.currentStep}
                        acceptedTnC={this.state.acceptedTnC}
                        formChange={this.formChange} />
                    <button onClick={() => this.prevStep()}>Prev</button>
                    <button onClick={() => this.nextStep()}>Next</button>
                </form>
            </React.Fragment>
        )
    }
}