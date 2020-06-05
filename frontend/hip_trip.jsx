import React from "react";
import ReactDOM from "react-dom";
import {login, logout, signup} from './util/session_api_util';
// import {openModal, closeModal} from './actions/modal_actions';
import configureStore from './store/store';
import Root from './components/root';
import {receiveSpots} from './actions/spot_actions';

document.addEventListener("DOMContentLoaded", () => {
   let store;
   if(window.currentUser){
       const preloadedState ={
           entities: {
           users: {[window.currentUser.id]: window.currentUser}
       },
       session:{id: window.currentUser.id}
    }
    store = configureStore(preloadedState);
   }else{
       store = configureStore();
   }
   window.getState = store.getState;
   window.dispatch = store.dispatch;
   window.receiveSpots = receiveSpots;

    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store}/>, root);
});