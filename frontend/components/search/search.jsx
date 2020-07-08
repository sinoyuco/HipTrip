import React from 'react';
import {Route, Link, NavLink} from 'react-router-dom';
import DayPicker, { DateUtils } from 'react-day-picker';
import "react-day-picker/lib/style.css";
import daypickerstyle from '../../../app/assets/stylesheets/day_picker.css'

class Search extends React.Component{
    constructor(props){
        super(props);
        this.state = {from: undefined, to: undefined, type: 'All Camping'};
        // this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDayClick = this.handleDayClick.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }

    // handleSubmit(e){
    //     e.preventDefault();
    // }

    handleDayClick(day){
        // e.preventDefault();
        const range = DateUtils.addDayToRange(day, this.state);
        this.setState(range);

        if(range.to){
            setTimeout(() => {
                document.activeElement.blur();
            },150);
        }
    }

    handleReset(e){
        this.setState({from: undefined, to: undefined});
    }

    handleSelect(e){
        e.preventDefault();
        this.setState({type: e.currentTarget.value});
        debugger;
    }

    render(){
        const { from, to } = this.state;
        const modifiers = { start: from, end: to };
        debugger;

        const modifiersStyles = {
            selected: {
                color: 'white',
                backgroundColor: '#40d9ac'
            },
            // month: {
            //     flex-direction: 'row',
            //     flex-wrap: 'nowrap'
            // }
            
        }

        const date_button_text = ((this.state.from && this.state.to) ? `${this.state.from.getMonth()+1}/${this.state.from.getDate()} - ${this.state.to.getMonth()+1}/${this.state.to.getDate()}` : 'Enter Date');

        const day_picker = <div className="search-bar-day-picker-div"><DayPicker className="search-bar-day-picker" numberOfMonths={2} selectedDays={[from, { from, to }]} modifiers={modifiers} modifiersStyles={modifiersStyles} onDayClick={this.handleDayClick} /></div>;
        // const day_picker = <DayPicker className="search-bar-day-picker" numberOfMonths={2} selectedDays={[from, { from, to }]} modifiers={modifiers} onDayClick={this.handleDayClick} />;
        return(
            <div className="search">
                <div className="search-header">
                    <h1>Feel the nature on your skin.</h1>
                    <h2>Book unique camping experiences on over 30 campsites, cabins, RV parks, public parks and more.</h2>
                </div>
                <div className="search-bar-div">
                    <form className="search-bar-form">
                        <div className="search-bar-main">
                            <div className="search-bar-input-icon">
                                <i className="fa fa-search" aria-hidden="true"></i> 
                            </div>
                            <input className="search-bar-input" type="text" placeholder="Austin, Texas"/>
                        </div>

                        <button className="search-bar-date">
                            <div className="search-bar-date-icon">
                                <i className="far fa-calendar"></i>
                            </div>
                             <h5 className="search-bar-date-text">{date_button_text}</h5>
                            {day_picker}
                        </button>

                        <button className="search-bar-category">

                            <select onChange={this.handleSelect} className="search-bar-category-select" name="type">
                                <option value="All Camping">All Camping</option>
                                <option value="Camping">Camping</option>
                                <option value="Glamping">Glamping</option>
                                <option value="RVs">RVs</option>
                            </select>

                            {/* <div className="search-bar-category-icon">
                                <i className="fas fa-tree"></i>
                            </div>

                            <h5>All Camping </h5>

                            <div className="search-bar-category-icon-2">
                                <i className="fa fa-angle-down" aria-hidden="true"></i>
                            </div> */}

                        </button>
                        <Link className="search-bar-submit-link" to="/discover"><button className="search-bar-submit">Search</button></Link>
                    </form>
                </div>
            </div>
        );
    }
}

export default Search;