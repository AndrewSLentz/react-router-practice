import React, {Component} from 'react';

export default class MyStore extends Component {
  render() {
    return (
      <span dangerouslySetInnerHTML={{__html: `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      	 width="30px" height="30px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
      <path d="M322.397,252.352l75.068-75.067c19.346,5.06,40.078,3.441,58.536-4.873L339.589,56c-8.313,18.458-9.933,39.189-4.873,58.536
      	l-75.066,75.067c-35.168-16.745-76.173-17.14-111.618-1.176l65.009,65.01L55.999,456l202.563-157.041l65.01,65.01
      	C339.535,328.526,339.142,287.519,322.397,252.352z M201.513,216.553c0,0-16.568-16.568-21.323-21.035
      	c37.027-10.806,61.375,4.323,61.375,4.323C218.946,192.781,201.513,216.553,201.513,216.553z"/>
      </svg>`}} />
    );
  }
}
