import React from 'react';
import {login} from '../../actions/session_actions'

class SessionForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {email:'', password:'', fname:'', lname:'', zip_code:''}
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.processForm(this.state).then(this.props.closeModal);
        this.forceUpdate();
    }

    update(field){
        // return e => this.setState({[field]: e.currentTarget.value})
        return e => this.setState({[field]: e.currentTarget.value})
    }

    demoLogin(e) {
        e.preventDefault();
        this.props.demoLogin().then(this.props.closeModal);
    }

    render(){
        let form;
        if(this.props.formType==='signup'){
            form = <div className="session-form-div">
                <div className="sign-up-names">
                    <input type="text" value={this.state.fname} onChange={this.update('fname')} placeholder="First name" />
                    <input type="text" value={this.state.lname} onChange={this.update('lname')} placeholder="Last name" />
                </div>
                
                <input type="text" value={this.state.email} onChange={this.update('email')} placeholder="Email address" />
                <input type="password" value={this.state.password} onChange={this.update('password')} placeholder="Create a password"/>
                <input type="text" value={this.state.zip_code} onChange={this.update('zip_code')} placeholder="Zip code"/>
            </div>
        }else{
            form = <div className="session-form-div">
                <input type="text" value={this.state.email} onChange={this.update('email')} placeholder="Email address" />
                <input type="password" value={this.state.password} onChange={this.update('password')} placeholder="Password" />
            </div>
        }

        return(
            <form className="session-form" onSubmit={this.handleSubmit}>

                <button className="demo-login-button" onClick={this.demoLogin}>Demo Login</button>
                {form}

                <input className="session-submit" type="submit" value={this.props.formText} />
                {this.props.otherForm}
            </form>
        );
    }


}

export default SessionForm;