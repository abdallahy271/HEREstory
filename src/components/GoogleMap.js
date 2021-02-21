import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import picture from '../image/icons8-united-states-48.png'

const data = [{ lat: 38.901444, lng:  -77.046167, name: 'Cleveland Abbe House'},
    { lat: 38.910838, lng: -77.035167 , name:'Administration Building, Carnegie Institution of Washington'},
    { lat: 38.903333, lng: -77.024444, name: 'American Federation of Labor Building'},
    { lat: 38.8994, lng: -77.0386, name: 'American Peace Society' },
    { lat: 38.91075, lng: -77.047944, name: 'Anderson House'},
    { lat: 38.89767, lng:-77.03655 , name:'White House'},
    { lat: 38.909444, lng: -77.069167, name:'Volta Bureau'},
    { lat: 38.889722, lng: -77.008889, name:'United States Capitol'},
    { lat: 38.910808, lng: -77.063339 , name:'Tudor Place'},
    { lat: 38.890833, lng: -77.004444 , name:'Supreme Court Building'},
    { lat: 38.900278, lng: -77.035278, name:"St. John's Church"},
    { lat: 38.863333,lng: -77.016944 , name:"National War College"}
]
  //note: code formatted for ES6 here
export class MapContainer extends React.Component {
    state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      mapCenter: {
          lat:38.889805,
          lng:-77.009056
      ,
    },
    };
   
    onMarkerClick = (props, marker, e) =>{
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      })};
   
    onMapClicked = (props) => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        })
      }
    };

   
    render() {
   
      return (
        <Map google={this.props.google}
            initialCenter={{
                lat: this.state.mapCenter.lat,
                lng: this.state.mapCenter.lng
            }}
            onClick={this.onMapClicked}>
          {data.map((landmark) => (
          <Marker
    onClick={this.onMarkerClick}
    title={landmark.name}
    name={landmark.name}
    position={{lat: landmark.lat, lng: landmark.lng}} 
    icon={ picture } 
    // onClick={() => {
    //     this.setState({selectedPlace:landmark})}} />
    />   ))}
    
          {this.state.selectedPlace && <InfoWindow
          position={{
            lat: this.state.selectedPlace.lat,
            lng: this.state.selectedPlace.lng,
          }}
          onCloseClick={() => this.setState({selectedPlace:null})}
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            >
              <div>
                <h3>{this.state.selectedPlace.name}</h3>
              </div>
          </InfoWindow> }

        </Map>
      )
    }
  }

  export default GoogleApiWrapper({
    apiKey: ('AIzaSyAgYdjt-cd3GQmi8PDhQ_hq_S3ek9UHRbI')
  })(MapContainer)