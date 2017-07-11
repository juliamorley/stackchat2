import axios from 'axios';
import socket from '../socket';

// ACTION TYPES
const WRITE_CHANNEL = 'WRITE_CHANNEL';


// ACTION CREATORS
export function writeChannel(content) {
  const action = { type: WRITE_CHANNEL, content};
  return action;
}

// REDUCER
function reducer (state = initialState, action) {

  switch (action.type) {    

    case WRITE_CHANNEL:
      return {...state, newChannelEntry: action.content};

    default:
      return state;
  }

}
