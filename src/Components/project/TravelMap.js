import React from 'react'
import 'font-awesome/css/font-awesome.min.css';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import L from 'leaflet';

class TravelMap extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
     const position = [23.42, 53.85];
     const iconPerson = new L.Icon({
        iconUrl: require('./../../Assets/markerpin.png'),
        iconRetinaUrl: require('./../../Assets/markerpin.png'),
        iconSize: new L.Point(30.74, 24),
        className: 'leaflet-div-icon'
    });

    return (
      <Map center={position} 
            zoom={2} 
            preferCanvas={false}
            scrollWheelZoom={false}>
                
        <TileLayer
          attribution='&copy; <a href="http://openstreeetmap.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
         {this.props.personalMemory.map((popper) => {
             console.log(popper);
             console.log(this.props.personalMemory);
             let pos = [popper.log.markerLat, popper.log.markerLng]
            return(
            <Marker position={pos} key={popper.id} icon={iconPerson}>
                <Popup>
                  I was here. <br/> and it was AWESOME.
                </Popup>
            </Marker>
            )
         })}
      </Map>
    );
  }
}


export default TravelMap;