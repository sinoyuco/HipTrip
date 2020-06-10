import React from 'react';

class ReviewIndexItem extends React.Component{
    constructor(props){
        super(props)
        this.state = { helpful: 0 }
        this.handleClick = this.handleClick.bind(this);
        this.dateFormat = this.dateFormat.bind(this);
    }

    handleClick(e){
        e.preventDefault();
        this.setState({helpful: this.state.helpful+1});
    }

    dateFormat(date) {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const months = ['Placeholder', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const splitted = date.split("-")

        const date_num = parseInt(splitted[2].slice(0, 2));
        const month = months[parseInt(splitted[1])];
        const year = parseInt(splitted[0]);

        const day_of_week = days[new Date(year, parseInt(splitted[1]) - 1, date_num).getDay()];
        return `${month} ${date_num}th, ${year}`;
    }

    render(){
        return(
            <div className="review-show">

                <div className="review-show-header">
                    <div className="review-show-header-1">
                        <div className="review-photo">
                            <img src={this.props.review.profile_photo[0]}></img>
                        </div>

                        <div className="review-show-header-content">
                            <div className="review-show-header-content-icon">
                                <i className="firstthumbs fas fa-thumbs-up"></i>
                            </div>
                            <h5> by <strong>{this.props.review.user.fname} {this.props.review.user.lname}</strong></h5>
                        </div>
                    </div>

                    <div className="review-show-header-2">
                        <div className="review-show-header-2-star">
                            <i className="review-rating-star fas fa-star"></i>
                        </div>
                        <h5 className="review-show-header-2-text"><strong>{this.props.review.rating}</strong></h5>
                    </div>

                    <div className="review-show-header-3">
                        <h5 className="review-show-header-3-date">{this.dateFormat(this.props.review.created_at)}</h5>
                    </div>

                </div>

                <div className="review-show-body">
                    <div className="review-show-body-1"></div>
                    <div className="review-show-body-2">
                        <p>{this.props.review.body}</p>
                        <div onClick={this.handleClick} className="review-show-body-2-button">
                            <div className="secondthumbs-div">
                                <i className="secondthumbs fas fa-thumbs-up"></i>
                            </div>
                            <h5 className="review-helpful-text">Helpful</h5>
                            <h5>{this.state.helpful}</h5>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default ReviewIndexItem;