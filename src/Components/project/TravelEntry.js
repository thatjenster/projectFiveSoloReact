import React, { Component } from 'react';
import Autocomplete from 'react-google-autocomplete';

class TravelEntry extends Component {
    render() {
        const {
			handleChange,
            handleClick,
            attrOne,
			date,
			inputError,
		} = this.props;

        return(
			
            <div>
				{/* memory input form */}
				<form action='submit'>
					<h2>Your Memories</h2>
					<label htmlFor='date' className='date'>
						When did you go?
					</label>
					<input type='date' name='date' onChange={handleChange} value={date} />
                    <label htmlFor='countryInput'>Where did you go?</label>
					{/* autocomplete from google to get location */}
					<Autocomplete
						apiKey= {process.env.REACT_APP_GMAP_API_KEY}
						onPlaceSelected={ (place) => {
							this.props.autoFunction(place);
						  }}
						types={['(regions)']}
					/>
                    <h2>Favorite Moments: </h2>
					<label htmlFor='attrOne'><i className="fa fa-paper-plane-o" aria-hidden="true"></i>
					</label>
					<input
						type='text'
						name='attrOne'
                        onChange={handleChange}
                        value={attrOne}
					/>
					<p className='errorMessage'>{inputError}</p>
					<button className="button formBtn" onClick={handleClick}>Post Me!</button>
				</form>
            </div>
        )
    }
}

export default TravelEntry;