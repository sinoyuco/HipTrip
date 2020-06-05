import React from 'react';

class SpotShow extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        let spotId = parseInt(this.props.match.params.spotId);
        this.props.fetchSpot(spotId);
    }

    render(){
        if(!this.props.spot){
            return null;
        }
        const spot_photos = this.props.spot.photoUrls.map((photo_url,idx) => <div className="spot-show-images-sub" key={idx}>
            <img src={photo_url}></img>
        </div>)
        return(
            <div className="spot-show-master">
            <div className="spot-show-images">
                {spot_photos}
            </div>
            <div className="spot-show">
                <div className="spot-show-main">
                    <div className="spot-show-header">
                        <div className="spot-show-1">
                            <h3>{this.props.spot.state}</h3>
                            <h2>{this.props.spot.name}</h2>
                            <h3>{this.props.spot.price}</h3>
                        </div>
                        <div className="spot-show-header-2">
                            <div className="spot-show-header-2-1">

                            </div>

                            <div className="spot-show-header-2-2">
                                <button className="spot-show-header-2-2-upload">Upload</button>
                                <button className="spot-show-header-2-2-save">Save to List</button>
                                <div className="spot-show-header-2-2-share">
                                    <span className= "spot-show-header-2-2-share-icon"></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="spot-show-bot">
                        <div className="spot-show-user-profile">

                        </div>

                        <div className="spot-show-description">
                            <p>{this.props.spot.description}</p>
                        </div>

                    </div>
                    
                    <div className = "spot-show-tables">
                        <div className="spot-show-tables-campsite">

                        </div>

                        <div className="spot-show-tables-essentials">

                        </div>

                        <div className="spot-show-tables-amenities">

                        </div>

                    </div>
                    
                </div>
                <div className="spot-show-side">

                </div>
            </div>
        </div>
        );
    }

}

export default SpotShow;

