import React, {Component} from 'react';
import api from './Api';

const axios = require('axios');


export default class Store extends Component {
  constructor(props) {
    super(props)
    this.state = {
      storeResult: {}
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
      <div className="store">
        <h1>STORE</h1>
        {console.log(this.state.storeResult)}
      </div>
    );
  }
}
