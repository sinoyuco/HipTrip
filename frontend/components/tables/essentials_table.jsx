import React from 'react';
import maps from './amenities_map';

class EssentialsTable extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        const essentials = this.props.elements.map((el, idx) => <li key={idx}><img className="amenities-pics" src={maps[el]} />{el}</li>)
        return (
            <div className="essentials">
                {essentials}
            </div>
        );
    }

}

export default EssentialsTable;