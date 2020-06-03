import React from 'react';
import Modal from './auth/modal';
import NavbarContainer from './navbar/navbar_container'
import SpotSearchContainer from './search/spot_search_container';
import CategoryIndexContainer from './categories/category_index_container';

class App extends React.Component{
    render(){
        return(
            <div>
                <Modal/>
                <NavbarContainer/>
                <SpotSearchContainer/>
                <CategoryIndexContainer/>
            </div>
        );
    }
}

export default App;