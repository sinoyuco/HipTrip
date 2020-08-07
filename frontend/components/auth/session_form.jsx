import React from 'react';
import {login} from '../../actions/session_actions';

class SessionForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {email:'', password:'', fname:'', lname:'', zip_code:'', collapsed: true}
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCollapse = this.handleCollapse.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        debugger;
        const user = Object.assign({}, this.state);
        delete user.collapsed;
        this.props.processForm(user).then(this.props.closeModal);
    }

    update(field){
        // return e => this.setState({[field]: e.currentTarget.value})
        return e => this.setState({[field]: e.currentTarget.value});
    }

    demoLogin(e) {
        e.preventDefault();
        this.props.demoLogin().then(this.props.closeModal);
    }

    handleCollapse(e){
        e.preventDefault();
        this.setState({ collapsed: false });
    }

    render(){
        let form;
        if(!this.state.collapsed){
        if(this.props.formType==='signup'){
            form = <div className="session-form-div">
                <div className="sign-up-names">
                    <input type="text" value={this.state.fname} onChange={this.update('fname')} placeholder="First name" />
                    <input type="text" value={this.state.lname} onChange={this.update('lname')} placeholder="Last name" />
                </div>
                
                <input type="text" value={this.state.email} onChange={this.update('email')} placeholder="Email address" />
                <input type="password" value={this.state.password} onChange={this.update('password')} placeholder="Create a password"/>
                <input type="text" value={this.state.zip_code} onChange={this.update('zip_code')} placeholder="Zip code"/>

                <button onClick={this.handleSubmit} className="session-submit">Join HipTrip!</button>
            </div>
            
        }else{
            form = <div className="session-form-div">
                <input type="text" value={this.state.email} onChange={this.update('email')} placeholder="Email address" />
                <input type="password" value={this.state.password} onChange={this.update('password')} placeholder="Password" />

                <button onClick={this.handleSubmit} className="session-submit">Sign in</button>
            </div>
        }
        }else{
            form = <button className="session-submit" onClick={this.handleCollapse}>{this.props.formText}</button>
        }

        let greeting;
        if (this.props.formType === 'signup') {
            greeting = <div className="greeting">
                <h2>Join HipTrip!</h2>
                <h3>Discover the best camping near me</h3>
            </div>
        }else{
                greeting = <div className="greeting">
                    <h2>Welcome back!</h2>
                    <h3>It's about time for another camping trip</h3>
                </div>
        }

        return(
            <form>
                <div className="session-form">
                    {greeting}

                    <button className="demo-login-button" onClick={this.demoLogin}>Demo Login</button>
                    

                    <div className="session-form-separator">
                        <p>or</p>
                    </div>

                    {form}

                </div>
                {this.props.otherForm}
            </form>
        );
    }


}

export default SessionForm;