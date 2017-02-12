import { createAction, handleActions } from 'redux-actions';

const init = {
  new: {
    title: '',
    description: '',
    date: null,
    location: null,
  },
  1: {
    title: 'Fixture Event',
    description: 'kjdfkjdbfvjdsfnvjdnsf fjvdfnv hvd ufhv dfuhdf hfv udfhv',
    date: new Date(),
    location: 'San Francisco',
  },
};
const CHANGE_TITLE = 'events/CHANGE_TITLE';
const CHANGE_DESCRIPTION = 'events/CHANGE_DESCRIPTION';
const CHANGE_DATE = 'events/CHANGE_DATE';

export const changeTitle = createAction(CHANGE_TITLE, (id, title) => ({ id, title }));
export const changeDescription = createAction(
  CHANGE_DESCRIPTION,
  (id, description) => ({ id, description }),
);

export const changeDate = createAction(
  CHANGE_DATE,
  (id, date) => ({ id, date }),
);

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
}, init);
