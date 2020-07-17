import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const mapStyles = {
  width: "50%",
  height: "50%",
  margin: "100px",
  marginLeft: "350px",
  border: "10px solid black",
};

class MapContainer extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
    };
  }

  render() {
    return (
      <div>
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
            lat: 17.4024796,
            lng: 78.5948451,
          }}
        >
          <Marker onClick={this.onMarkerClick} name={"This is test name"} />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBrm-DVbvJbvrjzR3VqvrS7kX1AFVTBc34",
})(MapContainer);
