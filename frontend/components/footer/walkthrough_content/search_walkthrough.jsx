import React from 'react';
import { Spring } from 'react-spring/renderprops';


const SearchWalkThrough = () => {
    return (
        <Spring from={{ opacity: 0, marginTop: -50 }} to={{ opacity: 1, marginTop: 0 }} config={{duration: 500}}>
            {props => (
                <div style={props} className="walkthrough-body-main">
                    <h4>Here are your search results!</h4>

                    <p>On this level, change your filters using the buttons of camping types, or the search bar on the header.</p>

                    <p>If you'd rather find your preferred location manually, we got you covered. Just scroll through the map, and your spots will be updated.</p>

                    <p>Select a spot to learn more about them, leave reviews or book!</p>
                </div>
            )}
        </Spring>
    );


}

export default SearchWalkThrough;

