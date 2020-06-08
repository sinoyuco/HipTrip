import React from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import NavBarSearchInput from './navbar_search_input';

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
                <li><Link className="user-bookings-link" to={`/users/${this.props.user.id}/bookings`}>Trips</Link></li>
                <li>Saves</li>
                <li>Messages</li>
                <div className="user-profile"> Profile 
                    <div className="user-profile-content">
                        <li>Manage User Profile</li>
                        <li onClick={this.handleLogout}>Log Out</li>
                    </div>
                </div>
                
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
                <div className="main-navbar-1">
                    <a href="/"><img src="https://fontmeme.com/permalink/200603/ef81bf1f1f2d6819aaf0a2e41a177943.png" alt="the-mandalorian-font" border="0"/></a>
                    <Switch>
                        <Route path="/users/:userId/bookings" component={NavBarSearchInput} />
                        <Route path="/spots/:spotId" component={NavBarSearchInput} />
                        <Route path="/discover" component={NavBarSearchInput} />
                    </Switch>
                </div>
                <ul className="auth-navbar">
                    {links}
                </ul>
            </div>
        )
    }
}

export default Navbar;