import React from 'react';

class LoadingModal extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="loading-div-main">
                <p className="loading-div-text">Logging you in as a demo user for maximum experience</p>
            </div>
        );
    }

}

export default LoadingModal;