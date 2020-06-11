// import React from 'react';

// class CreateReviewContainer extends React.Component{
//     constructor(props){
//         this.props
//         this.state={title: '', body: '', rating: 5}
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleSubmit(e){
//         this.props.createReview(
//             {
//                 title: this.state.title,
//                 body: this.state.body,
//                 rating: this.state.rating,
//                 spot_id: this.props.spot_id,
//                 user_id: this.props.user_id
//             }
//         )
//     }

//     update(type){
//         return e => this.setState({[type]: e.currentTarget.value})
//     }

//     render(){
//         return(
//             <div className="create-review-container">
//             <form onSubmit={this.handleSubmit}>
//                 <input type="text" value={this.state.title} onChange={this.update('title')}/>
//                 <input type="text" value={this.state.body} onChange={this.update('body')} />
//                 <input type="text" value={this.state.rating} onChange={this.update('rating')} />
//                 <input type="submit" value="Create Review"/>
//             </form>
//             </div>
//         )
//     }

// }