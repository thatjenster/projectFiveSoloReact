import React, { Component } from 'react';
import Autocomplete from 'react-google-autocomplete';

class TravelEntry extends Component {
    render() {
        const {
			handleChange,
            handleClick,
            countryInput,
            attrOne,
			date,
			inputError,

		} = this.props;
        return(
            <div>
				<form className="travelEntry" action='submit'>
					<h2>Your Memories</h2>

					<label htmlFor='date' className='date'>
						When did you go?
					</label>
					<input type='date' name='date' onChange={handleChange} value={date} />
                    <label htmlFor='countryInput'>Where did you go?</label>
					<Autocomplete
						apiKey='AIzaSyA0q4l001f40aI0cHAqqWcebpVOPJNr_XE'
						onPlaceSelected={ (place) => {
							this.props.autoFunction(place);
						  }}
						types={['(regions)']}
					/>
                    {/* <input
						type='text'
						name='countryInput'
                        onChange={handleChange}
                        value={countryInput}
					/> */}
					
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