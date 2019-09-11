import {
  FETCH_DIRECTORY_BEGIN,
  FETCH_DIRECTORY_SUCCESS,
  FETCH_DIRECTORY_FAILURE
} from '../actions/directoryAction';

const initialState = {
  items: {
    valid: [],
    invalid: [],
  },
  loading: false,
  error: null
};

export default function directoryReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_DIRECTORY_BEGIN:
      // Mark the state as "loading" so we can show a spinner or something
      // Also, reset any errors. We're starting fresh.
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_DIRECTORY_SUCCESS:
      // All done: set loading "false".
      // Also, replace the items with the ones from the server
        console.log(action.payload.valid);
      return {
        ...state,
        loading: false,
        items: { ...state.items, [action.payload.valid ? 'valid' : 'invalid']: action.payload.directory },
      };

    case FETCH_DIRECTORY_FAILURE:
      // The request failed. It's done. So set loading to "false".
      // Save the error, so we can display it somewhere.
      // Since it failed, we don't have items to display anymore, so set `items` empty.
      //
      // This is all up to you and your app though:
      // maybe you want to keep the items around!
      // Do whatever seems right for your use case.
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: []
      };

    default:
      // ALWAYS have a default case in a reducer
      return state;
  }
}
