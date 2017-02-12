import { createAction, handleActions } from 'redux-actions';
import axios from 'axios';

const init = {
  new: {
    title: '',
    description: '',
    date: null,
    location: null,
  },
  loading: false,
  error: null,
};

const CHANGE_TITLE = 'demonstrations/CHANGE_TITLE';
const CHANGE_DESCRIPTION = 'demonstrations/CHANGE_DESCRIPTION';
const CHANGE_DATE = 'demonstrations/CHANGE_DATE';
const FETCH = 'demonstrations/FETCH';
const FETCH_ERROR = 'demonstrations/FETCH_ERROR';
const FETCH_SUCESSS = 'demonstrations/FETCH_SUCESSS';

export const changeTitle = createAction(CHANGE_TITLE, (id, title) => ({ id, title }));
export const changeDescription = createAction(
  CHANGE_DESCRIPTION,
  (id, description) => ({ id, description }),
);

export const changeDate = createAction(
  CHANGE_DATE,
  (id, date) => ({ id, date }),
);
export const fetchSuccess = createAction(FETCH_SUCESSS);
export const fetchError = createAction(FETCH_ERROR);

export const fetch = id => (dispatch) => {
  dispatch({ type: FETCH });
  axios.get(`/demonstrations/${id}`)
    .then((res) => {
      dispatch(fetchSuccess(res.data));
    })
    .catch((err) => {
      dispatch(fetchError(err));
    });
};
export default handleActions({
  [CHANGE_TITLE]: (state, action) => {
    const { payload: { id, title } } = action;
    return {
      ...state,
      [id]: {
        ...state[id],
        title,
      },
    };
  },
  [CHANGE_DESCRIPTION]: (state, action) => {
    const { payload: { id, description } } = action;
    return {
      ...state,
      [id]: {
        ...state[id],
        description,
      },
    };
  },
  [CHANGE_DATE]: (state, action) => {
    const { payload: { id, date } } = action;
    return {
      ...state,
      [id]: {
        ...state[id],
        date,
      },
    };
  },
  [FETCH]: state => ({
    ...state,
    loading: true,
    error: null,
  }),
  [FETCH_SUCESSS]: (state, action) => {
    const { payload } = action;
    return {
      ...state,
      loading: false,
      [payload.id]: {
        ...(state[payload.id] || {}),
        ...payload,
      },
    };
  },
  [FETCH_ERROR]: (state, action) => ({
    ...state,
    loading: false,
    error: action.payload,
  }),
}, init);
