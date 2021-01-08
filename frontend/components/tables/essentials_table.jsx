import React from 'react';
import maps from './amenities_map';

class EssentialsTable extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        const essentials = this.props.elements.map((el, idx) => <li className="amenities-list" key={idx}>
            <img className="amenities-pics" src={maps[el]} /> 
            <h2 className="amenities-text">{el}</h2>
            </li>)
        return (
            <div className="essentials">
                {essentials}
            </div>
        );
    }

}

export default EssentialsTable;