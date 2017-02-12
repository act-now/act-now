import { createAction, handleActions } from 'redux-actions';
import axios from 'axios';

const newEvent = {
  title: '',
  description: '',
  date: null,
  location: null,
};

const init = {
  new: { ...newEvent },
  loading: false,
  error: null,
};

const CHANGE_TITLE = 'events/CHANGE_TITLE';
const CHANGE_DESCRIPTION = 'events/CHANGE_DESCRIPTION';
const CHANGE_DATE = 'events/CHANGE_DATE';
const FETCH = 'events/FETCH';
const FETCH_ERROR = 'events/FETCH_ERROR';
const FETCH_SUCESSS = 'events/FETCH_SUCESSS';
const CREATE = 'events/CREATE';
const CREATE_ERROR = 'events/CREATE_ERROR';
const CREATE_SUCESS = 'events/CREATE_SUCESS';

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
  axios.get(`/events/${id}`)
    .then((res) => {
      dispatch(fetchSuccess(res.data));
    })
    .catch((err) => {
      dispatch(fetchError(err));
    });
};
const createSuccess = createAction(CREATE_SUCESS);
const createError = createAction(CREATE_ERROR);

export const create = () => (dispatch, getState) => {
  const state = getState();
  dispatch({ type: CREATE });
  return axios.post('/events', state.events.new)
    .then((res) => {
      dispatch(createSuccess(res.data));
    })
    .catch((err) => {
      dispatch(createError(err));
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
  [CREATE]: state => ({
    ...state,
    loading: true,
    error: false,
  }),
  [CREATE_SUCESS]: (state, action) => {
    const { payload: { id, ...event } } = action;
    return {
      ...state,
      [id]: { ...event },
      loading: false,
      error: null,
    };
  },
  [CREATE_ERROR]: (state, action) => ({
    ...state,
    loading: false,
    error: action.payload,
  }),
}, init);