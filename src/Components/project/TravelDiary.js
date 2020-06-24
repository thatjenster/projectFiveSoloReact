import React, { Component } from 'react';
import Swal from 'sweetalert2';
import TravelEntry from './TravelEntry';
import TravelPost from './TravelPost';
import TravelMap from './TravelMap';
import firebase from './../../firebase.js';

class TravelDiary extends Component {
    constructor(props) {
		super(props);
		this.state = {
			dbRef: firebase.database(),
			personalMemory: [],
			date: '',
			countryInput: '',
			attrOne: '',
			inputError: '',
			markerPosition: {
				lat: '',
				lng: ''
			}
		};
    }
    componentDidMount() {
		this.state.dbRef.ref('users/' + this.props.user).on('value', response => {
			const newState = [];
			const data = response.val();
			for (let key in data) {
				newState.push({
					dt: data[key],
					id: key
				});
			}
			this.setState({
				personalMemory: newState
			});
		});
    }
    onPlaceSelected = ( place ) => {
		const addressArray =  place.address_components;
		const country = addressArray[0].long_name;
		console.log(country);
		console.log(this.props);

		// Set these values in the state.
		this.setState({
			countryInput: country,
			markerPosition: {
				lat: place.geometry.location.lat(),
				lng: place.geometry.location.lng()
			}
		})
	};
    handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	// VALIDATION CHECK: make sure user fill out all required field
	inputCheck = () => {
		let inputError = '';

		if (
			this.state.date.length === 0 ||
			this.state.countryInput.length === 0 ||
			this.state.attrOne.length === 0 

		) {
			inputError = 'Hello! Please fill it all out.';
		}

		if (inputError) {
			this.setState({ inputError });
			return false;
		}
		return true;
	};

	// event - > handle click event
	handleClick = event => {
		event.preventDefault();
		const isValid = this.inputCheck();
		if (isValid) {
			this.setState({
				date: '',
				countryInput: '',
				attrOne: '',
				inputError: '',
				markerPosition: {
					lat: '',
					lng: ''
				}
			});

	// push to firebase
				  console.log(this.state.user);

			this.state.dbRef.ref('users/' + this.props.user).push({
				date: this.state.date,
				countryInput: this.state.countryInput,
				attrOne: this.state.attrOne,
				markerLat: this.state.markerPosition.lat,
				markerLng: this.state.markerPosition.lng
			});
		}
	};

	// delete personalMemory that user inputted 
	deleteMemory = memoryId => {
		Swal.fire({
			title: 'Are you sure you want to delete this Memory?',
			type: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#846075',
			cancelButtonColor: '#1A1423',
			confirmButtonText: 'Yes, delete it!'
		}).then(result => {
			if (result.value) {
				this.state.dbRef.ref().child(memoryId).remove();
			}
			console.log(memoryId);
		});
	};
    render() {
      return (
        <main>
            <section className='personalBoard'>
			<div>
				<TravelEntry
					handleChange={this.handleChange}
					handleClick={this.handleClick}
					date={this.state.date}
					countryInput={this.state.countryInput}
					attrOne={this.state.attrOne}
                    inputError={this.state.inputError}
					autoFunction={this.onPlaceSelected}
					user={this.props.user}
				/>
			</div>
			<div>
				<ul className="personalDiary">
					{this.state.personalMemory.map(entry => {
						return (
							<TravelPost
								key={entry.id.user}
								date={entry.dt.date}
								countryInput={entry.dt.countryInput}
								attrOne={entry.dt.attrOne}
								deleteEntry={() => this.deleteMemory(entry.id)}
							/>
						);
					})}
				</ul>
			</div>
            </section>
			<div className="mapSection">
                <TravelMap 
                personalMemory={this.state.personalMemory}
                />
		    </div>
        </main>
      )
    }
  }
  
  export default TravelDiary;