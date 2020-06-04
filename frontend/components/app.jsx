import React from 'react';
import Modal from './auth/modal';
import NavbarContainer from './navbar/navbar_container'
import SpotSearchContainer from './search/spot_search_container';
import CategoryIndexContainer from './categories/category_index_container';
import Search from './search/search';
import {Switch, Route} from 'react-router-dom';
import Footer from './footer/footer';
import SpotShowContainer from './spots/spot_show_container';

class App extends React.Component{
    render(){
        return(
            <div>
                <Modal/>
                <NavbarContainer/>
                <Switch>
                    <SpotSearchContainer path="/discover" component={SpotSearchContainer}/>
                    <Route path="/spots/:spotId" component={SpotShowContainer} />
                    <Route exact path="/" component={Search} />
                </Switch>
                <Route exact path="/" component={CategoryIndexContainer} />
                <Footer/>
            </div>
        );
    }
}

export default App;