import React from 'react'
import 'font-awesome/css/font-awesome.min.css';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import L from 'leaflet';

class TravelMap extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    // const position = [this.state.lat, this.state.lng];
     const position = [43.6532, -79.3832];
    //  const iconPerson = new L.Icon({
    //     iconUrl: require('./../assets/star.jpg'),
    //     iconRetinaUrl: require('./../assets/star.jpg'),
    //     iconSize: new L.Point(40, 60),
    //     className: 'leaflet-div-icon'
    // });


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
             let pos = [popper.log.markerLat, popper.log.markerLng]
            return(
            <Marker position={pos} key={popper.id} >
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