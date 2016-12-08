import React, {Component} from 'react';
import api from './Api';
import GoogleMap from 'google-map-react';
import MyStore from './mystore';

const axios = require('axios');

export default class Store extends Component {
  constructor(props) {
    super(props)
    this.state = {
      storeResult: {
        services: []
      }
    }
  }
  componentDidMount() {
    this.getStore()
  }
  getStore() {
    axios.get(api() + '/stores/' + this.props.params.storeId).then((response) => {
      let storeResult = response.data;
      this.setState({storeResult});
    })
  }
  render() {
    return (
      <div className="store" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <h3 style={{marginBottom: 0}}>{this.state.storeResult.address}</h3>
        <h3 style={{marginTop: 0}}>{this.state.storeResult.city}, {this.state.storeResult.state} {this.state.storeResult.zip}</h3>
        <ul style={{listStyle: 'none', paddingLeft: '0'}}>
          {this.state.storeResult.services.map((service) => {
            return (
              <li key={service.id}>{service.name}</li>
            )
          })}
        </ul>
        <div className='map' style={{height: '450px', width: '80%'}}>
          <GoogleMap center={{lat: this.state.storeResult.lat, lng: this.state.storeResult.lng}} defaultZoom={11}>
            <MyStore lat={this.state.storeResult.lat} lng={this.state.storeResult.lng} />
          </GoogleMap>
        </div>
      </div>
    );
  }
}
