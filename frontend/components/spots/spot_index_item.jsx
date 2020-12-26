import React from 'react';
import { withRouter } from 'react-router-dom';


class SpotIndexItem extends React.Component{
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        e.preventDefault();
        this.props.history.push(`/spots/${this.props.spot.id}`);
        window.scrollTo(0, 0);
    }

    render(){
        const reviews = this.props.spot.reviews || {};
        const icons = {
            'Camping': <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="campground" className="svg-inline--fa fa-campground fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M624 448h-24.68L359.54 117.75l53.41-73.55c5.19-7.15 3.61-17.16-3.54-22.35l-25.9-18.79c-7.15-5.19-17.15-3.61-22.35 3.55L320 63.3 278.83 6.6c-5.19-7.15-15.2-8.74-22.35-3.55l-25.88 18.8c-7.15 5.19-8.74 15.2-3.54 22.35l53.41 73.55L40.68 448H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h608c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM320 288l116.36 160H203.64L320 288z"></path></svg>,
            'Glamping': <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="warehouse" className="svg-inline--fa fa-warehouse fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M504 352H136.4c-4.4 0-8 3.6-8 8l-.1 48c0 4.4 3.6 8 8 8H504c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm0 96H136.1c-4.4 0-8 3.6-8 8l-.1 48c0 4.4 3.6 8 8 8h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm0-192H136.6c-4.4 0-8 3.6-8 8l-.1 48c0 4.4 3.6 8 8 8H504c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm106.5-139L338.4 3.7a48.15 48.15 0 0 0-36.9 0L29.5 117C11.7 124.5 0 141.9 0 161.3V504c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8V256c0-17.6 14.6-32 32.6-32h382.8c18 0 32.6 14.4 32.6 32v248c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8V161.3c0-19.4-11.7-36.8-29.5-44.3z"></path></svg>,
            'RVs': <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caravan" className="svg-inline--fa fa-caravan fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M416,208a16,16,0,1,0,16,16A16,16,0,0,0,416,208ZM624,320H576V160A160,160,0,0,0,416,0H64A64,64,0,0,0,0,64V320a64,64,0,0,0,64,64H96a96,96,0,0,0,192,0H624a16,16,0,0,0,16-16V336A16,16,0,0,0,624,320ZM192,432a48,48,0,1,1,48-48A48.05,48.05,0,0,1,192,432Zm64-240a32,32,0,0,1-32,32H96a32,32,0,0,1-32-32V128A32,32,0,0,1,96,96H224a32,32,0,0,1,32,32ZM448,320H320V128a32,32,0,0,1,32-32h64a32,32,0,0,1,32,32Z"></path></svg>,
            'Beach Camping': <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="umbrella-beach" className="svg-inline--fa fa-umbrella-beach fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M115.38 136.9l102.11 37.18c35.19-81.54 86.21-144.29 139-173.7-95.88-4.89-188.78 36.96-248.53 111.8-6.69 8.4-2.66 21.05 7.42 24.72zm132.25 48.16l238.48 86.83c35.76-121.38 18.7-231.66-42.63-253.98-7.4-2.7-15.13-4-23.09-4-58.02.01-128.27 69.17-172.76 171.15zM521.48 60.5c6.22 16.3 10.83 34.6 13.2 55.19 5.74 49.89-1.42 108.23-18.95 166.98l102.62 37.36c10.09 3.67 21.31-3.43 21.57-14.17 2.32-95.69-41.91-187.44-118.44-245.36zM560 447.98H321.06L386 269.5l-60.14-21.9-72.9 200.37H16c-8.84 0-16 7.16-16 16.01v32.01C0 504.83 7.16 512 16 512h544c8.84 0 16-7.17 16-16.01v-32.01c0-8.84-7.16-16-16-16z"></path></svg>
        };
        // debugger;
        return(
            <div className="spot-item" key={this.props.spot.id} onClick={this.handleClick}>
                <div className="spot-item-image">
                    <img className="index-spot-image" src={this.props.spot.image_url} />
                </div>
                <div className="spot-item-content">
                    <div className="spot-item-content-title">
                        <h3>{this.props.spot.name}</h3>
                        <div className="spot-index-tick">
                            <span>&#10003;</span>
                            <div className="spot-index-tick-arrow"></div>
                            <div className="spot-index-tick-message">
                                <p>The listing's accuracy has been verified by a <strong>HipTrip Associate.</strong>. You can plan your visit without doubts.</p>
                            </div>
                        </div>
                        <div className="spot-icon">
                            {icons[this.props.spot.category]}
                        </div>
                    </div>
                    <h5>{`${this.props.spot.city}, ${this.props.spot.state}`}</h5>
                    <div className="spot-item-content-footer">
                        <div className="spot-item-content-footer-review">
                            <i className="indexthumbs fa fa-thumbs-up" aria-hidden="true"></i>
                            <h3 className="spot-index-header-hundred-percent">100%</h3>
                            <h5 className="spot-show-header-review-count">- {Object.keys(reviews).length} Reviews</h5>
                        </div>
                        <h4 className="spot-item-content-footer-price">{`$${this.props.spot.price}/night`}</h4>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(SpotIndexItem);