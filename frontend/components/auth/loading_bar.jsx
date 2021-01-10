import React from 'react';

class LoadingBar extends React.Component{
    constructor(props){
        super(props)
        this.state = {styles: {}}
    }
    render(){
        let styles = {};
        let that = this;
        setTimeout(()=> {
            let newstyle = {opacity: 1, width: '99%'}
            that.setState({styles: newstyle});
        }, 1500);
        return(
            <div className="loading-animation">
                <div className="loading-animation-loaded" style={this.state.styles}></div>
            </div>
        );
    }
};

export default LoadingBar;