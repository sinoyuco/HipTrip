import React from 'react';
import {Route, Link, NavLink} from 'react-router-dom';
import DayPicker, { DateUtils } from 'react-day-picker';
import "react-day-picker/lib/style.css";
import daypickerstyle from '../../../app/assets/stylesheets/day_picker.css'

class Search extends React.Component{
    constructor(props){
        super(props);
        this.state = {from: undefined, to: undefined, type: 'All Camping', type_send: ['Camping', 'Glamping', 'RVs', 'Beach Camping'], search_term: ''};
        // this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDayClick = this.handleDayClick.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.handleTypeClick = this.handleTypeClick.bind(this);
        this.updateSearchTerm = this.updateSearchTerm.bind(this);
    }

    // handleSubmit(e){
    //     e.preventDefault();
    // }

    updateSearchTerm(){
        return e => this.setState({ search_term: e.currentTarget.value})
    }

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

    handleTypeClick(str){
        return e => {
            e.preventDefault();
            let typearr = (str === 'All Camping' ? ['Camping', 'Glamping', 'RVs', 'Beach Camping'] : [str]);
            this.setState({type: str, type_send: typearr});
            
            document.activeElement.blur();
            
        }
        // e.preventDefault();
        // this.setState({type: str});
    }

    render(){
        const { from, to } = this.state;
        const modifiers = { start: from, end: to };
        

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
        const type_tick = this.state.type

        const chosen_icon = { 
            'All Camping': <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="tree" className="svg-inline--fa fa-tree fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M378.31 378.49L298.42 288h30.63c9.01 0 16.98-5 20.78-13.06 3.8-8.04 2.55-17.26-3.28-24.05L268.42 160h28.89c9.1 0 17.3-5.35 20.86-13.61 3.52-8.13 1.86-17.59-4.24-24.08L203.66 4.83c-6.03-6.45-17.28-6.45-23.32 0L70.06 122.31c-6.1 6.49-7.75 15.95-4.24 24.08C69.38 154.65 77.59 160 86.69 160h28.89l-78.14 90.91c-5.81 6.78-7.06 15.99-3.27 24.04C37.97 283 45.93 288 54.95 288h30.63L5.69 378.49c-6 6.79-7.36 16.09-3.56 24.26 3.75 8.05 12 13.25 21.01 13.25H160v24.45l-30.29 48.4c-5.32 10.64 2.42 23.16 14.31 23.16h95.96c11.89 0 19.63-12.52 14.31-23.16L224 440.45V416h136.86c9.01 0 17.26-5.2 21.01-13.25 3.8-8.17 2.44-17.47-3.56-24.26z"></path></svg>,
            'Camping': <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="campground" className="svg-inline--fa fa-campground fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M624 448h-24.68L359.54 117.75l53.41-73.55c5.19-7.15 3.61-17.16-3.54-22.35l-25.9-18.79c-7.15-5.19-17.15-3.61-22.35 3.55L320 63.3 278.83 6.6c-5.19-7.15-15.2-8.74-22.35-3.55l-25.88 18.8c-7.15 5.19-8.74 15.2-3.54 22.35l53.41 73.55L40.68 448H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h608c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM320 288l116.36 160H203.64L320 288z"></path></svg>,
            'Glamping': <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="warehouse" className="svg-inline--fa fa-warehouse fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M504 352H136.4c-4.4 0-8 3.6-8 8l-.1 48c0 4.4 3.6 8 8 8H504c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm0 96H136.1c-4.4 0-8 3.6-8 8l-.1 48c0 4.4 3.6 8 8 8h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm0-192H136.6c-4.4 0-8 3.6-8 8l-.1 48c0 4.4 3.6 8 8 8H504c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm106.5-139L338.4 3.7a48.15 48.15 0 0 0-36.9 0L29.5 117C11.7 124.5 0 141.9 0 161.3V504c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8V256c0-17.6 14.6-32 32.6-32h382.8c18 0 32.6 14.4 32.6 32v248c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8V161.3c0-19.4-11.7-36.8-29.5-44.3z"></path></svg>,
            'RVs': <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caravan" className="svg-inline--fa fa-caravan fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M416,208a16,16,0,1,0,16,16A16,16,0,0,0,416,208ZM624,320H576V160A160,160,0,0,0,416,0H64A64,64,0,0,0,0,64V320a64,64,0,0,0,64,64H96a96,96,0,0,0,192,0H624a16,16,0,0,0,16-16V336A16,16,0,0,0,624,320ZM192,432a48,48,0,1,1,48-48A48.05,48.05,0,0,1,192,432Zm64-240a32,32,0,0,1-32,32H96a32,32,0,0,1-32-32V128A32,32,0,0,1,96,96H224a32,32,0,0,1,32,32ZM448,320H320V128a32,32,0,0,1,32-32h64a32,32,0,0,1,32,32Z"></path></svg>,
            'Beach Camping': <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="umbrella-beach" className="svg-inline--fa fa-umbrella-beach fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M115.38 136.9l102.11 37.18c35.19-81.54 86.21-144.29 139-173.7-95.88-4.89-188.78 36.96-248.53 111.8-6.69 8.4-2.66 21.05 7.42 24.72zm132.25 48.16l238.48 86.83c35.76-121.38 18.7-231.66-42.63-253.98-7.4-2.7-15.13-4-23.09-4-58.02.01-128.27 69.17-172.76 171.15zM521.48 60.5c6.22 16.3 10.83 34.6 13.2 55.19 5.74 49.89-1.42 108.23-18.95 166.98l102.62 37.36c10.09 3.67 21.31-3.43 21.57-14.17 2.32-95.69-41.91-187.44-118.44-245.36zM560 447.98H321.06L386 269.5l-60.14-21.9-72.9 200.37H16c-8.84 0-16 7.16-16 16.01v32.01C0 504.83 7.16 512 16 512h544c8.84 0 16-7.17 16-16.01v-32.01c0-8.84-7.16-16-16-16z"></path></svg>}

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
                            <input onChange={this.updateSearchTerm()} className="search-bar-input" type="text" placeholder="Austin, Texas"/>
                        </div>

                        <button onClick={(e)=>{e.preventDefault();}} className="search-bar-date">
                            <div className="search-bar-date-icon">
                                <i className="far fa-calendar"></i>
                            </div>
                             <h5 className="search-bar-date-text">{date_button_text}</h5>
                            {day_picker}
                        </button>

                        <button onClick={(e) => { e.preventDefault(); }} className="search-bar-category">

                            <div className="search-bar-category-icon">
                                {chosen_icon[this.state.type]}
                            </div>

                            <h5>{this.state.type}</h5>

                            <div className="search-bar-category-icon-2">
                                <i className="fa fa-angle-down" aria-hidden="true"></i>
                            </div>

                            <ul className="category-dropdown">
                                <li onClick={this.handleTypeClick('All Camping')}>
                                    <div className="category-dropdown-left">
                                        {this.state.type === 'All Camping' ? <i className="fas fa-check"></i> : null}
                                    </div>
                                    <div className="category-dropdown-mid">All Camping</div>
                                    <div className="category-dropdown-right">
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="tree" className="svg-inline--fa fa-tree fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M378.31 378.49L298.42 288h30.63c9.01 0 16.98-5 20.78-13.06 3.8-8.04 2.55-17.26-3.28-24.05L268.42 160h28.89c9.1 0 17.3-5.35 20.86-13.61 3.52-8.13 1.86-17.59-4.24-24.08L203.66 4.83c-6.03-6.45-17.28-6.45-23.32 0L70.06 122.31c-6.1 6.49-7.75 15.95-4.24 24.08C69.38 154.65 77.59 160 86.69 160h28.89l-78.14 90.91c-5.81 6.78-7.06 15.99-3.27 24.04C37.97 283 45.93 288 54.95 288h30.63L5.69 378.49c-6 6.79-7.36 16.09-3.56 24.26 3.75 8.05 12 13.25 21.01 13.25H160v24.45l-30.29 48.4c-5.32 10.64 2.42 23.16 14.31 23.16h95.96c11.89 0 19.63-12.52 14.31-23.16L224 440.45V416h136.86c9.01 0 17.26-5.2 21.01-13.25 3.8-8.17 2.44-17.47-3.56-24.26z"></path></svg>
                                    </div>
                                </li>
                                <li onClick={this.handleTypeClick('Camping')}>
                                    <div className="category-dropdown-left">
                                        {this.state.type === 'Camping' ? <i className="fas fa-check"></i> : null}
                                    </div>
                                    <div className="category-dropdown-mid">Camping</div>
                                    <div className="category-dropdown-right">
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="campground" className="svg-inline--fa fa-campground fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M624 448h-24.68L359.54 117.75l53.41-73.55c5.19-7.15 3.61-17.16-3.54-22.35l-25.9-18.79c-7.15-5.19-17.15-3.61-22.35 3.55L320 63.3 278.83 6.6c-5.19-7.15-15.2-8.74-22.35-3.55l-25.88 18.8c-7.15 5.19-8.74 15.2-3.54 22.35l53.41 73.55L40.68 448H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h608c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM320 288l116.36 160H203.64L320 288z"></path></svg>
                                    </div>
                                </li>
                                <li onClick={this.handleTypeClick('Glamping')}>
                                    <div className="category-dropdown-left">
                                        {this.state.type === 'Glamping' ? <i className="fas fa-check"></i> : null}
                                    </div>
                                    <div className="category-dropdown-mid">Glamping</div>
                                    <div className="category-dropdown-right">
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="warehouse" className="svg-inline--fa fa-warehouse fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M504 352H136.4c-4.4 0-8 3.6-8 8l-.1 48c0 4.4 3.6 8 8 8H504c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm0 96H136.1c-4.4 0-8 3.6-8 8l-.1 48c0 4.4 3.6 8 8 8h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm0-192H136.6c-4.4 0-8 3.6-8 8l-.1 48c0 4.4 3.6 8 8 8H504c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm106.5-139L338.4 3.7a48.15 48.15 0 0 0-36.9 0L29.5 117C11.7 124.5 0 141.9 0 161.3V504c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8V256c0-17.6 14.6-32 32.6-32h382.8c18 0 32.6 14.4 32.6 32v248c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8V161.3c0-19.4-11.7-36.8-29.5-44.3z"></path></svg>
                                    </div>
                                </li>
                                <li onClick={this.handleTypeClick('RVs')}>
                                    <div className="category-dropdown-left">
                                        {this.state.type === 'RVs' ? <i className="fas fa-check"></i> : null}
                                    </div>
                                    <div className="category-dropdown-mid">RVs</div>
                                    <div className="category-dropdown-right">
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caravan" className="svg-inline--fa fa-caravan fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M416,208a16,16,0,1,0,16,16A16,16,0,0,0,416,208ZM624,320H576V160A160,160,0,0,0,416,0H64A64,64,0,0,0,0,64V320a64,64,0,0,0,64,64H96a96,96,0,0,0,192,0H624a16,16,0,0,0,16-16V336A16,16,0,0,0,624,320ZM192,432a48,48,0,1,1,48-48A48.05,48.05,0,0,1,192,432Zm64-240a32,32,0,0,1-32,32H96a32,32,0,0,1-32-32V128A32,32,0,0,1,96,96H224a32,32,0,0,1,32,32ZM448,320H320V128a32,32,0,0,1,32-32h64a32,32,0,0,1,32,32Z"></path></svg>
                                    </div>
                                </li>
                                <li onClick={this.handleTypeClick('Beach Camping')}>
                                    <div className="category-dropdown-left">
                                        {this.state.type === 'Beach Camping' ? <i className="fas fa-check"></i> : null}
                                    </div>
                                    <div className="category-dropdown-mid">Beach Camping</div>
                                    <div className="category-dropdown-right">
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="umbrella-beach" className="svg-inline--fa fa-umbrella-beach fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M115.38 136.9l102.11 37.18c35.19-81.54 86.21-144.29 139-173.7-95.88-4.89-188.78 36.96-248.53 111.8-6.69 8.4-2.66 21.05 7.42 24.72zm132.25 48.16l238.48 86.83c35.76-121.38 18.7-231.66-42.63-253.98-7.4-2.7-15.13-4-23.09-4-58.02.01-128.27 69.17-172.76 171.15zM521.48 60.5c6.22 16.3 10.83 34.6 13.2 55.19 5.74 49.89-1.42 108.23-18.95 166.98l102.62 37.36c10.09 3.67 21.31-3.43 21.57-14.17 2.32-95.69-41.91-187.44-118.44-245.36zM560 447.98H321.06L386 269.5l-60.14-21.9-72.9 200.37H16c-8.84 0-16 7.16-16 16.01v32.01C0 504.83 7.16 512 16 512h544c8.84 0 16-7.17 16-16.01v-32.01c0-8.84-7.16-16-16-16z"></path></svg>
                                    </div>
                                </li>
                            </ul>

                        </button>
                        <Link className="search-bar-submit-link" to={{pathname: "/discover", search_terms: {search_term: this.state.search_term, type: this.state.type_send}}}><button className="search-bar-submit">Search</button></Link>
                        {/* <button onClick={() => this.props.history.push()} className="search-bar-submit">Search</button> */}
                    </form>
                </div>
            </div>
        );
    }
}

export default Search;