import React, {Component} from 'react';
import api from './Api';
import {Link} from 'react-router';
const axios = require('axios');

export default class Stores extends Component {
  constructor(props) {
    super(props)
    this.state = {
      storeResults: []
    }
  }
  componentDidMount() {
    this.getStores()
  }
  getStores() {
    axios.get(api() + '/stores').then((response) => {
      let storeResults = response.data.data;
      this.setState({storeResults});
      // console.log(this.state.storeResults)
    })
  }
  render() {
    return (
      <div className="stores">
        <h1>Stores</h1>
        <ul style={{listStyle: 'none', padding: 0}}>
          {this.state.storeResults.map((store) => {
            return (
              <li key={store.id}><Link to={"/stores/" + store.id}>{store.name}</Link></li>
            )
          })
        }
        </ul>
      </div>
    );
  }
}
