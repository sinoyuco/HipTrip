# README

![alt-text][icon][logo]

[icon]: https://hiptrip-aa-seed.s3.amazonaws.com/logo/green_icon.png
[logo]: https://hiptrip-aa-seed.s3.amazonaws.com/logo/green_logo.png


HipTrip is an online marketplace for camping experiences, built with PostGRESQL, utilizing Ruby on Rails as the server side web application framework and the React framework on the front end. Users can browse and select spots and attempt to book them at will, choosing dates and number of guests.

  Users can search for camping experiences using location keywords and be led to a search page with their results filtered. This search page features a Google Maps API implementation that marks down the results, and results on this page are filtered as the map is being moved around by the user. 

## Contents
* Setup
* Authentication
* Search
* Spots
* Bookings
* Reviews

### Authentication
    Users can sign up or log in using the links in the navigation bar, which will prompt open modals with inputs, and a faulty submission of a log in or sign up form will render errors.

### Search
    (--Still in the making--)

### Setup
 Clone or download the project. Opeen your terminal and navigate to the project directory, and run the following commands: 
 * `npm install`
 * `bundle install`

    The App has certain components that are common at all levels: the Navbar, the Modal (which is usually hidden) and a Footer. The body is responsive to the path by utilizing a switch statement which then routes the user to one of the following components: 'Booking Index' , 'Spot Index', 'Spot Show' or 'Landing page (with Search and Categories containers)'.

    ```
    <div className="landing">
            <Modal/>
            <NavbarContainer/>
            <Switch>
                <Route exact path="/users/:userId/bookings" component={BookingsIndexContainer}/>
                <Route path="/discover" component={SpotSearchContainer}/>
                <Route path="/spots/:spotId" component={SpotShowContainer} />
                <Route exact path="/" component={Search} />
            </Switch>
            <Route exact path="/" component={CategoryIndexContainer} />
            <Footer/>
    </div>
    ```


### Spots
    Search functionality leads the users to the 'Spot Index' page, where users are able to browse multiple spots. 

    The Google Maps functionality is able to filter results based on the maps 'idling' events:

    ``` 
    google.maps.event.addListener(this.map, 'idle', () => {
            const { north, south, east, west } = this.map.getBounds().toJSON();
            const bounds = {
                northEast: { lat: north, lng: east },
                southWest: { lat: south, lng: west }
            };
            this.props.updateBounds(bounds);
        });
    ```

    The 'updateBounds()' function is then able to call the action creator for spot fetching based on bounds provided through filters, filtering the search results on the index level in the back end:

    action creator for updating bounds and fetching spots:
    ```
    export const updateBounds = (bounds) => (dispatch, getState) => {
    dispatch(changeBounds(bounds));
    return fetchSpots(getState().ui.filter)(dispatch);
    };
    ```

    filtering results in the backend based on bounds (self relates to spots):
    ```
    def self.in_bounds(bounds)
        self.where("latitude < ?", bounds[:northEast][:lat])
        .where("latitude > ?", bounds[:southWest][:lat])
        .where("longitude > ?", bounds[:southWest][:lng])
        .where("longitude < ?", bounds[:northEast][:lng])
    end
    ```

    Clicking on an individual spot will lead the user to that spot's page, filled with information regarding the spot's location, price, description, etc... The spot pages also feature reviews from other users that visited this spot and a rating along with their review message. Logged in users are able to create bookings by selecting check-in dates, check-out dates and number of guests.

### Bookings

    Each 'Spot Show' page provides a booking widget utilizing React Day Picker to pick check-in and and check-out dates, and allows for you to change the number of guests attending. Logged in users are able to book places, while logged out users will be led to the 'Log In' Modal upon a book attempt. The widget is responsive to user scroll and will be fixed in certain divisions of the 'Spot Show' page and will be positioned absolute before/after certain thresholds, using event listeners in the life cycle method(s), and a 'className' variable that gets passed to the booking widget in the return statement of the render method.

    ```
    componentDidMount(){
        
        ...

        document.addEventListener('scroll', () => {
            const belowPictures = window.scrollY < 550;
            if (belowPictures !== this.state.scrollFixedUp) {
                this.setState({ scrollFixedUp: belowPictures });
            }
        });

        document.addEventListener('scroll', () => {
            //-491 for footer, -400 for map, +94 for fixed header
            const belowPictures2 = window.scrollY > (document.body.scrollHeight - window.innerHeight - 491 - 400 + 94 + 250);
            if (belowPictures2 !== this.state.scrollFixedDown){ 
                this.setState({ scrollFixedDown: belowPictures2 });
            }
        });
    }

    render(){
        ...
        const scrollClass = this.state.scrollFixedUp ? 'spot-show-booking-div' : (this.state.scrollFixedDown ? 'spot-show-booking-div-fixed-down' : 'spot-show-booking-div-absolute');

        return(
            ...
        ).
    }
    ````
    
### Reviews
    (--Still in the making--)