import React from 'react';

class CreateReviewContainer extends React.Component{
    constructor(props){
        this.props
        this.state={title: '', body: '', }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        this.props.createReview(
            {
                user_id: 
            }
        )
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.body} onChange={this.update('title')}/>
                <input type="text" name="" id=""/>
            </form>
        )
    }

}