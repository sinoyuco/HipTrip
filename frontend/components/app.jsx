import React from 'react';
import Modal from './auth/modal';
import NavbarContainer from './navbar/navbar_container'

class App extends React.Component{
    render(){
        return(
            <div>
                <Modal/>
                <NavbarContainer/>
            </div>
        );
    }
}

export default App;