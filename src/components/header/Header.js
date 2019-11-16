import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import UserHeader from './components/UserHeader';

export default class Header extends Component {
  render() {
    return (
      <div>
        {/* <MediaQuery query={device.min.tablet}>
            <div>
                <UserHeader/>
            </div>
        </MediaQuery> */}
            <div>
                <UserHeader/>
            </div>
      </div>
    );
  }
}
