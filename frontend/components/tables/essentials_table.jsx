import React from 'react';


class EssentialsTable extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        const essentials = this.props.elements.map((el,idx) => <li key={idx}>{el}</li>)
        return (
            <div className="essentials">
                {essentials}
            </div>
        );
    }

}

export default EssentialsTable;