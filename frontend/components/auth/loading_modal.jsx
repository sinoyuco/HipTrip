import React from 'react';
import LoadingBar from './loading_bar';

class LoadingModal extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="loading-div-main">
                <img className="green-logo-loading" src="https://hiptrip-aa-seed.s3.amazonaws.com/logo/green_icon.png" />
                <h2 className="loading-div-text">Logging you in as a demo user...</h2>
                <LoadingBar/>
            </div>
        );
    }

}

export default LoadingModal;