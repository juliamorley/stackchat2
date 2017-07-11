import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import store from '../store';
import { connect } from 'react-redux'

// These values are all hardcoded...for now!
// Soon, we'll fetch them from the server!
const RANDOM_CHANNEL = '/channels/1';
const GENERAL_CHANNEL = '/channels/2';
const DOGS_CHANNEL = '/channels/3';
const LUNCH_CHANNEL = '/channels/4';

const mapStateToProps = function (state) {
  return {
    messages: state.messages,
    channels: state.channels
  };
};

function ChannelList (props) {
  return (
    <ul>
      <li>
        <NavLink to={"URL_GOES_HERE"} activeClassName="active">
          <span># {/* channel name goes here */}
          <span className="badge">{/* number of messages calculation goes here */}
            </span>
            </span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/new-channel">Create a channel...</NavLink>
      </li>
    </ul>
  );
}



/** Write your `connect` component below! **/

const ChannelListContainer = connect(mapStateToProps)(ChannelList);

export default ChannelListContainer;