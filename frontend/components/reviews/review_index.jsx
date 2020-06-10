import React from 'react';
import ReviewIndexItem from './review_index_item';

class ReviewIndex extends React.Component{
    constructor(props){
        super(props)
    }


    render(){
        const reviews = this.props.reviews.map(review => <ReviewIndexItem key={review.id} review={review}/>)
        const number_of_reviews = this.props.reviews.length ? <h3>{this.props.reviews.length} Written reviews</h3> : <h3>No reviews yet</h3>
        return(
            <div className="reviews-index-main">
                {number_of_reviews}
                <div className="reviews-index-items">
                    {reviews}
                </div>
            </div>
        );
    }

}

export default ReviewIndex;