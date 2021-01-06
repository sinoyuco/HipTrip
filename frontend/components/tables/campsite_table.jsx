import React from 'react';
import maps from './amenities_map';

class CampSiteTable extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        const campsites = this.props.elements.map((el, idx) => <li key={idx}><img className="amenities-pics" src={maps[el]} />{el} available</li>)
    //     const shower = <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	//  viewBox="0 0 330 330" style="enable-background:new 0 0 330 330;" xml:space="preserve"></svg>;
        return (
            <div className="campsite">
                {campsites}
                {/* <img src={shower}/> */}
            </div>
        );
    }

}

export default CampSiteTable;