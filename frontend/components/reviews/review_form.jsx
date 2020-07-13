import React from 'react';
import ReviewIndexItem from './review_index_item';

class ReviewForm extends React.Component{
    constructor(props){
        super(props);
        this.state={title: '', body: '', rating: 1}
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        this.updateRating = this.updateRating.bind(this);
    }

    handleSubmit(e){

        e.preventDefault();
        
        this.props.createReview({
            title: this.state.title,
            body: this.state.body,
            rating: this.state.rating,
            spot_id: this.props.spot.id,
            user_id: this.props.user.id
        });

    }

    update(type){
        return e => this.setState({[type]: e.currentTarget.value})
    }

    updateRating(num){
        return e => {
            e.preventDefault();
            for(let i = 0; i < 5; i++){
                if(i+1 <= num){
                    $(`.rating-star-${i+1}`).addClass('green-star');
                }else{
                    $(`.rating-star-${i+1}`).removeClass('green-star');
                }
            }
            this.setState({rating: num})
        }
    }

    render(){
        // debugger;
        return(
            <div className="create-review-form">
                <div>
                    <p>It looks like you have stayed at {this.props.host.fname}'s place but have not left a review yet. Reviews help HipTrip grow. Leave one below!</p>
                    
                    <div className="create-review-form-top">
                        <fieldset>
                                <legend>Title</legend>
                            <input className="create-review-form-title" type="text" value={this.state.title} placeholder="Type review title..." onChange={this.update('title')}/>
                        </fieldset>
                        <fieldset>
                                <legend>Rating</legend>
                            <div className="review-form-rating-stars">
                                <i onClick={this.updateRating(1)} class="fa fa-star rating-star-1" aria-hidden="true"></i>
                                <i onClick={this.updateRating(2)} class="fa fa-star rating-star-2" aria-hidden="true"></i>
                                <i onClick={this.updateRating(3)} class="fa fa-star rating-star-3" aria-hidden="true"></i>
                                <i onClick={this.updateRating(4)} class="fa fa-star rating-star-4" aria-hidden="true"></i>
                                <i onClick={this.updateRating(5)} class="fa fa-star rating-star-5" aria-hidden="true"></i>
                            </div>
                        </fieldset>
                    </div>
                    
                    <div className="create-review-form-bottom">
                        <fieldset className="create-review-form-bottom-fieldset">
                            <legend>Body</legend>
                            <div className="create-review-form-bottom-diver">
                                <textarea className="create-review-form-body" type="text" value={this.state.body} placeholder="Type review..." onChange={this.update('body')} />
                            </div>
                        </fieldset>
                        <input onClick={this.handleSubmit} className="create-review-form-submit" type="submit" value="Post Review"/>
                    </div>
                </div>
            </div>
        )
    }

}

export default ReviewForm;