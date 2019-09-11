export const FETCH_DIRECTORY_BEGIN   = 'FETCH_DIRECTORY_BEGIN';
export const FETCH_DIRECTORY_SUCCESS = 'FETCH_DIRECTORY_SUCCESS';
export const FETCH_DIRECTORY_FAILURE = 'FETCH_DIRECTORY_FAILURE';

export function fetchDirectory(valid) {
    console.log(valid)
    return dispatch => {
        dispatch(fetchDirectoryBegin());
        return fetch(`https://api.spaceapi.io/v2?valid=${valid ? 'true' : 'false'}`)
            .then(handleErrors)
            .then(res => res.json())
            .then(json => {
                dispatch(fetchDirectorySuccess(valid, json));
                return json.directory;
            })
            .catch(error => dispatch(fetchDirectoryFailure(error)));
    };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

export const fetchDirectoryBegin = () => ({
  type: FETCH_DIRECTORY_BEGIN
});

export const fetchDirectorySuccess = (valid, directory) => ({
  type: FETCH_DIRECTORY_SUCCESS,
  payload: { directory, valid }
});

export const fetchDirectoryFailure = error => ({
  type: FETCH_DIRECTORY_FAILURE,
  payload: { error }
});
