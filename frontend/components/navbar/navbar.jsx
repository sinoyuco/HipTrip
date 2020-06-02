import React from 'react';

class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleSubmit(type){
        // e.preventDefault();
        // this.props.openModal(type);
        return e => this.props.openModal(type);
    }

    handleLogout(e){
        e.preventDefault();
        this.props.logout();
    }

    render(){
        let links;
        if(this.props.session){
            links =
                <>
                <li>Trips</li>
                <li>Saves</li>
                <li>Messages</li>
                <li className="User Profile"> Profile </li>
                <li onClick={this.handleLogout}>Log Out</li>
                </>

        }else{
            links = <>
                <li>Near me</li>
                <li>About</li>
                <li>Earn Hipcash</li>
                <li onClick={this.handleSubmit('login')}>Log in</li>
                <li onClick={this.handleSubmit('signup')}>Sign up</li>
                <button className="hosting-button">Start Hosting</button>
            </>
        }

        let auth

        return(
            <div className="main-navbar">
                <h1>HipTrip</h1>
                <ul className="auth-navbar">
                    {links}
                </ul>
            </div>
        )
    }
}

export default Navbar;