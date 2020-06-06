import React from 'react';


class AmenitiesTable extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const amenities = this.props.elements.map((el,idx) => <li key={idx}>{el} available</li>)
        return(
            <div className="amenities">
                {amenities}
            </div>
        );
    }

}


export default AmenitiesTable;