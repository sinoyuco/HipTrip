import React from 'react';


class CampSiteTable extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        const campsites = this.props.elements.map((el,idx) => <li key={idx}>{el}</li>)
        return (
            <div className="campsite">
                {campsites}
            </div>
        );
    }

}

export default CampSiteTable;