import React from 'react';

class CategoryIndex extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="category-index">
                <div className="category-index-hosting-image-div">
                    <img src="https://westernnews.media.clients.ellingtoncms.com/img/photos/2019/09/26/Ranch_of_Oaks_1_t715.jpg?529764a1de2bdd0f74a9fb4f856b01a9d617b3e9"/>
                
                    <div className="category-index-hosting-message">
                        <h3>Own land? Earn money hosting on HipTrip</h3>
                        <h5>Help more people spend time outside. Share your land with campers, glampers, and RV travelers.</h5>
                        <button>Become a Host</button>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default CategoryIndex;