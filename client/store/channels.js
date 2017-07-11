import axios from 'axios';
import socket from '../socket';

// ACTION TYPES
const GET_NEW_CHANNEL = 'GET_NEW_CHANNEL';
const GET_CHANNELS = 'GET_CHANNELS';

// ACTION CREATORS
export function getChannels(channels) {
    const action = { type: GET_CHANNELS, channels };
    return action;
}

export function getNewChannel(channel) {
    const action = { type: GET_NEW_CHANNEL, channel };
    return action;
}

// THUNK CREATORS



export function fetchChannels() {

    return function thunk(dispatch) {
        return axios.get('/api/channels')
            .then(res => res.data)
            .then(channels => {
                const action = getChannels(channels);
                dispatch(action);
            });
    }
}

export function postNewChannel(newChannel, history) {
    return function thunk(dispatch) {
        return axios.post('/api/channels', newChannel)
            .then(res => res.data)
            .then(newChannel => {
                const action = getNewChannel(newChannel);
                dispatch(action);
                socket.emit('new-channel', newChannel);
                history.push(`/channels/${newChannel.id}`);
            });
    }
}

// REDUCER
export default function channelReducer(state = initialState, action) {
    switch (action.type) {
        case GET_CHANNELS:
            return { ...state, channels: action.channels };

        case GET_NEW_CHANNEL:
            return { ...state, channels: [...state.channels, action.channel] };
    }
}