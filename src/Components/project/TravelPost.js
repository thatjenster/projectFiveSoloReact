import React from 'react';

const TravelPost = ({
	date,
	countryInput,
	attrOne,
	deleteEntry,
	uniqueId
}) => {
	return (
		<li className='eachEntry' key={uniqueId}>
			<button onClick={deleteEntry}><i class="fa fa-trash" aria-hidden="true"></i>
			</button>

			<div className='content'>
				<h3>{countryInput}</h3>
				<p>{date}</p>
				<div>{attrOne}</div>
			</div>
		</li>
	);
};

export default TravelPost;